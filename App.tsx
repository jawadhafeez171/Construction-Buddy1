
import React, { useEffect, useState, useCallback, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import SecondaryHeader from './components/SecondaryHeader';
import TopBar from './components/TopBar';
import { COMPANY_NAME, SERVICES, PROJECTS } from './constants';
import FloatingCTA from './components/FloatingCTA';
import FloatingBuildButton from './components/FloatingBuildButton';
import InteriorsPage from './pages/InteriorsPage';
import ArchitecturalDrawingsPage from './pages/ArchitecturalDrawingsPage';
import ReferralPage from './pages/ReferralPage';
import WaterproofingPage from './pages/WaterproofingPage';
import BimPage from './pages/BimPage';
import HomeConstructionPage from './pages/HomeConstructionPage';
import CommercialConstructionPage from './pages/CommercialConstructionPage';
import ComparePackagesPage from './pages/ComparePackagesPage';
import BottomNav from './components/BottomNav';

// --- Theme Management ---
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
    }, []);
    
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);
    
    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
// --- End Theme Management ---


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageLayout = () => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const path = location.pathname;
        let title = COMPANY_NAME;
        let description = "Your trusted partner for residential, commercial, and institutional construction in Bangalore. We offer a full range of services from architectural design to project completion.";
        let keywords = "construction company Bangalore, home construction, commercial construction, interior design, waterproofing solutions, BIM services, building contractors, architectural drawings, residential projects";

        const setMetaTag = (name: string, content: string) => {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('name', name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };
        
        // Home Page
        if (path === '/') {
            title = "Quality Construction Services in Bangalore";
            description = "Construction Buddy offers top-tier home, commercial, and institutional construction, interior design, and waterproofing solutions. Your trusted partner from concept to creation.";
            keywords = "construction company Bangalore, home builders, commercial contractors, architectural design, interior design services";
        }
        // Service Pages
        else if (path.startsWith('/services/')) {
            const serviceId = path.replace('/services/', '');
            if (serviceId === 'interiors') {
                title = 'Interior Design Services';
                description = 'Explore our bespoke interior design services for living rooms, kitchens, bedrooms and more. Check out our affordable 2BHK, 3BHK, and 4BHK interior packages.';
                keywords = 'interior design, modular kitchen, bedroom design, living room interiors, interior design packages';
            } else if (serviceId === 'architectural-structural-drawings') {
                title = 'Architectural & Structural Drawing Packages';
                description = 'Choose from our Starter, Comfort, Standard, and Elite design packages for architectural drawings. Get 2D floor plans, 3D elevations, and more.';
                keywords = 'architectural design packages, structural drawings, 2D floor plan, 3D elevation, vasthu compliant design';
            } else if (serviceId === 'waterproofing-solutions') {
                title = 'Expert Waterproofing Solutions in Bangalore';
                description = 'Protect your property with our comprehensive waterproofing services for basements, terraces, bathrooms, and walls. Get a free inspection and quote.';
                keywords = 'waterproofing services, basement waterproofing, terrace waterproofing, leakage solutions, damp proofing';
            } else if (serviceId === 'building-information-modelling') {
                title = 'Advanced Building Information Modelling (BIM) Services';
                description = 'Leverage our BIM expertise for 3D visualization, clash detection, 4D scheduling, and 5D cost estimation. Build smarter with Construction Buddy.';
                keywords = 'BIM services, building information modelling, 3D modeling, clash detection, 4D BIM, 5D BIM, construction technology';
            } else if (serviceId === 'home-construction') {
                title = 'Custom Home Construction in Bangalore';
                description = 'Build your dream home with Construction Buddy. We offer end-to-end home construction services, from custom villas to renovations, with a focus on quality and transparency.';
                keywords = 'home construction Bangalore, custom home builders, residential construction, house construction, new home builds';
            } else if (serviceId === 'commercial-construction') {
                title = 'Commercial Construction Services in Bangalore';
                description = 'Expert commercial construction for offices, retail spaces, warehouses, and more. We deliver high-quality projects on time and on budget to support your business goals.';
                keywords = 'commercial construction Bangalore, office construction, retail store builders, industrial construction, commercial contractors';
            }
            else {
                const service = SERVICES.find(s => s.id === serviceId);
                if (service) {
                    title = service.title;
                    description = service.overview;
                    keywords = `${service.title}, construction services, ${service.keyFeatures.join(', ')}`;
                }
            }
        }
        // Projects Page
        else if (path === '/projects') {
            title = "Our Construction Projects Portfolio";
            description = "Explore our portfolio of completed residential, commercial, and institutional projects. See the quality and craftsmanship of Construction Buddy's work.";
            keywords = "construction projects, residential projects, commercial projects, institutional buildings, construction portfolio";
        }
        // Project Detail Page
        else if (path.startsWith('/projects/')) {
            const projectId = path.replace('/projects/', '');
            const project = PROJECTS.find(p => p.id === projectId);
            if (project) {
                title = project.title;
                description = project.description;
                keywords = `${project.title}, ${project.category} construction, construction project details`;
            }
        }
        // Packages Page
        else if (path === '/packages') {
            title = "Construction Packages & Pricing";
            description = "Find the perfect plan for your project. Construction Buddy offers transparent pricing packages for basic, standard, premium, and luxury builds.";
            keywords = "construction packages, construction cost, building cost, home construction packages, pricing";
        }
         // Compare Packages Page
        else if (path === '/compare-packages') {
            title = "Detailed Package Comparison";
            description = "Compare all features of our Basic, Standard, Premium, and Luxury construction packages side-by-side. Make an informed decision for your project.";
            keywords = "compare construction packages, package features, construction specifications, building materials comparison, transparent pricing";
        }
        // Contact Page
        else if (path === '/contact') {
            title = "Contact Us for a Free Quote";
            description = "Get in touch with Construction Buddy to start your next project. Contact us for a free quote and consultation for your construction needs in Bangalore.";
            keywords = "contact construction company, get a quote, construction consultation";
        }
        // Referral Page
        else if (path === '/referral') {
            title = "Refer a Friend Program";
            description = "Refer a friend to Construction Buddy and earn rewards up to ₹1,00,000. Learn more about our referral program and submit your referral today.";
            keywords = "refer a friend, construction referral program, earn rewards, construction buddy";
        }

        document.title = `${title} | ${COMPANY_NAME}`;
        setMetaTag('description', description);
        setMetaTag('keywords', keywords);

    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground pb-16 md:pb-0">
            <TopBar />
            <Header theme={theme} toggleTheme={toggleTheme} />
            <SecondaryHeader />
            <main className="flex-grow">
                <Outlet />
            </main>
            <BottomNav />
            <FloatingCTA />
            <FloatingBuildButton />
            <Footer />
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
    <ThemeProvider>
        <HashRouter>
        <ScrollToTop />
        <Routes>
            <Route element={<PageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/compare-packages" element={<ComparePackagesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/referral" element={<ReferralPage />} />
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
        </HashRouter>
    </ThemeProvider>
  );
};

export default App;
