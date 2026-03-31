import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Maintenance = lazy(() => import('./pages/Maintenance'));
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const Mementoes360 = lazy(() => import('./pages/Mementoes360'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Page404 = lazy(() => import('./pages/Page404'));

// Component to handle scroll reset on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LoadingFallback() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-dark">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
        <span className="text-white/30 font-black text-[9px] uppercase tracking-[0.5em]">Loading</span>
      </div>
    </div>
  );
}

const NO_CHROME_ROUTES = ['/'];

function AppLayout() {
  const { pathname } = useLocation();
  const hideChrome = NO_CHROME_ROUTES.includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideChrome && <Navbar />}
      <main className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Maintenance />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mementoes360" element={<Mementoes360 />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </main>
      {!hideChrome && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}

export default App;
