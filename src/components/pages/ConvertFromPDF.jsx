import React, { useState, useCallback } from 'react';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FiUpload, FiTrash2, FiFile, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { useDropzone } from 'react-dropzone';

const ConvertFromPDF = () => {
  const [file, setFile] = useState(null);
  const [targetFormat, setTargetFormat] = useState('word');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [progress, setProgress] = useState(0);

  const formatOptions = [
    { value: 'word', label: 'PDF to Word', icon: '📝', extension: 'docx' },
    { value: 'excel', label: 'PDF to Excel', icon: '📊', extension: 'xlsx' },
    { value: 'powerpoint', label: 'PDF to PPT', icon: '📑', extension: 'pptx' },
    { value: 'image', label: 'PDF to Images', icon: '🖼️', extension: 'zip' },
    { value: 'text', label: 'PDF to Text', icon: '📄', extension: 'txt' },
  ];

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 0) return;
    
    const selectedFile = acceptedFiles[0];
    
    if (selectedFile.type !== 'application/pdf') {
      setError('Please upload a PDF file');
      return;
    }

    setFile(selectedFile);
    setError(null);
    setSuccess(null);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'application/pdf',
    multiple: false,
    maxSize: 50 * 1024 * 1024, // 50MB
    disabled: isLoading
  });

  const handleConvert = async () => {
    if (!file) {
      setError('Please upload a PDF file first');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);
    setProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('format', targetFormat);

      const res = await axios.post('http://localhost:5000/api/pdf/convert-from', formData, {
        responseType: 'blob',
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
        }
      });

      const selectedFormat = formatOptions.find(f => f.value === targetFormat);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${file.name.split('.')[0]}_converted.${selectedFormat.extension}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      setSuccess(`PDF converted to ${selectedFormat.label.split('to ')[1]} successfully!`);
    } catch (err) {
      setError(err.response?.data?.message || 'Conversion failed. Please try again.');
      console.error('Conversion error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
        }}
      >
        <div className="absolute inset-0  bg-opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden relative z-10">
        <div className="p-6 sm:p-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Convert from PDF</h1>
            <p className="text-gray-600">Transform your PDFs into editable formats</p>
          </motion.div>

          {/* Format Selection */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <label className="block text-sm font-medium text-gray-700 mb-3">Select Output Format</label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {formatOptions.map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setTargetFormat(option.value);
                    setError(null);
                  }}
                  className={`p-3 border rounded-lg flex flex-col items-center ${
                    targetFormat === option.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300 bg-gray-50'
                  }`}
                >
                  <span className="text-2xl mb-1">{option.icon}</span>
                  <span className="text-xs font-medium">{option.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* File Upload */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-6 text-center mb-6 cursor-pointer transition-all ${
              isDragActive 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-blue-400'
            } ${isLoading ? 'opacity-70 pointer-events-none' : ''}`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center space-y-3">
              <FiUpload className={`w-10 h-10 ${
                isDragActive ? 'text-blue-600' : 'text-blue-500'
              }`} />
              <p className="text-lg font-medium text-gray-700">
                {isDragActive ? 'Drop PDF here' : 'Drag & drop PDF file'}
              </p>
              <p className="text-sm text-gray-500">or</p>
              <button 
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-1.5 rounded-md text-sm transition-colors"
                disabled={isLoading}
              >
                Browse Files
              </button>
              <p className="text-xs text-gray-500">
                PDF files only (max 50MB)
              </p>
            </div>
          </motion.div>

          {/* Selected File Preview */}
          <AnimatePresence>
            {file && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 overflow-hidden"
              >
                <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-3 rounded-md transition-colors">
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="bg-blue-100 p-2 rounded-md">
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
                    onClick={() => setFile(null)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    disabled={isLoading}
                    aria-label="Remove file"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress Bar */}
          {isLoading && (
            <div className="mb-6">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-right text-xs text-gray-500 mt-1">
                {progress}% complete
              </p>
            </div>
          )}

          {/* Messages */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded flex items-start"
              >
                <FiAlertCircle className="flex-shrink-0 mr-2 mt-0.5" />
                <p>{error}</p>
              </motion.div>
            )}
            
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-700 rounded flex items-start"
              >
                <FiCheckCircle className="flex-shrink-0 mr-2 mt-0.5" />
                <p>{success}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Convert Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <motion.button
              onClick={handleConvert}
              disabled={isLoading || !file}
              whileHover={!isLoading && file ? { scale: 1.02 } : {}}
              whileTap={!isLoading && file ? { scale: 0.98 } : {}}
              className={`flex items-center justify-center mx-auto px-6 py-3 rounded-md text-white font-medium w-full max-w-xs ${
                isLoading
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : !file
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Converting...
                </>
              ) : (
                <>
                  <FiFile className="mr-2" />
                  {!file ? 'Upload PDF' : `Convert to ${formatOptions.find(f => f.value === targetFormat).label.split('to ')[1]}`}
                </>
              )}
            </motion.button>
          </motion.div>
        </div>

        {/* Footer Note */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            Your files are processed securely and never stored on our servers
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConvertFromPDF;