import React from 'react';

const RupeeCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 000 4.5h1.5a2.25 2.25 0 000-4.5H9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75h3.75m-3.75 0a.375.375 0 01.375-.375h3.75a.375.375 0 01.375.375m-4.5 0v3.75m0-3.75a.375.375 0 00-.375-.375H7.5a.375.375 0 00-.375.375v3.75m-1.5-4.5h.008v.008H6v-.008z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
);
export default RupeeCircleIcon;
