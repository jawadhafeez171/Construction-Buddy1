import React from 'react';

const GetRewardedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25v-8.25M12 4.875A2.625 2.625 0 1014.625 7.5H9.375A2.625 2.625 0 1012 4.875zM21 11.25H3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25v-1.5m0 0V15m0 .75a.75.75 0 100-1.5.75.75 0 000 1.5zM12 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" />
  </svg>
);

export default GetRewardedIcon;
