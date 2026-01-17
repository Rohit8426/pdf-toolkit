import React from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';

const ExperienceSection = ({
  resumeData,
  generateAISuggestions,
  addEntry,
  removeEntry,
  updateEntry
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium">Work Experience</h3>
        <button
          onClick={() => generateAISuggestions('experience')}
          className="flex items-center text-sm text-blue-600 hover:text-blue-800"
        >
          <FiPlus className="mr-1" /> AI Suggest
        </button>
      </div>
      {resumeData.experience.map((exp, index) => (
        <div key={index} className="mb-4 p-4 border rounded-lg">
          <div className="flex justify-end">
            <button
              onClick={() => removeEntry('experience', index)}
              className="text-red-500 hover:text-red-700"
            >
              <FiTrash2 />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
              <input
                type="text"
                value={exp.role}
                onChange={(e) => updateEntry('experience', index, 'role', e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Software Engineer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateEntry('experience', index, 'company', e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Tech Company Inc."
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <input
                type="text"
                value={exp.duration}
                onChange={(e) => updateEntry('experience', index, 'duration', e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="2020 - Present"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={exp.description}
              onChange={(e) => updateEntry('experience', index, 'description', e.target.value)}
              rows="3"
              className="w-full p-2 border rounded-md"
              placeholder="Describe your responsibilities and achievements..."
            />
          </div>
        </div>
      ))}
      <button
        onClick={() => addEntry('experience')}
        className="flex items-center text-blue-600 hover:text-blue-800 mt-2"
      >
        <FiPlus className="mr-1" /> Add Experience
      </button>
    </div>
  );
};

export default ExperienceSection;