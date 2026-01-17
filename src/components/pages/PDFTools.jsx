import React from "react";
import ToolCard from "../ToolCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const PDFTools = () => {
  const tools = [
    {
      name: "Merge PDF",
      path: "/merge",
      icon: "merge",
      description: "Combine multiple PDFs into one document",
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "Split PDF",
      path: "/split-pdf",
      icon: "split",
      description: "Extract pages or split into multiple PDFs",
      color: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      name: "Compress PDF",
      path: "/compress-pdf",
      icon: "compress",
      description: "Reduce PDF file size while preserving quality",
      color: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      name: "Resume Builder",
      path: "/resume-builder",
      icon: "resume",
      description: "Create professional resumes in PDF format",
      color: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      name: "PDF to Word",
      path: "/word-to-pdf",
      icon: "word",
      description: "Convert PDF files to editable Word documents",
      color: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    {
      name: "PDF to Excel",
      path: "/pdf-to-excel",
      icon: "excel",
      description: "Extract tables from PDF to Excel spreadsheets",
      color: "bg-emerald-100",
      textColor: "text-emerald-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage:
          " url('https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-center mb-16 space-y-6">
            {/* Rainbow Text Heading */}
            <div className="mb-8">
              <span className="text-5xl rainbow-text animate-rainbow font-extrabold">
                PDF Process Tools
              </span>
            </div>

            {/* Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto h-14 flex items-center justify-center"
            >
              <TypeAnimation
                sequence={[
                  "Transform your PDF documents with ease",
                  1500,
                  "Edit PDFs like never before",
                  1500,
                  "Manage all your PDFs in one place",
                  1500,
                  "The ultimate PDF toolkit for professionals",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block text-gray-800 font-medium"
              />
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6 flex justify-center gap-4"
            >
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-400 hover:text-blue-600 transition-all">
                Watch Demo
              </button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tools.map((tool, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            More tools coming soon. Have a suggestion?{" "}
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Let us know
            </a>
            .
          </p>
        </div>
      </main>
      <style>
        {`
          .rainbow-text {
            background: linear-gradient(90deg, #FF0080, #7928CA, #FF0080);
            background-size: 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: rainbow 5s ease infinite;
          }

          @keyframes rainbow {
            0% {
              background-position: 0%;
            }
            100% {
              background-position: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PDFTools;

//text-5xl font-extrabold text-teal-400 mb-4
