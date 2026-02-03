import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PACKAGES, PROJECTS } from '../constants';
import HomeServiceCard from '../components/HomeServiceCard';
import PackageCard from '../components/PackageCard';
import ProjectCard from '../components/ProjectCard';
import QuickQuoteForm from '../components/QuickQuoteForm';
import ReferralIllustration from '../components/ReferralIllustration';
import { Testimonials } from '../components/Testimonials';
import { TrustSignals } from '../components/TrustSignals';
import { FAQ } from '../components/FAQ';
import SectionHeader from '../components/SectionHeader';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';
import TrustworthyBrandIcon from '../components/icons/TrustworthyBrandIcon';
import CompetitivePriceIcon from '../components/icons/CompetitivePriceIcon';
import HassleFreeIcon from '../components/icons/HassleFreeIcon';
import ProfessionalProjectManagementIcon from '../components/icons/ProfessionalProjectManagementIcon';
import ShareIcon from '../components/icons/ShareIcon';
import BuildHouseIcon from '../components/icons/BuildHouseIcon';
import EarnMoneyIcon from '../components/icons/EarnMoneyIcon';
import CheckIcon from '../components/icons/CheckIcon';

// Icons for inline use
const StepIcon: React.FC<{ number: string }> = ({ number }) => (
  <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4 flex-shrink-0">
    {number}
  </div>
);

const FeatureIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-16 h-16 bg-tertiary text-tertiary-foreground rounded-full flex items-center justify-center mb-4">
    {children}
  </div>
);

const ScrollDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
  </svg>
);

const processSteps = [
  { number: '1', title: 'Consult & Plan', description: 'We listen to your ideas and create a detailed plan and proposal.' },
  { number: '2', title: 'Design & Approve', description: 'Our team designs the project, and we work with you for final approval.' },
  { number: '3', title: 'Build & Manage', description: 'We execute the construction with quality management and regular updates.' },
  { number: '4', title: 'Deliver & Support', description: 'We deliver your completed project on time and provide post-completion support.' },
];


import { MagneticButton } from '../components/MagneticButton';

import { useModal } from '../contexts/ModalContext';

