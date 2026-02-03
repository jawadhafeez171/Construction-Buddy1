import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SERVICES } from '../constants';
import OfficeIcon from '../components/icons/OfficeIcon';
import RetailIcon from '../components/icons/RetailIcon';
import WarehouseIcon from '../components/icons/WarehouseIcon';
import HospitalityIcon from '../components/icons/HospitalityIcon';


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
    if (!service) return <div>Service not found.</div>;
    const otherServices = SERVICES.filter(s => s.id !== service.id);

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/comm-construct-hero/1920/1080')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
                    <span className="bg-secondary/20 text-secondary border border-secondary/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm animate-fadeInUp">
                        Commercial Solutions
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight animate-fadeInUp delay-100">
                        Constructing Spaces that <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">Drive Business Forward</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl max-w-2xl text-white/80 animate-fadeInUp delay-200">
                        We deliver high-quality commercial construction projects that are functional, durable, and designed to support your success.
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

                            {/* Our Commercial Expertise Section */}
                            <section>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-foreground mb-4">Building the Backbone of Your Business</h2>
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
                                <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Streamlined Commercial Process</h2>
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

                            {/* Why Partner With Us */}
                            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold mb-8 text-center">Why Partner With Us?</h2>
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
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Elevate Your Business with a Space Built for Success.</h2>
                                <p className="max-w-2xl mx-auto text-white/90 text-lg mb-8">Let's build a commercial property that enhances your brand and accelerates your growth.</p>
                                <Link to="/contact" className="inline-block bg-white text-secondary font-bold py-4 px-10 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md">
                                    Discuss Your Commercial Project
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

export default CommercialConstructionPage;