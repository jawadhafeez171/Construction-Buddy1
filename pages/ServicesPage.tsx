
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import ServiceStaticIcon from '../components/ServiceStaticIcon';

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 bg-accent text-accent-foreground overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fadeInUp">
                        Our <span className="text-gradient-brand">Expertise</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeInUp delay-100">
                        Comprehensive construction and design solutions tailored to your unique needs.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <Link
                            key={service.id}
                            to={service.path}
                            className="group relative flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Image Area */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <div className="bg-secondary/90 text-white p-2 rounded-lg inline-block mb-2 backdrop-blur-sm">
                                        <ServiceStaticIcon serviceId={service.id} className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground line-clamp-3 mb-6 flex-grow">
                                    {service.overview}
                                </p>

                                <div className="flex items-center text-secondary font-semibold group/btn">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
