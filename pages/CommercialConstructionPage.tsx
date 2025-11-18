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
            <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/comm-construct-hero/1920/1080')" }}>
                <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl">
                        Constructing Spaces that Drive Business Forward
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl text-white/90">
                        We deliver high-quality commercial construction projects that are functional, durable, and designed to support your success.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <div className="space-y-16">
                            
                            {/* Our Commercial Expertise Section */}
                             <section>
                                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Building the Backbone of Your Business</h2>
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
                                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Streamlined Commercial Process</h2>
                                <div className="relative border-l-2 border-tertiary pl-8">
                                    {service.process.map((step, index) => (
                                        <div key={index} className="mb-8 relative">
                                            <div className="absolute -left-[42px] top-1 w-5 h-5 bg-tertiary rounded-full border-4 border-background"></div>
                                            <span className="text-sm font-bold text-secondary">PHASE {step.step}</span>
                                            <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                                            <p className="text-muted-foreground mt-1">{step.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Why Partner With Us */}
                             <section>
                                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Partner With Us for Your Commercial Project?</h2>
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
                                <h2 className="text-3xl md:text-4xl font-bold">Elevate Your Business with a Space Built for Success.</h2>
                                <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/90">Let's build a commercial property that enhances your brand and accelerates your growth.</p>
                                <Link to="/contact" className="mt-8 inline-block bg-secondary text-secondary-foreground font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                                    Discuss Your Commercial Project
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

export default CommercialConstructionPage;