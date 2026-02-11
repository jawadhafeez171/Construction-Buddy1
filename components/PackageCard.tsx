import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from '../types';
import CheckIcon from './icons/CheckIcon';
import { motion } from 'framer-motion';

interface PackageCardProps {
  packageInfo: Package;
  index?: number;
}

const tierAccents: Record<string, { gradient: string; badge: string; glow: string }> = {
  Basic: { gradient: 'from-slate-500 to-slate-600', badge: 'bg-slate-100 text-slate-700', glow: 'hover:shadow-slate-200/50' },
  Standard: { gradient: 'from-blue-500 to-indigo-600', badge: 'bg-blue-100 text-blue-700', glow: 'hover:shadow-blue-200/50' },
  Premium: { gradient: 'from-amber-500 to-orange-600', badge: 'bg-amber-100 text-amber-700', glow: 'hover:shadow-amber-200/50' },
  Luxury: { gradient: 'from-violet-500 to-purple-700', badge: 'bg-violet-100 text-violet-700', glow: 'hover:shadow-violet-200/50' },
};

const PackageCard: React.FC<PackageCardProps> = ({ packageInfo, index = 0 }) => {
  const { name, price, highlights, isPopular } = packageInfo;
  const accent = tierAccents[name] || tierAccents.Basic;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative flex flex-col bg-card rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-3 group ${isPopular
          ? 'border-2 border-secondary shadow-xl shadow-secondary/10 scale-[1.02] z-10'
          : `border border-border/50 hover:shadow-2xl ${accent.glow}`
        }`}
    >
      {/* Top Gradient Bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${accent.gradient}`} />

      {isPopular && (
        <div className="absolute top-4 right-4 bg-secondary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
          Most Popular
        </div>
      )}

      <div className="p-8 flex-grow">
        <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${accent.badge}`}>
          {name}
        </div>
        <div className="mb-6">
          <span className="text-4xl font-black text-foreground tracking-tight">{price.split('/')[0]}</span>
          <span className="text-muted-foreground text-sm">/{price.split('/')[1]}</span>
        </div>

        <div className="w-full h-px bg-border/50 mb-6" />

        <ul className="space-y-4">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start">
              <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mr-3" />
              <span className="text-sm text-foreground/80">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 bg-muted/20 mt-auto border-t border-border/30">
        <Link
          to="/contact"
          className={`block w-full text-center py-3.5 rounded-xl font-bold transition-all duration-300 ${isPopular
              ? 'bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg'
              : 'bg-foreground/5 text-foreground border border-border hover:border-secondary hover:text-secondary hover:bg-secondary/5'
            }`}
        >
          Get Quote
        </Link>
      </div>
    </motion.div>
  );
};

export default PackageCard;