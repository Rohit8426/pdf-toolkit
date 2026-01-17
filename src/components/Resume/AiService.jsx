// Mock AI API call (replace with actual API call)
export const mockAIApiCall = async (section, data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const suggestions = {
        summary: [
          "Results-driven professional with 5+ years of experience...",
          "Detail-oriented specialist with proven track record...",
          "Innovative thinker with strong leadership skills..."
        ],
        experience: [
          `Senior ${data.title || 'Developer'} at Tech Company (2020-Present)`,
          `${data.title || 'Developer'} at Startup (2018-2020)`
        ],
        skills: [
          "JavaScript, React, Node.js",
          "Project Management, Team Leadership",
          "Data Analysis, Machine Learning"
        ]
      };
      resolve({ suggestions: suggestions[section] || [] });
    }, 1500);
  });
};