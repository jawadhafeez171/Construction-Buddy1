import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Service } from '../types';
import { SERVICES } from '../constants';
import ServiceStaticIcon from '../components/ServiceStaticIcon';
import CheckIcon from '../components/icons/CheckIcon';

interface ServicePageProps {
  service: Service;
}

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  const otherServices = SERVICES.filter(s => s.id !== service.id);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="inline-block bg-secondary/20 backdrop-blur-md border border-secondary/30 rounded-full px-4 py-1 mb-6 animate-fadeInUp">
            <span className="text-secondary font-bold uppercase tracking-widest text-xs">Premium Service</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate-fadeInUp delay-100 hidden md:block">
            {service.title}
          </h1>
          <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight animate-fadeInUp delay-100 md:hidden">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-200">
            {service.overview.substring(0, 120)}...
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">

            <div className="space-y-16">
              {/* Overview Section */}
              <section className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <span className="w-2 h-8 bg-secondary rounded-full mr-3"></span>
                  Overview
                </h2>
                <p className="text-muted-foreground leading-loose text-lg">
                  {service.overview}
                </p>
              </section>

              {/* Key Features */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start p-4 bg-muted/30 rounded-xl border border-border/50 hover:border-secondary/30 hover:bg-muted/50 transition-colors">
                      <div className="bg-secondary/10 p-2 rounded-full mr-4 flex-shrink-0">
                        <CheckIcon className="h-5 w-5 text-secondary" />
                      </div>
                      <span className="text-foreground/90 font-medium pt-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Our Process */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Process</h2>
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

              {/* Why Choose Us */}
              <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="bg-secondary p-2 rounded-lg mr-3">
                      <ServiceStaticIcon serviceId={service.id} className="w-6 h-6 text-white" />
                    </span>
                    Why Choose Us?
                  </h2>
                  <p className="text-white/80 leading-loose text-lg">
                    {service.whyChooseUs}
                  </p>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-brand text-white py-12 px-8 rounded-2xl text-center shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Read to Start?</h2>
                <p className="max-w-2xl mx-auto text-white/90 text-lg mb-8">Get in touch with our experts for a detailed consultation on your {service.title} project.</p>
                <Link to="/contact" className="inline-block bg-white text-secondary font-bold py-4 px-10 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md">
                  Get a Quote Now
                </Link>
              </section>

            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-36 space-y-8">
              <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wider border-b border-border pb-4">Explore Services</h3>
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

              {/* Quick Stats/Info Widget */}
              <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
                <h3 className="font-bold text-foreground mb-4">Did you know?</h3>
                <p className="text-sm text-muted-foreground">We offer a 10-year structural warranty on all our construction projects, ensuring peace of mind for years to come.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;