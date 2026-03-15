import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

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
    desc: "Deploying a self-owned, high-performance fleet ranging from 1-ton bakkies to 9-ton trucks. Our logistics division is defined by operational precision and absolute reliability.",
    details: ["1-Ton to 9-Ton Fleet Capacity", "Specialized Capacity Trailers", "Professional PrDP Certified Drivers", "Strategic Freight Management"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600"
  },
  {
    id: "waste",
    title: "Waste Tech",
    subtitle: "Eco-Management",
    desc: "Comprehensive collection and transportation of specialized waste streams. We mitigate environmental impact through rigorous regulatory compliance.",
    details: ["Specialized Waste Tyre Logistics", "Hazardous Material Handling", "General Waste & Recyclables", "Eco-Conscious Disposal Chains"],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1600"
  },
  {
    id: "maintenance",
    title: "Infrastructure",
    subtitle: "Maintenance Care",
    desc: "High-end building maintenance and repair services designed to preserve structural value and operational continuity.",
    details: ["Concrete & Bricklaying Works", "Expert Plumbing & Carpentry", "Professional Painting Services", "Civils Infrastructure Upkeep"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600"
  },
  {
    id: "parkhomes",
    title: "Parkhome",
    subtitle: "Mobile Solutions",
    desc: "Full lifecycle management of mobile office units. From initial supply and assembly to professional relocation and maintenance.",
    details: ["Supply & Rapid Assembly", "Professional Unit Relocation", "Infrastructure Maintenance", "Custom Mobile Office Logic"],
    image: "https://www.kwikspace.co.za/wp-content/uploads/2025/02/Prefab-buildings-for-Sale.jpg"
  }
];

const ServiceBackground = ({ s, i, progress }: { s: Service, i: number, progress: MotionValue<number> }) => {
  const start = i / services.length;
  const end = (i + 1) / services.length;
  const opacity = useTransform(progress, [start - 0.1, start, end, end + 0.1], [0, 1, 1, 0]);
  
  return (
    <motion.div style={{ opacity }} className="absolute inset-0 will-change-transform">
      <img src={s.image} className="w-full h-full object-cover brightness-[0.2] contrast-125 grayscale-[30%]" alt="" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark" />
    </motion.div>
  );
};

