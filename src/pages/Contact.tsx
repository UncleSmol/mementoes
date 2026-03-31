import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import imgContactHero from '../assets/external/contact-hero.jpg';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[#05070a] selection:bg-secondary selection:text-white overflow-x-clip scrollbar-hide relative">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-dark ">
        <div className="absolute inset-0 z-0">
          <img src={imgContactHero} alt="Contact Us" className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale contrast-125" />
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
              <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.5em]">Connect With Us</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-[10vw] font-black text-white leading-[0.9] md:leading-[0.85] uppercase tracking-tighter mb-8 md:mb-10">
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="block">Get In</motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="block text-secondary">Touch</motion.span>
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12"
            >
              <p className="text-lg md:text-2xl text-gray-300 font-light max-w-xl leading-relaxed">
                Ready to transform your next project? Reach out to our team and discover what precision logistics and construction excellence can do for you.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute right-12 bottom-24 hidden lg:block z-10 pointer-events-none">
          <span className="text-white/10 text-9xl font-black uppercase select-none" style={{ writingMode: 'vertical-rl' }}>MEMENTOES</span>
        </div>
        <motion.div style={{ scaleX: scrollYProgress }} className="absolute bottom-0 left-0 right-0 h-1 bg-secondary origin-left z-20" />
      </section>

      {/* Contact Content */}
      <section className="relative py-20 lg:py-40 px-6 lg:px-16">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Contact Details */}
            <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12 md:space-y-16"
          >
            <div>
              <h3 className="text-white/20 font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8 text-left">Operational Hub</h3>
              <div className="flex items-start gap-4 md:gap-6 group text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-secondary transition-colors duration-500 shrink-0 rounded-xl">
                  <i className="bi bi-geo-alt text-secondary text-lg md:text-xl"></i>
                </div>
                <div className="space-y-2">
                  <span className="text-white font-black uppercase text-base md:text-lg tracking-tight block">South Africa</span>
                  <p className="text-white/40 font-light text-sm md:text-lg">4353 Nkomo Ave, KwaThomas Mahlanguville, eMalahleni, 1039</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white/20 font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8 text-left">Direct Lines</h3>
              <div className="space-y-6 md:space-y-8 text-left">
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-secondary transition-colors duration-500 shrink-0 rounded-xl">
                    <i className="bi bi-telephone text-secondary text-lg md:text-xl"></i>
                  </div>
                  <a href="tel:+27824161012" className="text-white font-black uppercase text-xl md:text-3xl tracking-tighter hover:text-secondary transition-colors">+27 (0) 82 416 1012</a>
                </div>
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-secondary transition-colors duration-500 shrink-0 rounded-xl">
                    <i className="bi bi-envelope text-secondary text-lg md:text-xl"></i>
                  </div>
                  <a href="mailto:info@mementoes.co.za" className="text-white font-black uppercase text-lg md:text-3xl tracking-tighter hover:text-secondary transition-colors break-all">info@mementoes.co.za</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white/20 font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8 text-left">Social Ecosystem</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=100063811852754&locale=gn_PY#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-500 group rounded-xl">
                  <i className="bi bi-facebook text-white text-lg md:text-xl group-hover:text-primary"></i>
                </a>
                <a href="https://mementoes360.co.za" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-500 group rounded-xl">
                  <i className="bi bi-lightning-charge text-white text-lg md:text-xl group-hover:text-primary"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Direct Contact Actions */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Big CTA Card */}
            <div className="relative bg-primary p-8 md:p-12 overflow-hidden rounded-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] pointer-events-none" />
              <span className="text-white/20 font-black text-[9px] uppercase tracking-[0.5em] block mb-6">Quick Connect</span>
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4">
                Let's Build
                <br />
                <span className="text-secondary italic font-light">Together</span>
              </h3>
              <p className="text-white/50 font-light text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Reach us directly through the channel that works best for you. We respond fast.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/27824161012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-primary font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-white transition-all shadow-2xl active:scale-95 rounded-2xl"
                >
                  <i className="bi bi-whatsapp text-lg md:text-xl"></i>
                  WhatsApp Us
                </a>
                <a
                  href="tel:+27824161012"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border border-white/15 text-white font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-white/20 transition-all active:scale-95 rounded-2xl"
                >
                  <i className="bi bi-telephone text-lg md:text-xl"></i>
                  Call Now
                </a>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white/[0.03] border border-white/[0.06] p-6 md:p-8 group hover:border-secondary/30 transition-colors duration-500 rounded-2xl">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center mb-4 rounded-xl">
                  <i className="bi bi-clock text-secondary text-lg"></i>
                </div>
                <span className="text-white/20 font-black text-[8px] uppercase tracking-[0.5em] block mb-3">Operating Hours</span>
                <p className="text-white font-bold uppercase text-sm tracking-tight">Mon - Fri</p>
                <p className="text-white/40 font-light text-sm mt-1">07:30 — 17:00 SAST</p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] p-6 md:p-8 group hover:border-secondary/30 transition-colors duration-500 rounded-2xl">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center mb-4 rounded-xl">
                  <i className="bi bi-envelope-paper text-secondary text-lg"></i>
                </div>
                <span className="text-white/20 font-black text-[8px] uppercase tracking-[0.5em] block mb-3">Email Inquiry</span>
                <a href="mailto:info@mementoes.co.za" className="text-white font-bold uppercase text-sm tracking-tight hover:text-secondary transition-colors block break-all">
                  info@mementoes.co.za
                </a>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] p-6 md:p-8 group hover:border-secondary/30 transition-colors duration-500 rounded-2xl">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center mb-4 rounded-xl">
                  <i className="bi bi-shield-check text-secondary text-lg"></i>
                </div>
                <span className="text-white/20 font-black text-[8px] uppercase tracking-[0.5em] block mb-3">Registration</span>
                <p className="text-white font-bold uppercase text-sm tracking-tight">Mementoes Trading</p>
                <p className="text-white/40 font-light text-sm mt-1">Pty Ltd — South Africa</p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] p-6 md:p-8 group hover:border-secondary/30 transition-colors duration-500 rounded-2xl">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center mb-4 rounded-xl">
                  <i className="bi bi-geo-alt text-secondary text-lg"></i>
                </div>
                <span className="text-white/20 font-black text-[8px] uppercase tracking-[0.5em] block mb-3">Headquarters</span>
                <p className="text-white font-bold uppercase text-sm tracking-tight">eMalahleni</p>
                <p className="text-white/40 font-light text-sm mt-1">Mpumalanga, 1039</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-32 lg:mt-60"
        >
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="w-12 h-[1px] bg-secondary"></div>
            <span className="text-secondary font-black text-[10px] md:text-xs tracking-[0.5em] uppercase text-left">Global Location</span>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-start text-left">
            <div className="lg:col-span-4 space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none text-left">
                Visit our <br />
                <span className="text-secondary italic font-light">Headquarters</span>
              </h2>
              <div className="space-y-4">
                <span className="text-white/20 font-black text-[10px] uppercase tracking-[0.5em] block">Office Address</span>
                <p className="text-white font-bold uppercase text-xl md:text-2xl tracking-tighter leading-tight">
                  4353 Nkomo Ave,<br />
                  KwaThomas Mahlanguville,<br />
                  eMalahleni, 1039
                </p>
              </div>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=4353+Nkomo+Ave,+KwaThomas+Mahlanguville,+eMalahleni,+1039" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-secondary font-black uppercase text-xs tracking-widest group"
              >
                <span>Get Directions</span>
                <i className="bi bi-arrow-right transition-transform group-hover:translate-x-2"></i>
              </a>
            </div>
            
            <div className="lg:col-span-8 relative aspect-video lg:aspect-[21/9] bg-white/5 overflow-hidden shadow-2xl border border-white/10 group rounded-2xl">
              <iframe 
                src="https://maps.google.com/maps?q=4353%20Nkomo%20Ave%2C%20KwaThomas%20Mahlanguville%2C%20eMalahleni%2C%201039&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                className="absolute inset-0 w-full h-full grayscale invert opacity-60 contrast-125 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-4 border-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
            </div>
          </div>
        </motion.div>
        </div>
      </section>

      {/* Background Decorative Text */}
      <span className="absolute bottom-0 right-0 text-[25vw] font-black text-white/[0.02] leading-none select-none pointer-events-none uppercase">
        Network
      </span>
    </div>
  );
};

export default Contact;
