import React from 'react';

const StructuralDesignAnimation: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .sd-beam {
          stroke: hsl(var(--foreground));
          stroke-width: 4;
          stroke-linecap: round;
          transform-origin: center;
          animation: sd-build 3s linear infinite;
        }
        .sd-beam-1 { animation-delay: 0s; }
        .sd-beam-2 { animation-delay: 0.5s; }
        .sd-beam-3 { animation-delay: 1s; }
        .sd-beam-4 { animation-delay: 1.5s; }
        .sd-beam-5 { animation-delay: 2s; stroke: hsl(var(--secondary)); }
        @keyframes sd-build {
          0% { transform: scaleX(0); opacity: 0; }
          20% { transform: scaleX(1); opacity: 1; }
          80% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(0); opacity: 0; }
        }
      `}</style>
      <line x1="10" y1="90" x2="90" y2="90" className="sd-beam sd-beam-1" />
      <line x1="10" y1="10" x2="10" y2="90" className="sd-beam sd-beam-2" />
      <line x1="90" y1="10" x2="90" y2="90" className="sd-beam sd-beam-3" />
      <line x1="10" y1="10" x2="90" y2="10" className="sd-beam sd-beam-4" />
      <line x1="10" y1="10" x2="90" y2="90" className="sd-beam sd-beam-5" />
    </svg>
  );
};

export default StructuralDesignAnimation;