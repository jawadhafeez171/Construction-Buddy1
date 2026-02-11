import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SERVICES, PACKAGES } from '../constants';
import VillaIcon from '../components/icons/VillaIcon';
import GatedCommunityIcon from '../components/icons/GatedCommunityIcon';
import RenovationIcon from '../components/icons/RenovationIcon';
import DuplexIcon from '../components/icons/DuplexIcon';
import PackageCard from '../components/PackageCard';
import SectionHeader from '../components/SectionHeader';
import { motion, useScroll, useTransform } from 'framer-motion';

const service = SERVICES.find(s => s.id === 'home-construction');

const serviceItems = [
    { icon: VillaIcon, title: 'Custom Villas & Bungalows', description: 'Bespoke homes designed and built to your unique specifications and lifestyle.' },
    { icon: GatedCommunityIcon, title: 'Gated Community Homes', description: 'Quality construction within planned communities, adhering to all design and quality standards.' },
    { icon: RenovationIcon, title: 'Major Renovations & Additions', description: 'Transform your existing space or expand it to meet your family’s growing needs.' },
    { icon: DuplexIcon, title: 'Duplex & Triplex Houses', description: 'Expertly designed multi-family homes, maximizing space and functionality.' },
];

const promiseItems = [
    { title: 'Quality Craftsmanship', description: 'We use only high-grade materials and skilled labor to ensure your home is built to last.' },
    { title: 'Transparent Communication', description: 'You are kept in the loop at every stage with regular updates and clear communication.' },
    { title: 'On-Time, On-Budget', description: 'Our robust project management ensures we deliver your home as promised, without surprises.' },
    { title: 'Personalized Approach', description: 'We understand this is your dream, and we collaborate closely with you to bring it to life.' },
];

const HomeConstructionPage: React.FC = () => {
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
            <section ref={heroRef} className="relative h-[90vh] overflow-hidden flex items-center justify-center">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
                        alt="Modern Home Construction"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 container mx-auto px-4 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs font-semibold tracking-widest uppercase mb-6">
                            Key to Your Dream Home
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-6">
                            Building <span className="italic text-secondary">Legacies</span>, <br />
                            Not Just Homes
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                            From foundation to finish, we craft spaces that stand the test of time. Experience the art of premium construction.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all"
                                >
                                    Start Your Project
                                </motion.button>
                            </Link>
                            <Link to="#packages">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full text-lg hover:bg-white/20 transition-all"
                                >
                                    View Plans
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 z-20"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </section>

            <div className="container mx-auto px-4 pt-24 pb-12">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content */}
                    <div className="lg:w-full">
                        <div className="space-y-32">

                            {/* What We Build Section */}
                            <section>
                                <SectionHeader
                                    title="Your Vision, Our Foundation"
                                    description={service.overview}
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                    {serviceItems.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start p-8 bg-card rounded-3xl border border-border/50 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 group"
                                        >
                                            <div className="flex-shrink-0 mr-6">
                                                <div className="w-16 h-16 bg-gradient-to-br from-secondary/10 to-tertiary/10 text-secondary rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                                    <item.icon className="w-8 h-8" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">{item.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Process Section - Vertical Visual Timeline */}
                            <section>
                                <div className="bg-muted/30 rounded-[3rem] p-8 md:p-16 border border-border/50">
                                    <SectionHeader title="Our Turnkey Construction Process" description="A seamless journey from concept to keys." />

                                    <div className="mt-16 relative">
                                        {/* Connecting Line */}
                                        <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-ml-px" />

                                        <div className="space-y-12">
                                            {service.process.map((step, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                                >
                                                    <div className="md:w-1/2 flex justify-start md:justify-end items-center">
                                                        <div className={`
                                                            hidden md:block w-32 h-px bg-border 
                                                            ${index % 2 === 0 ? 'origin-right scale-x-0 group-hover:scale-x-100' : 'origin-left'}
                                                        `} />
                                                    </div>

                                                    {/* Number Node */}
                                                    <div className="absolute left-6 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                                                        <div className="w-12 h-12 rounded-full bg-background border-4 border-muted flex items-center justify-center font-bold text-secondary shadow-sm z-10">
                                                            {index + 1}
                                                        </div>
                                                    </div>

                                                    <div className={`md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                                        <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all">
                                                            <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">Step {step.step}</h4>
                                                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                                            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Packages Section */}
                            <section id="packages">
                                <SectionHeader
                                    title="Transparent Construction Packages"
                                    description="No hidden costs. Choose a package that aligns with your vision and budget."
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
                                    {PACKAGES.map((pkg, idx) => (
                                        <motion.div
                                            key={pkg.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                        >
                                            <PackageCard packageInfo={pkg} />
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* The Construction Buddy Promise */}
                            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
                                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-tertiary/20 rounded-full blur-3xl animate-pulse delay-700"></div>

                                <div className="relative z-10">
                                    <div className="text-center mb-16">
                                        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">The Construction Buddy Promise</h2>
                                        <p className="text-white/60 max-w-2xl mx-auto">Commitment to excellence in every brick we lay.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {promiseItems.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ y: -5 }}
                                                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                                            >
                                                <h3 className="text-2xl font-bold text-secondary mb-3">{item.title}</h3>
                                                <p className="text-white/80 leading-relaxed">{item.description}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* CTA Section */}
                            <section className="text-center py-20 bg-gradient-brand rounded-[3rem] relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="relative z-10 px-4">
                                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Ready to Build Your Legacy?</h2>
                                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
                                        Let's lay the founation for your future. Schedule your free consultation today.
                                    </p>
                                    <Link to="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-10 py-4 bg-white text-secondary font-bold rounded-full shadow-2xl hover:shadow-black/20 transition-all"
                                        >
                                            Start Your Project
                                        </motion.button>
                                    </Link>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeConstructionPage;