import React from 'react';

const InteriorDesignAnimation: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .id-wall { fill: hsl(var(--background)); }
        .id-swatch { animation: id-change-color 4s linear infinite; }
        @keyframes id-change-color {
          0%, 100% { fill: hsl(var(--primary)); }
          50% { fill: hsl(var(--secondary)); }
        }
        .id-light {
          fill: hsl(var(--secondary));
          opacity: 0;
          animation: id-flicker 2s ease-in-out infinite;
        }
        @keyframes id-flicker {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.8; }
        }
      `}</style>
      <rect x="10" y="10" width="80" height="80" stroke="hsl(var(--muted-foreground))" strokeWidth="2" className="id-wall" />
      <rect x="20" y="50" width="60" height="40" fill="hsl(var(--muted-foreground))" />
      <rect x="25" y="20" width="50" height="25" className="id-swatch" />
      <circle cx="50" cy="15" r="5" fill="hsl(var(--foreground))" />
      <polygon points="40,20 60,20 50,40" className="id-light" />
    </svg>
  );
};

export default InteriorDesignAnimation;