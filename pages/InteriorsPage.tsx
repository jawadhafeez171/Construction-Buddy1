import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SERVICES } from '../constants';

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

type PackageKey = '2BHK' | '3BHK' | '4BHK';

const service = SERVICES.find(s => s.id === 'interiors');

const packages = {
    '2BHK': {
        price: 'Rs. 4 Lakhs*',
        features: [
            { icon: KitchenIcon, name: 'Kitchen - Modular' },
            { icon: WardrobeIcon, name: 'Bedroom - 2 wardrobes' },
            { icon: TvUnitIcon, name: 'Living Room - TV Unit' },
            { icon: CrockeryUnitIcon, name: 'Dining - Crockery Unit' },
            { icon: FalseCeilingIcon, name: 'Living Area - False Ceiling' },
            { icon: StudyUnitIcon, name: 'Study unit (or) Shoe rack' },
        ]
    },
    '3BHK': {
        price: 'Rs. 5 Lakhs*',
        features: [
            { icon: KitchenIcon, name: 'Kitchen - Modular (Upgraded)' },
            { icon: WardrobeIcon, name: 'Bedroom - 3 wardrobes with loft' },
            { icon: TvUnitIcon, name: 'Living Room - TV Unit & Showcase' },
            { icon: CrockeryUnitIcon, name: 'Dining - Crockery Unit' },
            { icon: FalseCeilingIcon, name: 'Living & Dining - False Ceiling' },
            { icon: StudyUnitIcon, name: 'Study unit & Bookshelf' },
        ]
    },
    '4BHK': {
        price: 'Rs. 6 Lakhs*',
        features: [
            { icon: KitchenIcon, name: 'Premium Modular Kitchen' },
            { icon: WardrobeIcon, name: 'Bedroom - 4 wardrobes with loft' },
            { icon: TvUnitIcon, name: 'Living Room - Entertainment Unit' },
            { icon: CrockeryUnitIcon, name: 'Dining - Crockery Unit with Bar area' },
            { icon: FalseCeilingIcon, name: 'Full House False Ceiling Design' },
            { icon: StudyUnitIcon, name: 'Dedicated Study Room Interior' },
        ]
    }
};

const designAreas = [
    { name: 'Exquisite Living Areas', image: 'https://picsum.photos/seed/living-room-interior/800/600', description: 'Crafting comfortable and stylish living spaces for you to relax and entertain.' },
    { name: 'Ergonomic Modular Kitchens', image: 'https://picsum.photos/seed/kitchen-interior/800/600', description: 'Designing beautiful, efficient kitchens that are a joy to cook in.' },
    { name: 'Serene Bedroom Designs', image: 'https://picsum.photos/seed/bedroom-interior/800/600', description: 'Creating peaceful and personal sanctuaries for rest and rejuvenation.' },
];

const promiseItems = [
    { icon: PersonalizedDesignIcon, title: 'Personalized Design', description: 'We don’t just design rooms; we craft experiences. Our team works closely with you to create a space that is a true reflection of your personality and lifestyle.' },
    { icon: QualityMaterialsIcon, title: 'Uncompromising Quality', description: 'From laminates and hardware to fabrics and finishes, we source only the finest materials to ensure a beautiful and durable result.' },
    { icon: ExpertExecutionIcon, title: 'Flawless Execution', description: 'Our skilled craftsmen and project managers ensure every detail of the design is brought to life with precision and care.' },
    { icon: TransparentPricingIcon, title: 'Transparent Pricing', description: 'Our detailed, itemized quotes mean no hidden costs or surprises. You know exactly what you’re paying for from day one.' },
];


const InteriorsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<PackageKey>('2BHK');
    const [currentExpertiseIndex, setCurrentExpertiseIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentExpertiseIndex(prevIndex => (prevIndex + 1) % designAreas.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, []);

    if (!service) return <div>Service not found.</div>;
    const otherServices = SERVICES.filter(s => s.id !== service.id);
    const activePackage = packages[activeTab];

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/interior-hero/1920/1080')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
                    <span className="bg-secondary/20 text-secondary border border-secondary/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm animate-fadeInUp">
                        Premium Interiors
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight animate-fadeInUp delay-100">
                        Crafting Spaces, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">Creating Stories</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl max-w-2xl text-white/80 animate-fadeInUp delay-200">
                        Bespoke interior design solutions that reflect your personality and enhance your lifestyle.
                    </p>
                    <div className="mt-8 animate-fadeInUp delay-300">
                        <Link to="/contact" className="bg-gradient-brand text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 inline-block">
                            Book Consultation
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <div className="space-y-20">

                            {/* Packages Details Section */}
                            <section className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-tertiary rounded-2xl opacity-20 blur transition duration-1000 group-hover:opacity-40"></div>
                                <div className="relative bg-card p-6 sm:p-10 rounded-xl border border-border">
                                    <div className="text-center mb-10">
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Affordable Interior Packages</h2>
                                        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Transparent pricing to help you plan your dream interiors with ease.</p>
                                    </div>

                                    <div className="max-w-4xl mx-auto">
                                        <div className="flex justify-center mb-8 gap-2 bg-muted p-1 rounded-full inline-flex mx-auto w-full sm:w-auto overflow-x-auto">
                                            {(Object.keys(packages) as PackageKey[]).map(pkgName => (
                                                <button
                                                    key={pkgName}
                                                    onClick={() => setActiveTab(pkgName)}
                                                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap focus:outline-none ${activeTab === pkgName
                                                            ? 'bg-white text-secondary shadow-md'
                                                            : 'text-muted-foreground hover:bg-white/50'
                                                        }`}
                                                >
                                                    {pkgName} <span className="hidden sm:inline-block ml-1 opacity-75">{packages[pkgName].price}</span>
                                                </button>
                                            ))}
                                        </div>

                                        <div className="animate-fadeIn">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {activePackage.features.map((feature, index) => (
                                                    <div key={index} className="flex items-center space-x-4 p-4 bg-background rounded-lg border border-border hover:border-secondary/30 transition-colors">
                                                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 text-secondary">
                                                            <feature.icon className="w-6 h-6" />
                                                        </div>
                                                        <span className="text-base font-medium text-foreground">{feature.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Why Choose Us Section */}
                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Why Choose Us For Your Interiors?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {promiseItems.map((item, index) => (
                                        <div key={index} className="flex items-start p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                                            <div className="flex-shrink-0 mr-5">
                                                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-tertiary text-white rounded-lg flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform">
                                                    <item.icon className="w-7 h-7" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Areas of Expertise */}
                            <section>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Interior Design Expertise</h2>
                                    <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">We specialize in transforming every corner of your home into a perfect blend of functionality and aesthetics.</p>
                                </div>
                                <div className="relative h-[500px] w-full mx-auto overflow-hidden rounded-2xl shadow-2xl">
                                    {designAreas.map((area, index) => (
                                        <div
                                            key={area.name}
                                            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentExpertiseIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                                                }`}
                                        >
                                            <img src={area.image} alt={area.name} className="w-full h-full object-cover" />
                                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-10 flex flex-col justify-end min-h-[50%]">
                                                <h3 className="text-3xl font-bold text-white mb-3 translate-y-2 transform transition-transform duration-700 delay-100">{area.name}</h3>
                                                <p className="text-white/90 text-lg translate-y-2 transform transition-transform duration-700 delay-200 opacity-0 group-hover:opacity-100">{area.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                                        {designAreas.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentExpertiseIndex(index)}
                                                className={`h-2 rounded-full transition-all duration-300 ${index === currentExpertiseIndex ? 'w-8 bg-secondary' : 'w-2 bg-white/50 hover:bg-white/80'
                                                    }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Our Process Section */}
                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Design & Execution Process</h2>
                                <div className="relative border-l-2 border-border ml-4 pl-10 space-y-12">
                                    {service.process.map((step, index) => (
                                        <div key={index} className="relative group">
                                            <div className="absolute -left-[54px] top-0 w-8 h-8 bg-background border-2 border-secondary rounded-full flex items-center justify-center font-bold text-xs text-secondary z-10 group-hover:scale-110 transition-transform">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-1 block">Phase {step.step}</span>
                                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">{step.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* CTA Section */}
                            <section className="bg-gradient-brand text-white py-14 px-8 rounded-2xl text-center shadow-xl">
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Redefine Your Space?</h2>
                                <p className="max-w-2xl mx-auto text-white/90 text-lg mb-8">Let's collaborate to create an interior that's uniquely you. Contact us for a personalized design consultation today.</p>
                                <Link to="/contact" className="inline-block bg-white text-secondary font-bold py-4 px-10 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md">
                                    Get a Free Consultation
                                </Link>
                            </section>

                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3">
                        <div className="sticky top-36 space-y-8">
                            {/* Service Navigation */}
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

                            {/* Quick Contact Widget */}
                            <div className="bg-muted/50 p-6 rounded-xl border border-border">
                                <h3 className="text-lg font-bold text-foreground mb-4">Need Expert Advice?</h3>
                                <p className="text-sm text-muted-foreground mb-6">Our design experts are here to help you choose the right package.</p>
                                <Link to="/contact" className="block w-full text-center border-2 border-secondary text-secondary font-bold py-3 rounded-lg hover:bg-secondary hover:text-white transition-all">
                                    Contact Expert
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default InteriorsPage;