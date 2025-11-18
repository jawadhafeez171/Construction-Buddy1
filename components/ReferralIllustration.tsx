import React from 'react';
import GiftIcon from './icons/GiftIcon';
import UserGroupIcon from './icons/UserGroupIcon';
import RupeeCircleIcon from './icons/RupeeCircleIcon';

const ReferralIllustration: React.FC = () => {
    return (
        <div className="relative w-full max-w-sm mx-auto p-8 flex items-center justify-center">
            {/* Dashed lines connecting elements */}
            <svg className="absolute w-full h-full" viewBox="0 0 200 200">
                <path d="M 50 150 Q 50 100, 100 100" stroke="hsl(var(--border))" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <path d="M 150 150 Q 150 100, 100 100" stroke="hsl(var(--border))" strokeWidth="2" fill="none" strokeDasharray="5,5" />
            </svg>
            
            <div className="relative z-10 w-32 h-32 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-xl animate-float">
                <GiftIcon className="w-16 h-16" />
            </div>

            <div className="absolute bottom-0 left-0 z-10 w-20 h-20 bg-card text-tertiary rounded-full flex items-center justify-center shadow-lg border-4 border-background animate-float [animation-delay:1.5s]">
                <UserGroupIcon className="w-10 h-10" />
            </div>
            
            <div className="absolute bottom-0 right-0 z-10 w-20 h-20 bg-card text-tertiary rounded-full flex items-center justify-center shadow-lg border-4 border-background animate-float [animation-delay:3s]">
                <RupeeCircleIcon className="w-10 h-10" />
            </div>
        </div>
    );
};

export default ReferralIllustration;