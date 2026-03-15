import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Mementoes Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Scroll logic for hiding/showing desktop nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setIsScrolled(currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/', icon: 'bi-house' },
    { name: 'About Us', path: '/about', icon: 'bi-people' },
    { name: 'Services', path: '/services', icon: 'bi-grid' },
    { name: 'Portfolio', path: '/portfolio', icon: 'bi-collection' },
    { name: 'Contact', path: '/contact', icon: 'bi-envelope' },
  ];

  return (
    <>
      {/* 1. DESKTOP NAVIGATION (lg+ only) */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] px-10 py-8 hidden lg:flex items-center justify-between transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${isScrolled ? 'bg-dark/80 backdrop-blur-md py-6 shadow-2xl' : 'bg-transparent'}`}>
        <Link to="/">
          <img src={logo} alt="Mementoes" className="h-12 w-auto object-contain" />
        </Link>
        
        <div className="flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:text-secondary ${
                location.pathname === link.path ? 'text-secondary' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-8 py-3 bg-secondary text-primary font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all">
            Get Started
          </Link>
        </div>
      </nav>

      {/* 2. MOBILE FIXED HEADER (Hides on scroll down, shows on scroll up) */}
      <div className={`fixed top-0 left-0 right-0 z-[120] px-6 py-6 flex items-center justify-between lg:hidden transition-all duration-500 transform ${
        isVisible || isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${isScrolled || isMenuOpen ? 'bg-dark/90 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="Mementoes" className="h-8 w-auto object-contain" />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-primary text-white shadow-2xl group flex items-center justify-center border-l-4 border-secondary w-20 h-14 md:w-24 md:h-16"
        >
          <svg className={`ham hamRotate ham4 ${isMenuOpen ? 'active' : ''}`} viewBox="0 0 100 100" width="60">
            <path
                  className="line top"
                  d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
            <path
                  className="line middle"
                  d="m 70,50 h -40" />
            <path
                  className="line bottom"
                  d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
          </svg>
        </button>
      </div>

      {/* 3. KINETIC FULL-SCREEN MENU OVERLAY (Uses dvh for perfect fit) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[110] bg-dark/98 backdrop-blur-3xl flex items-center justify-center overflow-hidden lg:hidden h-dvh w-full"
          >
            {/* Background Decorative Text */}
            <span className="absolute bottom-0 left-0 text-[30vw] font-black text-white/[0.02] leading-none select-none pointer-events-none uppercase z-0">
              Menu
            </span>

            <div className="container mx-auto px-10 grid gap-10 items-center relative z-10">
              <nav className="flex flex-col gap-4 w-full text-left">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-4xl font-black uppercase tracking-tighter transition-all hover:text-secondary group flex items-center justify-start gap-6 ${
                        location.pathname === link.path ? 'text-secondary' : 'text-white'
                      }`}
                    >
                      <i className={`bi ${link.icon} text-lg text-white/20 group-hover:text-secondary transition-colors`}></i>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 flex flex-col items-start gap-6"
                >
                   <div className="flex gap-6">
                     <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 text-white/40 hover:text-secondary hover:border-secondary transition-all">
                       <i className="bi bi-linkedin text-xl"></i>
                     </a>
                     <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 text-white/40 hover:text-secondary hover:border-secondary transition-all">
                       <i className="bi bi-facebook text-xl"></i>
                     </a>
                     <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 text-white/40 hover:text-secondary hover:border-secondary transition-all">
                       <i className="bi bi-instagram text-xl"></i>
                     </a>
                   </div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
