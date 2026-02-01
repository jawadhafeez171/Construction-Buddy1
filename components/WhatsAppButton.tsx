import React from 'react';
import { useLocation } from 'react-router-dom';
import WhatsappIcon from './icons/WhatsappIcon';
import PhoneIcon from './icons/PhoneIcon';
import { PHONE_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
    const location = useLocation();

    const getWhatsAppMessage = (pathname: string): string => {
        const messages: { [key: string]: string } = {
            '/': "Hi! I'm interested in learning more about your construction services.",
            '/services/home-construction': "Hi! I'd like to know more about home construction services.",
            '/services/commercial-construction': "Hi! I'm interested in commercial construction services.",
            '/services/interiors': "Hi! I'd like to discuss interior design services.",
            '/services/architectural-structural-drawings': "Hi! I need architectural and structural drawings.",
            '/services/waterproofing': "Hi! I'm interested in waterproofing services.",
            '/services/bim': "Hi! I'd like to know more about BIM services.",
            '/projects': "Hi! I saw your projects and I'm interested in working with you.",
            '/packages': "Hi! I'd like to discuss your construction packages.",
            '/cost-calculator': "Hi! I used your cost calculator. Can we discuss my project?",
            '/contact': "Hi! I'd like to get in touch about a construction project.",
            '/referral': "Hi! I have a referral for you.",
        };

        return messages[pathname] || "Hi! I'm interested in your construction services.";
    };

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(getWhatsAppMessage(location.pathname));
        const whatsappUrl = `https://wa.me/91${PHONE_NUMBER}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="fixed bottom-24 right-6 z-[60] flex flex-col items-center gap-3">
            {/* WhatsApp Button */}
            <button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
            >
                <WhatsappIcon className="w-8 h-8" />

                {/* Tooltip */}
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block">
                    Chat with us on WhatsApp
                </span>

                {/* Pulse animation */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
            </button>

            {/* Call Button - Mobile Only */}
            <a
                href={`tel:${PHONE_NUMBER}`}
                className="md:hidden bg-secondary hover:bg-secondary/90 text-secondary-foreground p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative"
                aria-label="Call us"
                title="Call us"
            >
                <PhoneIcon className="w-8 h-8" />

                {/* Pulse animation */}
                <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-20"></span>
            </a>
        </div>
    );
};

export default WhatsAppButton;
