import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const PullToRefresh: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [startPoint, setStartPoint] = useState<number>(0);
    const [pullChange, setPullChange] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const refreshControlRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    const initLoading = async () => {
        setLoading(true);
        await controls.start({ y: 60, transition: { duration: 0.2 } });

        // Simulate refresh delay
        setTimeout(async () => {
            window.location.reload();
            setLoading(false);
            setPullChange(0);
            await controls.start({ y: 0 });
        }, 1500);
    };

    const pullStart = (e: React.TouchEvent) => {
        const { scrollTop } = document.documentElement; // Or custom scroll container
        if (scrollTop === 0) {
            setStartPoint(e.targetTouches[0].screenY);
        }
    };

    const pull = (e: React.TouchEvent) => {
        const touch = e.targetTouches[0];
        const { scrollTop } = document.documentElement;

        if (scrollTop === 0 && startPoint > 0) {
            const pullLength = touch.screenY - startPoint;
            if (pullLength > 0 && pullLength < 200) { // Limit drag distance
                setPullChange(pullLength);
                // Visual feedback could go here if simulating without framer drag
                // But we will just use the state to animate the translateY
            }
        }
    };

    const endPull = () => {
        if (pullChange > 80) { // Threshold
            initLoading();
        } else {
            setPullChange(0);
        }
        setStartPoint(0);
    };

    useEffect(() => {
        if (!loading) {
            controls.start({ y: pullChange > 0 ? Math.min(pullChange / 2, 80) : 0 });
        }
    }, [pullChange, loading, controls]);

    return (
        <div
            ref={contentRef}
            onTouchStart={pullStart}
            onTouchMove={pull}
            onTouchEnd={endPull}
            className="relative min-h-screen"
        >
            <motion.div
                ref={refreshControlRef}
                animate={controls}
                className="absolute top-0 w-full flex justify-center items-center pointer-events-none"
                style={{ marginTop: '-40px' }} // Start hidden above
            >
                <div className={`p-2 rounded-full bg-white shadow-lg ${loading ? 'animate-spin' : ''}`}>
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </div>
            </motion.div>

            <motion.div animate={{ y: loading ? 60 : (pullChange > 0 ? Math.min(pullChange / 3, 60) : 0) }}>
                {children}
            </motion.div>
        </div>
    );
};
