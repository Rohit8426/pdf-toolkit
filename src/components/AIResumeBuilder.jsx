import React, { useState } from 'react';
import EditorPanel from './Resume/EditorPanel';
import PreviewPanel from './Resume/PreviewPanel';
import { mockAIApiCall } from './Resume/AiService';

const AIResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    summary: '',
    experience: [],
    education: [],
    skills: []
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [activeTab, setActiveTab] = useState('editor');

  const generateAISuggestions = async (section) => {
    setIsGenerating(true);
    try {
      const response = await mockAIApiCall(section, resumeData);
      setAiSuggestions(response.suggestions);
      setActiveTab('ai');
    } catch (error) {
      console.error('AI generation error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prev => ({ ...prev, [name]: value }));
  };

  const addEntry = (type) => {
    const newEntry = type === 'experience' 
      ? { role: '', company: '', duration: '', description: '' }
      : { degree: '', institution: '', year: '' };
    
    setResumeData(prev => ({
      ...prev,
      [type]: [...prev[type], newEntry]
    }));
  };

  const removeEntry = (type, index) => {
    setResumeData(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }));
  };

  const updateEntry = (type, index, field, value) => {
    setResumeData(prev => {
      const updated = [...prev[type]];
      updated[index][field] = value;
      return { ...prev, [type]: updated };
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">AI Resume Builder</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <EditorPanel
            resumeData={resumeData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isGenerating={isGenerating}
            aiSuggestions={aiSuggestions}
            handleInputChange={handleInputChange}
            generateAISuggestions={generateAISuggestions}
            addEntry={addEntry}
            removeEntry={removeEntry}
            updateEntry={updateEntry}
          />
          
          <PreviewPanel
            resumeData={resumeData}
          />
        </div>
      </div>
    </div>
  );
};

export default AIResumeBuilder;