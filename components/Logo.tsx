import React from 'react';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 320 80"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Construction Buddy Logo"
    {...props}
  >
    <style>
      {`
        .logo-fg { fill: hsl(var(--foreground)); }
        .logo-blue { fill: hsl(var(--tertiary)); }
        .font-main { font-family: Inter, sans-serif; }
      `}
    </style>
    {/* Roof Icon */}
    <path
      d="M160 2 L125 27 L175 27 L175 12 L183 12 L183 27 L195 27 Z"
      className="logo-blue"
    />

    {/* CONSTRUCTION */}
    <text
      x="160"
      y="45"
      textAnchor="middle"
      fontSize="18"
      fontWeight="700"
      letterSpacing="0.5"
      className="logo-fg font-main"
    >
      CONSTRUCTION
    </text>

    {/* BUDDY */}
    <text
      x="160"
      y="62"
      textAnchor="middle"
      fontSize="20"
      fontWeight="900"
      letterSpacing="0.5"
      className="logo-blue font-main"
    >
      BUDDY
    </text>

    {/* HOME & COMMERCIAL CONTRACTORS */}
    <text
      x="160"
      y="75"
      textAnchor="middle"
      fontSize="6"
      fontWeight="500"
      letterSpacing="1"
      className="logo-fg font-main"
    >
      HOME & COMMERCIAL CONTRACTORS
    </text>
  </svg>
);

export default Logo;
