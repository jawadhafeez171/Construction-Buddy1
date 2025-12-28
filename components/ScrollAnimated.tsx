import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimatedProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export const ScrollAnimated: React.FC<ScrollAnimatedProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce });

  const animations = {
    fadeInUp: {
      initial: 'opacity-0 translate-y-8',
      animate: 'opacity-100 translate-y-0',
    },
    fadeIn: {
      initial: 'opacity-0',
      animate: 'opacity-100',
    },
    slideUp: {
      initial: 'opacity-0 translate-y-12',
      animate: 'opacity-100 translate-y-0',
    },
    slideLeft: {
      initial: 'opacity-0 translate-x-12',
      animate: 'opacity-100 translate-x-0',
    },
    slideRight: {
      initial: 'opacity-0 -translate-x-12',
      animate: 'opacity-100 translate-x-0',
    },
    scale: {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100',
    },
  };

  const anim = animations[animation];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all ease-out ${anim.initial} ${
        isVisible ? anim.animate : ''
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

