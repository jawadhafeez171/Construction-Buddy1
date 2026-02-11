import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';
import ServiceStaticIcon from './ServiceStaticIcon';
import { motion } from 'framer-motion';

interface HomeServiceCardProps {
  service: Service;
  index: number;
}

const HomeServiceCard: React.FC<HomeServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={service.path}
        className="group relative flex flex-col h-full bg-card border border-border/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 hover:border-secondary/50"
      >
        {/* Header Image */}
        <div className="relative h-48 sm:h-52 overflow-hidden">
          {service.cardImage ? (
            <img
              src={service.cardImage}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-secondary/5 to-tertiary/5" />
          )}
          {/* Subtle overlay for text readability if needed, though mostly image is top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        </div>

        {/* Icon - Floating Card Style */}
        <div className="relative -mt-10 ml-6 z-20">
          <div className="inline-flex p-3 rounded-xl bg-background border border-border/10 shadow-lg group-hover:bg-secondary group-hover:text-white transition-all duration-300 ease-out group-hover:scale-105 group-hover:rotate-3">
            <ServiceStaticIcon serviceId={service.id} className="w-7 h-7" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-2 flex-grow flex flex-col">
          <h3 className="text-lg font-bold text-card-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-3 mb-6">
            {service.descriptions[0]}
          </p>

          {/* Learn More - Always visible but highlights on hover */}
          <div className="mt-auto flex items-center text-sm font-bold text-secondary">
            <span className="group-hover:underline underline-offset-4 decoration-2">Explore Service</span>
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Decorative Bottom Line (optional, keeps it subtle) */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </Link>
    </motion.div>
  );
};

export default HomeServiceCard;