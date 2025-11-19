
import React, { useState, useLayoutEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { SERVICES } from '../constants';
import ChevronDownIcon from './icons/ChevronDownIcon';

const SecondaryHeader: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(SERVICES);
  const [hiddenItems, setHiddenItems] = useState<typeof SERVICES>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      let currentWidth = 0;
      const visible: typeof SERVICES = [];
      const hidden: typeof SERVICES = [];
      
      const moreButtonWidth = 100; // Estimated width for "More" button

      SERVICES.forEach((service, index) => {
        const itemWidth = itemsRef.current[index]?.offsetWidth || 0;
        if (currentWidth + itemWidth < containerWidth - moreButtonWidth) {
          currentWidth += itemWidth;
          visible.push(service);
        } else {
          hidden.push(service);
        }
      });

      if (hidden.length > 0 && visible.length > 0) {
        const lastVisible = visible.pop();
        if(lastVisible) {
             hidden.unshift(lastVisible);
        }
      }
      
      setVisibleItems(visible);
      setHiddenItems(hidden);
    };

    // We need to run this once to get initial measurements
    // A timeout ensures the DOM has settled after first render.
    const timeoutId = setTimeout(handleResize, 100);

    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      clearTimeout(timeoutId);
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const activeLinkStyle = {
    color: 'hsl(var(--secondary))',
    fontWeight: '600',
  };

  const navLinkClasses = "whitespace-nowrap px-4 py-3 text-sm font-medium text-accent-foreground hover:text-secondary transition-colors duration-200";

  return (
    <div className="sticky top-20 z-40 bg-accent shadow-md">
      <div className="container mx-auto px-4 relative">
        <div ref={containerRef} className="flex items-center justify-center">
            {/* These are dummy items for measurement purposes only, they are not visible */}
            <div className="absolute top-0 left-0 opacity-0 pointer-events-none flex w-0 h-0 overflow-hidden">
                {SERVICES.map((service, index) => (
                    <a key={service.id} ref={el => { itemsRef.current[index] = el; }} className={navLinkClasses}>
                    {service.title}
                    </a>
                ))}
            </div>

            {visibleItems.map(service => (
            <NavLink
              key={service.id}
              to={service.path}
              className={navLinkClasses}
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            >
              {service.title}
            </NavLink>
          ))}
          
          {hiddenItems.length > 0 && (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                className={`${navLinkClasses} flex items-center`}
              >
                More <ChevronDownIcon className="h-4 w-4 ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-64 bg-card rounded-md shadow-lg ring-1 ring-border z-50">
                  <div className="py-1">
                    {hiddenItems.map(service => (
                      <NavLink
                        key={service.id}
                        to={service.path}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted"
                        style={({ isActive }) => isActive ? { color: 'hsl(var(--secondary))', fontWeight: '600' } : undefined}
                      >
                        {service.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader;
