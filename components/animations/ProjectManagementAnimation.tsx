import React from 'react';

const ProjectManagementAnimation: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .pm-gear { fill: hsl(var(--foreground)); transform-origin: center; }
        .pm-gear1 { animation: pm-rotate 4s linear infinite; }
        .pm-gear2 { animation: pm-rotate-rev 4s linear infinite; }
        .pm-check { stroke: hsl(var(--secondary)); stroke-width: 4; stroke-dasharray: 100; stroke-dashoffset: 100; animation: pm-draw-check 4s ease-in-out infinite; }
        @keyframes pm-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pm-rotate-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes pm-draw-check {
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
      <path className="pm-gear pm-gear1" d="M50 25 L 55 30 L 50 35 L 45 30 Z M 50 25 A 15 15 0 0 1 65 39 L 60 42 A 10 10 0 0 0 50 30 Z M 65 39 L 70 45 L 65 50 L 60 42 Z M 65 50 A 15 15 0 0 1 50 65 L 50 60 A 10 10 0 0 0 60 50 Z M 50 65 L 45 70 L 50 75 L 55 70 Z M 50 65 A 15 15 0 0 1 35 50 L 40 50 A 10 10 0 0 0 50 60 Z M 35 50 L 30 45 L 35 39 L 40 42 Z M 35 39 A 15 15 0 0 1 50 25 L 50 30 A 10 10 0 0 0 40 42 Z" transform="translate(-15, -15) scale(1.3)" />
      <path className="pm-gear pm-gear2" d="M50 25 L 55 30 L 50 35 L 45 30 Z M 50 25 A 15 15 0 0 1 65 39 L 60 42 A 10 10 0 0 0 50 30 Z M 65 39 L 70 45 L 65 50 L 60 42 Z M 65 50 A 15 15 0 0 1 50 65 L 50 60 A 10 10 0 0 0 60 50 Z M 50 65 L 45 70 L 50 75 L 55 70 Z M 50 65 A 15 15 0 0 1 35 50 L 40 50 A 10 10 0 0 0 50 60 Z M 35 50 L 30 45 L 35 39 L 40 42 Z M 35 39 A 15 15 0 0 1 50 25 L 50 30 A 10 10 0 0 0 40 42 Z" transform="translate(15, 15) scale(0.8)" />
      <polyline className="pm-check" points="30,70 45,85 70,60" fill="none" />
    </svg>
  );
};

export default ProjectManagementAnimation;