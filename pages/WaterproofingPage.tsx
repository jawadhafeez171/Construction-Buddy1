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
            <section className="relative h-[50vh] bg-gradient-to-br from-blue-900 to-gray-800">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl">
                        Protect Your Investment from the Top Down
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl text-white/90">
                        Uncompromising waterproofing solutions for a secure, healthy, and damp-free property.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <div className="space-y-16">
                            
                            {/* Why it's crucial Section */}
                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Waterproofing is a Non-Negotiable Necessity</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {benefitItems.map((item, index) => (
                                        <div key={index} className="bg-card p-6 rounded-lg shadow-md border border-border">
                                            <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Our Services Section */}
                             <section>
                                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Comprehensive Waterproofing Services</h2>
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
                            {service.process && service.process.length > 0 && (
                                <section>
                                    <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Scientific 4-Step Process</h2>
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
                            )}
                            
                             {/* Materials Section */}
                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Advanced Technology & Materials</h2>
                                <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">We don&apos;t believe in one-size-fits-all solutions. We use a range of high-performance, industry-leading materials to ensure the most effective and durable protection for your specific needs.</p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <div className="bg-muted text-muted-foreground font-semibold px-4 py-2 rounded-full">Advanced Polymer Membranes</div>
                                    <div className="bg-muted text-muted-foreground font-semibold px-4 py-2 rounded-full">Crystalline Coatings</div>
                                    <div className="bg-muted text-muted-foreground font-semibold px-4 py-2 rounded-full">Epoxy & PU Grouting</div>
                                    <div className="bg-muted text-muted-foreground font-semibold px-4 py-2 rounded-full">High-Performance Sealants</div>
                                </div>
                            </section>

                             {/* CTA Section */}
                            <section className="bg-primary text-primary-foreground py-12 px-8 rounded-lg text-center">
                                <h2 className="text-3xl md:text-4xl font-bold">Don't Wait for the Drip.</h2>
                                <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/90">A small leak today can be a major expense tomorrow. Secure your property now.</p>
                                <Link to="/contact" className="mt-8 inline-block bg-secondary text-secondary-foreground font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                                    Get a Free Inspection & Quote
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

export default WaterproofingPage;
