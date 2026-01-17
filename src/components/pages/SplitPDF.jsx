// SplitPDF.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { FiUpload, FiTrash2, FiScissors, FiDownload } from 'react-icons/fi';

const SplitPDF = () => {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type !== 'application/pdf') {
      setError('Please upload a PDF file');
      return;
    }
    setFile(selectedFile);
    setError(null);
  };

  const handleSplit = async () => {
    if (!file) {
      setError('Please upload a PDF file');
      return;
    }

    if (!pages) {
      setError('Please specify pages to extract (e.g., 1-3,5,7-9)');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('pages', pages);

      const res = await axios.post('http://localhost:5000/api/pdf/split', formData, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'split.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError('Failed to split PDF. Please try again.');
      console.error('Split error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Split PDF</h1>
          <p className="text-gray-600">Extract specific pages or split into multiple documents</p>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6 hover:border-blue-500 transition-colors">
          <div className="flex flex-col items-center justify-center space-y-2">
            <FiUpload className="w-12 h-12 text-blue-500" />
            <p className="text-lg font-medium text-gray-700">Upload your PDF file</p>
            <p className="text-sm text-gray-500">or</p>
            <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
              <span>Select File</span>
              <input 
                type="file" 
                accept="application/pdf" 
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {file && (
          <div className="mb-6">
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-md">
                  <FiDownload className="text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{file.name}</span>
              </div>
              <button 
                onClick={() => setFile(null)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        )}

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Pages to extract</label>
          <input
            type="text"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            placeholder="Example: 1-3,5,7-9"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="mt-1 text-sm text-gray-500">Specify page ranges separated by commas (e.g., 1-3,5,7-9)</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
            <p>{error}</p>
          </div>
        )}

        <div className="text-center">
          <button 
            onClick={handleSplit}
            disabled={isLoading || !file || !pages}
            className={`flex items-center justify-center mx-auto px-6 py-3 rounded-md text-white font-medium ${
              isLoading || !file || !pages 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 transition-colors'
            }`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Splitting...
              </>
            ) : (
              <>
                <FiScissors className="mr-2" />
                Split PDF
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplitPDF;