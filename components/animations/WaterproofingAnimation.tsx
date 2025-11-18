import React from 'react';

const WaterproofingAnimation: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .wp-drop {
          fill: hsl(var(--primary));
          animation: wp-fall 2s linear infinite;
        }
        .wp-drop-1 { animation-delay: 0s; }
        .wp-drop-2 { animation-delay: 0.5s; }
        .wp-drop-3 { animation-delay: 1s; }
        .wp-shield {
          stroke: hsl(var(--secondary));
          stroke-width: 4;
          fill: none;
          stroke-dasharray: 150;
          stroke-dashoffset: 150;
          animation: wp-form-shield 2s ease-out infinite;
        }
        @keyframes wp-fall {
          0% { transform: translateY(-20px); opacity: 0; }
          20% { opacity: 1; }
          80% { transform: translateY(50px); opacity: 1; }
          100% { transform: translateY(60px); opacity: 0; }
        }
        @keyframes wp-form-shield {
          0%, 20% { stroke-dashoffset: 150; }
          60%, 100% { stroke-dashoffset: 0; }
        }
      `}</style>
      <path d="M 20 20 C 20 20, 50 40, 80 20" className="wp-drop wp-drop-1" />
      <path d="M 35 20 C 35 20, 50 35, 65 20" className="wp-drop wp-drop-2" />
      <path d="M 50 20 C 50 20, 50 30, 50 20" className="wp-drop wp-drop-3" />
      
      <path d="M 10 70 Q 50 90, 90 70" className="wp-shield" />
      <rect x="10" y="72" width="80" height="20" fill="hsl(var(--foreground))" />
    </svg>
  );
};

export default WaterproofingAnimation;