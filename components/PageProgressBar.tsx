
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageProgressBar: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Start progress on location change
        setIsVisible(true);
        setProgress(10);

        const increment = setInterval(() => {
            setProgress(prev => {
                if (prev >= 90) {
                    clearInterval(increment);
                    return 90;
                }
                return prev + 10;
            });
        }, 100);

        // Complete progress after a small delay to feel "real"
        const timeout = setTimeout(() => {
            setProgress(100);
            setTimeout(() => {
                setIsVisible(false);
                setProgress(0);
            }, 300);
        }, 400);

        return () => {
            clearInterval(increment);
            clearTimeout(timeout);
        };
    }, [location.pathname]);

    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1 pointer-events-none">
            <div
                className="h-full bg-secondary shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default PageProgressBar;
