import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const Header = ({ handleNavClick, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (section) => {
    handleNavClick(section);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-xl border-b border-orange-500/20 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between h-14 items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Sahil Khan
            </span>
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-semibold">
            {['about', 'skills', 'experience', 'projects', 'services', 'contact'].map((section) => (
              <motion.button
                key={section}
                onClick={() => handleNavClick(section)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`capitalize transition-all duration-300 ${
                  activeSection === section
                    ? 'text-orange-500 font-bold'
                    : 'text-gray-300 hover:text-orange-500'
                }`}
              >
                {section}
              </motion.button>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-500 relative z-50"
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="md:hidden fixed top-0 left-0 w-full bg-gray-800/95 z-40 overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/95 font-semibold text-white">
            {['about', 'skills', 'experience', 'projects', 'services', 'contact'].map((section) => (
              <motion.button
                key={section}
                onClick={() => handleMenuClick(section)} // Call the updated handler
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-left px-3 py-2 hover:bg-gray-700 capitalize"
              >
                {section}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Header;
