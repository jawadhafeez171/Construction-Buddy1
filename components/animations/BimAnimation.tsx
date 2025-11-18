import React from 'react';

const BimAnimation: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .bim-cube {
          transform-origin: center;
          animation: bim-rotate 6s linear infinite;
        }
        .bim-line {
          stroke: hsl(var(--secondary));
          stroke-width: 2;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: bim-draw 3s ease-in-out infinite alternate;
        }
        .bim-line-1 { animation-delay: 0s; }
        .bim-line-2 { animation-delay: 0.5s; }
        .bim-line-3 { animation-delay: 1s; }

        @keyframes bim-rotate {
          from { transform: rotate3d(1, 1, 0, 0deg); }
          to { transform: rotate3d(1, 1, 0, 360deg); }
        }
        @keyframes bim-draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
      <g className="bim-cube">
        <rect x="25" y="25" width="50" height="50" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
        <line x1="35" y1="35" x2="65" y2="65" className="bim-line bim-line-1" />
        <line x1="35" y1="50" x2="65" y2="50" className="bim-line bim-line-2" />
        <line x1="50" y1="35" x2="50" y2="65" className="bim-line bim-line-3" />
      </g>
    </svg>
  );
};

export default BimAnimation;