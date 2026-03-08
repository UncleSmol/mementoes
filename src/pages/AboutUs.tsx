import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Word = ({ word, range, progress }: { word: string, range: [number, number], progress: any }) => {
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

const InfiniteLogoScroll = () => {
  const associations = [
    { name: "CIDB", logo: "https://mementoes.co.za/WP_mementoes/wp-content/uploads/2023/03/1.png" },
    { name: "Petco", logo: "https://mementoes.co.za/wp-content/uploads/2023/03/8.png" },
    { name: "IWMSA", logo: "https://mementoes.co.za/WP_mementoes/wp-content/uploads/2023/03/3.png" },
  ];
  const duplicatedLogos = [...associations, ...associations, ...associations, ...associations];
  return (
    <div className="h-[40vh] md:h-[50vh] bg-dark overflow-hidden relative flex flex-col justify-center border-y-4 md:border-y-8 border-secondary transform -skew-y-3 z-30 -mt-[5vh] -mb-[5vh]">
      <div className="transform skew-y-3">
        <div className="container mx-auto px-6 lg:px-16 mb-12 text-left">
          <span className="text-secondary font-black text-[10px] tracking-[0.5em] uppercase">Trust Network</span>
        </div>
        <div className="flex relative py-10">
          <motion.div className="flex gap-16 md:gap-32 items-center whitespace-nowrap" animate={{ x: [0, -1200] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            {duplicatedLogos.map((item, i) => (
              <div key={i} className="flex items-center justify-center w-40 md:w-64 h-20 md:h-32 bg-white p-4 shadow-2xl">
                <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ValidatedExcellence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.5) setStage(0);
      else setStage(1);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Smoother, tighter parallax for viewport safety
  const yImage = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const stages = [
    {
      title: "Exxaro ESD",
      tag: "Growth Flow",
      desc: "Partnership driven community development ensuring operational rigor.",
      stat: "Host Built",
      label: "SAICA Partner",
      location: "Witbank Hub",
      image: "https://images.unsplash.com/photo-1578309444784-13760c69be43?q=80&w=1600",
      accent: "border-secondary"
    },
    {
      title: "SAB Boost",
      tag: "Market Scale",
      desc: "Accelerating supply-chain readiness through elite business mentoring.",
      stat: "Finalist 8",
      label: "Job Creation",
      location: "National Impact",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600",
      accent: "border-primary"
    }
  ];

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white text-left">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6 lg:px-16">
        
        {/* Top Marker */}
        <div className="mb-8 md:mb-12 relative z-50">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-secondary"></div>
            <span className="text-secondary font-black text-[9px] tracking-[0.5em] uppercase">Strategic Catalysts</span>
          </div>
        </div>

        <div className="relative z-40 w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={stage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-8 md:gap-16 items-center w-full max-w-7xl"
            >
              {/* Text Side - Compact Safe Zone */}
              <div className="lg:col-span-6 text-left">
                <h2 className="text-5xl md:text-[7vw] font-black text-primary uppercase leading-[0.85] tracking-tighter mb-8">
                  {stages[stage].title.split(" ")[0]} <br />
                  <span className="text-secondary italic font-light">{stages[stage].title.split(" ")[1]}</span>
                </h2>

                <div className="bg-dark p-8 md:p-10 text-white relative shadow-2xl border-l-8 border-secondary">
                  <p className="text-lg md:text-xl font-light italic leading-relaxed mb-8 opacity-80 max-w-md">
                    "{stages[stage].desc}"
                  </p>
                  <div className="flex flex-wrap gap-10 items-end">
                     <div className="flex flex-col">
                        <span className="text-secondary font-black text-[8px] uppercase tracking-widest mb-1">{stages[stage].label}</span>
                        <span className="text-xl md:text-2xl font-black uppercase tracking-tighter">{stages[stage].stat}</span>
                     </div>
                     <Link to="/portfolio" className="px-5 py-2 border border-white/20 text-white font-black uppercase text-[8px] tracking-widest hover:bg-white hover:text-primary transition-all ml-auto">Details</Link>
                  </div>
                </div>
              </div>

              {/* Image Side - Viewport Relative Height */}
              <div className="lg:col-span-6 relative h-[40vh] md:h-[50vh] flex items-center justify-center">
                 <motion.div 
                   style={{ y: yImage }}
                   className={`w-full h-full bg-gray-100 relative shadow-2xl border-8 md:border-[12px] ${stages[stage].accent} transition-colors duration-1000`}
                 >
                    <img 
                      src={stages[stage].image} 
                      className="w-full h-full object-cover grayscale brightness-75 contrast-125" 
                      alt="" 
                    />
                    {/* Floating Info Badge */}
                    <div className="absolute -top-6 -right-4 p-4 md:p-6 bg-dark text-white font-black text-[8px] md:text-[10px] uppercase tracking-widest shadow-xl">
                       {stages[stage].location}
                    </div>
                 </motion.div>
                 
                 {/* Ghost Text Overlay */}
                 <motion.span 
                   style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
                   className="absolute -bottom-10 -left-10 text-[15vw] font-black text-primary/[0.03] pointer-events-none select-none z-[-1]"
                 >
                   PARTNER
                 </motion.span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Progress Indicator */}
        <div className="mt-12 md:mt-24 w-full flex items-center gap-6 relative z-50">
           <span className="text-primary font-black text-[9px] tracking-widest uppercase">0{stage + 1}</span>
           <div className="flex-grow h-[1px] bg-primary/5 relative overflow-hidden">
              <motion.div 
                style={{ scaleX: scrollYProgress }} 
                className="absolute inset-0 bg-secondary origin-left shadow-[0_0_10px_#fcb040]" 
              />
           </div>
           <span className="text-primary font-black text-[9px] tracking-widest uppercase opacity-30">02</span>
        </div>

      </div>
    </section>
  );
};

const StrategicCore = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const pillars = [
    { title: "Our Vision", desc: "To redefine the African industrial standard by integrating surgical precision with eco-conscious innovation.", tag: "The Horizon" },
    { title: "Our Mission", desc: "To deliver superior logistics and construction solutions that protect the silent environment.", tag: "The Purpose" },
    { title: "Our Edge", desc: "A highly competent, continuously trained workforce that executes with an integrated stakeholder approach.", tag: "The Advantage" }
  ];
  return (
    <section ref={containerRef} className="relative py-40 md:py-80 bg-light overflow-hidden text-left border-b border-gray-100">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-20 -right-20 w-96 h-96 border border-primary/5 hidden lg:block" />
      <div className="container mx-auto px-6 lg:px-16 w-full text-left">
        <div className="mb-24 text-left grid lg:grid-cols-2 gap-12 items-end">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-10 text-left">
              <div className="w-12 h-[1px] bg-secondary text-left"></div>
              <span className="text-secondary font-black text-xs tracking-[0.5em] uppercase text-left">The Visionary Framework</span>
            </div>
            <h2 className="text-5xl md:text-[8vw] font-black text-primary uppercase leading-none tracking-tighter text-left text-primary">Strategic <span className="text-secondary italic font-light text-left">Core</span></h2>
          </div>
          <p className="text-xl text-gray-400 font-light max-w-sm pb-4 text-left">An architectural approach to growth, dismantling barriers through precision and sustainable advocacy.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-gray-200 shadow-2xl relative z-10">
          {pillars.map((s, i) => (
            <motion.div key={i} style={{ y: i === 1 ? y1 : y2 }} className="bg-white p-16 group relative overflow-hidden transition-all duration-700 min-h-[500px] flex flex-col justify-between text-left">
              <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
              <div className="relative z-10 text-left">
                <span className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase mb-10 block group-hover:text-white transition-colors text-left">0{i+1} — {s.tag}</span>
                <h4 className="text-3xl font-black text-primary uppercase mb-6 group-hover:text-secondary transition-colors tracking-tighter text-left">{s.title}</h4>
                <p className="text-lg text-gray-500 font-light leading-relaxed group-hover:text-white/70 transition-colors text-left">{s.desc}</p>
              </div>
              <span className="absolute -bottom-10 -right-10 text-[15rem] font-black text-primary/[0.03] group-hover:text-white/[0.05] pointer-events-none transition-colors text-left">{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const yBg = useTransform(smoothScroll, [0, 0.2], ["0%", "10%"]);
  const floatingY = useTransform(smoothScroll, [0, 1], [0, -400]);

  return (
    <div ref={containerRef} className="bg-white text-left relative">
      <section className="relative h-screen w-full flex items-center bg-dark overflow-hidden text-left">
        <motion.div style={{ y: yBg, scale: 1.1 }} className="absolute inset-0 z-0 text-left">
          <img src="https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=2000" className="w-full h-full object-cover grayscale brightness-[0.3] contrast-125" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark" />
        </motion.div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-left">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <div className="flex items-center gap-4 mb-10 text-left">
              <div className="w-16 h-[2px] bg-secondary text-left"></div>
              <span className="text-secondary font-black text-xs tracking-[0.5em] uppercase text-left leading-none">Established 2012</span>
            </div>
            <h1 className="text-6xl md:text-[10vw] font-black text-white uppercase leading-[0.8] tracking-tighter text-left text-white">The Mementoes <br /><span className="text-secondary italic font-light text-left">Story</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="relative py-32 md:py-60 border-b border-gray-50 overflow-hidden text-left bg-white">
        <motion.span style={{ y: floatingY }} className="absolute top-0 right-0 text-[20vw] font-black text-primary/[0.02] leading-none pointer-events-none select-none -z-10">EVOLUTION</motion.span>
        <div className="container mx-auto px-6 lg:px-16 text-left">
          <div className="grid lg:grid-cols-12 gap-20 items-start text-left">
            <div className="lg:col-span-8 text-left">
              <RevealText text="Breaking Silence Forging Legacy" className="text-4xl md:text-[7vw] font-black text-primary uppercase leading-[0.9] mb-12 text-left tracking-tighter" />
              <div className="space-y-12 max-w-3xl text-left text-left">
                <h3 className="text-xl md:text-3xl font-light text-primary italic leading-tight border-l-8 border-secondary pl-8 text-left">"Nature holds no voice of its own. We have made it our mission to be the echo of the environment, advocating for sustainability through every structural milestone."</h3>
                <div className="space-y-10 max-w-2xl text-left text-left">
                  <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed text-left">Founded in 2012 by <span className="font-bold text-primary italic">Zodwa Mlangeni</span>, Mementoes Trading has scaled from a local endeavor into a multi-sector force. Serving a 100km radius from Witbank, we provide specialized logistics, preventing ecological degradation through responsible disposal.</p>
                  <div className="flex flex-wrap gap-12 text-left pt-4 justify-start">
                     <div className="flex flex-col text-left"><span className="text-4xl font-black text-primary leading-none text-left">07</span><span className="text-[10px] font-black uppercase tracking-widest text-secondary mt-3 text-left">Sustainable Jobs</span></div>
                     <div className="flex flex-col border-l border-gray-100 pl-12 text-left"><span className="text-4xl font-black text-primary leading-none text-left">100KM</span><span className="text-[10px] font-black uppercase tracking-widest text-secondary mt-3 text-left">Operational Radius</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 relative pt-20 lg:pt-40 text-left">
              <div className="w-full aspect-[4/5] bg-primary shadow-2xl relative text-left">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200" className="w-full h-full object-cover brightness-75 grayscale contrast-125" alt="" />
                <div className="absolute -bottom-10 -right-6 p-10 bg-secondary text-primary font-black text-sm uppercase tracking-widest z-20 shadow-2xl text-left">100% BLACK <br />WOMEN OWNED</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InfiniteLogoScroll />

      <StrategicCore />

      <ValidatedExcellence />

      <section className="relative py-40 md:py-60 w-full flex items-center justify-center bg-primary overflow-hidden text-center">
        <div className="container mx-auto px-6 text-center relative z-10 text-center">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-6xl md:text-[10rem] font-black text-white uppercase leading-none mb-16 tracking-tighter text-center text-white">Let's <br /> <span className="text-secondary italic text-center">Scale</span></h2>
            <button className="inline-block px-16 py-8 bg-secondary text-primary font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl active:scale-95 text-2xl text-center">Join Our Network</button>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.03] uppercase pointer-events-none whitespace-nowrap">GROWTH</div>
      </section>
    </div>
  );
};

export default AboutUs;
