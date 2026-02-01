
import React, { useState, useRef, useCallback } from 'react';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    intensity?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
    children,
    className = '',
    intensity = 15
}) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * intensity;
        const rotateY = ((centerX - x) / centerX) * intensity;

        setRotate({ x: rotateX, y: rotateY });
    }, [intensity]);

    const onMouseLeave = useCallback(() => {
        setRotate({ x: 0, y: 0 });
    }, []);

    return (
        <div
            ref={cardRef}
            className={`transition-transform duration-200 ease-out ${className}`}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transformStyle: 'preserve-3d',
            }}
        >
            {children}
        </div>
    );
};
