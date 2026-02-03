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
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={service.path}
        className="group relative flex flex-col h-full bg-card border border-border/40 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2 hover:border-secondary/50"
      >
        {/* Header Image */}
        <div className="relative h-32 sm:h-40 overflow-hidden">
          {service.cardImage ? (
            <img
              src={service.cardImage}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-tertiary/20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
        </div>

        {/* Icon - Overlapping with bounce effect */}
        <div className="relative -mt-8 ml-5 z-20">
          <div className="inline-flex p-3 rounded-xl bg-card/80 backdrop-blur-xl border border-white/20 shadow-2xl group-hover:bg-secondary group-hover:text-white group-hover:scale-110 transition-all duration-500 ease-out">
            <ServiceStaticIcon serviceId={service.id} className="w-6 h-6" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 pt-5 flex-grow flex flex-col">
          <h3 className="text-sm font-extrabold text-foreground uppercase tracking-widest mb-3 group-hover:text-secondary transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="text-[11.5px] text-muted-foreground leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity mb-4">
            {service.descriptions[0]}
          </p>

          {/* Learn More Hint */}
          <div className="mt-auto flex items-center text-[10px] font-bold text-secondary uppercase tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            <span>Explore Details</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>

        {/* Dynamic Glass Edge Glow */}
        <div className="absolute inset-0 border-t border-l border-white/10 rounded-xl pointer-events-none" />

        {/* Bottom Animated Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-secondary to-tertiary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
      </Link>
    </motion.div>
  );
};

export default HomeServiceCard;