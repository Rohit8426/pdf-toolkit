import React, { useState } from 'react';
import axios from 'axios';
import { FiUpload, FiTrash2, FiDownload, FiMinimize } from 'react-icons/fi';

const CompressPDF = () => {
  const [file, setFile] = useState(null);
  const [compressionLevel, setCompressionLevel] = useState('medium');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    
    if (selectedFile.type !== 'application/pdf') {
      setError('Please upload a PDF file');
      return;
    }
    
    setFile(selectedFile);
    setError(null);
    setSuccess(null);
  };

  const handleCompress = async () => {
    if (!file) {
      setError('Please upload a PDF file');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('level', compressionLevel);

      const res = await axios.post('http://localhost:5000/api/pdf/compress', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        responseType: 'blob',
      });

      // Create download link
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `compressed_${file.name}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      setSuccess('PDF compressed successfully!');
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Failed to compress PDF. Please try again.';
      setError(errorMsg);
      console.error('Compress error:', err);
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
        <div className="absolute inset-0 bg-opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Compress PDF</h1>
          <p className="text-gray-600">Reduce file size while maintaining quality</p>
        </div>

        {/* File Upload Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6 hover:border-blue-500 transition-colors">
          <div className="flex flex-col items-center justify-center space-y-2">
            <FiUpload className="w-12 h-12 text-blue-500" />
            <p className="text-lg font-medium text-gray-700">Upload your PDF file</p>
            <p className="text-sm text-gray-500">or</p>
            <label className={`cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}>
              <span>Select File</span>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
                disabled={isLoading}
              />
            </label>
            <p className="text-xs text-gray-500">Maximum file size: 10MB</p>
          </div>
        </div>

        {/* Selected File */}
        {file && (
          <div className="mb-6">
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="bg-blue-100 p-2 rounded-md flex-shrink-0">
                  <FiDownload className="text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700 truncate">
                  {file.name}
                </span>
              </div>
              <button
                onClick={() => setFile(null)}
                className="text-red-500 hover:text-red-700 transition-colors p-1"
                disabled={isLoading}
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        )}

        {/* Compression Options */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Compression Level
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                value: 'low',
                label: 'Low',
                description: 'Smaller size reduction, best quality',
              },
              {
                value: 'medium',
                label: 'Medium',
                description: 'Balanced size and quality',
              },
              {
                value: 'high',
                label: 'High',
                description: 'Maximum compression, lower quality',
              },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-start space-x-3 p-3 border rounded-lg cursor-pointer ${
                  compressionLevel === option.value 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'hover:border-blue-300'
                }`}
              >
                <input
                  type="radio"
                  name="compressionLevel"
                  value={option.value}
                  checked={compressionLevel === option.value}
                  onChange={() => setCompressionLevel(option.value)}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <div>
                  <p className="font-medium text-gray-700">{option.label}</p>
                  <p className="text-xs text-gray-500">{option.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
            <p>{error}</p>
          </div>
        )}
        
        {success && (
          <div className="mb-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
            <p>{success}</p>
          </div>
        )}

        {/* Compress Button */}
        <div className="text-center">
          <button
            onClick={handleCompress}
            disabled={isLoading || !file}
            className={`flex items-center justify-center mx-auto px-6 py-3 rounded-md text-white font-medium ${
              isLoading || !file
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 transition-colors'
            }`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Compressing...
              </>
            ) : (
              <>
                <FiMinimize className="mr-2" />
                Compress PDF
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompressPDF;