import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Parallax transforms
  const yBg = useTransform(springScroll, [0, 1], ["0%", "40%"]);
  const yText = useTransform(springScroll, [0, 1], ["0%", "120%"]);
  const opacity = useTransform(springScroll, [0, 0.7], [1, 0]);
  const scale = useTransform(springScroll, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-screen lg:h-[120vh] w-full flex items-center justify-start overflow-hidden bg-dark pt-24 lg:pt-20">
      {/* Background with heavy parallax */}
      <motion.div 
        style={{ y: yBg, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1761287347782-f3b433c0cee3?q=80&w=2000&auto=format&fit=crop" 
          alt="Immersive Construction" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-dark/60 to-dark"></div>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div style={{ y: yText, opacity }} className="max-w-5xl">
          {/* Tagline Reveal */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6 md:mb-8"
          >
            <div className="w-12 md:w-16 h-[2px] bg-secondary"></div>
            <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.5em]">
              Level 1 B-BBEE • Women Owned
            </span>
          </motion.div>
          
          {/* Main Title with Split-Mask Reveal */}
          <h1 className="text-5xl md:text-7xl lg:text-[10vw] font-black text-white leading-[0.9] md:leading-[0.85] uppercase tracking-tighter mb-8 md:mb-10">
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Building
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block text-secondary"
              >
                Legacies
              </motion.span>
            </span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12"
          >
            <p className="text-lg md:text-2xl text-gray-300 font-light max-w-xl leading-relaxed">
              We redefine logistics, waste management, and construction through an eco-conscious lens. Precision engineering meets environmental stewardship.
            </p>
            
            <Link 
              to="/contact" 
              className="group relative px-10 py-5 md:px-12 md:py-6 bg-secondary text-dark font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 text-sm md:text-base"
            >
              <span className="relative z-10">Start a Project</span>
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Side Vertical Text - Awwwards Stylizing */}
      <div className="absolute right-12 bottom-24 hidden lg:block z-10 pointer-events-none">
        <span className="text-white/10 text-9xl font-black uppercase vertical-text select-none" style={{ writingMode: 'vertical-rl' }}>
          MEMENTOES
        </span>
      </div>

      {/* Bottom Progress Bar Indicator */}
      <motion.div 
        style={{ scaleX: scrollYProgress }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-secondary origin-left z-20"
      />
    </section>
  );
};

export default Hero;
