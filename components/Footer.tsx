
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, ADDRESS, PHONE_NUMBER, SERVICES, SOCIAL_LINKS } from '../constants';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import YoutubeIcon from './icons/YoutubeIcon';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/logo.png" alt={`${COMPANY_NAME} logo`} className="h-24 w-auto" />
            <p className="text-sm">{ADDRESS}</p>
            <div className="flex space-x-4 mt-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><FacebookIcon className="h-6 w-6" /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><InstagramIcon className="h-6 w-6" /></a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><WhatsappIcon className="h-6 w-6" /></a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><YoutubeIcon className="h-6 w-6" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <Link to={service.path} className="hover:text-secondary transition-colors text-sm">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/projects" className="hover:text-secondary transition-colors text-sm">Our Projects</Link></li>
              <li><Link to="/packages" className="hover:text-secondary transition-colors text-sm">Packages</Link></li>
              <li><Link to="/cost-calculator" className="hover:text-secondary transition-colors text-sm">Cost Calculator</Link></li>
              <li><Link to="/referral" className="hover:text-secondary transition-colors text-sm">Referral Program</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">Phone: <a href={`tel:${PHONE_NUMBER}`} className="ml-2 hover:text-secondary">{PHONE_NUMBER}</a></li>
              <li className="flex items-center">Email: <a href="mailto:info@constructionbuddy.com" className="ml-2 hover:text-secondary">info@constructionbuddy.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-foreground py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-background/70">
          <div>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.</div>
          <div className="mt-2 md:mt-0">
            <HighContrastToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

const HighContrastToggle = () => {
  const { highContrast, toggleHighContrast } = useTheme();
  return (
    <button
      onClick={toggleHighContrast}
      className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium transition-colors ${highContrast ? 'bg-yellow-400 text-black' : 'bg-background/20 text-background hover:bg-background/30'}`}
      aria-label="Toggle High Contrast Mode"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      {highContrast ? 'High Contrast ON' : 'High Contrast OFF'}
    </button>
  )
}

export default Footer;
