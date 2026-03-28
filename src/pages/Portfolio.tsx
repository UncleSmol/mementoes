import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import imgWaste from '../assets/external/waste-management.jpg';
import imgInfra from '../assets/external/infrastructure.jpg';
import imgLogistics from '../assets/external/logistics.jpg';
import imgConstruction from '../assets/external/construction-site.jpg';
import logoEskom from '../assets/external/eskom-logo.jpg';
import logoRedisa from '../assets/external/redisa-logo.jpg';
import logoSiemens from '../assets/external/siemens-logo.png';
import logoBidvest from '../assets/external/bidvest-logo.jpg';
import logoEnvAffairs from '../assets/external/environmental-affairs-logo.jpg';
import logoWasteBureau from '../assets/external/waste-bureau-logo.png';
import logoExxaro from '../assets/external/exxaro-logo.png';

interface Project {
  id: string;
  client: string;
  subtitle: string;
  location: string;
  tags: string[];
  desc: string;
  stat: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "waste-bureau",
    client: "The Waste Bureau",
    subtitle: "Environmental Affairs",
    location: "National Network",
    tags: ["Logistics", "Eco-Management"],
    desc: "Primary transporter of waste tyres from national dealerships to specialized depots.",
    stat: "DEA Partner",
    image: imgWaste
  },
  {
    id: "eskom-kusile",
    client: "Eskom Holdings",
    subtitle: "Infrastructure Support",
    location: "Kusile Power Station",
    tags: ["Construction", "Maintenance"],
    desc: "Comprehensive supply, assembly, and professional maintenance of mobile office units.",        
    stat: "Kusile Site",
    image: imgInfra
  },
  {
    id: "bidvest-siemens",
    client: "Bidvest Panalpina",
    subtitle: "In Partnership with Siemens",
    location: "Durban / Richard's Bay",
    tags: ["Heavy Freight", "Energy Grid"],
    desc: "Transportation of heavy transformer appliances and critical cargo to power stations.",        
    stat: "Heavy Cargo",
    image: imgLogistics
  },
  {
    id: "exxaro-matla",
    client: "Exxaro Resources",
    subtitle: "Matla Mine 2 & 3",
    location: "Mpumalanga",
    tags: ["Industrial", "Facility Care"],
    desc: "General building maintenance and specialized industrial laundry services.",
    stat: "Matla Mine",
    image: imgConstruction
  }
];

interface Association {
  name: string;
  logo: string;
  url: string;
  desc: string;
  impact: string;
}

