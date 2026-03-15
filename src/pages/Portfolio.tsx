import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1600"
  },
  {
    id: "eskom-kusile",
    client: "Eskom Holdings",
    subtitle: "Infrastructure Support",
    location: "Kusile Power Station",
    tags: ["Construction", "Maintenance"],
    desc: "Comprehensive supply, assembly, and professional maintenance of mobile office units.",        
    stat: "Kusile Site",
    image: "https://images.unsplash.com/photo-1489515229412-1f3a8f08dc34?q=80&w=1600"
  },
  {
    id: "bidvest-siemens",
    client: "Bidvest Panalpina",
    subtitle: "In Partnership with Siemens",
    location: "Durban / Richard's Bay",
    tags: ["Heavy Freight", "Energy Grid"],
    desc: "Transportation of heavy transformer appliances and critical cargo to power stations.",        
    stat: "Heavy Cargo",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600"
  },
  {
    id: "exxaro-matla",
    client: "Exxaro Resources",
    subtitle: "Matla Mine 2 & 3",
    location: "Mpumalanga",
    tags: ["Industrial", "Facility Care"],
    desc: "General building maintenance and specialized industrial laundry services.",
    stat: "Matla Mine",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600"
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
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCompany, setHoveredHoveredCompany] = useState<Association | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const associations: Association[] = [
    { 
      name: "Exxaro", 
      logo: "https://th.bing.com/th/id/OIP.MIBoL61C8rkZW5IkOCYpIAHaD3?w=345&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      url: "https://www.exxaro.com",
      desc: "A leading South African diversified resources company.",
      impact: "Industrial Maintenance & Laundry Services"
    },
    { 
      name: "Eskom", 
      logo: "https://logodix.com/logo/2016894.jpg",
      url: "https://www.eskom.co.za",
      desc: "South Africa's primary electricity public utility.",
      impact: "Kusile Infrastructure Support"
    },
    { 
      name: "REDISA", 
      logo: "https://redisa.org.za/wp-content/themes/capeflair_redisa/images/REDISA_logo_cr.jpg",        
      url: "https://redisa.org.za",
      desc: "The Recycling and Economic Development Initiative of South Africa.",
      impact: "National Waste Tyre Logistics"
    },
    { 
      name: "Siemens", 
      logo: "https://cdn.freebiesupply.com/images/large/2x/siemens-logo-png-transparent.png",
      url: "https://www.siemens.com",
      desc: "Global powerhouse in electronics and electrical engineering.",
      impact: "Critical Cargo Transportation"
    },
    { 
      name: "Bidvest Panalpina", 
      logo: "https://top500.co.za/wp-content/uploads/2017/02/bidvest_panalpina_feature_image-2-400x284.jpg",
      url: "https://www.bidvest.co.za",
      desc: "Leading international provider of integrated logistics.",
      impact: "Strategic Freight Partnerships"
    },
    { 
      name: "Environmental Affairs", 
      logo: "https://www.govpage.co.za/uploads/2/4/0/5/24052997/environmental-affairs_45_orig.jpg",      
      url: "https://www.dffe.gov.za",
      desc: "Department of Forestry, Fisheries and the Environment.",
      impact: "National Eco-Logistics Strategy"
    },
    { 
      name: "Waste Bureau", 
      logo: "https://mementoes.co.za/WP_mementoes/wp-content/uploads/2023/03/Untitledw.png",
      url: "https://www.environment.gov.za",
      desc: "A specialized agency under the Dept of Environmental Affairs.",
      impact: "Waste Management Optimization"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const duplicatedLogos = [...associations, ...associations, ...associations];

  return (
    <div 
      className="py-32 md:py-60 relative z-30 transform -skew-y-3 border-t-8 border-secondary overflow-hidden bg-white -mt-20 md:-mt-32 scrollbar-hide"
      onMouseMove={handleMouseMove}
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
            animate={isPaused ? {} : { x: [0, -3000] }} 
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedLogos.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center w-48 md:w-72 h-24 md:h-44 bg-white p-8 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-pointer"
                onMouseEnter={() => {
                  setIsPaused(true);
                  setHoveredHoveredCompany(item);
                }}
                onMouseLeave={() => {
                  setIsPaused(false);
                  setHoveredHoveredCompany(null);
                }}
              >
                <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Cursor Tracking Modal - Hidden on Mobile */}
      <motion.div
        animate={{ 
          opacity: hoveredCompany ? 1 : 0,
          x: mousePos.x + 20,
          y: mousePos.y + 20,
          scale: hoveredCompany ? 1 : 0.8
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.2 } }}
        className="fixed top-0 left-0 z-[100] pointer-events-none bg-dark p-8 shadow-[0_30px_100px_rgba(0,0,0,0.5)] border-l-8 border-secondary w-80 md:w-96 hidden md:block"
      >
        {hoveredCompany && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-secondary font-black text-[9px] uppercase tracking-widest italic">Partner Profile</span>
              <i className="bi bi-arrow-up-right text-white/20 text-xs"></i>
            </div>
            <h3 className="text-white font-black text-2xl uppercase tracking-tighter leading-none">{hoveredCompany.name}</h3>
            <p className="text-white/40 text-sm font-light italic leading-relaxed">"{hoveredCompany.desc}"</p>
            <div className="pt-4 border-t border-white/10 space-y-2">
               <span className="text-secondary font-black text-[8px] uppercase tracking-widest block">Collaborative Impact</span>
               <span className="text-white font-black uppercase text-xs tracking-tight block">{hoveredCompany.impact}</span>
            </div>
            <div className="text-[9px] text-white/20 font-mono uppercase tracking-[0.3em] pt-2">
              {hoveredCompany.url.replace('https://', '')}
            </div>
          </div>
        )}
      </motion.div>
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
          <div className="relative aspect-[16/10] overflow-hidden bg-dark shadow-2xl border border-white/5">
            <motion.img 
              style={{ y: yImage }}
              src={project.image} 
              alt={project.client} 
              className="absolute inset-0 w-full h-[120%] object-cover grayscale brightness-50 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
          </div>

          {/* Floating Impact Box */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 p-6 md:p-10 bg-secondary shadow-2xl z-30 border-l-4 md:border-l-8 border-primary"
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
              <span key={tag} className="px-3 py-1 md:px-4 md:py-1.5 bg-white/5 border border-white/10 text-white/40 font-black uppercase text-[8px] md:text-[9px] tracking-widest">{tag}</span>
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
            className="inline-block px-10 py-5 md:px-16 md:py-8 bg-secondary text-primary font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl text-xl md:text-2xl"
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
  
  const yBg = useTransform(springScroll, [0, 0.2], ["0%", "40%"]);
  const yText = useTransform(springScroll, [0, 0.2], ["0%", "120%"]);

  return (
    <div ref={containerRef} className="bg-primary selection:bg-secondary selection:text-white overflow-x-clip scrollbar-hide relative">

      {/* Hero Section - Standardized */}
      <section className="relative h-screen w-full flex items-center justify-center bg-dark overflow-hidden px-6 lg:px-16 pt-24 md:pt-0">
        <div className="container mx-auto relative z-10 text-left">
          <motion.div
            style={{ y: yText }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-6 md:mb-10 text-left">
              <div className="w-12 md:w-16 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-black text-[10px] md:text-xs tracking-[0.5em] uppercase text-left">Validated Impact</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-[10vw] font-black text-white uppercase leading-[0.9] tracking-tighter mb-6 md:mb-12 text-left">
              The Project <br />
              <span className="text-secondary italic font-light">Ecosystem</span>
            </h1>
            <p className="text-base md:text-3xl text-white/30 font-light max-w-3xl leading-tight italic text-left">
              A comprehensive showcase of high-stakes logistics, structural maintenance, and environmental advocacy.
            </p>
          </motion.div>
        </div>

        {/* Background Decorative Layer */}
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000')] bg-cover bg-center grayscale brightness-[0.15] contrast-125"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark"></div>
        </motion.div>
      </section>

      {/* Layered Projects */}
      <section className="relative bg-dark">
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
