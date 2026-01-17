import React from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';

const EducationSection = ({
  resumeData,
  addEntry,
  removeEntry,
  updateEntry
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Education</h3>
      {resumeData.education.map((edu, index) => (
        <div key={index} className="mb-4 p-4 border rounded-lg">
          <div className="flex justify-end">
            <button
              onClick={() => removeEntry('education', index)}
              className="text-red-500 hover:text-red-700"
            >
              <FiTrash2 />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => updateEntry('education', index, 'degree', e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Bachelor of Science"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => updateEntry('education', index, 'institution', e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="University of Technology"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
            <input
              type="text"
              value={edu.year}
              onChange={(e) => updateEntry('education', index, 'year', e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="2018"
            />
          </div>
        </div>
      ))}
      <button
        onClick={() => addEntry('education')}
        className="flex items-center text-blue-600 hover:text-blue-800 mt-2"
      >
        <FiPlus className="mr-1" /> Add Education
      </button>
    </div>
  );
};

export default EducationSection;