import React from 'react';
import { FiPlus } from 'react-icons/fi';

const SkillsSection = ({
  resumeData,
  generateAISuggestions,
  handleInputChange
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium">Skills</h3>
        <button
          onClick={() => generateAISuggestions('skills')}
          className="flex items-center text-sm text-blue-600 hover:text-blue-800"
        >
          <FiPlus className="mr-1" /> AI Suggest
        </button>
      </div>
      <div>
        <textarea
          value={resumeData.skills.join(', ')}
          onChange={(e) => {
            const skills = e.target.value.split(',').map(skill => skill.trim());
            handleInputChange({ target: { name: 'skills', value: skills } });
          }}
          rows="3"
          className="w-full p-2 border rounded-md"
          placeholder="List your skills separated by commas..."
        />
      </div>
    </div>
  );
};

export default SkillsSection;