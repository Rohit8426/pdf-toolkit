import React from 'react';
import { FiPlus } from 'react-icons/fi';
import PersonalInfoSection from './PersonalInfoSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import AISuggestionsTab from './AISuggestionsTab';
import TemplatesTab from './TemplatesTab';

const EditorPanel = ({
  resumeData,
  activeTab,
  setActiveTab,
  isGenerating,
  aiSuggestions,
  handleInputChange,
  generateAISuggestions,
  addEntry,
  removeEntry,
  updateEntry
}) => {
  return (
    <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
      <div className="flex border-b mb-6">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'editor' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('editor')}
        >
          Resume Editor
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'ai' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('ai')}
        >
          AI Suggestions
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'templates' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('templates')}
        >
          Templates
        </button>
      </div>

      {activeTab === 'editor' && (
        <div className="space-y-6">
          <PersonalInfoSection 
            resumeData={resumeData}
            handleInputChange={handleInputChange}
            generateAISuggestions={generateAISuggestions}
          />
          
          <ExperienceSection
            resumeData={resumeData}
            generateAISuggestions={generateAISuggestions}
            addEntry={addEntry}
            removeEntry={removeEntry}
            updateEntry={updateEntry}
          />
          
          <EducationSection
            resumeData={resumeData}
            addEntry={addEntry}
            removeEntry={removeEntry}
            updateEntry={updateEntry}
          />
          
          <SkillsSection
            resumeData={resumeData}
            generateAISuggestions={generateAISuggestions}
            handleInputChange={handleInputChange}
          />
        </div>
      )}

      {activeTab === 'ai' && (
        <AISuggestionsTab 
          isGenerating={isGenerating}
          aiSuggestions={aiSuggestions}
        />
      )}

      {activeTab === 'templates' && <TemplatesTab />}
    </div>
  );
};

export default EditorPanel;