import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SERVICES } from '../constants';
import VisualizationIcon from '../components/icons/VisualizationIcon';
import ClashDetectionIcon from '../components/icons/ClashDetectionIcon';
import CostSavingsIcon from '../components/icons/CostSavingsIcon';
import UserGroupIcon from '../components/icons/UserGroupIcon';

const benefits = [
    { icon: VisualizationIcon, title: 'Enhanced Visualization', description: 'Walk through your project in stunning 3D before a single brick is laid. Understand spaces, layouts, and aesthetics with lifelike clarity.' },
    { icon: ClashDetectionIcon, title: 'Clash Detection', description: 'Identify and resolve conflicts between structural, electrical, and plumbing systems in the digital model, saving costly rework and delays on-site.' },
    { icon: CostSavingsIcon, title: 'Cost & Time Savings', description: 'Generate accurate cost estimates (5D BIM) and optimized construction schedules (4D BIM). Make informed decisions that keep your project on budget and on time.' },
    { icon: UserGroupIcon, title: 'Improved Collaboration', description: 'A single source of truth for all stakeholders—architects, engineers, and contractors—ensuring everyone is on the same page.' },
];

const bimServices = [
    '3D Modelling & Visualization',
    '4D Construction Sequencing (Scheduling)',
    '5D Cost Estimation & Quantity Take-offs',
    'MEP (Mechanical, Electrical, Plumbing) Coordination',
    'Clash Detection & Resolution',
    'As-Built Modelling for Facility Management'
];

const BimPage: React.FC = () => {
    const service = SERVICES.find(s => s.id === 'building-information-modelling');

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
            <section className="relative h-[60vh] bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/bim-hero/1920/1080')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
                    <span className="bg-secondary/20 text-secondary border border-secondary/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm animate-fadeInUp">
                        Digital Construction
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight animate-fadeInUp delay-100">
                        Building the Future, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">Digitally</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl max-w-2xl text-white/80 animate-fadeInUp delay-200">
                        Leveraging Building Information Modelling (BIM) to deliver projects with unparalleled efficiency, accuracy, and collaboration.
                    </p>
                    <div className="mt-8 animate-fadeInUp delay-300">
                        <Link to="/contact" className="bg-gradient-brand text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 inline-block">
                            Discuss Your Project
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <div className="space-y-20">

                            {/* What is BIM? Section */}
                            <section>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-foreground mb-4">What is Building Information Modelling?</h2>
                                    <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">{service.overview}</p>
                                </div>
                            </section>

                            {/* Benefits Section */}
                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">The BIM Advantage: Building Smarter</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {benefits.map((item, index) => (
                                        <div key={index} className="flex items-start p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                                            <div className="flex-shrink-0 mr-5">
                                                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-tertiary text-white rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform">
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

                            {/* Our BIM Services Section */}
                            <section className="bg-muted/30 p-10 rounded-2xl border border-border/50">
                                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our BIM Capabilities</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {bimServices.map((bimService, index) => (
                                        <div key={index} className="flex items-center p-4 bg-background rounded-lg border border-border shadow-sm">
                                            <div className="h-2 w-2 bg-secondary rounded-full mr-3"></div>
                                            <span className="text-foreground font-medium">{bimService}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Our Process Section */}
                            {service.process && service.process.length > 0 && (
                                <section>
                                    <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Integrated BIM Process</h2>
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

                            {/* CTA Section */}
                            <section className="bg-gradient-brand text-white py-14 px-8 rounded-2xl text-center shadow-xl">
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Build with Intelligence?</h2>
                                <p className="max-w-2xl mx-auto text-white/90 text-lg mb-8">Embrace the future of construction. Contact us to learn how our BIM services can add immense value to your next project.</p>
                                <Link to="/contact" className="inline-block bg-white text-secondary font-bold py-4 px-10 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md">
                                    Discuss Your Project
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

export default BimPage;