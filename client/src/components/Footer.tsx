import React from 'react';

const Footer: React.FC = () => (
  <footer className="p-4 bg-white text-center text-sm text-gray-500 shadow-inner">
    © {new Date().getFullYear()} LinguaRAG. All rights reserved.
  </footer>
);

export default Footer;