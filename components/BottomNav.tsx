
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from './icons/HomeIcon';
import ProjectIcon from './icons/ProjectIcon';
import BuildHouseIcon from './icons/BuildHouseIcon';
import GiftIcon from './icons/GiftIcon';
import PackageIcon from './icons/PackageIcon';
import { useModal } from '../contexts/ModalContext';

const BottomNav: React.FC = () => {
  const { openBuildModal } = useModal();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-2xl border-t border-border/30 z-[60] pb-safe"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent"></div>

      <div className="flex justify-between items-center px-1 py-2 h-16">
        <NavItem to="/" icon={<HomeIcon />} label="Home" active={isActive('/')} />
        <NavItem to="/projects" icon={<ProjectIcon />} label="Projects" active={isActive('/projects') || location.pathname.startsWith('/projects')} />

        {/* Center Build Button - Elevated & Sleek */}
        <div className="relative -top-9 flex flex-col items-center">
          <button
            onClick={openBuildModal}
            className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground shadow-[0_10px_30px_rgba(59,130,246,0.4)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/40 hover:border-white/60 backdrop-blur-md overflow-hidden"
            aria-label="Build with us - Get a free quote"
          >
            {/* Subtle pulsing glow */}
            <div className="absolute -inset-2 rounded-full bg-secondary opacity-20 blur-xl animate-pulse"></div>

            {/* Ripple effect on tap */}
            <div className="absolute inset-0 rounded-full bg-white/25 scale-0 group-active:scale-150 opacity-0 group-active:opacity-100 transition-all duration-500 ease-out"></div>

            {/* Shine effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Icon */}
            <BuildHouseIcon className="relative h-7 w-7 drop-shadow-lg z-10 transition-transform duration-300 group-hover:scale-110 group-active:scale-95" />
          </button>
          <span className="text-[10px] font-semibold text-center block mt-1.5 text-foreground/90 tracking-tight">Build</span>
        </div>

        <NavItem to="/referral" icon={<GiftIcon />} label="Refer" active={isActive('/referral')} />
        <NavItem to="/packages" icon={<PackageIcon />} label="Packages" active={isActive('/packages') || isActive('/compare-packages')} />
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string; active: boolean }> = ({ to, icon, label, active }) => (
  <Link
    to={to}
    className={`group relative flex flex-col items-center justify-center min-w-[60px] py-1.5 transition-all duration-300 ${active ? 'text-secondary' : 'text-muted-foreground'
      }`}
  >
    {/* Active indicator - sleek dot */}
    {active && (
      <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary transition-all duration-300"></div>
    )}

    {/* Active background - subtle pill */}
    {active && (
      <div className="absolute inset-0 -mx-1 rounded-full bg-secondary/8 transition-all duration-300"></div>
    )}

    {/* Icon container */}
    <div className={`relative z-10 transition-all duration-300 ${active
        ? 'scale-110'
        : 'group-active:scale-95 group-hover:scale-105'
      }`}>
      {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
        className: `h-5 w-5 transition-all duration-300 ${active
            ? 'drop-shadow-sm'
            : 'opacity-70 group-hover:opacity-100'
          }`
      })}
    </div>

    {/* Label */}
    <span className={`relative z-10 text-[10px] font-medium mt-0.5 transition-all duration-300 ${active
        ? 'font-semibold opacity-100'
        : 'opacity-70 group-hover:opacity-100'
      }`}>
      {label}
    </span>
  </Link>
);

export default BottomNav;
