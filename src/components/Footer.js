import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gray-900 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p>© {new Date().getFullYear()} Sahil Khan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
