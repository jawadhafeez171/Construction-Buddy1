import React, { useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RippleProps {
    color?: string;
    duration?: number;
}

interface RippleStyle {
    left: number;
    top: number;
    width: number;
    height: number;
}

const Ripple: React.FC<RippleProps> = ({ color = 'rgba(255, 255, 255, 0.3)', duration = 600 }) => {
    const [ripples, setRipples] = useState<{ x: number; y: number; size: number; id: number }[]>([]);

    useLayoutEffect(() => {
        let bounce: number | undefined;
        if (ripples.length > 0) {
            // Clean up ripples processing
            bounce = window.setTimeout(() => {
                setRipples([]);
            }, duration * 2);
        }
        return () => clearTimeout(bounce);
    }, [ripples, duration]);

    const addRipple = (event: React.MouseEvent) => {
        const container = event.currentTarget.getBoundingClientRect();
        const size = container.width > container.height ? container.width : container.height;

        // Calculate click position relative to the element
        const x = event.clientX - container.left - size / 2;
        const y = event.clientY - container.top - size / 2;

        const newRipple = {
            x,
            y,
            size,
            id: Date.now(),
        };

        setRipples((prev) => [...prev, newRipple]);
    };

    // We actually need to expose a way to trigger the ripple from the parent
    // But a better pattern is 'click-aware-wrapper'.
    // For now, let's make this a component that listens to parent click if we pass a ref, 
    // OR we can just make a generic 'RippleButton' or higher order component. 
    //
    // However, simpler implementation:
    // Render this absolute fill component inside a logical 'relative' parent.
    // The parent's onClick will bubble, but we need the coordinate.
    //
    // Let's change approach: 'RippleContainer' that wraps children.

    return null; // Logic moved to 'RippleUI' below for cleaner conceptual model
};


// Better simple implementation for "Just drop in":
export const RippleContainer: React.FC<{ children: React.ReactNode, className?: string, onClick?: (e: React.MouseEvent) => void }> = ({ children, className = '', onClick }) => {
    const [ripples, setRipples] = useState<{ x: number, y: number, size: number, id: number }[]>([]);

    const handleAddRipple = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const newRipple = { x, y, size, id: Date.now() };
        setRipples(prev => [...prev, newRipple]);

        if (onClick) onClick(e);
    };

    return (
        <div className={`relative overflow-hidden ${className}`} onClick={handleAddRipple}>
            {children}
            <AnimatePresence>
                {ripples.map(ripple => (
                    <motion.span
                        key={ripple.id}
                        initial={{ transform: 'scale(0)', opacity: 0.5 }}
                        animate={{ transform: 'scale(2)', opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            position: 'absolute',
                            left: ripple.x,
                            top: ripple.y,
                            width: ripple.size,
                            height: ripple.size,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            pointerEvents: 'none',
                        }}
                        onAnimationComplete={() => {
                            setRipples(prev => prev.filter(r => r.id !== ripple.id));
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default RippleContainer;
