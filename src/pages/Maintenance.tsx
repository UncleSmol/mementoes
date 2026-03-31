import { motion } from 'framer-motion';
import logo from '../assets/Mementoes Logo.png';

const Maintenance = () => {
  return (
    <div className="relative min-h-screen w-full bg-dark flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/15 blur-[200px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] bg-secondary/10 blur-[180px] pointer-events-none" />

      {/* Large Background Watermark */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] md:text-[25vw] font-black text-white leading-none select-none pointer-events-none uppercase whitespace-nowrap"
      >
        Mementoes
      </motion.span>

      {/* Vertical Side Text */}
      <div className="absolute left-6 md:left-12 bottom-6 md:bottom-12 hidden lg:block">
        <span
          className="text-white/10 text-xs font-black uppercase tracking-[1em]"
          style={{ writingMode: 'vertical-rl' }}
        >
          MEMENTOES TRADING 2026
        </span>
      </div>

      {/* Top Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent origin-center"
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-16 relative z-10 text-center">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12 md:mb-16"
          >
            <div className="w-24 md:w-32 h-auto bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 flex items-center justify-center rounded-2xl">
              <img
                src={logo}
                alt="Mementoes Trading"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Section Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 mb-8 md:mb-10"
          >
            <div className="w-8 md:w-12 h-[1px] bg-secondary" />
            <span className="text-secondary font-black text-[10px] md:text-xs tracking-[0.6em] uppercase">
              Under Development
            </span>
            <div className="w-8 md:w-12 h-[1px] bg-secondary" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[8vw] font-black text-white uppercase leading-[0.85] tracking-tighter mb-6 md:mb-8"
          >
            Page Under
            <br />
            <span className="text-secondary italic font-light">Maintenance</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-gray-400 text-base md:text-xl lg:text-2xl font-light max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed"
          >
            We are currently building something extraordinary. Our new digital experience is being crafted with precision and will be unveiled soon.
          </motion.p>

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
          >
            {/* Live Pulse */}
            <div className="flex items-center gap-3">
              <div className="relative w-3 h-3">
                <span className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-40" />
                <span className="absolute inset-0.5 bg-secondary rounded-full" />
              </div>
              <span className="text-secondary font-black text-[10px] uppercase tracking-[0.4em]">
                In Progress
              </span>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-6 bg-white/10" />

            {/* Contact CTA */}
            <a
              href="mailto:info@mementoes360.co.za"
              className="group relative px-8 py-4 md:px-10 md:py-5 bg-white/5 border border-white/10 text-white font-black uppercase text-[10px] md:text-xs tracking-[0.3em] overflow-hidden transition-all hover:border-secondary hover:text-secondary rounded-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                <i className="bi bi-envelope text-sm" />
                Contact Us
              </span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-16 md:mt-20 flex items-center gap-5"
          >
            <a
              href="https://www.facebook.com/profile.php?id=100063811852754&locale=gn_PY#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 text-white/30 hover:text-secondary hover:border-secondary transition-all rounded-xl"
            >
              <i className="bi bi-facebook text-lg" />
            </a>
            <a
              href="https://mementoes360.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 text-white/30 hover:text-secondary hover:border-secondary transition-all rounded-xl"
            >
              <i className="bi bi-lightning-charge text-lg" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent origin-center"
      />
    </div>
  );
};

export default Maintenance;
