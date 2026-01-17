import React from 'react';

const AISuggestionsTab = ({ isGenerating, aiSuggestions }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium mb-4">AI Suggestions</h3>
      {isGenerating ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          {aiSuggestions.length > 0 ? (
            aiSuggestions.map((suggestion, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-50">
                <p className="mb-3">{suggestion}</p>
                <button
                  onClick={() => {
                    alert('Suggestion applied!');
                  }}
                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Use This
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No suggestions generated yet. Try generating some!</p>
          )}
        </>
      )}
    </div>
  );
};

export default AISuggestionsTab;