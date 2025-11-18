import React from 'react';

// A single coin component
const Coin: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" className="fill-secondary stroke-secondary-foreground" strokeWidth="1.5"/>
        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="22" className="fill-secondary-foreground" fontWeight="bold">₹</text>
    </svg>
);


const RupeeCoinIcon: React.FC<{ count: 1 | 2 | 3 }> = ({ count }) => {
    if (count === 1) {
        return (
            <div className="w-12 h-12 flex items-center justify-center">
                 <Coin className="w-12 h-12" />
            </div>
        );
    }
    if (count === 2) {
        return (
            <div className="relative w-16 h-12 flex items-center justify-center">
                <Coin className="absolute top-0 left-0 w-10 h-10 transform -rotate-12" />
                <Coin className="absolute bottom-0 right-0 w-10 h-10 transform rotate-12" />
            </div>
        );
    }
    if (count === 3) {
        return (
            <div className="relative w-16 h-14 flex items-center justify-center">
                <Coin className="absolute top-0 left-1/2 transform -translate-x-1/2 w-9 h-9" />
                <Coin className="absolute bottom-0 left-1 w-9 h-9 transform -rotate-12" />
                <Coin className="absolute bottom-0 right-1 w-9 h-9 transform rotate-12" />
            </div>
        );
    }
    return null;
}

export default RupeeCoinIcon;