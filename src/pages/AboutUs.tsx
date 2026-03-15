import { motion, useScroll, useTransform, useSpring, MotionValue, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Word = ({ word, range, progress }: { word: string, range: [number, number], progress: MotionValue<number> }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ["#1e4a9b", "#fcb040"]);
  const isSpecial = word === "Silence" || word === "Legacy" || word === "Evolution" || word === "Black" || word === "Women" || word === "Owned" || word === "Advocacy";
  return (
    <motion.span style={{ opacity, color: isSpecial ? color : "#1e4a9b" }} className={`inline-block mr-[0.2em] ${isSpecial ? "font-black uppercase italic" : ""}`}>
      {word}
    </motion.span>
  );
};

const RevealText = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(" ");
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start 90%", "end 20%"] });
  return (
    <h2 ref={container} className={`${className} relative text-left`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
      })}
    </h2>
  );
};

const ValidatedExcellence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const catalysts = [
    {
      id: "01",
      name: "Exxaro Resources",
      role: "Industrial Partner",
      image: "https://www.moneyweb.co.za/wp-content/uploads/2014/10/Exxaro-Growthpoint-22-1024x768.jpg",
      logo: "https://th.bing.com/th/id/OIP.MIBoL61C8rkZW5IkOCYpIAHaD3?w=345&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      desc: "In strategic partnership with SAICA, we ensure rigorous operational success for large-scale industrial landscapes.",
      stat: "Host Built",
      label: "Impact Node",
      color: "secondary"
    },
    {
      id: "02",
      name: "SAB / ABInBev",
      role: "Supply Chain Finalist",
      image: "https://mg.co.za/wp-content/uploads/2020/02/bbabb99e-sab-johannesburg-.jpeg",
      logo: "https://www.sab.co.za/sites/g/files/seuoyk2041/files/brand_0.png",
      desc: "Accelerating supply-chain readiness through elite business mentoring to catalyze sustainable jobs and market access.",
      stat: "Finalist 8",
      label: "Global Status",
      color: "primary"
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(Math.floor(latest * catalysts.length), catalysts.length - 1);
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress, catalysts.length]);

  const xTitle = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-dark text-left">
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
              src={catalysts[activeIndex].image} 
              className="w-full h-full object-cover brightness-[0.15] contrast-125 grayscale-[40%]" 
              alt="" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark opacity-90" />
          </motion.div>
        </AnimatePresence>

        {/* TOP ZONE */}
        <div className="container mx-auto px-6 lg:px-16 z-50 pointer-events-none relative">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-secondary"></div>
            <div className="flex flex-col">
              <span className="text-secondary font-black text-[9px] tracking-[0.5em] uppercase text-left">Validated Excellence</span>
              <span className="text-white/30 text-[8px] font-light uppercase tracking-widest mt-1">Strategic Catalyst</span>
            </div>
          </div>
        </div>

        {/* Dynamic Title Watermark */}
        <motion.div style={{ x: xTitle }} className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none opacity-[0.03] z-10 text-left">
          <span className="text-[25vw] font-black text-white uppercase leading-none">STRATEGIC</span>
        </motion.div>

        {/* MIDDLE ZONE */}
        <div className="relative z-40 flex items-center overflow-hidden pointer-events-none">
          <div className="container mx-auto px-6 lg:px-16 w-full">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-6xl w-full pointer-events-auto"
              >
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                  <div className="lg:col-span-5 text-left">
                    <div className="flex items-center gap-4 mb-6 md:mb-12 text-left">
                      <div className="w-12 md:w-20 h-[2px] bg-secondary text-left"></div>
                      <span className="text-secondary font-black text-[10px] md:text-xs tracking-[0.5em] md:tracking-[0.8em] uppercase">Catalyst {catalysts[activeIndex].id}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-[6vw] font-black text-white uppercase leading-[0.85] tracking-tighter mb-6 lg:mb-0 text-left flex flex-col items-start gap-4 md:gap-8">
                      <div className="bg-white p-3 md:p-4 shadow-2xl border-l-[8px] border-secondary">
                        <img src={catalysts[activeIndex].logo} alt="" className="h-6 md:h-12 w-auto object-contain" />
                      </div>
                      <span className="text-secondary italic font-light text-left text-xl md:text-4xl">{catalysts[activeIndex].role}</span>
                    </h2>
                  </div>
                  <div className="lg:col-span-7 flex justify-end">
                    <div className="bg-dark/50 backdrop-blur-2xl p-6 md:p-10 text-white relative shadow-2xl border-l-[8px] md:border-l-[12px] border-secondary w-full max-w-2xl lg:ml-auto">
                      <p className="text-base md:text-xl font-light italic leading-relaxed mb-6 md:mb-10 opacity-80">
                        "{catalysts[activeIndex].desc}"
                      </p>
                      <div className="flex flex-wrap gap-6 md:gap-10 items-end">
                         <div className="flex flex-col"><span className="text-secondary font-black text-[9px] md:text-[10px] uppercase mb-1 md:mb-2 tracking-[0.4em]">{catalysts[activeIndex].label}</span><span className="text-xl md:text-3xl font-black uppercase tracking-tighter">{catalysts[activeIndex].stat}</span></div>
                         <Link to="/portfolio" className="px-6 py-3 md:px-8 md:py-4 border border-white/20 text-white font-black uppercase text-[8px] md:text-[9px] tracking-[0.4em] hover:bg-white hover:text-primary transition-all ml-auto">Details</Link>
                      </div>
                    </div>
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
                {catalysts.map((_, i) => (
                  <div key={i} className={`h-[2px] transition-all duration-500 ${activeIndex === i ? 'w-8 bg-secondary' : 'w-2 bg-white/10'}`} />
                ))}
              </div>
              <div className="flex items-center gap-6">
                <span className="text-secondary font-black text-[10px] tracking-widest uppercase italic text-left">0{activeIndex + 1} / 02</span>
                <div className="w-32 md:w-48 h-[1px] bg-white/10 relative overflow-hidden">
                   <motion.div style={{ scaleX: scrollYProgress }} className="absolute inset-0 bg-secondary origin-left" />
                </div>
              </div>
           </div>
           <span className="text-primary font-black text-[10px] tracking-widest uppercase">Chapter Progression</span>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const yBg = useTransform(smoothScroll, [0, 0.2], ["0%", "40%"]);
  const yImageParallax = useTransform(smoothScroll, [0.1, 0.4], ["0%", "15%"]);
  const floatingY = useTransform(smoothScroll, [0, 1], [0, -400]);
  const yTextHero = useTransform(smoothScroll, [0, 0.2], ["0%", "120%"]);

  return (
    <div ref={containerRef} className="bg-white text-left relative overflow-x-hidden scrollbar-hide">
      {/* Hero Section - Standardized */}
      <section className="relative h-screen w-full flex items-center bg-dark overflow-hidden pt-24 md:pt-0">
        <motion.div style={{ y: yBg, scale: 1.1 }} className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=2000" className="w-full h-full object-cover grayscale brightness-[0.3] contrast-125" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark" />
        </motion.div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-left">
          <motion.div style={{ y: yTextHero }}>
            <div className="flex items-center gap-4 mb-6 md:mb-10 text-left">
              <div className="w-12 md:w-16 h-[2px] bg-secondary text-left"></div>
              <span className="text-secondary font-black text-[10px] md:text-xs tracking-[0.5em] uppercase text-left">Established 2012</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-[10vw] font-black text-white uppercase leading-[0.9] tracking-tighter text-left">The Mementoes <br /><span className="text-secondary italic font-light text-left">Story</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 md:py-40 lg:py-60 border-b border-gray-50 overflow-hidden text-left bg-white">
        <motion.span style={{ y: floatingY }} className="absolute top-0 right-0 text-[20vw] font-black text-primary/[0.02] leading-none pointer-events-none select-none -z-10">EVOLUTION</motion.span>
        <div className="container mx-auto px-6 lg:px-16 text-left">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start text-left">
            <div className="lg:col-span-8 text-left">
              <RevealText text="Breaking Silence Forging Legacy" className="text-3xl md:text-7xl lg:text-8xl font-black text-primary uppercase leading-[0.9] mb-8 md:mb-12 tracking-tighter" />
              <div className="space-y-8 md:space-y-12 max-w-3xl">
                <h3 className="text-lg md:text-3xl font-light text-primary italic leading-tight border-l-4 md:border-l-8 border-secondary pl-6 md:pl-8">"Nature holds no voice of its own. We have made it our mission to be the echo of the environment."</h3>
                <div className="space-y-8 md:space-y-10 max-w-2xl text-left">
                  <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed text-left">Founded in 2012 by <span className="font-bold text-primary italic">Zodwa Mlangeni</span>, Mementoes Trading has scaled from a local endeavor into a multi-sector force serving a 100km radius from Witbank.</p>
                  <div className="flex flex-wrap gap-8 md:gap-12 pt-4">
                     <div className="flex flex-col"><span className="text-3xl md:text-4xl font-black text-primary leading-none">07</span><span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-secondary mt-2 md:mt-3">Sustainable Jobs</span></div>
                     <div className="flex flex-col border-l border-gray-100 pl-8 md:pl-12"><span className="text-3xl md:text-4xl font-black text-primary leading-none">100KM</span><span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-secondary mt-2 md:mt-3">Operational Radius</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 relative pt-12 lg:pt-40">
              <div className="w-full aspect-[4/5] bg-primary shadow-2xl relative">
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img 
                    style={{ y: yImageParallax }}
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200" 
                    className="w-full h-[120%] object-cover brightness-75 grayscale contrast-125" 
                    alt="" 
                  />
                </div>
                <div className="absolute bottom-0 right-0 p-6 md:p-10 bg-secondary text-primary font-black text-[10px] md:text-sm uppercase tracking-widest z-20 shadow-2xl translate-x-4 translate-y-4">100% BLACK <br />WOMEN OWNED</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden py-20 bg-gray-50 px-6">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-10 h-[2px] bg-secondary" />
           <span className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase">Core Pillars</span>
        </div>
        <div className="space-y-4">
          {[
            { title: "Vision", desc: "Redefining industrial standards through advocacy and structural precision." },
            { title: "Mission", desc: "Delivering world-class logistics that preserves the silent environment." },
            { title: "Edge", desc: "A highly competent workforce executing with holistic rigor." }
          ].map((p, i) => (
            <div key={i} className="p-8 bg-white border-l-4 border-secondary shadow-sm">
              <h4 className="text-xl font-black text-primary uppercase mb-2">{p.title}</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ValidatedExcellence />

      <section className="relative py-24 md:py-60 w-full flex items-center justify-center bg-primary overflow-hidden text-center">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-5xl md:text-[10rem] font-black text-white uppercase leading-none mb-12 md:mb-16 tracking-tighter">Let's <br /> <span className="text-secondary italic">Scale</span></h2>
            <button className="inline-block px-10 py-5 md:px-16 md:py-8 bg-secondary text-primary font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl active:scale-95 text-xl md:text-2xl">Join Our Network</button>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.03] uppercase pointer-events-none whitespace-nowrap">GROWTH</div>
      </section>
    </div>
  );
};

export default AboutUs;
