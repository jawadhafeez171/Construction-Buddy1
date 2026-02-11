import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import TrustworthyBrandIcon from './icons/TrustworthyBrandIcon';
import CompetitivePriceIcon from './icons/CompetitivePriceIcon';
import HassleFreeIcon from './icons/HassleFreeIcon';
import ProfessionalProjectManagementIcon from './icons/ProfessionalProjectManagementIcon';

const FeatureIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-16 h-16 bg-gradient-to-br from-secondary/10 to-tertiary/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
        {children}
    </div>
);

const features = [
    {
        title: 'Quality Assurance',
        description: 'We use only the best materials and craftsmanship to ensure lasting quality.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'On-Time Delivery',
        description: 'Our efficient project management guarantees your project is completed on schedule.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'Transparent Pricing',
        description: 'We provide clear, upfront pricing with no hidden charges.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        title: 'Expert Team',
        description: 'Our skilled professionals are dedicated to bringing your vision to life.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        title: 'Trustworthy Brand',
        description: 'Building trust with every brick, ensuring reliability and excellence in all projects.',
        icon: <TrustworthyBrandIcon className="h-8 w-8" />,
    },
    {
        title: 'Competitive Prices',
        description: 'Offering the best value for your investment with fair and competitive pricing.',
        icon: <CompetitivePriceIcon className="h-8 w-8" />,
    },
    {
        title: 'Hassle-Free Service',
        description: 'Enjoy a seamless and stress-free experience from initial consultation to final handover.',
        icon: <HassleFreeIcon className="h-8 w-8" />,
    },
    {
        title: 'Professional Management',
        description: 'Our expert team ensures your project runs smoothly, on time, and within budget.',
        icon: <ProfessionalProjectManagementIcon className="h-8 w-8" />,
    },
];

const ExpertiseSection: React.FC = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl"></div>
                <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-tertiary/5 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <SectionHeader
                    title="Why Choose Us"
                    description="Built on a foundation of trust, quality, and engineering excellence."
                    className="mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-card/60 backdrop-blur-md border border-border/50 p-8 rounded-2xl hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="relative z-10 flex flex-col items-center text-center h-full">
                                <FeatureIcon>{feature.icon}</FeatureIcon>
                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-secondary transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Hover highlight effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-500 ease-out" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
