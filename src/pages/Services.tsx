import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imgLogistics from '../assets/external/logistics.jpg';
import imgWaste from '../assets/external/waste-management.jpg';
import imgConstruction from '../assets/external/construction-site.jpg';
import imgParkhome from '../assets/external/kwikspace-parkhome.jpg';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  details: string[];
  image: string;
}

const services: Service[] = [
  {
    id: "logistics",
    title: "Integrated Logistics",
    subtitle: "Fleet & Transport",
    desc: "Our own fleet of trucks from 1-ton bakkies to 9-ton rigs. Reliable transport with professional drivers you can count on.",
    details: ["1-Ton to 9-Ton Fleet Capacity", "Specialized Capacity Trailers", "Professional PrDP Certified Drivers", "Freight Management"],
    image: imgLogistics
  },
  {
    id: "waste",
    title: "Waste Tech",
    subtitle: "Eco-Management",
    desc: "Collection and transport of specialized waste streams. We follow strict environmental regulations to keep things clean and compliant.",
    details: ["Specialized Waste Tyre Logistics", "Hazardous Material Handling", "General Waste & Recyclables", "Responsible Disposal"],
    image: imgWaste
  },
  {
    id: "maintenance",
    title: "Infrastructure",
    subtitle: "Maintenance Care",
    desc: "Building maintenance and repair services to keep your structures in good shape and operations running smoothly.",
    details: ["Concrete & Bricklaying Works", "Expert Plumbing & Carpentry", "Professional Painting Services", "Civils Infrastructure Upkeep"],
    image: imgConstruction
  },
  {
    id: "parkhomes",
    title: "Parkhome",
    subtitle: "Mobile Solutions",
    desc: "Supply, assembly, relocation, and maintenance of mobile office units. We handle the full setup so you can focus on the work.",
    details: ["Supply & Assembly", "Unit Relocation", "Infrastructure Maintenance", "Custom Mobile Offices"],
    image: imgParkhome
  }
];

