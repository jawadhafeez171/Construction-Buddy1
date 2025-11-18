import React from 'react';

const BuildIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17L15.17 11.42M11.42 15.17l-.375 .375a2.121 2.121 0 01-3 0l-1.875-1.875a2.121 2.121 0 010-3l3-3a2.121 2.121 0 013 0l.375.375M3 12h.008v.008H3V12z" 
    />
  </svg>
);

export default BuildIcon;
