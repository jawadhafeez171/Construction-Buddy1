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
        <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/interior-hero/1920/1080')" }}>
            <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl">
                    Crafting Spaces, Creating Stories
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl">
                    Bespoke interior design solutions that reflect your personality and enhance your lifestyle.
                </p>
            </div>
        </section>

        <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <div className="space-y-16">

                        {/* Packages Details Section */}
                        <section className="bg-muted p-4 sm:p-8 rounded-lg">
                            <div className="text-center mb-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Affordable Interior Packages</h2>
                                <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Transparent pricing to help you plan your dream interiors with ease.</p>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <div className="flex justify-center border-b-2 border-border">
                                    {(Object.keys(packages) as PackageKey[]).map(pkgName => (
                                        <button key={pkgName} onClick={() => setActiveTab(pkgName)} className={`px-4 sm:px-8 py-3 text-sm sm:text-base font-bold transition-colors duration-300 focus:outline-none ${activeTab === pkgName ? 'border-b-4 border-secondary text-secondary' : 'text-muted-foreground hover:text-secondary'}`}>
                                            {pkgName} INTERIORS <span className="hidden sm:inline-block"> {packages[pkgName].price}</span>
                                        </button>
                                    ))}
                                </div>
                                <div className="p-2 sm:p-8 bg-card border border-t-0 rounded-b-lg shadow-lg border-border">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                        {activePackage.features.map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-4 p-2">
                                                <feature.icon className="w-12 h-12 text-secondary flex-shrink-0" />
                                                <span className="text-lg text-card-foreground">{feature.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Why Choose Us Section */}
                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose Us For Your Interiors?</h2>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {promiseItems.map((item, index) => (
                                     <div key={index} className="flex items-start p-4 bg-card rounded-lg border border-border">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center">
                                                <item.icon className="w-8 h-8"/>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-card-foreground">{item.title}</h3>
                                            <p className="text-muted-foreground mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Areas of Expertise */}
                        <section>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Interior Design Expertise</h2>
                                <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">We specialize in transforming every corner of your home into a perfect blend of functionality and aesthetics.</p>
                            </div>
                            <div className="relative h-[450px] w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-xl border border-border">
                                {designAreas.map((area, index) => (
                                    <div
                                        key={area.name}
                                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                            index === currentExpertiseIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                        }`}
                                    >
                                        <img src={area.image} alt={area.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                                            <h3 className="text-3xl font-bold text-white mb-2">{area.name}</h3>
                                            <p className="text-white/90 text-lg">{area.description}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                    {designAreas.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentExpertiseIndex(index)}
                                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                                index === currentExpertiseIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Our Process Section */}
                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Design & Execution Process</h2>
                            <div className="relative border-l-2 border-tertiary pl-8">
                                {service.process.map((step, index) => (
                                    <div key={index} className="mb-8 relative">
                                        <div className="absolute -left-[42px] top-1 w-5 h-5 bg-tertiary rounded-full border-4 border-background"></div>
                                        <span className="text-sm font-bold text-secondary">STEP {step.step}</span>
                                        <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                                        <p className="text-muted-foreground mt-1">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-primary text-primary-foreground py-12 px-8 rounded-lg text-center">
                            <h2 className="text-3xl md:text-4xl font-bold">Ready to Redefine Your Space?</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/90">Let's collaborate to create an interior that's uniquely you. Contact us for a personalized design consultation.</p>
                            <Link to="/contact" className="mt-8 inline-block bg-secondary text-secondary-foreground font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                                Get a Free Consultation
                            </Link>
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

export default InteriorsPage;