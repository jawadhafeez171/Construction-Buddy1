import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from '../types';
import CheckIcon from './icons/CheckIcon';

interface PackageCardProps {
  packageInfo: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageInfo }) => {
  const { name, price, highlights, isPopular } = packageInfo;

  return (
    <div className={`relative bg-card border rounded-lg shadow-md p-6 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${isPopular ? 'border-tertiary border-2' : 'border-border'}`}>
      {isPopular && (
        <div className="absolute top-0 right-4 -mt-3 bg-tertiary text-tertiary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-card-foreground text-center">{name}</h3>
      <p className="text-3xl font-extrabold text-primary text-center my-4">{price}</p>
      
      <div className="border-t border-border pt-6 flex-grow mb-6">
        <ul className="space-y-3">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="h-5 w-5 text-secondary flex-shrink-0 mr-3 mt-1" />
              <span className="text-muted-foreground text-sm">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4 space-y-3 text-center">
         <Link to="/contact" className={`w-full text-center block py-3 px-6 rounded-lg font-semibold transition-colors duration-300 bg-secondary text-secondary-foreground hover:bg-opacity-90`}>
          Get Quote
        </Link>
        <Link to="/packages" className="text-sm text-muted-foreground hover:text-primary underline">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;