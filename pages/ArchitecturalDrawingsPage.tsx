import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/blueprint/1920/1080')" }}>
                <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl">
                        Precision Blueprints for Flawless Construction
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl">
                        From initial concepts to final construction documents, we provide integrated architectural and structural drawings that form the bedrock of your project.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <div className="space-y-12">
                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
                                <p className="text-muted-foreground leading-relaxed">{service.overview}</p>
                            </section>

                            {/* --- Packages Section --- */}
                            <section>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Design Packages</h2>
                                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Tailored packages to bring your architectural vision to life.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {archPackages.map((pkg) => (
                                        <div key={pkg.name} className="bg-card border border-border rounded-lg shadow-lg flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
                                            <div className="bg-secondary text-secondary-foreground p-4 text-center rounded-t-lg">
                                                <h3 className="text-xl font-bold uppercase tracking-wide">{pkg.name}</h3>
                                                <p className="text-lg font-semibold">{pkg.price}</p>
                                            </div>
                                            <div className="p-6 flex-grow flex flex-col">
                                                <h4 className="text-lg font-bold text-card-foreground mb-4">Package Includes</h4>
                                                <ul className="space-y-3 flex-grow">
                                                    {pkg.features.map((feature, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <CheckIcon className="h-5 w-5 text-secondary flex-shrink-0 mr-3 mt-1" />
                                                            <span className="text-muted-foreground text-sm">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-6">Our Process</h2>
                                <div className="relative border-l-2 border-tertiary pl-8">
                                    {service.process.map((step, index) => (
                                        <div key={index} className="mb-8 relative">
                                            <div className="absolute -left-[42px] top-1 w-5 h-5 bg-tertiary rounded-full border-4 border-background"></div>
                                            <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                                            <p className="text-muted-foreground mt-1">{step.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="bg-muted p-8 rounded-lg border border-border">
                                <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us?</h2>
                                <p className="text-muted-foreground leading-relaxed">{service.whyChooseUs}</p>
                            </section>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3">
                        <div className="sticky top-36">
                            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                                <h3 className="text-xl font-bold text-card-foreground mb-4 border-b border-border pb-2">Other Services</h3>
                                <ul className="space-y-2">
                                    {otherServices.map(s => (
                                        <li key={s.id}>
                                            <NavLink
                                                to={s.path}
                                                className={({ isActive }) =>
                                                    `block p-3 rounded-md transition-colors ${isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`
                                                }
                                            >
                                                {s.title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ArchitecturalDrawingsPage;