import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SERVICES } from '../constants';
import BasementIcon from '../components/icons/BasementIcon';
import RoofIcon from '../components/icons/RoofIcon';
import BathroomIcon from '../components/icons/BathroomIcon';
import WallIcon from '../components/icons/WallIcon';

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
    const service = SERVICES.find(s => s.id === 'waterproofing-solutions');

    if (!service) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold">Service not found.</h1>
                <p className="mt-4 text-muted-foreground">The requested service could not be found.</p>
            </div>
        );
    }
    const otherServices = SERVICES.filter(s => s.id !== service.id);

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] bg-cover bg-center overflow-hidden" style={{ backgroundImage: "linear-gradient(to bottom right, #0f172a, #1e293b)" }}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
                    <span className="bg-secondary/20 text-secondary border border-secondary/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm animate-fadeInUp">
                        Advanced Protection
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight animate-fadeInUp delay-100">
                        Protect Your Investment <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">From the Top Down</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl max-w-2xl text-white/80 animate-fadeInUp delay-200">
                        Uncompromising waterproofing solutions for a secure, healthy, and damp-free property.
                    </p>
                    <div className="mt-8 animate-fadeInUp delay-300">
                        <Link to="/contact" className="bg-gradient-brand text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 inline-block">
                            Get a Free Inspection
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <div className="space-y-20">

                            {/* Why it's crucial Section */}
                            <section>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-foreground mb-4">Why Waterproofing is a Necessity</h2>
                                    <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">Water damage is silent but destructive. Here is why you need professional protection.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {benefitItems.map((item, index) => (
                                        <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                            <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Our Services Section */}
                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Comprehensive Waterproofing Services</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {serviceItems.map((item, index) => (
                                        <div key={index} className="flex items-start p-6 bg-card rounded-xl border border-border hover:border-secondary/30 transition-colors group">
                                            <div className="flex-shrink-0 mr-5">
                                                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
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


                            {/* Our Process Section */}
                            {service.process && service.process.length > 0 && (
                                <section>
                                    <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Scientific 4-Step Process</h2>
                                    <div className="relative border-l-2 border-border ml-4 pl-10 space-y-12">
                                        {service.process.map((step, index) => (
                                            <div key={index} className="relative group">
                                                <div className="absolute -left-[54px] top-0 w-8 h-8 bg-background border-2 border-secondary rounded-full flex items-center justify-center font-bold text-xs text-secondary z-10 group-hover:scale-110 transition-transform shadow-sm">
                                                    {index + 1}
                                                </div>
                                                <div className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-md transition-shadow">
                                                    <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">Step {step.step}</span>
                                                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                                                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Materials Section */}
                            <section className="bg-muted/30 p-10 rounded-2xl border border-border/50 text-center">
                                <h2 className="text-3xl font-bold text-foreground mb-6">Advanced Technology & Materials</h2>
                                <p className="text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">We don&apos;t believe in one-size-fits-all solutions. We use a range of high-performance, industry-leading materials to ensure the most effective and durable protection.</p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <div className="bg-background border border-border text-foreground font-semibold px-6 py-3 rounded-full shadow-sm hover:border-secondary hover:text-secondary transition-colors">Advanced Polymer Membranes</div>
                                    <div className="bg-background border border-border text-foreground font-semibold px-6 py-3 rounded-full shadow-sm hover:border-secondary hover:text-secondary transition-colors">Crystalline Coatings</div>
                                    <div className="bg-background border border-border text-foreground font-semibold px-6 py-3 rounded-full shadow-sm hover:border-secondary hover:text-secondary transition-colors">Epoxy & PU Grouting</div>
                                    <div className="bg-background border border-border text-foreground font-semibold px-6 py-3 rounded-full shadow-sm hover:border-secondary hover:text-secondary transition-colors">High-Performance Sealants</div>
                                </div>
                            </section>

                            {/* CTA Section */}
                            <section className="bg-gradient-brand text-white py-14 px-8 rounded-2xl text-center shadow-xl">
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Don't Wait for the Drip.</h2>
                                <p className="max-w-2xl mx-auto text-white/90 text-lg mb-8">A small leak today can be a major expense tomorrow. Secure your property now.</p>
                                <Link to="/contact" className="inline-block bg-white text-secondary font-bold py-4 px-10 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md">
                                    Get a Free Inspection & Quote
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

export default WaterproofingPage;
