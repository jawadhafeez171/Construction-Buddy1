import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SERVICES } from '../constants';
import CheckIcon from '../components/icons/CheckIcon';

const service = SERVICES.find(s => s.id === 'architectural-structural-drawings');

const archPackages = [
    {
        name: 'Starter Design',
        price: 'Rs.25/sft+GST',
        features: [
            '2D Floor Plan: 2 Options',
            '2D Elevation: 1 Option',
            '3D Elevation: 1 Option',
            'Structural Design',
            'Working Drawings',
            'Vasthu Compliant',
        ]
    },
    {
        name: 'Comfort Design',
        price: 'Rs.35/sft+GST',
        features: [
            '2D Floor Plans: 4 Options',
            '2D Elevation: 2 Options',
            '3D Elevation: 2 Options',
            'Structural Design',
            'Electrical & Plumbing Drawings',
            'Working Drawings',
            'Vasthu Compliant',
        ]
    },
    {
        name: 'Standard Design',
        price: 'Rs.45/sft+GST',
        features: [
            '2D Floor Plans: 6 Options',
            '2D Elevation: 3 Options',
            '3D Elevation: 3 Options',
            'Furniture Layout',
            'Structural Design',
            'Electrical & Plumbing Drawings',
            'Working Drawings',
            'Vasthu Compliant',
        ]
    },
    {
        name: 'Elite Design',
        price: 'Rs.65/Sft+GST',
        features: [
            '2D Floor Plans: Until Satisfied',
            '2D Elevation: Until Satisfied',
            '3D Elevation: Until Satisfied',
            'Furniture Layout',
            'Structural Design',
            'Electrical & Plumbing Drawings',
            'Working Drawings',
            'Interior Design',
            'Vasthu Compliant',
        ]
    }
];


const ArchitecturalDrawingsPage: React.FC = () => {
    if (!service) return <div>Service not found.</div>;

    const otherServices = SERVICES.filter(s => s.id !== service.id);

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/blueprint/1920/1080')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
                    <span className="bg-secondary/20 text-secondary border border-secondary/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm animate-fadeInUp">
                        Precision Blueprints
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight animate-fadeInUp delay-100">
                        Blueprints for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">Flawless Construction</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl max-w-2xl text-white/80 animate-fadeInUp delay-200">
                        From initial concepts to final construction documents, we provide integrated architectural and structural drawings that form the bedrock of your project.
                    </p>
                    <div className="mt-8 animate-fadeInUp delay-300">
                        <Link to="/contact" className="bg-gradient-brand text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 inline-block">
                            Get Design Quote
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <div className="space-y-20">
                            <section className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
                                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                                    <span className="w-2 h-8 bg-secondary rounded-full mr-3"></span>
                                    Overview
                                </h2>
                                <p className="text-muted-foreground leading-loose text-lg">
                                    {service.overview}
                                </p>
                            </section>

                            {/* --- Packages Section --- */}
                            <section>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Design Packages</h2>
                                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Tailored packages to bring your architectural vision to life.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {archPackages.map((pkg) => (
                                        <div key={pkg.name} className="bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-xl hover:border-secondary/30 transition-all duration-300 group hover:-translate-y-2 relative">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                                            <div className="p-6 relative z-10">
                                                <h3 className="text-xl font-bold uppercase tracking-wide text-foreground mb-2 group-hover:text-secondary transition-colors">{pkg.name}</h3>
                                                <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary mb-6">
                                                    {pkg.price}
                                                </div>
                                                <div className="space-y-3">
                                                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Includes:</h4>
                                                    <ul className="space-y-3">
                                                        {pkg.features.map((feature, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <div className="bg-secondary/10 p-1 rounded-full mr-3 mt-0.5">
                                                                    <CheckIcon className="h-3 w-3 text-secondary" />
                                                                </div>
                                                                <span className="text-muted-foreground text-sm font-medium">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="bg-muted/30 p-4 border-t border-border/50 text-center">
                                                <Link to="/contact" className="text-sm font-bold text-secondary hover:text-tertiary transition-colors">Select Package →</Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Design Process</h2>
                                <div className="relative border-l-2 border-border ml-4 pl-10 space-y-12">
                                    {service.process.map((step, index) => (
                                        <div key={index} className="relative group">
                                            <div className="absolute -left-[54px] top-0 w-8 h-8 bg-background border-2 border-secondary rounded-full flex items-center justify-center font-bold text-xs text-secondary z-10 group-hover:scale-110 transition-transform shadow-sm">
                                                {index + 1}
                                            </div>
                                            <div className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow">
                                                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">Stage {step.step}</span>
                                                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                                        Why Choose Us?
                                    </h2>
                                    <p className="text-white/80 leading-loose text-lg">
                                        {service.whyChooseUs}
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3">
                        <div className="sticky top-36 space-y-8">
                            <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50">
                                <h3 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wider border-b border-border pb-4">Other Services</h3>
                                <ul className="space-y-3">
                                    {otherServices.map(s => (
                                        <li key={s.id}>
                                            <NavLink
                                                to={s.path}
                                                className={({ isActive }) =>
                                                    `flex items-center justify-between p-3 rounded-lg transition-all duration-200 group ${isActive ? 'bg-secondary text-white shadow-md' : 'hover:bg-muted text-muted-foreground hover:text-foreground'}`
                                                }
                                            >
                                                <span className="font-medium">{s.title}</span>
                                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Quick Widget */}
                            <div className="bg-muted/50 p-6 rounded-xl border border-border">
                                <h3 className="text-lg font-bold text-foreground mb-4">Need an Estimate?</h3>
                                <p className="text-sm text-muted-foreground mb-6">Use our cost calculator to get a rough estimate for your construction project.</p>
                                <Link to="/cost-calculator" className="block w-full text-center border-2 border-secondary text-secondary font-bold py-3 rounded-lg hover:bg-secondary hover:text-white transition-all">
                                    Try Cost Calculator
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ArchitecturalDrawingsPage;