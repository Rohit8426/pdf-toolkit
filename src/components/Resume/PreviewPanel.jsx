import React from "react";
import { FiDownload } from "react-icons/fi";
import { jsPDF } from "jspdf";

const PreviewPanel = ({ resumeData }) => {
  const generatePDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 40;
    const lineHeight = 16;
    const sectionSpacing = 20;
    const entrySpacing = 10;
    let yPos = margin;

    doc.setFont("helvetica");
    doc.setFontSize(11);

    // Add name
    doc.setFontSize(24);
    doc.setFont(undefined, "bold");
    doc.text(resumeData.name || "Your Name", margin, yPos);
    yPos += lineHeight;

    // Add title
    doc.setFontSize(14);
    doc.setFont(undefined, "normal");
    doc.setTextColor(80);
    doc.text(resumeData.title || "Professional Title", margin, yPos);
    yPos += lineHeight;

    // Contact
    doc.setFontSize(10);
    const contactInfo = `${resumeData.email || "email@example.com"} | ${
      resumeData.phone || "(123) 456-7890"
    }`;
    doc.text(contactInfo, margin, yPos);
    yPos += lineHeight;

    // Divider
    doc.setDrawColor(160);
    doc.line(margin, yPos + 5, pageWidth - margin, yPos + 5);
    yPos += lineHeight + 5;
    // Summary
    if (resumeData.summary) {
      if (yPos > pageHeight - margin - 100) {
        doc.addPage();
        yPos = margin;
      }

      doc.setFontSize(14);
      doc.setFont(undefined, "bold");
      doc.setTextColor(0);
      doc.text("SUMMARY", margin, yPos);
      yPos += lineHeight;

      doc.setFontSize(12);
      doc.setFont(undefined, "normal");
      const summaryLines = doc.splitTextToSize(
        resumeData.summary,
        pageWidth - margin * 2
      );
      doc.text(summaryLines, margin, yPos);
      yPos += lineHeight * summaryLines.length + sectionSpacing;
    }

    // Experience
    if (resumeData.experience.length > 0) {
      if (yPos > pageHeight - margin - 100) {
        doc.addPage();
        yPos = margin;
      }

      doc.setFontSize(14);
      doc.setFont(undefined, "bold");
      doc.text("EXPERIENCE", margin, yPos);
      yPos += lineHeight;

      doc.setFontSize(12);
      doc.setFont(undefined, "normal");

      resumeData.experience.forEach((exp) => {
        if (yPos > pageHeight - margin - 100) {
          doc.addPage();
          yPos = margin;
        }

        doc.setFont(undefined, "bold");
        doc.text(exp.role || "Job Title", margin, yPos);
        yPos += lineHeight;

        doc.setFont(undefined, "normal");
        doc.setTextColor(100);
        doc.text(
          `${exp.company || "Company"} | ${exp.duration || "Duration"}`,
          margin,
          yPos
        );
        yPos += lineHeight;

        if (exp.description) {
          doc.setTextColor(0);
          const descLines = doc.splitTextToSize(
            exp.description,
            pageWidth - margin * 2
          );
          doc.text(descLines, margin, yPos);
          yPos += lineHeight * descLines.length;
        }

        yPos += entrySpacing;
      });

      yPos += sectionSpacing;
    }

    // Education
    if (resumeData.education.length > 0) {
      if (yPos > pageHeight - margin - 100) {
        doc.addPage();
        yPos = margin;
      }

      doc.setFontSize(14);
      doc.setFont(undefined, "bold");
      doc.text("EDUCATION", margin, yPos);
      yPos += lineHeight;

      doc.setFontSize(12);
      doc.setFont(undefined, "normal");

      resumeData.education.forEach((edu) => {
        if (yPos > pageHeight - margin - 100) {
          doc.addPage();
          yPos = margin;
        }

        doc.setFont(undefined, "bold");
        doc.text(edu.degree || "Degree", margin, yPos);
        yPos += lineHeight;

        doc.setFont(undefined, "normal");
        doc.setTextColor(100);
        doc.text(
          `${edu.institution || "Institution"} | ${edu.year || "Year"}`,
          margin,
          yPos
        );
        yPos += lineHeight + entrySpacing;
      });

      yPos += sectionSpacing;
    }

    // Skills
    if (resumeData.skills.length > 0) {
      if (yPos > pageHeight - margin - 100) {
        doc.addPage();
        yPos = margin;
      }

      doc.setFontSize(12);
      doc.setFont(undefined, "bold");
      doc.setTextColor(0);
      doc.text("SKILLS", margin, yPos);
      yPos += lineHeight;

      doc.setFont(undefined, "normal");
      const skillsText = resumeData.skills.join(", ");
      const skillLines = doc.splitTextToSize(
        skillsText,
        pageWidth - margin * 2
      );
      doc.text(skillLines, margin, yPos);
    }

    doc.save(`${resumeData.name || "resume"}.pdf`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        {" "}
        {/* Increased margin-bottom */}
        <h2 className="text-xl font-medium">Resume Preview</h2>
        <button
          onClick={generatePDF}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <FiDownload className="mr-2" /> Download PDF
        </button>
      </div>

      {/* Improved preview with better spacing */}
      <div id="resume-preview" className="border p-8 bg-white space-y-8">
        {" "}
        {/* Increased padding and spacing */}
        <div className="text-center space-y-2">
          {" "}
          {/* Added vertical spacing */}
          <h1 className="text-2xl font-bold">
            {resumeData.name || "Your Name"}
          </h1>
          <p className="text-gray-600">
            {resumeData.title || "Professional Title"}
          </p>
          <div className="flex justify-center space-x-4 mt-2 text-sm">
            <span>{resumeData.email || "email@example.com"}</span>
            <span>{resumeData.phone || "(123) 456-7890"}</span>
          </div>
        </div>
        {resumeData.summary && (
          <div className="space-y-3">
            {" "}
            {/* Added vertical spacing */}
            <h2 className="text-lg font-medium border-b pb-2">Summary</h2>{" "}
            {/* Increased padding-bottom */}
            <p className="text-gray-700">{resumeData.summary}</p>
          </div>
        )}
        {resumeData.experience.length > 0 && (
          <div className="space-y-6">
            {" "}
            {/* Increased vertical spacing */}
            <h2 className="text-lg font-medium border-b pb-2">Experience</h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="space-y-2">
                {" "}
                {/* Added spacing between elements */}
                <h3 className="font-medium">{exp.role || "Job Title"}</h3>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>{exp.company || "Company"}</span>
                  <span>{exp.duration || "Duration"}</span>
                </div>
                {exp.description && (
                  <p className="text-gray-700 text-sm mt-1">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
        {resumeData.education.length > 0 && (
          <div className="space-y-6">
            {" "}
            {/* Increased vertical spacing */}
            <h2 className="text-lg font-medium border-b pb-2">Education</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="space-y-1">
                {" "}
                {/* Added vertical spacing */}
                <h3 className="font-medium">{edu.degree || "Degree"}</h3>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>{edu.institution || "Institution"}</span>
                  <span>{edu.year || "Year"}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {resumeData.skills.length > 0 && (
          <div className="space-y-3">
            {" "}
            {/* Added vertical spacing */}
            <h2 className="text-lg font-medium border-b pb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewPanel;
