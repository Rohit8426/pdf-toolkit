import React from 'react';
import { Link } from 'react-router-dom';
import ToolIcon from './ToolIcon';
import { motion } from 'framer-motion';

const ToolCard = ({ tool }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <Link
        to={tool.path}
        className={`group relative block h-full bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden`}
      >
        {/* Subtle background accent (hidden until hover) */}
        <div className={`absolute inset-0 ${tool.color || 'bg-blue-50'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        <div className="relative z-10 flex items-start space-x-4">
          <div className={`${tool.iconColor || 'bg-blue-100'} p-3 rounded-lg flex-shrink-0`}>
            <ToolIcon icon={tool.icon} className={`w-5 h-5 ${tool.iconTextColor || 'text-blue-600'}`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
              {tool.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-700 transition-colors">
              {tool.description}
            </p>
            <span className="inline-block mt-3 text-xs font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Try it now →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ToolCard;