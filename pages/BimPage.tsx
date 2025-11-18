import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SERVICES } from '../constants';
import VisualizationIcon from '../components/icons/VisualizationIcon';
import ClashDetectionIcon from '../components/icons/ClashDetectionIcon';
import CostSavingsIcon from '../components/icons/CostSavingsIcon';
import TimelineIcon from '../components/icons/TimelineIcon';
import UserGroupIcon from '../components/icons/UserGroupIcon';

const service = SERVICES.find(s => s.id === 'building-information-modelling');

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
    if (!service) return <div>Service not found.</div>;
    const otherServices = SERVICES.filter(s => s.id !== service.id);

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/bim-hero/1920/1080')" }}>
                <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl">
                        Building the Future, Digitally
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl text-white/90">
                        Leveraging Building Information Modelling (BIM) to deliver projects with unparalleled efficiency, accuracy, and collaboration.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <div className="space-y-16">
                            
                            {/* What is BIM? Section */}
                            <section>
                                 <h2 className="text-3xl font-bold text-foreground mb-4 text-center">What is Building Information Modelling?</h2>
                                <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">{service.overview}</p>
                            </section>

                            {/* Benefits Section */}
                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">The BIM Advantage: Building Smarter, Not Harder</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {benefits.map((item, index) => (
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

                            {/* Our BIM Services Section */}
                            <section className="bg-muted p-8 rounded-lg">
                                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our BIM Capabilities</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                                    {bimServices.map((bimService, index) => (
                                        <div key={index} className="bg-background p-3 rounded-md text-sm font-semibold text-foreground">
                                            {bimService}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Our Process Section */}
                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Integrated BIM Process</h2>
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
                                <h2 className="text-3xl md:text-4xl font-bold">Ready to Build with Intelligence?</h2>
                                <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/90">Embrace the future of construction. Contact us to learn how our BIM services can add immense value to your next project.</p>
                                <Link to="/contact" className="mt-8 inline-block bg-secondary text-secondary-foreground font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                                    Discuss Your Project
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

export default BimPage;