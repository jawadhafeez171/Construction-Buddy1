import React from 'react';

const ConstructionExecutionAnimation: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .ce-crane-arm { transform-origin: 20px 80px; animation: ce-rotate 4s ease-in-out infinite; }
        .ce-hook-line { stroke: hsl(var(--foreground)); stroke-width: 1; }
        .ce-block { fill: hsl(var(--secondary)); animation: ce-lift 4s ease-in-out infinite; }
        .ce-building rect { fill: hsl(var(--primary)); opacity: 0; animation: ce-build 4s linear infinite; }
        .ce-build-1 { animation-delay: 0s; }
        .ce-build-2 { animation-delay: 1s; }
        .ce-build-3 { animation-delay: 2s; }
        @keyframes ce-rotate { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(30deg); } }
        @keyframes ce-lift { 0% { transform: translate(50px, 0px); } 50% { transform: translate(0px, -40px); } 100% { transform: translate(50px, 0px); } }
        @keyframes ce-build {
          0% { opacity: 0; }
          25% { opacity: 1; }
          100% { opacity: 1; }
        }
      `}</style>
      <rect x="15" y="80" width="10" height="20" fill="hsl(var(--muted-foreground))" />
      <g className="ce-crane-arm">
        <line x1="20" y1="80" x2="80" y2="30" stroke="hsl(var(--muted-foreground))" strokeWidth="4" />
        <line x1="75" y1="34" x2="75" y2="50" className="ce-hook-line" />
        <rect x="70" y="50" width="10" height="10" className="ce-block" />
      </g>
      <g className="ce-building">
        <rect x="40" y="80" width="20" height="10" className="ce-build-1" />
        <rect x="40" y="70" width="20" height="10" className="ce-build-2" />
        <rect x="40" y="60" width="20" height="10" className="ce-build-3" />
      </g>
      <line x1="0" y1="90" x2="100" y2="90" stroke="hsl(var(--foreground))" strokeWidth="2"/>
    </svg>
  );
};

export default ConstructionExecutionAnimation;