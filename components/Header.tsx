
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import PhoneIcon from './icons/PhoneIcon';

// Icons for Theme Toggle Button
const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
);
const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25c0 5.385 4.365 9.75 9.75 9.75 2.572 0 4.92-.99 6.752-2.624z" />
    </svg>
);

const ThemeToggleButton: React.FC<{ theme: 'light' | 'dark'; toggleTheme: () => void }> = ({ theme, toggleTheme }) => (
    <button
        onClick={toggleTheme}
        className="h-10 w-10 flex items-center justify-center rounded-full text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tertiary"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
        {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
    </button>
);


interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = {
    color: 'hsl(var(--secondary))',
    textDecoration: 'underline',
    textUnderlineOffset: '8px',
    textDecorationThickness: '2px'
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Projects', path: '/projects' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg dark:shadow-md dark:shadow-muted' : ''}`}>
      <div className="bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            
            {/* Mobile: Menu Left, Logo Right of it */}
            <div className="flex items-center gap-2">
                 <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-foreground focus:outline-none mr-2"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <XIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
                </button>
                
                <Link to="/" aria-label={`${COMPANY_NAME} - Home`}>
                    <img src="/assets/logo.png" alt={`${COMPANY_NAME} logo`} className="h-10 md:h-16 w-auto" />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map(link => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="font-semibold text-foreground hover:text-secondary transition-colors"
                  style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* CTA & Actions */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Link to="/referral" className="hidden md:inline-block bg-tertiary text-tertiary-foreground px-4 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                Refer & Earn
              </Link>
              
              <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
              
              {/* Call Button - Visible on mobile now */}
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center bg-secondary text-secondary-foreground px-3 py-2 md:px-4 md:py-2 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                <PhoneIcon className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline">{PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background absolute w-full shadow-xl">
          <nav className="flex flex-col p-4">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="py-3 px-2 font-semibold text-foreground hover:bg-muted rounded-md"
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/referral" onClick={() => setIsOpen(false)} className="mt-4 flex items-center justify-center bg-tertiary text-tertiary-foreground px-4 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                Refer & Earn
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
