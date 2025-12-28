import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse',
}) => {
  const baseClasses = 'bg-muted animate-pulse';
  
  const variantClasses = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-lg',
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};

// Pre-built skeleton components
export const ImageSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <Skeleton variant="rounded" className={`w-full h-full ${className}`} />
);

export const TextSkeleton: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className = '' 
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        variant="text"
        width={i === lines - 1 ? '80%' : '100%'}
        className="h-4"
      />
    ))}
  </div>
);

export const CardSkeleton: React.FC = () => (
  <div className="bg-card border border-border rounded-lg p-6 space-y-4">
    <Skeleton variant="rounded" height={200} className="w-full" />
    <Skeleton variant="text" width="60%" className="h-6" />
    <TextSkeleton lines={2} />
    <Skeleton variant="rounded" height={40} className="w-full" />
  </div>
);

export const ProjectCardSkeleton: React.FC = () => (
  <div className="bg-card border border-border rounded-lg overflow-hidden">
    <Skeleton variant="rounded" height={200} className="w-full" />
    <div className="p-4 space-y-2">
      <Skeleton variant="text" width="70%" className="h-5" />
      <Skeleton variant="text" width="50%" className="h-4" />
    </div>
  </div>
);

