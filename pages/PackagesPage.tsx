import React from 'react';
import { Link } from 'react-router-dom';
import { PACKAGES } from '../constants';
import PackageCard from '../components/PackageCard';

const PackagesPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Packages</h1>
          <p className="mt-2 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Choose from our range of packages, designed to provide the best value for your investment.
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {PACKAGES.map(pkg => (
            <PackageCard key={pkg.name} packageInfo={pkg} />
          ))}
        </div>
        <div className="text-center mt-16">
            <Link to="/compare-packages" className="bg-secondary text-secondary-foreground font-bold py-4 px-10 rounded-lg hover:bg-secondary/90 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                View Detailed Comparison
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;