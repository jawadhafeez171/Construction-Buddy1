import React from 'react';

const ArchitecturalDrawingAnimation: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
      <style>{`
        .ad-ruler-line {
          stroke: hsl(var(--secondary));
          stroke-width: 2;
          stroke-dasharray: 25;
          stroke-dashoffset: 25;
          animation: ad-draw 2s ease-in-out infinite;
        }
        .ad-pencil {
          transform-origin: 20px 80px;
          animation: ad-pivot 2s ease-in-out infinite;
        }
        @keyframes ad-draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes ad-pivot {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(10deg); }
        }
      `}</style>
      <path d="M 10 10 H 90" stroke="currentColor" strokeWidth="1" />
      <path d="M 10 90 V 10" stroke="currentColor" strokeWidth="1" />
      <g className="ad-pencil">
        <polygon points="20,80 25,60 15,60" fill="hsl(var(--muted-foreground))" />
        <polygon points="20,80 22,85 18,85" fill="currentColor" />
      </g>
      <line x1="20" y1="80" x2="45" y2="80" className="ad-ruler-line" />
    </svg>
  );
};

export default ArchitecturalDrawingAnimation;