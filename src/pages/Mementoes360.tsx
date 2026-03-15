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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const yBg = useTransform(smoothScroll, [0, 0.2], ["0%", "10%"]);
  const floatingY = useTransform(smoothScroll, [0, 1], [0, -400]);

  const bursaryPosts = [post1, post2, post3, post4, post5, post6, post7];

  return (
    <div ref={containerRef} className="bg-[#05070a] text-left relative overflow-x-hidden scrollbar-hide">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] md:h-screen w-full flex items-center bg-dark overflow-hidden pt-24 md:pt-0">
        <motion.div style={{ y: yBg, scale: 1.1 }} className="absolute inset-0 z-0">
          <img src={post5} className="w-full h-full object-cover grayscale brightness-[0.2] contrast-125" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark" />
        </motion.div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-left">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <div className="flex items-center gap-4 mb-6 md:mb-10">
              <div className="w-12 md:w-16 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-black text-[10px] md:text-xs tracking-[0.5em] uppercase text-left">Impact Ecosystem</span>
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-[12vw] font-black text-white uppercase leading-[0.85] tracking-tighter text-left">
              Mementoes <br />
              <span className="text-secondary italic font-light">360</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/40 font-light mt-8 max-w-2xl italic text-left leading-tight">
              A holistic commitment to community elevation, skill-building, and the future of African industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. BURSARY PROGRAM SECTION */}
      <section className="relative py-20 md:py-40 bg-white overflow-hidden text-left">
        <motion.span style={{ y: floatingY }} className="absolute top-0 left-0 text-[20vw] font-black text-primary/[0.02] leading-none pointer-events-none select-none -z-0 uppercase">Programs</motion.span>
        
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[2px] bg-secondary"></div>
                <span className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase text-left">Ga-Nala Youth Empowerment</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-primary uppercase leading-[0.9] mb-8 tracking-tighter text-left">
                Skills & <br />
                <span className="text-secondary italic font-light">Trades 2026</span>
              </h2>
              <div className="space-y-6 text-left">
                <p className="text-lg text-gray-500 font-light leading-relaxed">
                  Dedicated to the growth of local talent, Mementoes launched a specialized bursary program for the youth of Ga-Nala.
                </p>
                <div className="p-6 border-l-4 border-secondary bg-gray-50">
                  <span className="text-primary font-black text-[10px] uppercase tracking-widest block mb-2">Enrollment Status</span>
                  <p className="text-primary font-bold uppercase tracking-tighter text-xl leading-none italic">Closing Date: 27 Feb 2026</p>
                </div>
                <div className="space-y-4 pt-4">
                  <h4 className="text-primary font-black uppercase text-xs tracking-[0.3em]">Core Trades:</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {["Plumbing & Related Trades", "Mechanical Engineering", "Civil Engineering"].map((trade, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        <span className="text-primary font-black uppercase text-sm tracking-tight italic">{trade}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Main Video Ad */}
                <div className="md:col-span-2 relative aspect-video bg-dark overflow-hidden shadow-2xl border-l-8 border-secondary group">
                  <video 
                    src={vid1} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6">
                    <span className="text-secondary font-black text-[10px] uppercase tracking-widest block mb-1">Official Video Ad</span>
                    <span className="text-white font-black uppercase text-xl tracking-tighter italic leading-none">Bursary Call 2026</span>
                  </div>
                </div>

                {/* Grid of Posts */}
                {bursaryPosts.map((post, i) => (
                  <div key={i} className="relative aspect-square bg-dark overflow-hidden shadow-xl border border-gray-100 group">
                    <img 
                      src={post} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110" 
                      alt="" 
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all pointer-events-none" />
                  </div>
                ))}
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
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase leading-none mb-8 tracking-tighter">
              Brand <br /><span className="text-secondary italic font-light">Evolution</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-7 relative aspect-video bg-[#0a0c10] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-l-[16px] border-primary group">
              <video 
                src={vid2} 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
              <div className="absolute bottom-8 right-8 text-right">
                <span className="text-secondary font-black text-xs uppercase tracking-[0.4em] block mb-2 italic">New Identity Reveal</span>
                <span className="text-white/20 font-mono text-[9px] uppercase tracking-widest leading-none">© Mementoes Trading 2026</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-8">
                <div className="flex flex-col gap-4">
                  <span className="text-white/20 font-black text-[10px] uppercase tracking-[0.5em]">The Origin</span>
                  <div className="bg-white/5 p-8 border border-white/10 flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all">
                    <img 
                      src="https://mementoes.co.za/WP_mementoes/wp-content/uploads/2023/02/Mementoes-Logo-2020.png" 
                      className="h-16 w-auto object-contain" 
                      alt="Old Logo" 
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-secondary font-black text-[10px] uppercase tracking-[0.5em]">The Legacy</span>
                  <div className="bg-white p-8 shadow-2xl border-l-[12px] border-secondary flex items-center justify-center">
                    <img 
                      src={newLogo} 
                      className="h-20 w-auto object-contain" 
                      alt="New Logo" 
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-xl text-white/40 font-light italic leading-relaxed">
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
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-5xl md:text-9xl font-black text-white uppercase leading-none mb-12 md:mb-16 tracking-tighter">
              Join the <br /> <span className="text-secondary italic">Movement</span>
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
