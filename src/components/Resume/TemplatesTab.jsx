import React from 'react';

const templates = [
  { id: 1, name: 'Professional', thumbnail: 'pro-thumb.jpg' },
  { id: 2, name: 'Modern', thumbnail: 'modern-thumb.jpg' },
  { id: 3, name: 'Creative', thumbnail: 'creative-thumb.jpg' },
];

const TemplatesTab = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {templates.map(template => (
        <div key={template.id} className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
          <div className="bg-gray-200 h-40 flex items-center justify-center">
            <span className="text-gray-500">Template Preview</span>
          </div>
          <div className="p-3">
            <h4 className="font-medium">{template.name}</h4>
            <button className="mt-2 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Use Template
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TemplatesTab;