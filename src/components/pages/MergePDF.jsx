import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { FiUpload, FiTrash2, FiDownload, FiFile, FiAlertCircle } from 'react-icons/fi';
import { useDropzone } from 'react-dropzone';

const MergePDF = () => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const MAX_FILES = 10;
  const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      const rejectedFile = rejectedFiles[0];
      if (rejectedFile.file.size > MAX_FILE_SIZE) {
        setError(`File too large (max ${MAX_FILE_SIZE / (1024 * 1024)}MB)`);
      } else if (rejectedFile.file.type !== 'application/pdf') {
        setError('Please upload only PDF files');
      }
      return;
    }

    if (files.length + acceptedFiles.length > MAX_FILES) {
      setError(`Maximum ${MAX_FILES} files allowed`);
      return;
    }

    setFiles(prev => [...prev, ...acceptedFiles]);
    setError(null);
  }, [files.length]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'application/pdf',
    maxSize: MAX_FILE_SIZE,
    multiple: true,
    disabled: isLoading || files.length >= MAX_FILES
  });

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError('Please upload at least 2 PDF files to merge');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const formData = new FormData();
      files.forEach(file => formData.append('files', file));

      const res = await axios.post('http://localhost:5000/api/pdf/merge', formData, {
        responseType: 'blob',
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: progressEvent => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log(percentCompleted);
        }
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `merged_${Date.now()}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      setSuccess('PDFs merged successfully!');
      setFiles([]);
    } catch (err) {
      let errorMsg = 'Failed to merge PDFs. Please try again.';
      if (err.response) {
        if (err.response.status === 413) {
          errorMsg = 'Total file size too large. Please reduce file sizes.';
        } else {
          errorMsg = err.response.data?.message || errorMsg;
        }
      }
      setError(errorMsg);
      console.error('Merge error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const totalSize = files.reduce((sum, file) => sum + file.size, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Merge PDF Files</h1>
            <p className="text-gray-600">Combine multiple PDFs into one document in seconds</p>
          </div>

          {/* File Upload Area */}
          <div 
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center mb-6 transition-all ${
              isDragActive 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-blue-400'
            } ${isLoading ? 'opacity-70 pointer-events-none' : ''}`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center space-y-3">
              <FiUpload className={`w-12 h-12 ${
                isDragActive ? 'text-blue-600' : 'text-blue-500'
              }`} />
              <p className="text-lg font-medium text-gray-700">
                {isDragActive ? 'Drop files here' : 'Drag & drop PDF files here'}
              </p>
              <p className="text-sm text-gray-500">or</p>
              <button 
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                disabled={isLoading || files.length >= MAX_FILES}
              >
                Select Files
              </button>
              <p className="text-xs text-gray-500">
                {files.length >= MAX_FILES 
                  ? 'Maximum files reached' 
                  : `Up to ${MAX_FILES} files (${MAX_FILE_SIZE / (1024 * 1024)}MB each)`}
              </p>
            </div>
          </div>

          {/* Selected Files */}
          {files.length > 0 && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-medium text-gray-800">
                  Selected Files ({files.length}/{MAX_FILES})
                </h2>
                <button 
                  onClick={() => setFiles([])}
                  className="text-sm text-red-500 hover:text-red-700 flex items-center"
                  disabled={isLoading}
                >
                  <FiTrash2 className="mr-1" /> Clear All
                </button>
              </div>
              
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {files.map((file, index) => (
                  <div 
                    key={`${file.name}-${index}`} 
                    className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-3 rounded-md transition-colors"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className="bg-blue-100 p-2 rounded-md flex-shrink-0">
                        <FiFile className="text-blue-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-700 truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFile(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      disabled={isLoading}
                      aria-label="Remove file"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-3 text-right">
                <p className="text-sm text-gray-500">
                  Total: {(totalSize / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
          )}

          {/* Messages */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded flex items-start">
              <FiAlertCircle className="flex-shrink-0 mr-2 mt-0.5" />
              <p>{error}</p>
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-700 rounded">
              <p>{success}</p>
            </div>
          )}

          {/* Merge Button */}
          <div className="text-center">
            <button 
              onClick={handleMerge}
              disabled={isLoading || files.length < 2}
              className={`flex items-center justify-center mx-auto px-6 py-3 rounded-md text-white font-medium w-full max-w-xs ${
                isLoading 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : files.length < 2 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <FiDownload className="mr-2" />
                  {files.length < 2 ? 'Add more files' : 'Merge & Download'}
                </>
              )}
            </button>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-sm text-gray-500 mb-2 sm:mb-0">
              Your files are processed securely and never stored on our servers
            </p>
            <div className="flex space-x-4">
              <a href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MergePDF;