const HomePage: React.FC = () => {
  const { openBuildModal } = useModal();
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen text-white overflow-hidden flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover -z-10"
          poster="https://picsum.photos/seed/blueprint-hero/1920/1080"
        >
          <source src="https://videos.pexels.com/video-files/857251/857251-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-0"></div>

        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 w-full">
            {/* Left Content */}
            <div className="lg:w-3/5 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white text-shadow-md animate-fadeInUp opacity-0 [animation-delay:200ms]">
                Building Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">Dream Home</span>,
                <br className="hidden lg:block" /> the Right Way
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 text-shadow-md animate-fadeInUp opacity-0 [animation-delay:400ms]">
                India's leading tech-enabled construction company, delivering exceptional quality with a 10+ year structural warranty you can trust.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fadeInUp opacity-0 [animation-delay:600ms]">
                <MagneticButton
                  onClick={openBuildModal}
                  className="w-full sm:w-auto"
                >
                  <span className="w-full sm:w-auto text-center block py-3 px-8 rounded-md font-bold text-lg text-white bg-gradient-to-r from-secondary to-tertiary cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-orange-500/50">
                    Get Free Estimate
                  </span>
                </MagneticButton>
                <Link to="/projects" className="w-full sm:w-auto">
                  <MagneticButton className="w-full">
                    <span className="w-full sm:w-auto text-center block py-3 px-8 rounded-md font-bold text-lg bg-transparent border-2 border-white text-white backdrop-blur-sm cursor-pointer transition-transform duration-300 hover:bg-white/10 hover:scale-105 hover:-translate-y-1">
                      View Our Work
                    </span>
                  </MagneticButton>
                </Link>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full max-w-sm lg:max-w-xs opacity-0 animate-fadeIn [animation-delay:800ms]">
              <QuickQuoteForm />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-pulse-vertical hidden lg:block">
          <ScrollDownIcon className="w-8 h-8 text-white/80" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative animate-fadeInUp opacity-0 [animation-delay:200ms]">
              <div className="absolute -top-4 -left-4 w-full h-full bg-muted rounded-lg transform -rotate-2"></div>
              <img
                src="https://picsum.photos/seed/about-us-team/800/600"
                alt="Construction Buddy Team working on a blueprint"
                className="relative rounded-lg shadow-2xl w-full h-auto z-10"
              />
            </div>
            <div className="animate-fadeInUp opacity-0 [animation-delay:400ms]">
              <SectionHeader
                badge="About Us"
                title="Your Trusted Partner in Construction"
                description="Construction Buddy is a cornerstone of quality construction in Bangalore. We are a team of passionate engineers, architects, and project managers dedicated to turning your vision into a reality. Our commitment to quality craftsmanship, transparent processes, and client satisfaction is the foundation of everything we build."
                centered={false}
                className="mb-8 md:mb-8"
              />

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 border-y border-border py-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary">150+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary">15+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Years Exp</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary">100%</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Satisfaction</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-10 inline-block bg-secondary text-secondary-foreground font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Explore Our Expertise"
            description="From concept to creation, we offer a complete suite of construction services."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full mx-auto">
            {SERVICES.map((service, index) => (
              <HomeServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border-2 border-primary text-primary font-bold py-3 px-8 rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            title="Find the Perfect Plan for Your Project"
            description="Transparent pricing with no hidden costs. Choose a package that aligns with your vision and budget."
            lightMode
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PACKAGES.map(pkg => (
              <PackageCard key={pkg.name} packageInfo={pkg} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/compare-packages" className="inline-block border-2 border-white/50 text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105">
              Compare All Package Features
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Simple 4-Step Process"
            description="We've streamlined our process to ensure a smooth and efficient journey from start to finish."
          />
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-12">
            {processSteps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center p-4 max-w-[250px] transition-transform duration-300 hover:-translate-y-2 group">
                  <StepIcon number={step.number} />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block mx-4">
                    <ArrowRightIcon className="w-12 h-12 text-tertiary opacity-50" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="text-center">
            <MagneticButton onClick={openBuildModal} className="inline-block">
              <span className="inline-block bg-tertiary text-tertiary-foreground font-bold py-3 px-8 rounded-md hover:bg-tertiary/90 transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
                Start Your Journey Today
              </span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Recent Projects"
            description="Take a look at some of our proudest accomplishments."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROJECTS.slice(0, 4).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="inline-block bg-secondary text-secondary-foreground font-bold py-3 px-8 rounded-md hover:bg-secondary/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Choose Us"
            description="Built on a foundation of trust and quality."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border flex flex-col items-center group">
              <FeatureIcon><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></FeatureIcon>
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">Quality Assurance</h3>
              <p className="text-muted-foreground">We use only the best materials and craftsmanship to ensure lasting quality.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border flex flex-col items-center group">
              <FeatureIcon><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></FeatureIcon>
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">On-Time Delivery</h3>
              <p className="text-muted-foreground">Our efficient project management guarantees your project is completed on schedule.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border flex flex-col items-center group">
              <FeatureIcon><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></FeatureIcon>
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">Transparent Pricing</h3>
              <p className="text-muted-foreground">We provide clear, upfront pricing with no hidden charges.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border flex flex-col items-center group">
              <FeatureIcon><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></FeatureIcon>
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">Expert Team</h3>
              <p className="text-muted-foreground">Our skilled professionals are dedicated to bringing your vision to life.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border flex flex-col items-center group">
              <FeatureIcon><TrustworthyBrandIcon className="h-8 w-8" /></FeatureIcon>
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">Trustworthy Brand</h3>
              <p className="text-muted-foreground">Building trust with every brick, ensuring reliability and excellence in all projects.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border flex flex-col items-center group">
              <FeatureIcon><CompetitivePriceIcon className="h-8 w-8" /></FeatureIcon>
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">Competitive Prices</h3>
              <p className="text-muted-foreground">Offering the best value for your investment with fair and competitive pricing.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border flex flex-col items-center group">
              <FeatureIcon><HassleFreeIcon className="h-8 w-8" /></FeatureIcon>
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">Hassle-Free Service</h3>
              <p className="text-muted-foreground">Enjoy a seamless and stress-free experience from initial consultation to final handover.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border flex flex-col items-center group">
              <FeatureIcon><ProfessionalProjectManagementIcon className="h-8 w-8" /></FeatureIcon>
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">Professional Project Management</h3>
              <p className="text-muted-foreground">Our expert team ensures your project runs smoothly, on time, and within budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column: Content */}
            <div className="text-center md:text-left">
              <SectionHeader
                badge="Our Referral Program"
                title="Refer & Earn Big!"
                description="For every successful referral, we reward you with substantial payouts. It's our way of saying thanks for sharing the trust."
                centered={false}
                lightMode
                className="mb-8 md:mb-8"
              />
              <p className="mt-0 text-tertiary text-4xl md:text-5xl font-extrabold mb-8 italic">
                Up to ₹1,00,000
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center text-left">
                  <div className="w-16 h-16 bg-white/10 text-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <ShareIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">1. You Share</h3>
                    <p className="text-white/70">Introduce a friend or colleague who needs construction services.</p>
                  </div>
                </div>
                <div className="flex items-center text-left">
                  <div className="w-16 h-16 bg-white/10 text-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <BuildHouseIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">2. They Build</h3>
                    <p className="text-white/70">We'll provide them with top-notch service and build their dream project.</p>
                  </div>
                </div>
                <div className="flex items-center text-left">
                  <div className="w-16 h-16 bg-white/10 text-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <EarnMoneyIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">3. You Earn!</h3>
                    <p className="text-white/70">You get rewarded once their project is confirmed. It's a win-win!</p>
                  </div>
                </div>
              </div>

              <Link
                to="/referral"
                className="mt-10 inline-block bg-secondary text-secondary-foreground font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Refer Now
              </Link>
            </div>

            {/* Right Column: Illustration */}
            <div className="hidden md:block">
              <ReferralIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <TrustSignals />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default HomePage;