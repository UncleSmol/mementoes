import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const NO_SCROLL_TOP_ROUTES = ['/'];

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();
  const hideOnRoute = NO_SCROLL_TOP_ROUTES.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (hideOnRoute) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[90] w-12 h-12 md:w-14 md:h-14 bg-primary text-white flex items-center justify-center shadow-2xl hover:bg-secondary hover:text-primary transition-all active:scale-90 rounded-2xl"
          aria-label="Scroll to top"
        >
          <i className="bi bi-chevron-up text-xl md:text-2xl"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
