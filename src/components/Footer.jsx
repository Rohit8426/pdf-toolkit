import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/pdfMagic1.png";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiArrowRight
} from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    tools: [
      { name: "Merge PDF", path: "/merge" },
      { name: "Compress PDF", path: "/compress-pdf" },
      { name: "Resume Builder", path: "/resume-builder" },
      { name: "PDF Converter", path: "/converter" },
      { name: "Split PDF", path: "/split-pdf" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Security", path: "/security" },
      { name: "Cookie Policy", path: "/cookies" },
    ],
  };

  const socialLinks = [
    { icon: <FiFacebook />, label: "Facebook", url: "#" },
    { icon: <FiTwitter />, label: "Twitter", url: "#" },
    { icon: <FiInstagram />, label: "Instagram", url: "#" },
    { icon: <FiLinkedin />, label: "LinkedIn", url: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
        >
          {/* Brand info */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-2">
              <Link
                to="/"
                className="flex items-center space-x-3 group"
                aria-label="PDFMagic Home"
              >
                <motion.img
                  src={logo}
                  alt="PDFMagic Logo"
                  className="h-12 w-auto rounded-md shadow-lg group-hover:opacity-90 transition-all duration-300 group-hover:rotate-6"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="flex">
                  {["P", "D", "F", "M", "a", "g", "i", "c"].map(
                    (letter, index) => (
                      <motion.span
                        key={index}
                        className={`text-2xl font-extrabold ${
                          [
                            "text-blue-400",
                            "text-purple-400",
                            "text-pink-400",
                            "text-indigo-400",
                            "text-teal-400",
                            "text-red-400",
                            "text-green-400",
                            "text-yellow-400",
                          ][index % 8]
                        } transition-all duration-300 hover:scale-125`}
                        whileHover={{ y: -5 }}
                      >
                        {letter}
                      </motion.span>
                    )
                  )}
                </div>
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your all-in-one PDF solution for professional document handling. 
              Trusted by millions worldwide to simplify their document workflows.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Stay Updated
              </h4>
              <motion.div 
                className="flex relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-5 py-3 w-full rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                />
                <motion.button 
                  className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-1 rounded-md hover:from-blue-700 hover:to-purple-700 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiArrowRight className="h-5 w-5" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div 
              key={category}
              variants={itemVariants}
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <motion.li 
                    key={link.path}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} PDFMagic. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/terms"
                className="text-gray-500 hover:text-white text-sm transition-colors hover:underline"
              >
                Terms
              </Link>
              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-white text-sm transition-colors hover:underline"
              >
                Privacy
              </Link>
              <Link
                to="/cookies"
                className="text-gray-500 hover:text-white text-sm transition-colors hover:underline"
              >
                Cookies
              </Link>
            </div>
          </div>

          <div className="flex space-x-5 mt-6 md:mt-0">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition-colors relative group"
                whileHover={{ y: -3 }}
              >
                <div className="p-2 rounded-full bg-gray-800 group-hover:bg-gradient-to-br from-blue-500 to-purple-600 transition-all duration-300">
                  {social.icon}
                </div>
                <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs text-white bg-gray-900 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;