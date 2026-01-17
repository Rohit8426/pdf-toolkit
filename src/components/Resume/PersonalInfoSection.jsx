import React from 'react';
import { FiPlus } from 'react-icons/fi';

const PersonalInfoSection = ({ resumeData, handleInputChange, generateAISuggestions }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={resumeData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Professional Title</label>
          <input
            type="text"
            name="title"
            value={resumeData.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Software Engineer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={resumeData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={resumeData.phone}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="(123) 456-7890"
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="block text-sm font-medium text-gray-700">Professional Summary</label>
          <button
            onClick={() => generateAISuggestions('summary')}
            className="flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            <FiPlus className="mr-1" /> AI Generate
          </button>
        </div>
        <textarea
          name="summary"
          value={resumeData.summary}
          onChange={handleInputChange}
          rows="4"
          className="w-full p-2 border rounded-md"
          placeholder="Briefly describe your professional background and skills..."
        />
      </div>
    </>
  );
};

export default PersonalInfoSection;