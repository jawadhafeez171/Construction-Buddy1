import React from 'react';

interface ServiceIconProps {
  serviceId: string;
  className?: string;
}

const ServiceStaticIcon: React.FC<ServiceIconProps> = ({ serviceId, className }) => {
  const props = { 
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor"
  };

  switch (serviceId) {
    case 'architectural-structural-drawings':
      // Blueprint / Layout Icon
      return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      );
    case 'home-construction':
      // House Icon
      return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
        </svg>
      );
    case 'commercial-construction':
      // Office Building Icon
      return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      );
    case 'interiors':
      // Paint Palette / Design Icon
      return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      );
    case 'waterproofing-solutions':
      // Water Drop / Shield Icon
      return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6c0-3.314-6-10.5-6-10.5S6 9.436 6 12.75a6 6 0 006 6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 1.5v4.5" opacity="0.5" />
        </svg>
      );
    case 'building-information-modelling':
      // 3D Cube Icon
      return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      );
    default:
      return null;
  }
};

export default ServiceStaticIcon;