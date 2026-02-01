import React, { useState, useEffect } from 'react';
import { PACKAGE_RATES, ADD_ONS, formatCurrency, formatCurrencyShort } from '../constants/pricingData';
import { useModal } from '../contexts/ModalContext';
import { MagneticButton } from './MagneticButton';
import RupeeCircleIcon from './icons/RupeeCircleIcon';

const CostCalculator: React.FC = () => {
    const { openBuildModal } = useModal();
    const [area, setArea] = useState<number>(1500);
    const [selectedPackage, setSelectedPackage] = useState<number>(1); // Index of PACKAGE_RATES
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

    const [minCost, setMinCost] = useState<number>(0);
    const [maxCost, setMaxCost] = useState<number>(0);

    useEffect(() => {
        calculateCost();
    }, [area, selectedPackage, selectedAddOns]);

    const calculateCost = () => {
        const packageRate = PACKAGE_RATES[selectedPackage];

        // Base construction cost
        const baseMin = area * packageRate.minRate;
        const baseMax = area * packageRate.maxRate;

        // Add-ons cost
        let addOnsMin = 0;
        let addOnsMax = 0;

        selectedAddOns.forEach(addOnId => {
            const addOn = ADD_ONS.find(a => a.id === addOnId);
            if (addOn) {
                addOnsMin += addOn.minCost;
                addOnsMax += addOn.maxCost;
            }
        });

        setMinCost(baseMin + addOnsMin);
        setMaxCost(baseMax + addOnsMax);
    };

    const toggleAddOn = (addOnId: string) => {
        setSelectedAddOns(prev =>
            prev.includes(addOnId)
                ? prev.filter(id => id !== addOnId)
                : [...prev, addOnId]
        );
    };

    return (
        <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-secondary to-tertiary p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <RupeeCircleIcon className="w-10 h-10 text-white" />
                    <h2 className="text-3xl font-bold text-white">Cost Calculator</h2>
                </div>
                <p className="text-white/90">Get an instant estimate for your dream project</p>
            </div>

            <div className="p-6 md:p-8 space-y-8">
                {/* Area Selection */}
                <div>
                    <label className="block text-lg font-semibold mb-3">
                        Construction Area (sqft)
                    </label>
                    <div className="flex items-center gap-4">
                        <input
                            type="range"
                            min="500"
                            max="10000"
                            step="100"
                            value={area}
                            onChange={(e) => setArea(Number(e.target.value))}
                            className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-secondary"
                        />
                        <input
                            type="number"
                            min="500"
                            max="10000"
                            value={area}
                            onChange={(e) => setArea(Number(e.target.value))}
                            className="w-24 px-3 py-2 border border-border rounded-lg bg-background text-center font-bold"
                        />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>500 sqft</span>
                        <span>10,000 sqft</span>
                    </div>
                </div>

                {/* Package Selection */}
                <div>
                    <label className="block text-lg font-semibold mb-3">
                        Select Package
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {PACKAGE_RATES.map((pkg, index) => (
                            <button
                                key={pkg.name}
                                onClick={() => setSelectedPackage(index)}
                                className={`p-4 rounded-xl border-2 transition-all text-left ${selectedPackage === index
                                        ? 'border-secondary bg-secondary/10 shadow-md'
                                        : 'border-border hover:border-secondary/50'
                                    }`}
                            >
                                <h3 className="font-bold text-lg mb-1">{pkg.name}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{pkg.description}</p>
                                <p className="text-xs font-semibold text-secondary">
                                    ₹{pkg.minRate} - ₹{pkg.maxRate}/sqft
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Add-ons Selection */}
                <div>
                    <label className="block text-lg font-semibold mb-3">
                        Additional Features (Optional)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {ADD_ONS.map((addOn) => (
                            <label
                                key={addOn.id}
                                className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedAddOns.includes(addOn.id)
                                        ? 'border-tertiary bg-tertiary/10'
                                        : 'border-border hover:border-tertiary/50'
                                    }`}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedAddOns.includes(addOn.id)}
                                    onChange={() => toggleAddOn(addOn.id)}
                                    className="mt-1 w-5 h-5 accent-tertiary cursor-pointer"
                                />
                                <div className="flex-1">
                                    <h4 className="font-semibold">{addOn.name}</h4>
                                    <p className="text-xs text-muted-foreground mb-1">{addOn.description}</p>
                                    <p className="text-xs font-semibold text-tertiary">
                                        {formatCurrencyShort(addOn.minCost)} - {formatCurrencyShort(addOn.maxCost)}
                                    </p>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Cost Summary */}
                <div className="bg-gradient-to-br from-secondary/10 to-tertiary/10 border-2 border-secondary rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-center">Estimated Project Cost</h3>

                    <div className="bg-card rounded-lg p-4 mb-4">
                        <div className="flex items-baseline justify-center gap-2">
                            <span className="text-3xl md:text-4xl font-extrabold text-secondary">
                                {formatCurrencyShort(minCost)}
                            </span>
                            <span className="text-xl text-muted-foreground">-</span>
                            <span className="text-3xl md:text-4xl font-extrabold text-tertiary">
                                {formatCurrencyShort(maxCost)}
                            </span>
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-2">
                            {formatCurrency(minCost)} - {formatCurrency(maxCost)}
                        </p>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Base Construction ({area} sqft)</span>
                            <span className="font-semibold">
                                {formatCurrencyShort(area * PACKAGE_RATES[selectedPackage].minRate)} - {formatCurrencyShort(area * PACKAGE_RATES[selectedPackage].maxRate)}
                            </span>
                        </div>
                        {selectedAddOns.length > 0 && (
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Add-ons ({selectedAddOns.length})</span>
                                <span className="font-semibold">
                                    {formatCurrencyShort(
                                        selectedAddOns.reduce((sum, id) => {
                                            const addOn = ADD_ONS.find(a => a.id === id);
                                            return sum + (addOn?.minCost || 0);
                                        }, 0)
                                    )} - {formatCurrencyShort(
                                        selectedAddOns.reduce((sum, id) => {
                                            const addOn = ADD_ONS.find(a => a.id === id);
                                            return sum + (addOn?.maxCost || 0);
                                        }, 0)
                                    )}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground text-center mb-4">
                            * This is an approximate estimate. Final cost may vary based on site conditions, material availability, and customizations.
                        </p>
                        <MagneticButton
                            onClick={openBuildModal}
                            className="w-full py-4 bg-secondary text-secondary-foreground rounded-lg font-bold text-lg hover:shadow-xl transition-all"
                        >
                            Get Accurate Quote
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CostCalculator;
