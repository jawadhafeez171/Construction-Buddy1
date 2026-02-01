// Pricing data for cost calculator

export interface PackageRate {
    name: string;
    minRate: number;
    maxRate: number;
    description: string;
}

export interface AddOn {
    id: string;
    name: string;
    minCost: number;
    maxCost: number;
    description: string;
}

export const PACKAGE_RATES: PackageRate[] = [
    {
        name: 'Basic',
        minRate: 1800,
        maxRate: 2000,
        description: 'Essential quality materials and finishes',
    },
    {
        name: 'Standard',
        minRate: 2200,
        maxRate: 2400,
        description: 'Premium materials with better finishes',
    },
    {
        name: 'Premium',
        minRate: 2600,
        maxRate: 2800,
        description: 'High-end materials and luxury finishes',
    },
    {
        name: 'Luxury',
        minRate: 3000,
        maxRate: 3500,
        description: 'Top-tier materials and bespoke finishes',
    },
];

export const ADD_ONS: AddOn[] = [
    {
        id: 'basement',
        name: 'Basement',
        minCost: 500000,
        maxCost: 1000000,
        description: 'Additional basement floor',
    },
    {
        id: 'terrace-garden',
        name: 'Terrace Garden',
        minCost: 200000,
        maxCost: 500000,
        description: 'Landscaped terrace with plants and seating',
    },
    {
        id: 'swimming-pool',
        name: 'Swimming Pool',
        minCost: 1500000,
        maxCost: 3000000,
        description: 'Custom swimming pool with filtration',
    },
    {
        id: 'home-theater',
        name: 'Home Theater',
        minCost: 300000,
        maxCost: 800000,
        description: 'Dedicated home theater room with acoustics',
    },
    {
        id: 'solar-panels',
        name: 'Solar Panels',
        minCost: 200000,
        maxCost: 500000,
        description: 'Rooftop solar panel installation',
    },
    {
        id: 'elevator',
        name: 'Elevator',
        minCost: 800000,
        maxCost: 1500000,
        description: 'Residential elevator (2-3 floors)',
    },
    {
        id: 'smart-home',
        name: 'Smart Home Automation',
        minCost: 150000,
        maxCost: 400000,
        description: 'Complete home automation system',
    },
];

export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(amount);
};

export const formatCurrencyShort = (amount: number): string => {
    if (amount >= 10000000) {
        return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
        return `₹${(amount / 100000).toFixed(2)} L`;
    }
    return formatCurrency(amount);
};
