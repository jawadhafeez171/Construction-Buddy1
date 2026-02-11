import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SERVICES } from '../constants';
import CheckIcon from '../components/icons/CheckIcon';
import SectionHeader from '../components/SectionHeader';
import { motion, useScroll, useTransform } from 'framer-motion';

const service = SERVICES.find(s => s.id === 'architectural-structural-drawings');

const archPackages = [
    {
        name: 'Starter Design',
        price: 'Rs.25/sft+GST',
        popular: false,
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
        popular: true,
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
        popular: false,
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
        popular: false,
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
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    if (!service) return <div>Service not found.</div>;

    const otherServices = SERVICES.filter(s => s.id !== service.id);

    return (
        <div className="bg-background overflow-hidden">
            {/* Cinematic Hero Section */}
            <section ref={heroRef} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-blue-950/80 z-10 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
                        alt="Architectural Blueprints"
                        className="w-full h-full object-cover grayscale opacity-60"
                    />
                </motion.div>

                <div className="relative z-20 container mx-auto px-4 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs font-semibold tracking-widest uppercase mb-6">
                            Precision Engineering
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6">
                            Blueprints for <br />
                            <span className="italic text-secondary">Perfection</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                            From initial concepts to final construction documents, we provide the integrated drawings that form the bedrock of your project.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-secondary text-white font-bold rounded-full text-lg shadow-xl hover:shadow-secondary/30 transition-all hover:bg-secondary/90"
                                >
                                    Get Design Quote
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 pt-24 pb-12">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content */}
                    <div className="lg:w-full">
                        <div className="space-y-32">

                            <section>
                                <SectionHeader
                                    title="Architectural Excellence"
                                    description={service.overview}
                                />
                            </section>

                            {/* --- Packages Section --- */}
                            <section>
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground mb-4">Curated Design Packages</h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Choose the level of detail that fits your vision.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {archPackages.map((pkg, idx) => (
                                        <motion.div
                                            key={pkg.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className={`relative flex flex-col bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group ${pkg.popular ? 'border-2 border-secondary shadow-xl shadow-secondary/10' : 'border border-border/50 hover:shadow-xl'}`}
                                        >
                                            {pkg.popular && (
                                                <div className="bg-secondary text-white text-xs font-bold text-center py-1 uppercase tracking-widest">
                                                    Most Popular
                                                </div>
                                            )}

                                            <div className="p-8 flex-grow">
                                                <h3 className="text-lg font-bold text-foreground mb-2">{pkg.name}</h3>
                                                <div className="text-2xl font-black text-secondary mb-6">
                                                    {pkg.price}
                                                </div>

                                                <div className="w-full h-px bg-border/50 mb-6" />

                                                <ul className="space-y-4">
                                                    {pkg.features.map((feature, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mr-3" />
                                                            <span className="text-sm text-foreground/80">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="p-6 bg-muted/30 mt-auto">
                                                <Link to="/contact" className={`block w-full text-center py-3 rounded-lg font-bold transition-all ${pkg.popular ? 'bg-secondary text-white hover:bg-secondary/90' : 'bg-white text-foreground border border-border hover:border-secondary hover:text-secondary'}`}>
                                                    Select Package
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Process Section */}
                            <section>
                                <div className="bg-muted/30 rounded-[3rem] p-8 md:p-16 border border-border/50">
                                    <SectionHeader title="Our Design Process" description="From sketch to structure, a meticulous journey." />

                                    <div className="mt-16 space-y-8">
                                        {service.process.map((step, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="relative pl-12 md:pl-0"
                                            >
                                                <div className="md:grid md:grid-cols-12 md:gap-8 items-center">
                                                    <div className="hidden md:block md:col-span-2 text-right">
                                                        <span className="text-4xl font-black text-border/60">0{index + 1}</span>
                                                    </div>

                                                    {/* Timeline Line (Desktop) */}
                                                    <div className="hidden md:flex md:col-span-1 justify-center relative h-full min-h-[100px]">
                                                        <div className="h-full w-px bg-border/60 absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
                                                        <div className="w-4 h-4 rounded-full bg-secondary border-4 border-background z-10 mt-4"></div>
                                                    </div>

                                                    {/* Mobile Timeline Line */}
                                                    <div className="absolute left-0 top-0 bottom-0 w-px bg-border/60 md:hidden ml-3"></div>
                                                    <div className="absolute left-0 top-4 w-6 h-6 rounded-full bg-secondary border-4 border-background z-10 md:hidden"></div>

                                                    <div className="md:col-span-9 bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                                                        <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">Stage {step.step}</h4>
                                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                                        <p className="text-muted-foreground">{step.description}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section className="bg-gradient-to-br from-secondary to-tertiary text-white p-12 rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="relative z-10">
                                    <SectionHeader
                                        title="Why Choose Our Designs?"
                                        description={service.whyChooseUs}
                                        lightMode={true}
                                        centered={true}
                                        className="mb-8"
                                    />
                                    <Link to="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-10 py-4 bg-white text-secondary font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                                        >
                                            Start Your Design Journey
                                        </motion.button>
                                    </Link>
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
                                <h3 className="text-lg font-bold text-foreground mb-4">Need a Quote?</h3>
                                <p className="text-sm text-muted-foreground mb-6">Use our cost calculator to get a rough estimate for your construction project.</p>
                                <Link to="/cost-calculator" className="block w-full text-center border-2 border-secondary text-secondary font-bold py-3 rounded-lg hover:bg-secondary hover:text-white transition-all">
                                    Construction Cost Calculator
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