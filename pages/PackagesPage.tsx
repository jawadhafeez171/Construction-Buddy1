import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { PACKAGES } from '../constants';
import PackageCard from '../components/PackageCard';
import SectionHeader from '../components/SectionHeader';
import { motion, useScroll, useTransform } from 'framer-motion';

const PackagesPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="bg-background overflow-hidden">
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-[55vh] min-h-[380px] overflow-hidden flex items-center justify-center">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-secondary/30 z-10" />
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Home Construction"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block py-1 px-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs font-semibold tracking-widest uppercase mb-6">
              Transparent Pricing
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6">
              Choose Your <br />
              <span className="italic text-secondary">Package</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              From essential builds to luxury finishes — find the perfect plan for your dream project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="container mx-auto px-4 py-24">
        <SectionHeader
          title="Construction Packages"
          description="Every package is backed by our commitment to quality materials, skilled craftsmanship, and transparent pricing."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 items-stretch">
          {PACKAGES.map((pkg, idx) => (
            <PackageCard key={pkg.name} packageInfo={pkg} index={idx} />
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6 text-lg">Not sure which package is right for you?</p>
          <Link to="/compare-packages">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-secondary text-white font-bold rounded-full shadow-xl hover:shadow-secondary/30 transition-all hover:bg-secondary/90 text-lg"
            >
              View Detailed Comparison
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Trust Banner */}
      <section className="bg-muted/30 border-y border-border/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '500+', label: 'Projects Delivered' },
              { stat: '10+', label: 'Years Experience' },
              { stat: '100%', label: 'Quality Assured' },
              { stat: '₹0', label: 'Hidden Costs' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl font-black text-secondary mb-2">{item.stat}</div>
                <div className="text-muted-foreground font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;