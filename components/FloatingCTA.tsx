import React from 'react';
import { Link } from 'react-router-dom';
import BuildIcon from './icons/BuildIcon';

const FloatingBuildButton: React.FC = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 transform whitespace-nowrap"
      aria-label="Build with us"
    >
      <BuildIcon className="h-6 w-6 mr-3" />
      <span className="font-bold text-lg">Build With Us</span>
    </Link>
  );
};

export default FloatingBuildButton;