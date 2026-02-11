import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SERVICES } from '../constants';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import KitchenIcon from '../components/icons/KitchenIcon';
import TvUnitIcon from '../components/icons/TvUnitIcon';
import FalseCeilingIcon from '../components/icons/FalseCeilingIcon';
import WardrobeIcon from '../components/icons/WardrobeIcon';
import CrockeryUnitIcon from '../components/icons/CrockeryUnitIcon';
import StudyUnitIcon from '../components/icons/StudyUnitIcon';
import PersonalizedDesignIcon from '../components/icons/PersonalizedDesignIcon';
import QualityMaterialsIcon from '../components/icons/QualityMaterialsIcon';
import ExpertExecutionIcon from '../components/icons/ExpertExecutionIcon';
import TransparentPricingIcon from '../components/icons/TransparentPricingIcon';
import SectionHeader from '../components/SectionHeader';

type PackageKey = '2BHK' | '3BHK' | '4BHK';

const service = SERVICES.find(s => s.id === 'interiors');

const packages = {
    '2BHK': {
        price: '₹4 Lakhs*',
        subtitle: 'Essential Elegance',
        description: 'Perfect for compact homes, focusing on essential styling and functionality.',
        features: [
            { icon: KitchenIcon, name: 'Modular Kitchen' },
            { icon: WardrobeIcon, name: '2 Wardrobes' },
            { icon: TvUnitIcon, name: 'TV Unit' },
            { icon: CrockeryUnitIcon, name: 'Crockery Unit' },
            { icon: FalseCeilingIcon, name: 'Living Area False Ceiling' },
            { icon: StudyUnitIcon, name: 'Shoe Rack / Study Unit' },
        ]
    },
    '3BHK': {
        price: '₹5 Lakhs*',
        subtitle: 'Modern Comfort',
        description: 'A balanced package for growing families, offering more storage and premium finishes.',
        features: [
            { icon: KitchenIcon, name: 'Modular Kitchen (Upgraded)' },
            { icon: WardrobeIcon, name: '3 Wardrobes with Loft' },
            { icon: TvUnitIcon, name: 'TV Unit & Showcase' },
            { icon: CrockeryUnitIcon, name: 'Crockery Unit' },
            { icon: FalseCeilingIcon, name: 'Living & Dining False Ceiling' },
            { icon: StudyUnitIcon, name: 'Study Unit & Bookshelf' },
        ],
        popular: true
    },
    '4BHK': {
        price: '₹6 Lakhs*',
        subtitle: 'Luxury Living',
        description: 'Comprehensive interior solutions for larger homes, delivering luxury in every corner.',
        features: [
            { icon: KitchenIcon, name: 'Premium Modular Kitchen' },
            { icon: WardrobeIcon, name: '4 Wardrobes with Loft' },
            { icon: TvUnitIcon, name: 'Entertainment Unit' },
            { icon: CrockeryUnitIcon, name: 'Crockery Unit & Bar Area' },
            { icon: FalseCeilingIcon, name: 'Full House False Ceiling' },
            { icon: StudyUnitIcon, name: 'Dedicated Study Room' },
        ]
    }
};

