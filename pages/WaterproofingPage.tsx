import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SERVICES } from '../constants';
import BasementIcon from '../components/icons/BasementIcon';
import RoofIcon from '../components/icons/RoofIcon';
import BathroomIcon from '../components/icons/BathroomIcon';
import WallIcon from '../components/icons/WallIcon';
import SectionHeader from '../components/SectionHeader';
import { motion, useScroll, useTransform } from 'framer-motion';

const benefitItems = [
    { title: 'Prevent Structural Damage', description: "Protect your building's foundation and structural steel from the corrosive effects of water." },
    { title: 'Protect Health', description: 'Eliminate dampness that leads to unhealthy mold, mildew, and allergens.' },
    { title: 'Increase Property Value', description: 'A dry, well-maintained property commands a higher value and is easier to sell.' },
    { title: 'Peace of Mind', description: 'Enjoy the monsoon season without the worry of leaks, seepage, or damp walls.' },
];

const serviceItems = [
    { icon: BasementIcon, title: 'Basement & Foundation', description: 'Comprehensive solutions to prevent water seepage and dampness from the ground up, ensuring a dry and usable lower level.' },
    { icon: RoofIcon, title: 'Terrace & Roof', description: 'Application of durable, weather-resistant membranes to protect your roof from leaks and heat.' },
    { icon: BathroomIcon, title: 'Bathroom & Wet Areas', description: 'Expert sealing of bathrooms, kitchens, and balconies to prevent leaks to adjacent rooms and floors below.' },
    { icon: WallIcon, title: 'Exterior & Interior Walls', description: 'Advanced coatings that form a protective barrier against driving rain and prevent internal damp patches.' },
];

const WaterproofingPage: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    const service = SERVICES.find(s => s.id === 'waterproofing-solutions');
    if (!service) return <div>Service not found.</div>;

    const otherServices = SERVICES.filter(s => s.id !== service.id);

    return (
        <div className="bg-background overflow-hidden">
            {/* Cinematic Hero Section */}
            <section ref={heroRef} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-cyan-950/80 z-10 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1518112166165-901f7bb56e05?q=80&w=2070&auto=format&fit=crop"
                        alt="Water Droplets Protection"
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
                            Advanced Hydro-Protection
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6">
                            Protect Your <br />
                            <span className="italic text-cyan-400">Sanctuary</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                            Uncompromising waterproofing solutions for a secure, healthy, and damp-free property.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-cyan-600 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-cyan-500/30 transition-all hover:bg-cyan-500"
                                >
                                    Get a Free Inspection
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

                            {/* Why it's crucial Section */}
                            <section>
                                <SectionHeader
                                    title="Why Waterproofing is a Necessity"
                                    description="Water damage is silent but destructive. Here is why you need professional protection."
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                    {benefitItems.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-card p-8 rounded-3xl shadow-sm border border-border hover:shadow-xl hover:bg-secondary/5 transition-all duration-300 group"
                                        >
                                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan-600 transition-colors">{item.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Our Services Section */}
                            <section>
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground mb-4">Comprehensive Solutions</h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Covering every corner of your property.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {serviceItems.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex flex-col sm:flex-row items-center sm:items-start p-8 bg-card rounded-2xl border border-border hover:border-cyan-500/50 hover:shadow-lg transition-all group text-center sm:text-left"
                                        >
                                            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                                                <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-all transform group-hover:rotate-12">
                                                    <item.icon className="w-8 h-8" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-cyan-600 transition-colors">{item.title}</h3>
                                                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Our Process Section */}
                            {service.process && service.process.length > 0 && (
                                <section>
                                    <div className="bg-muted/30 rounded-[3rem] p-8 md:p-16 border border-border/50">
                                        <SectionHeader title="Our Scientific Process" description="A systematic approach to complete sealing." />

                                        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
                                            {service.process.map((step, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.15 }}
                                                    className="relative group"
                                                >
                                                    <div className="bg-card p-6 rounded-2xl border border-border/50 h-full hover:shadow-md transition-all hover:-translate-y-2">
                                                        <div className="absolute -top-4 -right-4 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg z-10">
                                                            {index + 1}
                                                        </div>
                                                        <h3 className="text-lg font-bold text-foreground mb-3 mt-2 group-hover:text-cyan-600 transition-colors">{step.title}</h3>
                                                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* Materials Section */}
                            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-12 rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="relative z-10 w-full">
                                    <h2 className="text-3xl font-bold mb-8">Advanced Technology & Materials</h2>
                                    <p className="text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed text-lg">
                                        We use industry-leading materials for durable protection.
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        {['Advanced Polymer Membranes', 'Crystalline Coatings', 'Epoxy & PU Grouting', 'High-Performance Sealants'].map((mat, idx) => (
                                            <span key={idx} className="px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-bold tracking-wide">
                                                {mat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* CTA Section */}
                            <section className="text-center py-20 bg-gradient-brand rounded-[3rem] relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="relative z-10 px-4">
                                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Don't Wait for the Drip.</h2>
                                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
                                        A small leak today can be a major expense tomorrow. Secure your property now.
                                    </p>
                                    <Link to="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-10 py-4 bg-white text-secondary font-bold rounded-full shadow-2xl hover:shadow-black/20 transition-all"
                                        >
                                            Get Free Inspection
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

export default WaterproofingPage;
