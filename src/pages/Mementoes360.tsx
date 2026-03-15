import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

// Import assets
import vid1 from '../assets/bursaryassets/Mementoes(Video Ad1).mp4';
import vid2 from '../assets/bursaryassets/Mementoes ( Video Ad 2).mp4';
import post1 from '../assets/bursaryassets/mementoes (Facebook Post 1).png';
import post2 from '../assets/bursaryassets/Mementoes(Facebook Post2).png';
import post3 from '../assets/bursaryassets/Mementoes(Facebook Post3).png';
import post4 from '../assets/bursaryassets/Mementoes (Facebook Post 4).png';
import post5 from '../assets/bursaryassets/Mementoes(Facebook Post5).png';
import post6 from '../assets/bursaryassets/Mementoes(Facebook Post6).png';
import post7 from '../assets/bursaryassets/Mementoes(Facebook Post7).png';
import newLogo from '../assets/Mementoes Logo.png';

const Mementoes360 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const yBg = useTransform(springScroll, [0, 1], ["0%", "40%"]);
  const yText = useTransform(springScroll, [0, 1], ["0%", "120%"]);
  const floatingY = useTransform(springScroll, [0, 1], [0, -400]);

  const bursaryPosts = [
    { img: post1, text: "Official Ga-Nala Youth Bursary Call 2026" },
    { img: post2, text: "Focus on Mechanical & Civil Engineering Trades" },
    { img: post3, text: "Plumbing and Related Trade Specializations" },
    { img: post4, text: "Application Requirements & Documentation" },
    { img: post5, text: "Community Development Initiative Showcase" },
    { img: post6, text: "Youth Skills Development & Training Pipeline" },
    { img: post7, text: "Enrollment Final Call: Closing 27 Feb 2026" }
  ];

  return (
    <div ref={containerRef} className="bg-[#05070a] text-left relative overflow-x-clip scrollbar-hide">
      {/* 1. HERO SECTION - Standardized */}
      <section className="relative h-screen w-full flex items-center bg-dark overflow-hidden pt-24 md:pt-0">
        <motion.div style={{ y: yBg, scale: 1.1 }} className="absolute inset-0 z-0">
          <img src={post5} className="w-full h-full object-cover grayscale brightness-[0.2] contrast-125" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark" />
        </motion.div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-left">
          <motion.div style={{ y: yText }}>
            <div className="flex items-center gap-4 mb-6 md:mb-10 text-left">
              <div className="w-12 md:w-16 h-[2px] bg-secondary text-left"></div>
              <span className="text-secondary font-black text-[10px] md:text-xs tracking-[0.5em] uppercase text-left">Impact Ecosystem</span>
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-[12vw] font-black text-white uppercase leading-[0.85] tracking-tighter text-left">
              Mementoes <br />
              <span className="text-secondary italic font-light text-left">360</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/40 font-light mt-8 max-w-2xl italic text-left leading-tight">
              A holistic commitment to community elevation, skill-building, and the future of African industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. BURSARY PROGRAM SECTION */}
      <section className="relative py-24 md:py-40 lg:py-60 bg-white overflow-hidden text-left">
        <motion.span style={{ y: floatingY }} className="absolute top-0 left-0 text-[20vw] font-black text-primary/[0.02] leading-none pointer-events-none select-none -z-0 uppercase text-left">Programs</motion.span>
        
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <div className="flex items-center gap-4 mb-6 text-left">
                <div className="w-12 md:w-16 h-[2px] bg-secondary text-left"></div>
                <span className="text-secondary font-black text-[10px] md:text-xs tracking-[0.5em] uppercase text-left">Ga-Nala Youth Empowerment</span>
              </div>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-primary uppercase leading-[0.9] mb-8 tracking-tighter text-left">
                Skills & <br />
                <span className="text-secondary italic font-light text-left">Trades 2026</span>
              </h2>
              <div className="space-y-8 text-left">
                <div className="bg-white p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border-l-[12px] border-primary relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 -z-0 blur-3xl group-hover:bg-secondary/10 transition-colors" />
                  <span className="text-primary font-black text-[10px] uppercase tracking-widest block mb-6 opacity-40">Program Manifesto</span>
                  <p className="text-xl md:text-2xl text-primary font-bold uppercase tracking-tighter leading-tight mb-6 italic">
                    "Empowering the next generation of industrial leaders in Ga-Nala through specialized technical education."
                  </p>
                  <p className="text-gray-500 font-light leading-relaxed mb-8">
                    The Mementoes 2026 Bursary Program was specifically architected to bridge the local skills gap. By providing full financial and structural support for youth entering the fields of **Plumbing, Mechanical Engineering, and Civil Engineering**, we are not just funding education—we are building the future workforce of South Africa's industrial heartland.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-secondary font-black text-[9px] uppercase tracking-widest mb-1">Target Demographic</span>
                      <span className="text-primary font-bold uppercase text-sm tracking-tight italic">Ga-Nala Youth</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-secondary font-black text-[9px] uppercase tracking-widest mb-1">Impact Radius</span>
                      <span className="text-primary font-bold uppercase text-sm tracking-tight italic">eMalahleni Region</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-l-4 border-secondary bg-gray-50 text-left">
                  <span className="text-primary font-black text-[10px] uppercase tracking-widest block mb-2 text-left">Enrollment Status</span>
                  <p className="text-primary font-bold uppercase tracking-tighter text-xl leading-none italic text-left">Closing Date: 27 Feb 2026</p>
                </div>
                <div className="space-y-4 pt-4 text-left">
                  <h4 className="text-primary font-black uppercase text-xs tracking-[0.3em] text-left">Core Trades:</h4>
                  <ul className="grid grid-cols-1 gap-3 text-left">
                    {["Plumbing & Related Trades", "Mechanical Engineering", "Civil Engineering"].map((trade, i) => (
                      <li key={i} className="flex items-center gap-3 text-left">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        <span className="text-primary font-black uppercase text-sm tracking-tight italic text-left">{trade}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col gap-12">
                {/* Main Video Ad - Fixed to Mobile Scale (Vertical) on all screens */}
                <div className="relative aspect-[9/16] w-full max-w-sm bg-dark overflow-hidden shadow-2xl border-l-8 border-secondary group mx-auto">
                  <video 
                    src={vid1} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-contain grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 text-left">
                    <span className="text-secondary font-black text-[10px] uppercase tracking-widest block mb-1 text-left">Official Video Ad</span>
                    <span className="text-white font-black uppercase text-xl tracking-tighter italic leading-none text-left">Bursary Call 2026</span>
                  </div>
                </div>

                {/* Grid of Posts - Using object-contain to prevent clipping */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {bursaryPosts.map((post, i) => (
                    <div key={i} className="flex flex-col gap-4 group">
                      <div className="relative aspect-square bg-[#f8f8f8] overflow-hidden shadow-xl border border-gray-100">
                        <img 
                          src={post.img} 
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                          alt="" 
                        />
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-all pointer-events-none" />
                      </div>
                      <div className="px-2">
                        <span className="text-primary font-black text-[10px] uppercase tracking-widest block mb-1 opacity-40">Notice 0{i+1}</span>
                        <p className="text-gray-500 font-light text-sm italic leading-tight">{post.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND EVOLUTION SECTION */}
      <section className="relative py-32 md:py-60 bg-dark overflow-hidden text-left border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col items-center mb-24 text-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-secondary" />
              <span className="text-secondary font-black text-[10px] tracking-[0.5em] uppercase">Identity Shift</span>
              <div className="w-12 h-[1px] bg-secondary" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase leading-none mb-8 tracking-tighter text-center">
              Brand <br /><span className="text-secondary italic font-light text-center">Evolution</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Identity Video - Fixed to Mobile Scale (Vertical) on all screens */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative aspect-[9/16] w-full max-w-sm bg-[#0a0c10] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-l-[16px] border-primary group">
                <video 
                  src={vid2} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
                <div className="absolute bottom-8 right-8 text-right">
                  <span className="text-secondary font-black text-xs uppercase tracking-[0.4em] block mb-2 italic text-right">New Identity Reveal</span>
                  <span className="text-white/20 font-mono text-[9px] uppercase tracking-widest leading-none text-right">© Mementoes Trading 2026</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-8 text-left">
                <div className="flex flex-col gap-4 text-left">
                  <span className="text-white/20 font-black text-[10px] uppercase tracking-[0.5em] text-left">The Origin</span>
                  <div className="bg-white/5 p-8 border border-white/10 flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all">
                    <img 
                      src="https://mementoes.co.za/WP_mementoes/wp-content/uploads/2023/02/Mementoes-Logo-2020.png" 
                      className="h-16 w-auto object-contain" 
                      alt="Old Logo" 
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-left">
                  <span className="text-secondary font-black text-[10px] uppercase tracking-[0.5em] text-left">The Legacy</span>
                  <div className="bg-white p-8 shadow-2xl border-l-[12px] border-secondary flex items-center justify-center">
                    <img 
                      src={newLogo} 
                      className="h-20 w-auto object-contain" 
                      alt="New Logo" 
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 text-left">
                <p className="text-xl text-white/40 font-light italic leading-relaxed text-left">
                  "Our new visual identity represents a future of structural precision, unwavering commitment to sustainability, and the evolution of a multi-sector force."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Watermark */}
        <span className="absolute top-1/2 right-0 text-[25vw] font-black text-white/[0.01] leading-none select-none pointer-events-none uppercase -translate-y-1/2 translate-x-1/4">
          Identity
        </span>
      </section>

      {/* 4. CTA SECTION */}
      <section className="relative py-24 md:py-60 px-6 lg:px-16 bg-primary overflow-hidden text-center">
        <div className="container mx-auto relative z-10 text-center">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className="text-center">
            <h2 className="text-5xl md:text-9xl font-black text-white uppercase leading-none mb-12 md:mb-16 tracking-tighter text-center">
              Join the <br /> <span className="text-secondary italic text-center">Movement</span>
            </h2>
            <Link to="/contact" className="inline-block px-10 py-5 md:px-16 md:py-8 bg-secondary text-primary font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl active:scale-95 text-xl md:text-2xl">Partner With Us</Link>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.03] uppercase pointer-events-none whitespace-nowrap">IMPACT</div>
      </section>
    </div>
  );
};

export default Mementoes360;
