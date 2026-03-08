import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ExcellenceAfrica } from '../components/ExcellenceAfrica';

const images = [
  "https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=869&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573164574397-dd250bc8a598?q=80&w=869&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573164574001-518958d9baa2?q=80&w=869&auto=format&fit=crop"
];

const DualImageCarousel = () => {
  const [step, setStep] = useState(0);
  const [indices, setIndices] = useState([0, 1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (step === 0) return;
    setIndices(prev => {
      const newIndices = [...prev];
      const movedToBackIndex = step % 2 === 0 ? 1 : 0; 
      const otherIndex = step % 2 === 0 ? 0 : 1;
      newIndices[movedToBackIndex] = (prev[otherIndex] + 1) % images.length;
      return newIndices;
    });
  }, [step]);

  const isC1Front = step % 2 === 0;

  const frontToBack = {
    x: [0, 150, -80],
    z: [100, 0, -300],
    rotateY: [0, 45, -25],
    scale: [1, 0.85, 0.65],
    opacity: [1, 0.8, 0.4],
    filter: ['grayscale(0%)', 'grayscale(50%)', 'grayscale(100%)'],
    zIndex: [50, 30, 10]
  };

  const backToFront = {
    x: [-80, -200, 0],
    z: [-300, 0, 100],
    rotateY: [-25, -45, 0],
    scale: [0.65, 0.85, 1],
    opacity: [0.4, 0.8, 1],
    filter: ['grayscale(100%)', 'grayscale(50%)', 'grayscale(0%)'],
    zIndex: [10, 30, 50]
  };

  return (
    <div className="relative w-full h-[600px] mt-12 lg:mt-0 flex items-center justify-center" style={{ perspective: "2000px" }}>
      <motion.div
        animate={isC1Front ? backToFront : frontToBack}
        initial={false}
        transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-full max-w-[520px] aspect-[4/3] lg:aspect-[16/10] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.4)] border-[14px] border-primary"
        style={{ transformStyle: "preserve-3d" }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={indices[0]}
            src={images[indices[0]]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
      </motion.div>

      <motion.div
        animate={!isC1Front ? backToFront : frontToBack}
        initial={false}
        transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-full max-w-[520px] aspect-[4/3] lg:aspect-[16/10] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.4)] border-[14px] border-primary"
        style={{ transformStyle: "preserve-3d" }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={indices[1]}
            src={images[indices[1]]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/5 blur-[120px] -z-10" />
    </div>
  );
};

const RevealText = ({ text }: { text: string }) => {
  const words = text.split(" ");
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 85%", "end 15%"]
  });

  return (
    <h3 ref={container} className="text-4xl md:text-7xl font-light text-primary leading-[1.05] flex flex-wrap gap-x-4 gap-y-3">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </h3>
  );
};

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const color = useTransform(progress, range, ["#1e4a9b", "#fcb040"]);
  const isSpecial = children === "powerhouse," || children === "evolution" || children === "Black" || children === "Women" || children === "Owned";

  return (
    <span className="relative">
      <motion.span 
        style={{ opacity, color: isSpecial ? color : "#1e4a9b" }} 
        className={isSpecial ? "font-black uppercase italic" : ""}
      >
        {children}
      </motion.span>
    </span>
  );
};

const MissionSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section ref={container} className="relative py-40 md:py-80 bg-white overflow-hidden text-left">
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-1/4 right-0 w-1/3 h-[600px] bg-secondary opacity-10 -z-10"
      />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-7 z-10 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12 text-left"
            >
              <div className="w-20 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-black text-xs tracking-[0.8em] uppercase">Core Mission</span>
            </motion.div>

            <RevealText text="We are a Black Women Owned powerhouse, committed to the environmental and structural evolution of South Africa." />
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-20 flex flex-wrap gap-12 text-left justify-start"
            >
              <div className="flex flex-col gap-3">
                <span className="text-6xl font-black text-primary leading-none">L1</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">B-BBEE Contributor</span>
              </div>
              <div className="flex flex-col gap-3 border-l border-gray-100 pl-12">
                <span className="text-6xl font-black text-primary italic leading-none">ECO</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Conscious Vision</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <DualImageCarousel />
          </div>

        </div>
      </div>
    </section>
  );
};

const DepartmentShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const departments = [
    {
      title: "Logistics",
      tag: "Streamlined Flow",
      desc: "Architecting the movement of goods with surgical precision. Our logistics division ensures your supply chain is a competitive advantage.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    },
    {
      title: "Waste",
      tag: "Ethical Disposal",
      desc: "Engineering the future of waste management. We don't just dispose; we manage materials with a strict eco-conscious methodology.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200",
    },
    {
      title: "Building",
      tag: "Structural Form",
      desc: "Creating landmarks of quality. Our construction projects are defined by meticulous attention to detail and long-term durability.",
      image: "https://images.unsplash.com/photo-1489515229412-1f3a8f08dc34?q=80&w=1200&auto=format&fit=crop",
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.33) setActiveIndex(0);
      else if (latest < 0.66) setActiveIndex(1);
      else setActiveIndex(2);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white hidden lg:block border-t border-gray-50 text-left">
      <div className="sticky top-0 h-screen w-full flex overflow-hidden">
        
        {/* Left Side: Sticky Info */}
        <div className="w-1/2 h-full flex flex-col justify-center px-16 lg:px-24 bg-white border-r border-gray-50 text-left">
          <div className="relative h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col justify-start text-left"
              >
                <span className="text-secondary font-black text-xs tracking-[0.6em] uppercase mb-6 block text-left">
                  Department 0{activeIndex + 1}
                </span>
                <h2 className="text-8xl font-black text-primary uppercase leading-none mb-8 text-left">
                  {departments[activeIndex].title}
                </h2>
                <h3 className="text-2xl text-secondary italic font-light mb-8 text-left">
                  {departments[activeIndex].tag}
                </h3>
                <p className="text-xl text-gray-500 font-light leading-relaxed max-w-md text-left">
                  {departments[activeIndex].desc}
                </p>
                <div className="mt-12">
                   <Link to="/services" className="text-primary font-black uppercase tracking-widest text-sm border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">
                      Learn More
                   </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicator */}
          <div className="absolute left-24 bottom-24 flex gap-4">
            {departments.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-500 ${activeIndex === i ? 'w-16 bg-secondary' : 'w-8 bg-gray-200'}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Dynamic Visuals */}
        <div className="w-1/2 h-full relative bg-dark">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={departments[activeIndex].image} 
                alt="" 
                className="w-full h-full object-cover grayscale brightness-50 contrast-125 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
            </motion.div>
          </AnimatePresence>
          
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-12 w-64 h-64 border border-white/20 flex items-center justify-center backdrop-blur-sm z-20"
          >
             <span className="text-white text-[8px] font-black uppercase tracking-[1em] -rotate-90">Mementoes Excellence</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MobileDepartmentSlider = () => {
  const departments = [
    { title: "Logistics", tag: "Flow", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800", icon: "bi-truck", desc: "Surgical precision in goods movement and supply chain architecture." },
    { title: "Waste", tag: "Ethics", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800", icon: "bi-recycle", desc: "Engineering eco-conscious methodologies for modern waste management." },
    { title: "Building", tag: "Form", image: "https://images.unsplash.com/photo-1489515229412-1f3a8f08dc34?q=80&w=800&auto=format&fit=crop", icon: "bi-building", desc: "Creating landmarks of quality with meticulous structural durability." }
  ];

  return (
    <section className="py-32 bg-white lg:hidden overflow-hidden">
      <div className="px-8 mb-16 text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-black text-[10px] tracking-[0.5em] uppercase block mb-4 text-left">Our Departments</span>
          <h3 className="text-5xl font-black text-primary uppercase leading-none tracking-tighter text-left">
            Core<br /><span className="text-secondary italic font-light">Solutions</span>
          </h3>
        </motion.div>
      </div>
      
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-8 gap-8 pb-12">
        {departments.map((dept, i) => (
          <div key={i} className="min-w-[85vw] snap-center group">
            <div className="relative h-[70vh] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] bg-dark border border-gray-100">
              <img src={dept.image} alt="" className="w-full h-full object-cover opacity-60 grayscale brightness-75 group-active:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/90"></div>
              
              <div className="absolute top-8 left-8">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center text-primary text-2xl shadow-xl">
                  <i className={`bi ${dept.icon}`}></i>
                </div>
              </div>

              <div className="absolute bottom-10 left-8 right-8 text-left">
                <span className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase block mb-3 text-left">Department 0{i+1}</span>
                <h4 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 leading-none text-left">{dept.title}</h4>
                <p className="text-gray-300 text-sm font-light leading-relaxed mb-8 opacity-90 text-left">{dept.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-3 px-6 py-3 bg-white text-primary font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-transform">
                  Explore <i className="bi bi-arrow-right text-secondary"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-8 mt-4 flex items-center justify-between">
         <div className="flex gap-2">
            {departments.map((_, i) => (
              <div key={i} className="h-1 w-8 bg-gray-100 overflow-hidden">
                 <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    className="h-full bg-secondary"
                 />
              </div>
            ))}
         </div>
         <span className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Swipe to Explore</span>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="w-full bg-white">
      <Hero />
      <MissionSection />
      <DepartmentShowcase />
      <MobileDepartmentSlider />
      <ExcellenceAfrica />

      <section className="py-40 md:py-60 bg-primary overflow-hidden relative border-t border-white/5">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-[12rem] font-black text-white uppercase leading-none mb-20 tracking-tighter text-center">
              Ready to <br /> <span className="text-secondary italic text-center">Innovate?</span>
            </h2>
            <div className="flex justify-center">
              <Link 
                to="/contact"
                className="inline-block px-12 md:px-16 py-6 md:py-8 bg-secondary text-primary text-xl md:text-2xl font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-2xl"
              >
                Let's Talk Business
              </Link>
            </div>
          </motion.div>
        </div>
        
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[40rem] font-black text-white/[0.05] pointer-events-none uppercase">
          Contact
        </span>
      </section>
    </div>
  );
};

export default Home;
