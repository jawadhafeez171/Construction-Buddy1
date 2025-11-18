import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, ADDRESS, PHONE_NUMBER, SERVICES, SOCIAL_LINKS } from '../constants';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import YoutubeIcon from './icons/YoutubeIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/assets/logo.png" alt={`${COMPANY_NAME} logo`} className="h-24 w-auto" />
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
        <div className="container mx-auto px-4 text-center text-sm text-background/70">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;