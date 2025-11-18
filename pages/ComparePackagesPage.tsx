import React from 'react';
import { Link } from 'react-router-dom';
import { PACKAGE_COMPARISON_DATA } from '../packageComparisonData';
import { PACKAGES } from '../constants';

const ComparePackagesPage: React.FC = () => {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Compare Our Packages</h1>
          <p className="mt-2 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Find the perfect fit for your project with a detailed look at what each package includes.
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="container mx-auto px-4 py-16">
        <div className="overflow-x-auto border border-border rounded-lg shadow-lg">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr>
                <th className="sticky top-32 z-20 p-4 text-left font-bold text-lg text-foreground bg-muted border-b-2 border-border w-1/4">Features</th>
                {PACKAGES.map(pkg => (
                  <th key={pkg.name} className={`sticky top-32 z-20 p-4 text-center font-bold text-lg bg-muted border-b-2 border-border ${pkg.isPopular ? 'text-tertiary' : 'text-foreground'}`}>
                    {pkg.name}
                    <div className="text-sm font-normal text-muted-foreground">{pkg.price}</div>
                    {pkg.isPopular && <div className="text-xs font-bold text-tertiary-foreground bg-tertiary rounded-full px-2 py-0.5 mt-1 inline-block">Popular</div>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PACKAGE_COMPARISON_DATA.map(categoryData => (
                <React.Fragment key={categoryData.category}>
                  {/* Category Header Row */}
                  <tr>
                    <td colSpan={5} className="bg-accent text-accent-foreground p-3 font-bold text-lg">
                      {categoryData.category}
                    </td>
                  </tr>
                  {/* Feature Rows */}
                  {categoryData.features.map((feature, index) => (
                    <tr key={feature.name} className={index % 2 === 0 ? 'bg-background' : 'bg-card'}>
                      <td className="p-4 font-semibold text-foreground border-b border-border">{feature.name}</td>
                      <td className="p-4 text-center text-muted-foreground border-b border-border">{feature.basic}</td>
                      <td className="p-4 text-center text-muted-foreground border-b border-border">{feature.standard}</td>
                      <td className="p-4 text-center text-muted-foreground border-b border-border">{feature.premium}</td>
                      <td className="p-4 text-center text-muted-foreground border-b border-border">{feature.luxury}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-12">
            <Link to="/contact" className="bg-secondary text-secondary-foreground font-bold py-4 px-10 rounded-lg hover:bg-secondary/90 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                Get a Custom Quote
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ComparePackagesPage;
