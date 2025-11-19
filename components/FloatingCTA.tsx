
import React from 'react';
import { PHONE_NUMBER, SOCIAL_LINKS } from '../constants';
import PhoneIcon from './icons/PhoneIcon';
import WhatsappIcon from './icons/WhatsappIcon';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-24 md:bottom-6 right-6 z-50 flex flex-col items-center space-y-4">
      {/* WhatsApp Button */}
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <WhatsappIcon className="h-8 w-8" />
      </a>
      
      {/* Call Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="bg-secondary text-secondary-foreground rounded-full p-4 shadow-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Call us"
      >
        <PhoneIcon className="h-8 w-8" />
      </a>
    </div>
  );
};

export default FloatingCTA;
