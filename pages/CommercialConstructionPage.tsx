import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SERVICES } from '../constants';
import OfficeIcon from '../components/icons/OfficeIcon';
import RetailIcon from '../components/icons/RetailIcon';
import WarehouseIcon from '../components/icons/WarehouseIcon';
import HospitalityIcon from '../components/icons/HospitalityIcon';
import SectionHeader from '../components/SectionHeader';
import { motion, useScroll, useTransform } from 'framer-motion';

const service = SERVICES.find(s => s.id === 'commercial-construction');

const serviceItems = [
    { icon: OfficeIcon, title: 'Corporate Offices & IT Parks', description: 'Building modern, efficient, and inspiring workspaces that foster productivity and collaboration.' },
    { icon: RetailIcon, title: 'Retail Stores & Showrooms', description: 'Creating attractive and functional retail environments that enhance customer experience and drive sales.' },
    { icon: WarehouseIcon, title: 'Warehouses & Industrial Facilities', description: 'Constructing robust, large-scale facilities optimized for logistics, manufacturing, and storage.' },
    { icon: HospitalityIcon, title: 'Hospitality & Healthcare', description: 'Specialized construction for hotels, restaurants, and clinics, focusing on guest comfort and operational efficiency.' },
];

const promiseItems = [
    { title: 'Strategic Project Management', description: 'Our expert planning and execution ensure your project stays on schedule and within budget.' },
    { title: 'Regulatory Compliance', description: 'We navigate all regulations and permits, ensuring a smooth and compliant construction process.' },
    { title: 'Scalability & Future-Proofing', description: 'We build with the future in mind, creating spaces that can adapt to your business\'s evolving needs.' },
    { title: 'Minimized Business Disruption', description: 'For renovations or expansions, we work efficiently to minimize impact on your ongoing operations.' },
];


const CommercialConstructionPage: React.FC = () => {
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
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="High Rise Commercial Construction"
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
                            Scalable Commercial Solutions
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-6">
                            Constructing <span className="italic text-secondary">Success</span>, <br />
                            One Project at a Time
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                            We deliver high-quality commercial spaces that are functional, durable, and designed to accelerate your business growth.
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
                            <Link to="#expertise">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full text-lg hover:bg-white/20 transition-all"
                                >
                                    Our Expertise
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

                            {/* Our Commercial Expertise Section */}
                            <section id="expertise">
                                <SectionHeader
                                    title="Building the Backbone of Your Business"
                                    description={service.overview}
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                    {serviceItems.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex flex-col p-8 bg-card rounded-3xl border border-border/50 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 transition-all duration-300 group"
                                        >
                                            <div className="mb-6 self-start">
                                                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-tertiary text-white rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-secondary/20">
                                                    <item.icon className="w-8 h-8" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">{item.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Why Partner With Us */}
                            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
                                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-tertiary/20 rounded-full blur-3xl animate-pulse delay-700"></div>

                                <div className="relative z-10">
                                    <div className="text-center mb-16">
                                        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Why Major Brands Trust Us</h2>
                                        <p className="text-white/60 max-w-2xl mx-auto">Scalability, reliability, and precision for every commercial venture.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {promiseItems.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ x: 5 }}
                                                className="bg-white/5 p-8 rounded-2xl border-l-4 border-secondary hover:bg-white/10 transition-colors backdrop-blur-sm"
                                            >
                                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Our Process Section */}
                            <section>
                                <div className="bg-muted/30 rounded-[3rem] p-8 md:p-16 border border-border/50">
                                    <SectionHeader title="Streamlined Commercial Process" description="Efficiency at every stage to minimize downtime." />

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
                                                            P{index + 1}
                                                        </div>
                                                    </div>

                                                    <div className={`md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                                        <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all">
                                                            <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">Phase {step.step}</h4>
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

                            {/* CTA Section */}
                            <section className="text-center py-20 bg-gradient-brand rounded-[3rem] relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="relative z-10 px-4">
                                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Scale Your Infrastructure</h2>
                                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
                                        Partner with us for commercial projects that stand out. Get a consultation today.
                                    </p>
                                    <Link to="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-10 py-4 bg-white text-secondary font-bold rounded-full shadow-2xl hover:shadow-black/20 transition-all"
                                        >
                                            Discuss Your Project
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

export default CommercialConstructionPage;