const InfiniteLogoScroll = () => {
  const associations: Association[] = [
    { 
      name: "Exxaro", 
      logo: logoExxaro,
      url: "https://www.exxaro.com",
      desc: "A leading South African diversified resources company.",
      impact: "Industrial Maintenance & Laundry Services"
    },
    { 
      name: "Eskom", 
      logo: logoEskom,
      url: "https://www.eskom.co.za",
      desc: "South Africa's primary electricity public utility.",
      impact: "Kusile Infrastructure Support"
    },
    { 
      name: "REDISA", 
      logo: logoRedisa,        
      url: "https://redisa.org.za",
      desc: "The Recycling and Economic Development Initiative of South Africa.",
      impact: "National Waste Tyre Logistics"
    },
    { 
      name: "Siemens", 
      logo: logoSiemens,
      url: "https://www.siemens.com",
      desc: "Global powerhouse in electronics and electrical engineering.",
      impact: "Critical Cargo Transportation"
    },
    { 
      name: "Bidvest Panalpina", 
      logo: logoBidvest,
      url: "https://www.bidvest.co.za",
      desc: "Leading international provider of integrated logistics.",
      impact: "Strategic Freight Partnerships"
    },
    { 
      name: "Environmental Affairs", 
      logo: logoEnvAffairs,      
      url: "https://www.dffe.gov.za",
      desc: "Department of Forestry, Fisheries and the Environment.",
      impact: "National Eco-Logistics Strategy"
    },
    { 
      name: "Waste Bureau", 
      logo: logoWasteBureau,
      url: "https://www.environment.gov.za",
      desc: "A specialized agency under the Dept of Environmental Affairs.",
      impact: "Waste Management Optimization"
    }
  ];

  const duplicatedLogos = [...associations, ...associations, ...associations];

  return (
    <div 
      className="py-32 md:py-60 relative z-30 transform -skew-y-3 border-t-8 border-secondary overflow-hidden bg-white -mt-20 md:-mt-32 scrollbar-hide"
    >
      <div className="transform skew-y-3 relative z-10">
        <div className="container mx-auto px-6 lg:px-16 mb-16 text-left">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-secondary"></div>
            <span className="text-secondary font-black text-[10px] tracking-[0.6em] uppercase">Validated Network</span>
          </div>
          <h2 className="text-4xl md:text-7xl lg:text-[10vw] font-black text-primary uppercase tracking-tighter mb-6">Strategic <span className="text-secondary italic font-light">Alliances</span></h2>
          <p className="text-gray-500 font-light text-lg md:text-xl max-w-2xl leading-relaxed">
            We are proud to collaborate with Africa's most influential industrial leaders and governmental bodies. These partnerships are the foundation of our operational excellence and shared impact.
          </p>
        </div>

        <div className="flex relative py-10">
          <motion.div 
            className="flex gap-16 md:gap-32 items-center whitespace-nowrap" 
            animate={{ x: [0, -3000] }} 
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedLogos.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center w-48 md:w-72 h-24 md:h-44 bg-white p-8 grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
              >
                <img src={item.logo} alt={item.name} loading="lazy" className="max-w-full max-h-full object-contain pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {     
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <div ref={cardRef} className="min-h-fit lg:min-h-[120vh] w-full flex items-center justify-center relative px-6 md:px-12 lg:px-24 py-12 md:py-32 lg:py-40">
      <motion.div 
        style={{ scale, opacity }}
        className="w-full grid lg:grid-cols-12 gap-12 lg:gap-24 items-center z-20 max-w-7xl mx-auto"     
      >
        {/* Visual Side */}
        <div className={`lg:col-span-7 relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
          <div className="relative aspect-[16/10] overflow-hidden bg-dark shadow-2xl border border-white/5 rounded-2xl">
            <motion.img 
              style={{ y: yImage }}
              src={project.image} 
              alt={project.client} 
              className="absolute inset-0 w-full h-[120%] object-cover grayscale brightness-50 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent rounded-2xl" />
          </div>

          {/* Floating Impact Box */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 p-6 md:p-10 bg-secondary shadow-2xl z-30 border-l-4 md:border-l-8 border-primary rounded-2xl"
          >
             <span className="text-primary font-black text-[8px] md:text-[9px] uppercase tracking-widest block mb-1 md:mb-2">Performance Node</span>
             <span className="text-2xl md:text-4xl lg:text-5xl font-black text-primary uppercase leading-none tracking-tighter italic">{project.stat}</span>
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div 
          style={{ y: yText }}
          className={`lg:col-span-5 text-left ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
        >
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="text-secondary font-black text-lg md:text-xl italic">0{index + 1}</span>    
            <div className="w-8 md:w-12 h-[1px] bg-white/20"></div>
            <span className="text-white/40 font-black text-[8px] md:text-[9px] uppercase tracking-[0.4em]">{project.location}</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white uppercase leading-[1] md:leading-[0.9] tracking-tighter mb-6">
            {project.client}<br />
            <span className="text-secondary italic font-light">{project.subtitle}</span>
          </h2>

          <p className="text-base md:text-xl text-white/40 font-light italic leading-relaxed mb-8 md:mb-10 border-l-4 border-secondary/20 pl-6 md:pl-8">
            "{project.desc}"
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 md:px-4 md:py-1.5 bg-white/5 border border-white/10 text-white/40 font-black uppercase text-[8px] md:text-[9px] tracking-widest rounded-xl">{tag}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Background Section Number */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] font-black text-white/[0.02] leading-none select-none pointer-events-none uppercase">
        0{index + 1}
      </span>
    </div>
  );
};

const PortfolioCTA = () => {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });

  const yContent = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const xLegacy = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ctaRef} className="relative pt-80 pb-40 md:pt-96 md:pb-60 lg:pt-[35rem] lg:pb-80 px-6 lg:px-16 bg-primary z-20 -mt-64 md:-mt-96 text-center">
      <motion.div style={{ y: yContent }} className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
           <span className="text-secondary font-black text-xs tracking-[0.5em] uppercase mb-10 block">Collaborate With Us</span>
           <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-white uppercase leading-[0.8] tracking-tighter mb-12 md:mb-16">
             Lead the <br />
             <span className="text-secondary italic font-light">Standard</span>
           </h2>
           <Link 
            to="/contact" 
             className="inline-block px-10 py-5 md:px-16 md:py-8 bg-secondary text-primary font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl text-xl md:text-2xl rounded-2xl"
           >
             Initiate Engagement
           </Link>
        </motion.div>
      </motion.div>

      <motion.span 
        style={{ x: xLegacy }}
        className="absolute bottom-10 left-0 text-[20vw] font-black text-white/[0.03] leading-none select-none pointer-events-none uppercase whitespace-nowrap"
      >
        Legacy & Excellence
      </motion.span>
    </section>
  );
};

const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const textOpacity = useTransform(springScroll, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="bg-primary selection:bg-secondary selection:text-white overflow-x-clip scrollbar-hide relative">

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-dark pt-24 lg:pt-20">
        <div className="fixed inset-0 z-0">
          <img src={imgLogistics} alt="Project Portfolio" className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale contrast-125" />
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
              <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.5em]">Validated Impact</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-[10vw] font-black text-white leading-[0.9] md:leading-[0.85] uppercase tracking-tighter mb-8 md:mb-10">
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="block">The Project</motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="block text-secondary">Ecosystem</motion.span>
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12"
            >
              <p className="text-lg md:text-2xl text-gray-300 font-light max-w-xl leading-relaxed">
                A comprehensive showcase of high-stakes logistics, structural maintenance, and environmental advocacy across South Africa.
              </p>
              <Link to="/contact" className="group relative px-10 py-5 md:px-12 md:py-6 bg-secondary text-dark font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 text-sm md:text-base rounded-2xl">
                <span className="relative z-10">View Projects</span>
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

      {/* Layered Projects */}
      <section className="relative bg-dark pb-24 md:pb-32">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
          />
        ))}
      </section>

      <InfiniteLogoScroll />

      <PortfolioCTA />
    </div>
  );
};

export default Portfolio;
