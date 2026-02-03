
import React, { useEffect, useState, useCallback, createContext, useContext, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SecondaryHeader from './components/SecondaryHeader';
import TopBar from './components/TopBar';
import { COMPANY_NAME, SERVICES, PROJECTS } from './constants';
import FloatingBuildButton from './components/FloatingBuildButton';
import BottomNav from './components/BottomNav';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ProjectCardSkeleton, CardSkeleton } from './components/Skeleton';
import { Breadcrumbs } from './components/Breadcrumbs';
import PageTransition from './components/PageTransition';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext'; // Restore this import
import { PullToRefresh } from './components/PullToRefresh';

// Lazy load heavy components for better performance
const BuildModal = lazy(() => import('./components/BuildModal'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
const InstallPrompt = lazy(() => import('./components/InstallPrompt'));

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const PackagesPage = lazy(() => import('./pages/PackagesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const InteriorsPage = lazy(() => import('./pages/InteriorsPage'));
const ArchitecturalDrawingsPage = lazy(() => import('./pages/ArchitecturalDrawingsPage'));
const ReferralPage = lazy(() => import('./pages/ReferralPage'));
const WaterproofingPage = lazy(() => import('./pages/WaterproofingPage'));
const BimPage = lazy(() => import('./pages/BimPage'));
const HomeConstructionPage = lazy(() => import('./pages/HomeConstructionPage'));
const CommercialConstructionPage = lazy(() => import('./pages/CommercialConstructionPage'));
const ComparePackagesPage = lazy(() => import('./pages/ComparePackagesPage'));
const CostCalculatorPage = lazy(() => import('./pages/CostCalculatorPage'));
const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// --- Theme Management Moved to contexts/ThemeContext.tsx ---


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

import PageProgressBar from './components/PageProgressBar';
import { ModalProvider } from './contexts/ModalContext';

const PageLayout = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  useKeyboardShortcuts();

  useEffect(() => {
    const path = location.pathname;
    let title = COMPANY_NAME;
    // ... rest of meta logic ...
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pb-16 md:pb-0">
      <PageProgressBar />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-secondary focus:text-secondary-foreground focus:rounded-md focus:shadow-lg">
        Skip to main content
      </a>
      <TopBar />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SecondaryHeader />
      <Breadcrumbs />
      <main id="main-content" className="flex-grow">
        <PullToRefresh>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </PullToRefresh>
      </main>
      <BottomNav />
      <FloatingBuildButton />
      <WhatsAppButton />
      <Footer />
      <BuildModal />
      <InstallPrompt />
    </div>
  )
}

const App: React.FC = () => {
  const servicePageIds = [
    'interiors',
    'architectural-structural-drawings',
    'waterproofing-solutions',
    'building-information-modelling',
    'home-construction',
    'commercial-construction'
  ];

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ModalProvider>
          <ToastProvider>
            <HashRouter>
              <ScrollToTop />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route element={<PageLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
                    <Route path="/packages" element={<PackagesPage />} />
                    <Route path="/compare-packages" element={<ComparePackagesPage />} />
                    <Route path="/cost-calculator" element={<CostCalculatorPage />} />
                    <Route path="/cost-calculator" element={<CostCalculatorPage />} />
                    <Route path="/blogs" element={<BlogsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/referral" element={<ReferralPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/interiors" element={<InteriorsPage />} />
                    <Route path="/services/architectural-structural-drawings" element={<ArchitecturalDrawingsPage />} />
                    <Route path="/services/waterproofing-solutions" element={<WaterproofingPage />} />
                    <Route path="/services/building-information-modelling" element={<BimPage />} />
                    <Route path="/services/home-construction" element={<HomeConstructionPage />} />
                    <Route path="/services/commercial-construction" element={<CommercialConstructionPage />} />
                    {SERVICES.filter(s => !servicePageIds.includes(s.id)).map(service => (
                      <Route
                        key={service.id}
                        path={service.path}
                        element={<ServicePage service={service} />}
                      />
                    ))}
                  </Route>
                </Routes>
              </Suspense>
            </HashRouter>
          </ToastProvider>
        </ModalProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
