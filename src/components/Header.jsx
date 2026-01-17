import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/pdfMagic1.png"; // adjust the path as needed

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "All Tools", path: "/" },
    { name: "Resume Builder", path: "/resume-builder" },
    { name: "Document Converter", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo with image */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            aria-label="PDFMagic Home"
          >
            <img
              src={logo}
              alt="PDFMagic Logo"
              className="h-10 w-auto rounded-md shadow-sm group-hover:opacity-90 transition-opacity"
            />
            <div className="flex">
              {["P", "D", "F", "M", "a", "g", "i", "c"].map((letter, index) => (
                <span
                  key={index}
                  className={`text-xl font-bold ${
                    [
                      "text-blue-600",
                      "text-purple-600",
                      "text-pink-600",
                      "text-indigo-600",
                      "text-teal-600",
                      "text-red-500",
                      "text-green-500",
                      "text-yellow-500",
                    ][index % 8]
                  } transition-colors duration-300 hover:scale-110 transform`}
                >
                  {letter}
                </span>
              ))}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-200">
              <Link
                to="/login"
                className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block w-full px-3 py-2 mt-2 rounded-md text-base font-medium text-center text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
