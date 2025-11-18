import React from 'react';

const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.195.025.39.05.588.08m-5.859 2.186a2.25 2.25 0 012.186 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 14.49a2.25 2.25 0 01-2.187 0m-2.187 0a2.25 2.25 0 00-2.187 0M12 6.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z" />
  </svg>
);

export default ShareIcon;