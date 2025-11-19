
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from './icons/HomeIcon';
import ProjectIcon from './icons/ProjectIcon';
import BuildIcon from './icons/BuildIcon';
import GiftIcon from './icons/GiftIcon';
import PackageIcon from './icons/PackageIcon';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-[60] flex justify-between items-end px-4 py-2 pb-safe h-16 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <NavItem to="/" icon={<HomeIcon />} label="Home" active={isActive('/')} />
      <NavItem to="/projects" icon={<ProjectIcon />} label="Projects" active={isActive('/projects') || location.pathname.startsWith('/projects')} />
      
      <div className="relative -top-6">
        <Link to="/contact" className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-lg ring-4 ring-background">
           <BuildIcon className="h-6 w-6" />
        </Link>
        <span className="text-[10px] font-medium text-center block mt-1 text-foreground">Build</span>
      </div>

      <NavItem to="/referral" icon={<GiftIcon />} label="Refer" active={isActive('/referral')} />
      <NavItem to="/packages" icon={<PackageIcon />} label="Packages" active={isActive('/packages') || isActive('/compare-packages')} />
    </div>
  );
};

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string; active: boolean }> = ({ to, icon, label, active }) => (
  <Link to={to} className={`flex flex-col items-center justify-center w-16 mb-1 space-y-1 transition-colors ${active ? 'text-secondary font-semibold' : 'text-muted-foreground'}`}>
    {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "h-6 w-6" })}
    <span className="text-[10px]">{label}</span>
  </Link>
);

export default BottomNav;
