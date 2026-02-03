import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SERVICES, PACKAGES } from '../constants';
import VillaIcon from '../components/icons/VillaIcon';
import GatedCommunityIcon from '../components/icons/GatedCommunityIcon';
import RenovationIcon from '../components/icons/RenovationIcon';
import DuplexIcon from '../components/icons/DuplexIcon';
import PackageCard from '../components/PackageCard';

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
    if (!service) return <div>Service not found.</div>;
    const otherServices = SERVICES.filter(s => s.id !== service.id);

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/home-construct-hero/1920/1080')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
                    <span className="bg-secondary/20 text-secondary border border-secondary/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm animate-fadeInUp">
                        Premium Construction
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight animate-fadeInUp delay-100">
                        Building Your Dream Home, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">Brick by Brick</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl max-w-2xl text-white/80 animate-fadeInUp delay-200">
                        A home is more than a structure; it's a foundation for your future. We build homes with passion, precision, and a personal touch.
                    </p>
                    <div className="mt-8 animate-fadeInUp delay-300">
                        <Link to="/contact" className="bg-gradient-brand text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 inline-block">
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <div className="space-y-20">

                            {/* What We Build Section */}
                            <section>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-foreground mb-4">Your Vision, Our Foundation</h2>
                                    <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">{service.overview}</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {serviceItems.map((item, index) => (
                                        <div key={index} className="flex items-start p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                                            <div className="flex-shrink-0 mr-5">
                                                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-tertiary text-white rounded-lg flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform">
                                                    <item.icon className="w-7 h-7" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">{item.title}</h3>
                                                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Our Process Section */}
                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Turnkey Construction Process</h2>
                                <div className="relative border-l-2 border-border ml-4 pl-10 space-y-12">
                                    {service.process.map((step, index) => (
                                        <div key={index} className="relative group">
                                            <div className="absolute -left-[54px] top-0 w-8 h-8 bg-background border-2 border-secondary rounded-full flex items-center justify-center font-bold text-xs text-secondary z-10 group-hover:scale-110 transition-transform">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-1 block">Step {step.step}</span>
                                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">{step.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Packages Section */}
                            <section className="bg-muted/30 p-8 rounded-2xl border border-border/50">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Home Construction Packages</h2>
                                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Transparent pricing with no hidden costs. Choose a package that aligns with your vision and budget.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {PACKAGES.map(pkg => (
                                        <PackageCard key={pkg.name} packageInfo={pkg} />
                                    ))}
                                </div>
                            </section>

                            {/* The Construction Buddy Promise */}
                            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold mb-8 text-center">The Construction Buddy Promise</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {promiseItems.map((item, index) => (
                                            <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                                <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                                                <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* CTA Section */}
                            <section className="bg-gradient-brand text-white py-14 px-8 rounded-2xl text-center shadow-xl">
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to build the home you've always imagined?</h2>
                                <p className="max-w-2xl mx-auto text-white/90 text-lg mb-8">Let's lay the first stone together. Contact us for a detailed discussion and a transparent quote.</p>
                                <Link to="/contact" className="inline-block bg-white text-secondary font-bold py-4 px-10 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md">
                                    Schedule a Free Consultation
                                </Link>
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

export default HomeConstructionPage;