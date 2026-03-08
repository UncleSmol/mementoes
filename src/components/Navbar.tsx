import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Mementoes Logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-2xl shadow-primary/5' : 'bg-transparent py-10'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Mementoes" className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'} w-auto object-contain`} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-16">
          <ul className="flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={`relative text-xs font-black uppercase tracking-[0.3em] transition-all hover:tracking-[0.5em] group ${
                    location.pathname === link.path ? 'text-secondary' : isScrolled ? 'text-primary' : 'text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-secondary text-primary font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-secondary/20"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Hamburger */}
        <button 
          className={`lg:hidden flex flex-col gap-2 z-[110] ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-8 h-[2px] bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></span>
          <span className={`w-8 h-[2px] bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-8 h-[2px] bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 h-screen w-screen bg-secondary z-[105] flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="flex flex-col items-center gap-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl md:text-8xl font-black text-primary uppercase tracking-tighter hover:italic transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-12 text-2xl font-black text-white uppercase tracking-widest border-b-8 border-primary pb-4"
              >
                Start a Project
              </Link>

              {/* Small logo at the bottom of mobile menu - in white container */}
              <div className="mt-20 group bg-white p-2 shadow-xl">
                <img src={logo} alt="Mementoes" className="h-6 w-auto object-contain" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
