import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SERVICES } from '../constants';
import VisualizationIcon from '../components/icons/VisualizationIcon';
import ClashDetectionIcon from '../components/icons/ClashDetectionIcon';
import CostSavingsIcon from '../components/icons/CostSavingsIcon';
import UserGroupIcon from '../components/icons/UserGroupIcon';
import SectionHeader from '../components/SectionHeader';
import { motion, useScroll, useTransform } from 'framer-motion';

const benefits = [
    { icon: VisualizationIcon, title: 'Enhanced Visualization', description: 'Walk through your project in stunning 3D before a single brick is laid. Understand spaces, layouts, and aesthetics with lifelike clarity.' },
    { icon: ClashDetectionIcon, title: 'Clash Detection', description: 'Identify and resolve conflicts between structural, electrical, and plumbing systems in the digital model, saving costly rework and delays on-site.' },
    { icon: CostSavingsIcon, title: 'Cost & Time Savings', description: 'Generate accurate cost estimates (5D BIM) and optimized construction schedules (4D BIM). Make informed decisions that keep your project on budget and on time.' },
    { icon: UserGroupIcon, title: 'Improved Collaboration', description: 'A single source of truth for all stakeholders—architects, engineers, and contractors—ensuring everyone is on the same page.' },
];

const bimServices = [
    '3D Modelling & Visualization',
    '4D Construction Sequencing (Scheduling)',
    '5D Cost Estimation & Quantity Take-offs',
    'MEP (Mechanical, Electrical, Plumbing) Coordination',
    'Clash Detection & Resolution',
    'As-Built Modelling for Facility Management'
];

const BimPage: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    const service = SERVICES.find(s => s.id === 'building-information-modelling');

    if (!service) return <div>Service not found.</div>;
    const otherServices = SERVICES.filter(s => s.id !== service.id);

    return (
        <div className="bg-background overflow-hidden">
            {/* Cinematic Hero Section */}
            <section ref={heroRef} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    {/* Tech Grid Overlay */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-20 z-10" />
                    <div className="absolute inset-0 bg-indigo-950/90 z-10 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
                        alt="Digital Construction Model"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 container mx-auto px-4 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full border border-indigo-400/30 bg-indigo-500/10 backdrop-blur-md text-xs font-semibold tracking-widest uppercase mb-6 text-indigo-300">
                            Digital Construction Twin
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6">
                            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Future</span>, <br />
                            <span className="italic">Digitally</span>
                        </h1>
                        <p className="text-lg md:text-xl text-indigo-100/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                            Leveraging Building Information Modelling (BIM) to deliver projects with unparalleled efficiency, accuracy, and collaboration.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-indigo-500/40 transition-all hover:bg-indigo-500"
                                >
                                    Discuss Your Project
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

                            {/* What is BIM? Section */}
                            <section>
                                <SectionHeader
                                    title="What is Building Information Modelling?"
                                    description={service.overview}
                                />
                            </section>

                            {/* Benefits Section */}
                            <section>
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground mb-4">The BIM Advantage</h2>
                                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Smarter construction through digital precision.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {benefits.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex flex-col p-8 bg-card rounded-3xl border border-border hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group hover:-translate-y-2"
                                        >
                                            <div className="mb-6 flex-shrink-0">
                                                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-sm">
                                                    <item.icon className="w-8 h-8" />
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Our BIM Services Section */}
                            <section>
                                <div className="bg-gradient-to-br from-indigo-950 to-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>

                                    <div className="relative z-10">
                                        <SectionHeader
                                            title="Our BIM Capabilities"
                                            description="Comprehensive digital services for the modern construction era."
                                            lightMode={true}
                                            centered={true}
                                        />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                                            {bimServices.map((bimService, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                                                >
                                                    <div className="h-3 w-3 bg-cyan-400 rounded-full mr-4 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                                                    <span className="text-lg font-medium tracking-wide">{bimService}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Our Process Section */}
                            {service.process && service.process.length > 0 && (
                                <section>
                                    <div className="bg-muted/30 rounded-[3rem] p-8 md:p-16 border border-border/50">
                                        <SectionHeader title="Integrated Workflow" description="Seamless collaboration from concept to handover." />

                                        <div className="mt-16 space-y-12 relative">
                                            {/* Central Line */}
                                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>

                                            {service.process.map((step, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                                >
                                                    {/* Card */}
                                                    <div className="w-full md:w-1/2 px-4">
                                                        <div className={`bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-lg transition-all text-left group hover:-translate-y-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                                            <div className={`inline-block p-2 rounded-lg bg-indigo-50 text-indigo-600 font-bold mb-4 font-mono text-xs tracking-wider uppercase`}>Phase {step.step}</div>
                                                            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{step.title}</h3>
                                                            <p className="text-muted-foreground">{step.description}</p>
                                                        </div>
                                                    </div>

                                                    {/* Center Node */}
                                                    <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                                    </div>

                                                    {/* Empty Space for Grid */}
                                                    <div className="w-full md:w-1/2 px-4 hidden md:block"></div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* CTA Section */}
                            <section className="text-center py-20 bg-gradient-brand rounded-[3rem] relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="relative z-10 px-4">
                                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Ready to Build with Intelligence?</h2>
                                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
                                        Embrace the future of construction. Contact us to learn how our BIM services can add immense value to your next project.
                                    </p>
                                    <Link to="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-10 py-4 bg-white text-secondary font-bold rounded-full shadow-2xl hover:shadow-black/20 transition-all"
                                        >
                                            Start Your Digital Journey
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

export default BimPage;