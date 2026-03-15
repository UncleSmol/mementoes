import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ExcellenceAfrica } from '../components/ExcellenceAfrica';

const MissionSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 md:py-60 bg-white relative overflow-hidden text-left">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div style={{ opacity }} className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-black text-xs tracking-[0.5em] uppercase">Core Mission</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-primary uppercase leading-[0.9] tracking-tighter">
              The Architecture <br />
              <span className="text-secondary italic font-light">of Movement</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-xl">
              From high-stakes industrial logistics to the meticulous assembly of mobile infrastructure, we bridge the gap between heavy industry and environmental stewardship. 
            </p>
            <div className="pt-6">
              <Link to="/about" className="inline-block px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest hover:bg-secondary hover:text-primary transition-all shadow-xl">
                Our Heritage
              </Link>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div style={{ y: y1 }} className="aspect-[4/5] bg-dark relative z-10 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200" 
                className="w-full h-full object-cover grayscale brightness-75 hover:scale-110 transition-transform duration-1000" 
                alt="" 
              />
            </motion.div>
            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-20 -right-10 w-2/3 aspect-square bg-secondary z-20 shadow-2xl flex items-center justify-center p-12 border-l-[16px] border-primary"
            >
               <span className="text-primary font-black text-4xl md:text-6xl uppercase leading-none tracking-tighter italic">12+ <br /><span className="text-xl md:text-2xl not-italic tracking-widest">Years</span></span>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <span className="absolute top-1/2 left-0 text-[30vw] font-black text-primary/[0.02] leading-none select-none pointer-events-none uppercase -translate-y-1/2">
        Mementoes
      </span>
    </section>
  );
};

interface Department {
  title: string;
  tag: string;
  desc: string;
  image: string;
}

const DepartmentPanel = ({ dept, activeIndex, index }: { dept: Department, activeIndex: number, index: number }) => {
  return (
    <motion.div 
      key={index} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: activeIndex === index ? 1 : 0 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 1 }} 
      className="absolute inset-0 will-change-transform"
    >
      <img src={dept.image} alt="" className="w-full h-full object-cover grayscale brightness-50 contrast-125" />
      <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
    </motion.div>
  );
};

const DepartmentShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });   
  const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });  

  useEffect(() => {
    return springProgress.on("change", (latest) => {
      const idx = latest < 0.33 ? 0 : latest < 0.66 ? 1 : 2;
      if (idx !== activeIndex) setActiveIndex(idx);
    });
  }, [springProgress, activeIndex]);

  const departments: Department[] = [
    { title: "Logistics", tag: "Streamlined Flow", desc: "Architecting the movement of goods with surgical precision.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200" },       
    { title: "Waste", tag: "Ethical Disposal", desc: "Engineering the future of waste management responsibly.", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200" },
    { title: "Building", tag: "Structural Form", desc: "Creating landmarks defined by meticulous attention to detail.", image: "https://images.unsplash.com/photo-1489515229412-1f3a8f08dc34?q=80&w=1200&auto=format&fit=crop" }
  ];

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white hidden lg:block border-t border-gray-50 text-left">
      <div className="sticky top-0 h-screen w-full flex overflow-hidden">
        <div className="w-1/2 h-full flex flex-col justify-center px-16 lg:px-24 bg-white border-r border-gray-50 text-left relative z-20">
          <div className="relative h-96">
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-0 flex flex-col justify-start text-left">
                <span className="text-secondary font-black text-xs tracking-[0.6em] uppercase mb-6 block text-left">Department 0{activeIndex + 1}</span>
                <h2 className="text-8xl font-black text-primary uppercase leading-none mb-8 text-left">{departments[activeIndex].title}</h2>
                <h3 className="text-2xl text-secondary italic font-light mb-8 text-left">{departments[activeIndex].tag}</h3>
                <p className="text-xl text-gray-500 font-light leading-relaxed max-w-md text-left">{departments[activeIndex].desc}</p>
                <div className="mt-12"><Link to="/services" className="text-primary font-black uppercase tracking-widest text-sm border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">Learn More</Link></div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="absolute left-24 bottom-24 flex gap-4">{departments.map((_, i) => (<div key={i} className={`h-1 transition-all duration-500 rounded-full ${activeIndex === i ? 'w-16 bg-secondary' : 'w-8 bg-gray-200'}`} />))}</div>
        </div>
        <div className="w-1/2 h-full relative bg-dark z-10">
          <AnimatePresence mode="wait">
            {departments.map((dept, index) => activeIndex === index && (
              <DepartmentPanel key={index} dept={dept} activeIndex={activeIndex} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

interface MobileDept {
  title: string;
  tag: string;
  image: string;
  icon: string;
  desc: string;
}

const MobileDeptCard = ({ dept, i }: { dept: MobileDept, i: number }) => {
  return (
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
  );
};

const MobileProgressBar = ({ i }: { i: number }) => {
  return (
    <div key={i} className="h-1 w-8 bg-gray-100 overflow-hidden">
       <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          className="h-full bg-secondary"
       />
    </div>
  );
};

const MobileDepartmentSlider = () => {
  const departments: MobileDept[] = [
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
          <MobileDeptCard key={i} dept={dept} i={i} />
        ))}
      </div>

      <div className="px-8 mt-4 flex items-center justify-between">
         <div className="flex gap-2">
            {departments.map((_, i) => (
              <MobileProgressBar key={i} i={i} />
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
