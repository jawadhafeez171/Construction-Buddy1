import React from 'react';
import CostCalculator from '../components/CostCalculator';
import { ScrollAnimated } from '../components/ScrollAnimated';

const CostCalculatorPage: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="bg-gradient-to-r from-secondary to-tertiary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <ScrollAnimated animation="fadeInUp">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                            Construction Cost Calculator
                        </h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                            Get an instant estimate for your construction project. Customize your package and add-ons to see real-time pricing.
                        </p>
                    </ScrollAnimated>
                </div>
            </div>

            {/* Calculator Section */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-5xl mx-auto">
                    <ScrollAnimated animation="fadeInUp" delay={200}>
                        <CostCalculator />
                    </ScrollAnimated>
                </div>
            </div>

            {/* Info Section */}
            <div className="bg-muted py-12">
                <div className="container mx-auto px-4">
                    <ScrollAnimated animation="fadeInUp">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                                How Our Pricing Works
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                                    <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mb-4 font-bold text-xl">
                                        1
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Select Your Package</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Choose from Basic, Standard, Premium, or Luxury packages based on your quality preferences and budget.
                                    </p>
                                </div>
                                <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                                    <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mb-4 font-bold text-xl">
                                        2
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Add Features</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Customize your project with additional features like basement, swimming pool, solar panels, and more.
                                    </p>
                                </div>
                                <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                                    <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mb-4 font-bold text-xl">
                                        3
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Get Instant Estimate</h3>
                                    <p className="text-muted-foreground text-sm">
                                        See your estimated cost range immediately. Contact us for a detailed, accurate quote tailored to your needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimated>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="container mx-auto px-4 py-12">
                <ScrollAnimated animation="fadeInUp">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            <details className="bg-card p-6 rounded-lg border border-border">
                                <summary className="font-semibold cursor-pointer">
                                    Is this estimate accurate?
                                </summary>
                                <p className="text-muted-foreground mt-3 text-sm">
                                    This calculator provides an approximate cost range based on standard rates. The final cost depends on site conditions, material availability, design complexity, and your specific requirements. Contact us for a detailed, accurate quote.
                                </p>
                            </details>
                            <details className="bg-card p-6 rounded-lg border border-border">
                                <summary className="font-semibold cursor-pointer">
                                    What's included in the package rates?
                                </summary>
                                <p className="text-muted-foreground mt-3 text-sm">
                                    Each package includes structure, statutory approvals, kitchen, bathroom, doors & windows, painting, flooring, and electrical work. The quality of materials and finishes varies by package tier.
                                </p>
                            </details>
                            <details className="bg-card p-6 rounded-lg border border-border">
                                <summary className="font-semibold cursor-pointer">
                                    Can I customize my package?
                                </summary>
                                <p className="text-muted-foreground mt-3 text-sm">
                                    Absolutely! While our packages provide a great starting point, we offer complete customization. You can mix and match materials, upgrade specific areas, or create a fully bespoke package.
                                </p>
                            </details>
                            <details className="bg-card p-6 rounded-lg border border-border">
                                <summary className="font-semibold cursor-pointer">
                                    Are there any hidden costs?
                                </summary>
                                <p className="text-muted-foreground mt-3 text-sm">
                                    We believe in complete transparency. Our quotes include all construction costs. However, facilitation fees for government approvals are borne by the client. We'll provide a detailed breakdown of all costs upfront.
                                </p>
                            </details>
                        </div>
                    </div>
                </ScrollAnimated>
            </div>
        </div>
    );
};

export default CostCalculatorPage;
