import React from 'react';
import { motion } from 'framer-motion';

interface ScrollAnimatedProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  viewportAmount?: number;
  once?: boolean;
}

export const ScrollAnimated: React.FC<ScrollAnimatedProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  viewportAmount = 0.2,
  once = true,
}) => {
  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      transition={{ duration, delay: delay / 1000, ease: 'easeOut' }}
      variants={variants[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Also export a container for staggered children
export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  viewportAmount?: number;
}> = ({ children, className = '', staggerDelay = 0.1, viewportAmount = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeIn';
}> = ({ children, className = '', animation = 'fadeInUp' }) => {
  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  return (
    <motion.div variants={variants[animation]} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimated;
