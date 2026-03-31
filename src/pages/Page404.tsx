import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <section className="relative min-h-screen w-full bg-dark flex items-center justify-center overflow-hidden">
      {/* Background Parallax Number */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <h1 className="text-[40vw] font-black text-white leading-none">404</h1>
      </motion.div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/20 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-secondary"></div>
            <span className="text-secondary font-black text-xs tracking-[0.6em] uppercase">Route Error</span>
            <div className="w-12 h-[1px] bg-secondary"></div>
          </div>

          <h2 className="text-5xl md:text-8xl font-black text-white uppercase leading-none mb-8 tracking-tighter">
            Lost in <br />
            <span className="text-secondary italic font-light">Transit</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl font-light max-w-lg mx-auto mb-12 leading-relaxed">
            The page you are looking for has been moved, removed, or never existed in our current infrastructure.
          </p>

          <Link 
            to="/" 
            className="inline-block group relative px-12 py-6 bg-secondary text-primary font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-secondary/20"
          >
            <span className="relative z-10">Back to Base</span>
            <motion.div 
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </Link>
        </motion.div>
      </div>

      {/* Vertical Side Text */}
      <div className="absolute left-12 bottom-12 hidden lg:block">
        <span className="text-white/10 text-xs font-black uppercase tracking-[1em] vertical-text" style={{ writingMode: 'vertical-rl' }}>
          MEMENTOES TRADING
        </span>
      </div>
    </section>
  );
};

export default Page404;
