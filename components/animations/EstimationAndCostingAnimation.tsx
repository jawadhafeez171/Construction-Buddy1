import React from 'react';

const EstimationAndCostingAnimation: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .ec-line { stroke: #343a40; stroke-width: 2; transform-origin: center; }
        .ec-bar-1 { animation: ec-grow 2s ease-in-out infinite; animation-delay: 0s; }
        .ec-bar-2 { animation: ec-grow 2s ease-in-out infinite; animation-delay: 0.2s; }
        .ec-bar-3 { animation: ec-grow 2s ease-in-out infinite; animation-delay: 0.4s; }
        @keyframes ec-grow {
          0%, 100% { transform: scaleY(0.1); }
          50% { transform: scaleY(1); }
        }
        .ec-coin { fill: hsl(var(--secondary)); animation: ec-drop 2s ease-in infinite; }
        @keyframes ec-drop {
          0% { transform: translateY(-20px); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      <rect x="20" y="80" width="15" height="10" fill="hsl(var(--muted-foreground))" className="ec-bar-1" transform-origin="bottom center" transform="scale(1, 0.4)"/>
      <rect x="42.5" y="80" width="15" height="10" fill="hsl(var(--muted-foreground))" className="ec-bar-2" transform-origin="bottom center" transform="scale(1, 0.7)"/>
      <rect x="65" y="80" width="15" height="10" fill="hsl(var(--muted-foreground))" className="ec-bar-3" transform-origin="bottom center" transform="scale(1, 0.5)"/>
      <line x1="10" y1="90" x2="90" y2="90" stroke="hsl(var(--foreground))" strokeWidth="2" />
      <circle cx="50" cy="30" r="10" className="ec-coin" />
      <text x="47" y="35" fontSize="10" fill="hsl(var(--secondary-foreground))" fontWeight="bold">$</text>
    </svg>
  );
};

export default EstimationAndCostingAnimation;