const designAreas = [
    { name: 'Living Areas', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1974', description: 'Crafting comfortable and stylish living spaces for you to relax and entertain.' },
    { name: 'Modern Kitchens', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2070', description: 'Designing beautiful, efficient kitchens that are a joy to cook in.' },
    { name: 'Serene Bedrooms', image: 'https://images.unsplash.com/photo-1616594039964-40891a909d93?auto=format&fit=crop&q=80&w=2670', description: 'Creating peaceful and personal sanctuaries for rest and rejuvenation.' },
];

const promiseItems = [
    { icon: PersonalizedDesignIcon, title: 'Personalized Design', description: 'Spaces that reflect your unique personality.' },
    { icon: QualityMaterialsIcon, title: 'Premium Materials', description: 'Sourced from the finest brands for durability.' },
    { icon: ExpertExecutionIcon, title: 'Flawless Execution', description: 'Precision craftsmanship by skilled professionals.' },
    { icon: TransparentPricingIcon, title: 'Transparent Pricing', description: 'No hidden costs. Detailed, itemized quotes.' },
];

const InteriorsPage: React.FC = () => {
    const [currentExpertiseIndex, setCurrentExpertiseIndex] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    // Auto-advance slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentExpertiseIndex(prev => (prev + 1) % designAreas.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    if (!service) return <div>Service not found.</div>;
    const otherServices = SERVICES.filter(s => s.id !== service.id);

    return (
        <div className="bg-background overflow-hidden">
            {/* Cinematic Hero Section */}
            <section ref={heroRef} className="relative h-[90vh] overflow-hidden flex items-center justify-center">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
                        alt="Luxury Interior"
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
                            Premium Interiors
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-6">
                            Crafting <span className="italic text-secondary">Soulful</span> Spaces
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                            Where aesthetic vision meets functional excellence. We design homes that tell your unique story.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all"
                                >
                                    Book Consultation
                                </motion.button>
                            </Link>
                            <Link to="#packages">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full text-lg hover:bg-white/20 transition-all"
                                >
                                    View Packages
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

            {/* Main Content Container */}
            <div className="container mx-auto px-4 pt-24 pb-12">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Primary Content Area */}
                    <div className="lg:w-full">

                        {/* Packages Section */}
                        <section id="packages" className="mb-32">
                            <SectionHeader
                                title="Curated Interior Packages"
                                description="Transparent pricing tailored to your home's needs. Choose a plan that fits your vision."
                            />

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                                {(Object.entries(packages) as [PackageKey, typeof packages['2BHK']][]).map(([key, pkg], idx) => (
                                    <motion.div
                                        key={key}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className={`relative group rounded-3xl p-1 ${pkg.popular ? 'bg-gradient-to-br from-secondary via-tertiary to-secondary' : 'bg-border/50'}`}
                                    >
                                        <div className="h-full bg-card rounded-[22px] p-8 flex flex-col relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                                            {pkg.popular && (
                                                <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                                                    Best Value
                                                </div>
                                            )}

                                            <div className="mb-6">
                                                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">{key} Package</h3>
                                                <div className="text-3xl font-serif font-bold text-foreground mb-2">{pkg.price}</div>
                                                <div className="text-secondary font-medium text-sm">{pkg.subtitle}</div>
                                            </div>

                                            <div className="h-px w-full bg-border/50 mb-6" />

                                            <ul className="space-y-4 mb-8 flex-grow">
                                                {pkg.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className="mt-1 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 text-secondary">
                                                            <feature.icon className="w-3 h-3" />
                                                        </div>
                                                        <span className="text-sm text-foreground/80">{feature.name}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <Link to="/contact" className="w-full">
                                                <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${pkg.popular ? 'bg-secondary text-white shadow-lg hover:shadow-secondary/25' : 'bg-muted text-foreground hover:bg-muted/80'}`}>
                                                    Get Quote
                                                </button>
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Design Expertise Slider */}
                        <section className="mb-32">
                            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={currentExpertiseIndex}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.7 }}
                                        className="absolute inset-0"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                                        <img
                                            src={designAreas[currentExpertiseIndex].image}
                                            alt={designAreas[currentExpertiseIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 p-12 z-20 max-w-2xl">
                                            <motion.h3
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-4xl md:text-5xl font-serif text-white mb-4"
                                            >
                                                {designAreas[currentExpertiseIndex].name}
                                            </motion.h3>
                                            <motion.p
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.1 }}
                                                className="text-white/80 text-lg leading-relaxed"
                                            >
                                                {designAreas[currentExpertiseIndex].description}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Slider Navigation */}
                                <div className="absolute bottom-12 right-12 z-20 flex gap-4">
                                    <button
                                        onClick={() => setCurrentExpertiseIndex(prev => (prev - 1 + designAreas.length) % designAreas.length)}
                                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                                    >
                                        ←
                                    </button>
                                    <button
                                        onClick={() => setCurrentExpertiseIndex(prev => (prev + 1) % designAreas.length)}
                                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                                    >
                                        →
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Why Choose Us - Bento Grid Style */}
                        <section className="mb-32">
                            <SectionHeader title="The Construction Buddy Edge" description="Why homeowners across Bangalore trust us with their interiors." />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                                {promiseItems.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-card border border-border/50 p-8 rounded-2xl hover:bg-secondary/5 transition-colors group"
                                    >
                                        <div className="w-14 h-14 bg-background border border-border rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-secondary/30 transition-all shadow-sm">
                                            <div className="text-secondary">
                                                <item.icon className="w-7 h-7" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Process Section - Vertical Visual Path */}
                        <section className="mb-32">
                            <div className="bg-muted/30 rounded-3xl p-8 md:p-16 border border-border/50">
                                <SectionHeader title="Seamless Execution Process" description="From concept to handover, we handle everything." />

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
                                                    <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all">
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

                        {/* CTA */}
                        <section className="text-center py-20 bg-gradient-brand rounded-3xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="relative z-10 px-4">
                                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Ready to Transform Your Home?</h2>
                                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                                    Let's create a space that inspires you every day. Schedule your free consultation now.
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
    );
};

export default InteriorsPage;