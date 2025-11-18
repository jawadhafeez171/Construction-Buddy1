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
            <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/home-construct-hero/1920/1080')" }}>
                <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl">
                        Building Your Dream Home, Brick by Brick
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl text-white/90">
                        A home is more than a structure; it's a foundation for your future. We build homes with passion, precision, and a personal touch.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <div className="space-y-16">
                            
                            {/* What We Build Section */}
                             <section>
                                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Your Vision, Our Foundation</h2>
                                <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-10">{service.overview}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {serviceItems.map((item, index) => (
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

                            {/* Our Process Section */}
                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Turnkey Construction Process</h2>
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

                            {/* Packages Section */}
                            <section className="bg-muted p-8 rounded-lg">
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
                             <section>
                                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">The Construction Buddy Promise</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {promiseItems.map((item, index) => (
                                        <div key={index} className="bg-card p-6 rounded-lg shadow-md border border-border">
                                            <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                             {/* CTA Section */}
                            <section className="bg-primary text-primary-foreground py-12 px-8 rounded-lg text-center">
                                <h2 className="text-3xl md:text-4xl font-bold">Ready to build the home you've always imagined?</h2>
                                <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/90">Let's lay the first stone together. Contact us for a detailed discussion and a transparent quote.</p>
                                <Link to="/contact" className="mt-8 inline-block bg-secondary text-secondary-foreground font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                                    Schedule a Free Consultation
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

export default HomeConstructionPage;