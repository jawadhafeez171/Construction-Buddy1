import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { PACKAGE_COMPARISON_DATA } from '../packageComparisonData';
import { PACKAGES } from '../constants';
import SectionHeader from '../components/SectionHeader';
import { motion, useScroll, useTransform } from 'framer-motion';

const tierColors: Record<string, string> = {
  Basic: 'text-slate-600',
  Standard: 'text-blue-600',
  Premium: 'text-amber-600',
  Luxury: 'text-violet-600',
};

const ComparePackagesPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="bg-background overflow-hidden">
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-[45vh] min-h-[320px] overflow-hidden flex items-center justify-center">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-secondary/30 z-10" />
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
            alt="Luxury Home Detail"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block py-1 px-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs font-semibold tracking-widest uppercase mb-6">
              Feature-by-Feature
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight mb-4">
              Compare <span className="italic text-secondary">Packages</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
              A transparent, detailed look at what each tier includes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-24">
        <SectionHeader
          title="Detailed Comparison"
          description="Every material, brand, and specification — side by side."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-x-auto rounded-3xl border border-border/50 shadow-xl bg-card"
        >
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr>
                <th className="sticky top-0 z-20 p-5 text-left font-bold text-sm uppercase tracking-wider text-muted-foreground bg-muted/80 backdrop-blur-sm border-b border-border w-1/4">
                  Features
                </th>
                {PACKAGES.map(pkg => (
                  <th
                    key={pkg.name}
                    className={`sticky top-0 z-20 p-5 text-center bg-muted/80 backdrop-blur-sm border-b border-border ${pkg.isPopular ? 'bg-secondary/10' : ''
                      }`}
                  >
                    <div className={`font-bold text-lg ${tierColors[pkg.name] || 'text-foreground'}`}>
                      {pkg.name}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{pkg.price}</div>
                    {pkg.isPopular && (
                      <span className="inline-block mt-2 text-[10px] font-black bg-secondary text-white rounded-full px-2.5 py-0.5 uppercase tracking-widest">
                        Popular
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PACKAGE_COMPARISON_DATA.map(categoryData => (
                <React.Fragment key={categoryData.category}>
                  {/* Category Row */}
                  <tr>
                    <td
                      colSpan={5}
                      className="bg-muted/40 p-4 font-bold text-foreground text-sm uppercase tracking-widest border-y border-border/50"
                    >
                      <span className="inline-block w-2 h-2 bg-secondary rounded-full mr-3 align-middle" />
                      {categoryData.category}
                    </td>
                  </tr>
                  {/* Feature Rows */}
                  {categoryData.features.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={`transition-colors hover:bg-muted/20 ${index % 2 === 0 ? 'bg-transparent' : 'bg-muted/10'
                        }`}
                    >
                      <td className="p-4 font-medium text-foreground border-b border-border/30 text-sm">
                        {feature.name}
                      </td>
                      <td className="p-4 text-center text-muted-foreground border-b border-border/30 text-sm">
                        {feature.basic}
                      </td>
                      <td className={`p-4 text-center border-b border-border/30 text-sm ${PACKAGES[1]?.isPopular ? 'bg-secondary/5 text-foreground font-medium' : 'text-muted-foreground'
                        }`}>
                        {feature.standard}
                      </td>
                      <td className="p-4 text-center text-muted-foreground border-b border-border/30 text-sm">
                        {feature.premium}
                      </td>
                      <td className="p-4 text-center text-muted-foreground border-b border-border/30 text-sm">
                        {feature.luxury}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif font-medium text-foreground mb-4">
            Ready to start building?
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Contact us for a personalized quote tailored to your exact needs.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-secondary text-white font-bold rounded-full shadow-xl hover:shadow-secondary/30 transition-all hover:bg-secondary/90 text-lg"
            >
              Get a Custom Quote
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ComparePackagesPage;
