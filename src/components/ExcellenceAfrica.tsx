import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Logistics Hub",
    location: "Gauteng",
    category: "Regional Flow",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600",
    stat: "45k SQM",
    desc: "Architecting the future of African material movement with surgical precision."
  },
  {
    title: "Waste Tech",
    location: "Mpumalanga",
    category: "Ethical Disposal",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1600",
    stat: "100% Compliant",
    desc: "Engineering sustainable methodologies for the continent's centers."
  },
  {
    title: "Civil Network",
    location: "Western Cape",
    category: "Structural Form",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600",
    stat: "120km Grid",
    desc: "Building foundations of African growth through civil infrastructure."
  },
  {
    title: "Industrial",
    location: "KwaZulu-Natal",
    category: "Modern Base",
    image: "https://images.unsplash.com/photo-1489515229412-1f3a8f08dc34?q=80&w=1600",
    stat: "Level 1 Built",
    desc: "Creating structural landmarks that stand the test of time."
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
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark opacity-90" />
          </motion.div>
        </AnimatePresence>

        {/* TOP ZONE: Static Header */}
        <div className="container mx-auto px-6 lg:px-16 z-50 pointer-events-none relative">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-secondary"></div>
            <div className="flex flex-col">
              <span className="text-secondary font-black text-[9px] tracking-[0.5em] uppercase">African Footprint</span>
              <span className="text-white/30 text-[8px] font-light uppercase tracking-widest">Est. 2024</span>
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
                    <div className="inline-block px-4 py-1.5 bg-secondary text-primary font-black text-[8px] uppercase tracking-widest">
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
           
           <Link to="/portfolio" className="pointer-events-auto group px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black uppercase text-[9px] tracking-widest hover:bg-white hover:text-primary transition-all">
              Portfolio <i className="bi bi-arrow-up-right ml-2 group-hover:rotate-45 transition-transform inline-block"></i>
           </Link>
        </div>

      </div>
    </section>
  );
};

export default ExcellenceAfrica;