const ServicesCTA = () => {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });

  const yContent = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const xLegacy = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ctaRef} className="relative py-24 md:py-40 lg:py-60 px-6 lg:px-16 bg-primary overflow-hidden text-center">
      <motion.div style={{ y: yContent }} className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
           <span className="text-secondary font-black text-xs tracking-[0.5em] uppercase mb-10 block text-center">Ready to Start?</span>
           <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-white uppercase leading-[0.8] tracking-tighter mb-16 text-center">
             Build your <br />
             <span className="text-secondary italic font-light text-center">Legacy</span>
           </h2>
           <Link 
            to="/contact" 
             className="inline-block px-10 py-5 md:px-16 md:py-8 bg-secondary text-primary font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl text-xl md:text-2xl rounded-2xl"
           >
             Get a Quote
           </Link>
        </motion.div>
      </motion.div>
      
      <motion.span 
        style={{ x: xLegacy }}
        className="absolute bottom-0 left-0 text-[20vw] font-black text-white/[0.03] leading-none select-none pointer-events-none uppercase whitespace-nowrap"
      >
        Excellence & Precision
      </motion.span>
    </section>
  );
};

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(Math.floor(latest * services.length), services.length - 1);
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const textOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="bg-dark selection:bg-secondary selection:text-white overflow-x-clip scrollbar-hide relative">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-dark">
        <div className="fixed inset-0 z-0">
          <img src={imgConstruction} alt="Integrated Excellence" className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale contrast-125" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-dark/60 to-dark"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div style={{ opacity: textOpacity }} className="max-w-5xl">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-6 md:mb-8"
            >
              <div className="w-12 md:w-16 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.5em]">Core Capabilities</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-[10vw] font-black text-white leading-[0.9] md:leading-[0.85] uppercase tracking-tighter mb-8 md:mb-10">
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="block">Integrated</motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="block text-secondary">Excellence</motion.span>
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12"
            >
              <p className="text-lg md:text-2xl text-gray-300 font-light max-w-xl leading-relaxed">
                From logistics to building maintenance, we cover the full range — so you only need one team.
              </p>
              <Link to="/contact" className="group relative px-10 py-5 md:px-12 md:py-6 bg-secondary text-dark font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 text-sm md:text-base rounded-2xl">
                <span className="relative z-10">Get a Quote</span>
                <motion.div className="absolute inset-0 bg-white" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute right-12 bottom-24 hidden lg:block z-10 pointer-events-none">
          <span className="text-white/10 text-9xl font-black uppercase select-none" style={{ writingMode: 'vertical-rl' }}>MEMENTOES</span>
        </div>
        <motion.div style={{ scaleX: scrollYProgress }} className="absolute bottom-0 left-0 right-0 h-1 bg-secondary origin-left z-20" />
      </section>

      <div className="relative h-[500vh] bg-dark text-left">
        <div className="sticky top-0 h-screen w-full overflow-hidden grid grid-rows-[auto_1fr_auto] py-12 md:py-16">
          
          {/* BG Layer */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img 
                src={services[activeIndex].image} 
                className="w-full h-full object-cover brightness-[0.15] contrast-125 grayscale-[40%]" 
                alt="" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* TOP ZONE */}
          <div className="container mx-auto px-6 lg:px-16 z-50 relative">
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-secondary"></div>
              <span className="text-secondary font-black text-[9px] tracking-[0.5em] uppercase">Core Offerings</span>
            </div>
          </div>

          {/* MIDDLE ZONE */}
          <div className="relative z-40 flex items-center overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16 w-full h-full relative z-10 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-6xl w-full"
                >
                  <div className="flex items-center gap-3 mb-3 md:mb-6 text-left">
                    <span className="text-secondary font-black text-lg md:text-xl italic text-left">0{activeIndex+1}</span>
                    <div className="w-8 md:w-12 h-[1px] bg-white/20" />
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-[6vw] font-black text-white uppercase leading-[0.9] tracking-tighter mb-4 md:mb-8 text-left">
                    {services[activeIndex].title}<br />
                    <span className="text-secondary italic font-light text-left">{services[activeIndex].subtitle}</span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-16 items-start text-left">
                    <div className="space-y-4 md:space-y-6 text-left">
                      <p className="text-sm md:text-lg lg:text-xl text-white/70 font-light italic leading-relaxed max-w-lg text-left">"{services[activeIndex].desc}"</p>
                      <Link to="/contact" className="inline-block px-6 py-2.5 md:px-10 md:py-4 bg-secondary text-primary font-black uppercase text-[9px] md:text-[10px] tracking-widest hover:bg-white transition-all rounded-2xl">Request Solution</Link>
                    </div>
                    <div className="flex flex-col gap-1.5 md:gap-3 border-l border-white/10 pl-4 md:pl-12 text-left">
                      {services[activeIndex].details.map((d, di) => (
                        <div key={di} className="flex items-center gap-3 group text-left">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-secondary opacity-40 group-hover:opacity-100 transition-opacity" />
                          <span className="text-white font-light text-[11px] md:text-base tracking-wide uppercase text-left">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* BOTTOM ZONE */}
          <div className="container mx-auto px-6 lg:px-16 z-50 flex items-end justify-between relative py-4 md:py-2">
             <div className="flex items-center gap-3">
               {services.map((_, i) => (
                 <div key={i} className={`h-[2px] transition-all duration-500 ${activeIndex === i ? 'w-8 bg-secondary' : 'w-2 bg-white/10'}`} />
               ))}
               <span className="text-white/30 font-black text-[10px] tracking-widest uppercase italic ml-4">0{activeIndex + 1} / 04</span>
             </div>
             <Link to="/about" className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-black uppercase text-[9px] tracking-widest hover:bg-white hover:text-primary transition-all rounded-2xl">Our Story</Link>
          </div>

        </div>
      </div>

      <ServicesCTA />
    </div>
  );
};

export default Services;
