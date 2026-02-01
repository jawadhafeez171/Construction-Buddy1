
import React, { useState, useRef, useCallback } from 'react';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    className = '',
    onClick,
    disabled = false
}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const moveX = (clientX - centerX) * 0.3;
        const moveY = (clientY - centerY) * 0.3;

        setPosition({ x: moveX, y: moveY });
    }, []);

    const onMouseLeave = useCallback(() => {
        setPosition({ x: 0, y: 0 });
    }, []);

    return (
        <div
            ref={containerRef}
            onClick={!disabled ? onClick : undefined}
            className={`relative transition-transform duration-300 ease-out group overflow-hidden cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            {/* Ripple/Shine effect */}
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-[-20deg]"></span>
            <span className="relative z-10 flex items-center justify-center">
                {children}
            </span>
        </div>
    );
};