const ServiceContent = ({ s, i, progress }: { s: Service, i: number, progress: MotionValue<number> }) => {
  const start = i / services.length;
  const end = (i + 1) / services.length;
  const opacity = useTransform(progress, [start - 0.1, start, end, end + 0.1], [0, 1, 1, 0]);
  const y = useTransform(progress, [start - 0.1, start, end, end + 0.1], [60, 0, 0, -60]);
  const scale = useTransform(progress, [start - 0.1, start, end, end + 0.1], [0.9, 1, 1, 0.9]);

  return (
    <motion.div style={{ opacity, y, scale }} className="absolute inset-0 flex flex-col justify-center translate-y-[-5%] md:translate-y-0 will-change-transform pointer-events-none pb-6 md:pb-24 px-4 md:px-0">
      <div className="max-w-6xl w-full pointer-events-auto overflow-hidden">
        <div className="flex items-center gap-3 mb-3 md:mb-6">
          <span className="text-secondary font-black text-lg md:text-xl italic">0{i+1}</span>
          <div className="w-8 md:w-12 h-[1px] bg-white/20" />
          <span className="text-white/40 font-black text-[8px] md:text-[9px] uppercase tracking-[0.4em]">Service Pillar</span>
        </div>
        <h2 className="text-2xl md:text-5xl lg:text-[5.5vw] font-black text-white uppercase leading-[0.9] tracking-tighter mb-4 md:mb-8">{s.title}<br /><span className="text-secondary italic font-light">{s.subtitle}</span></h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-16 items-start">
          <div className="space-y-4 md:space-y-6">
            <p className="text-sm md:text-lg lg:text-xl text-white/70 font-light italic leading-relaxed max-w-lg">"{s.desc}"</p>
            <Link to="/contact" className="inline-block px-6 py-2.5 md:px-10 md:py-4 bg-secondary text-primary font-black uppercase text-[9px] md:text-[10px] tracking-widest hover:bg-white transition-all">Request Solution</Link>
          </div>
          <div className="flex flex-col gap-1.5 md:gap-3 border-l border-white/10 pl-4 md:pl-12">
            {s.details.map((d, di) => (
              <div key={di} className="flex items-center gap-3 group">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-secondary opacity-40 group-hover:opacity-100 transition-opacity" />
                <span className="text-white font-light text-[11px] md:text-base tracking-wide">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ChapterBar = ({ i, progress }: { i: number, progress: MotionValue<number> }) => {
  const scaleX = useTransform(progress, [i/4, (i+1)/4], [0, 1]);
  return (
    <motion.div className="h-[2px] bg-white/10 relative overflow-hidden w-8 md:w-16">
      <motion.div style={{ scaleX }} className="absolute inset-0 bg-secondary origin-left" />
    </motion.div>
  );
};

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
      <motion.div style={{ y: yContent }} className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
           <span className="text-secondary font-black text-xs tracking-[0.5em] uppercase mb-10 block">Ready to Start?</span>
           <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-white uppercase leading-[0.8] tracking-tighter mb-16">
             Build your <br />
             <span className="text-secondary italic font-light">Legacy</span>
           </h2>
           <Link 
            to="/contact" 
            className="inline-block px-10 py-5 md:px-16 md:py-8 bg-secondary text-primary font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl text-xl md:text-2xl"
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
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const xTitle = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);
  const yTextHero = useTransform(smoothProgress, [0, 0.2], ["0%", "120%"]);
  const yBgHero = useTransform(smoothProgress, [0, 0.2], ["0%", "40%"]);

  return (
    <div ref={containerRef} className="bg-dark selection:bg-secondary selection:text-white overflow-x-hidden scrollbar-hide relative">
      {/* Hero Section - Standardized */}
      <section className="h-screen w-full flex items-center justify-center bg-dark relative overflow-hidden pt-20">
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <motion.div
            style={{ y: yTextHero }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-secondary" />
              <span className="text-secondary font-black text-xs tracking-[0.5em] uppercase">Core Capabilities</span>
              <div className="w-12 h-[1px] bg-secondary" />
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-[10vw] font-black text-white uppercase leading-[0.9] tracking-tighter">
              Integrated <br />
              <span className="text-secondary italic font-light">Excellence</span>
            </h1>
          </motion.div>
        </div>
        <motion.div 
          style={{ y: yBgHero }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000')] bg-cover bg-center grayscale brightness-[0.15] contrast-125 opacity-50" 
        />
      </section>

      <div className="relative h-[500vh] bg-dark text-left">
        <div className="sticky top-0 h-screen w-full overflow-hidden grid grid-rows-[auto_1fr_auto] pt-24 pb-4 md:pt-20 md:pb-8 lg:pt-24 lg:pb-12">
          
          {/* BG Layer - Interpolated for smooth cross-fade */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {services.map((s, i) => (
              <ServiceBackground key={s.id} s={s} i={i} progress={smoothProgress} />
            ))}
          </div>

          {/* TOP ZONE */}
          <div className="container mx-auto px-6 lg:px-16 z-50 relative">
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-secondary" />
              <div className="flex flex-col">
                <span className="text-secondary font-black text-[9px] tracking-[0.5em] uppercase">Core Offerings</span>
                <span className="text-white/30 text-[8px] font-light uppercase tracking-widest mt-1">Integrated Network</span>
              </div>
            </div>
          </div>

          {/* MIDDLE ZONE */}
          <div className="relative z-40 flex items-center overflow-hidden h-full">
            <motion.div style={{ x: xTitle }} className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap opacity-[0.03] z-0 pointer-events-none">
              <span className="text-[25vw] font-black text-white uppercase leading-none">CAPABILITIES</span>
            </motion.div>

            <div className="container mx-auto px-6 lg:px-16 w-full h-full relative z-10 flex flex-col justify-center">
              {services.map((s, i) => (
                <ServiceContent key={s.id} s={s} i={i} progress={smoothProgress} />
              ))}
            </div>
          </div>
          {/* BOTTOM ZONE */}
          <div className="container mx-auto px-6 lg:px-16 z-50 flex items-end justify-between relative py-4 md:py-2">
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  {services.map((_, i) => (
                    <ChapterBar key={i} i={i} progress={smoothProgress} />
                  ))}
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-secondary font-black text-[10px] tracking-widest uppercase italic">Chapter Navigation</span>
                  <div className="w-32 md:w-64 h-[1px] bg-white/5 relative overflow-hidden">
                     <motion.div style={{ scaleX: smoothProgress }} className="absolute inset-0 bg-secondary origin-left" />
                  </div>
                </div>
             </div>
             <Link to="/about" className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-black uppercase text-[9px] tracking-widest hover:bg-white hover:text-primary transition-all">Our Story</Link>
          </div>

        </div>
      </div>

      <ServicesCTA />
    </div>
  );
};

export default Services;
