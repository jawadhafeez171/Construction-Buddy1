import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Service } from '../types';
import { SERVICES } from '../constants';
import CheckIcon from '../components/icons/CheckIcon';

interface ServicePageProps {
  service: Service;
}

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  const otherServices = SERVICES.filter(s => s.id !== service.id);

  return (
    <div className="bg-background">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">{service.title}</h1>
          <p className="mt-2 text-lg text-primary-foreground/80 max-w-3xl mx-auto">{service.overview.substring(0, 100)}...</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <img src={service.imageUrl} alt={service.title} className="w-full h-auto rounded-lg shadow-lg mb-8" />

            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{service.overview}</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-secondary flex-shrink-0 mr-3 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Process</h2>
                <div className="relative border-l-2 border-tertiary pl-8">
                  {service.process.map((step, index) => (
                    <div key={index} className="mb-8 relative">
                      <div className="absolute -left-[42px] top-1 w-5 h-5 bg-tertiary rounded-full border-4 border-background"></div>
                      <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                      <p className="text-muted-foreground mt-1">{step.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-card p-8 rounded-lg border border-border">
                <h2 className="text-3xl font-bold text-card-foreground mb-4">Why Choose Us?</h2>
                <p className="text-muted-foreground leading-relaxed">{service.whyChooseUs}</p>
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

export default ServicePage;