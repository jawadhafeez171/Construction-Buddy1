import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import YoutubeIcon from './icons/YoutubeIcon';

const TopBar: React.FC = () => {
    return (
        <div className="bg-accent text-accent-foreground py-2">
            <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                <p className="hidden md:block">Your Trusted Partner in Construction</p>
                <div className="flex items-center space-x-4">
                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><FacebookIcon className="h-5 w-5" /></a>
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><InstagramIcon className="h-5 w-5" /></a>
                    <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><WhatsappIcon className="h-5 w-5" /></a>
                    <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><YoutubeIcon className="h-5 w-5" /></a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;