import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import imgWaste from '../assets/external/waste-management.jpg';
import imgInfra from '../assets/external/infrastructure.jpg';
import imgLogistics from '../assets/external/logistics.jpg';
import imgConstruction from '../assets/external/construction-site.jpg';

const projects = [
  {
    title: "Waste Bureau / REDISA",
    location: "National Dealership Network",
    category: "Waste Tyre Logistics",
    image: imgWaste,
    stat: "DEA Partner",
    desc: "Primary transporter of waste tyres from national dealerships to processing depots for the Dept. of Environmental Affairs."
  },
  {
    title: "Eskom / Kusile Site",
    location: "Kusile Power Station",
    category: "Infrastructure Support",
    image: imgInfra,
    stat: "Mobile Solutions",
    desc: "Comprehensive supply, rapid assembly, and professional maintenance of mobile office units at the Kusile Power Station site."
  },
  {
    title: "Bidvest / Siemens",
    location: "Durban / Richard's Bay",
    category: "Specialized Cargo",
    image: imgLogistics,
    stat: "Heavy Logistics",
    desc: "Strategic transportation of heavy transformer appliances and critical cargo from major maritime hubs to power stations."
  },
  {
    title: "Exxaro / Matla Mine",
    location: "Mines 2 & 3",
    category: "Industrial Services",
    image: imgConstruction,
    stat: "Facility Care",
    desc: "Delivering general building maintenance and specialized industrial laundry services for Exxaro at the Matla mining complex."
  }
];

export const ExcellenceAfrica = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    // Fix: Using value.on("change") instead of deprecated value.onChange
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(Math.floor(latest * projects.length), projects.length - 1);
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress, projects.length]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-dark text-left">
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
              src={projects[activeIndex].image} 
              className="w-full h-full object-cover brightness-[0.15] contrast-125 grayscale-[40%]" 
              alt="" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* TOP ZONE: Static Header */}
        <div className="container mx-auto px-6 lg:px-16 z-50 pointer-events-none relative">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-secondary"></div>
            <div className="flex flex-col">
              <span className="text-secondary font-black text-[9px] tracking-[0.5em] uppercase">African Footprint</span>
              <span className="text-white/30 text-[8px] font-light uppercase tracking-widest">Established 2012</span>
            </div>
          </div>
        </div>

        {/* MIDDLE ZONE: Dynamic Content */}
        <div className="relative z-40 flex items-center overflow-hidden pointer-events-none">
          <div className="container mx-auto px-6 lg:px-16 w-full">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-6xl w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-secondary font-black text-xl italic text-left">0{activeIndex + 1}</span>
                  <div className="w-8 h-[1px] bg-white/10"></div>
                  <span className="text-white/40 font-black text-[9px] uppercase tracking-[0.4em] text-left">
                    {projects[activeIndex].location}
                  </span>
                </div>

                <h4 className="text-5xl md:text-[8vw] font-black text-white uppercase leading-[0.9] tracking-tighter mb-6 text-left">
                  {projects[activeIndex].title}
                </h4>

                <div className="grid md:grid-cols-2 gap-8 items-start text-left">
                  <div className="space-y-6 text-left">
                    <p className="text-lg md:text-xl text-white/60 font-light italic leading-relaxed max-w-md text-left">
                      {projects[activeIndex].desc}
                    </p>
                    <div className="inline-block px-4 py-1.5 bg-secondary text-primary font-black text-[8px] uppercase tracking-widest rounded-xl">
                      {projects[activeIndex].category}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end md:text-right pt-2">
                    <span className="text-white/10 font-black text-[9px] uppercase tracking-[0.5em] mb-2 text-left md:text-right">Impact Stat</span>
                    <span className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter text-left md:text-right">
                      {projects[activeIndex].stat}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM ZONE */}
        <div className="container mx-auto px-6 lg:px-16 z-50 flex items-end justify-between pointer-events-none relative">
           <div className="flex flex-col gap-4 text-left">
              <div className="flex items-center gap-2">
                {projects.map((_, i) => (
                  <div key={i} className={`h-[2px] transition-all duration-500 ${activeIndex === i ? 'w-8 bg-secondary' : 'w-2 bg-white/10'}`} />
                ))}
              </div>
              <div className="flex items-center gap-6">
                <span className="text-secondary font-black text-[9px] tracking-widest uppercase italic text-left">0{activeIndex + 1} / 04</span>
                <div className="w-32 md:w-48 h-[1px] bg-white/10 relative overflow-hidden">
                   <motion.div style={{ scaleX: scrollYProgress }} className="absolute inset-0 bg-secondary origin-left" />
                </div>
              </div>
           </div>
           
           <Link to="/portfolio" className="pointer-events-auto group px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black uppercase text-[9px] tracking-widest hover:bg-white hover:text-primary transition-all rounded-2xl">
              Portfolio <i className="bi bi-arrow-up-right ml-2 group-hover:rotate-45 transition-transform inline-block"></i>
           </Link>
        </div>

      </div>
    </section>
  );
};

export default ExcellenceAfrica;
