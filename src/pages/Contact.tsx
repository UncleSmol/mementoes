import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import imgContactHero from '../assets/external/contact-hero.jpg';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div ref={containerRef} className="bg-[#05070a] selection:bg-secondary selection:text-white overflow-x-clip scrollbar-hide relative">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-dark">
        <div className="fixed inset-0 z-0">
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
              <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.5em]">Get In Touch</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-[10vw] font-black text-white leading-[0.9] md:leading-[0.85] uppercase tracking-tighter mb-8 md:mb-10">
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="block">Start a</motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="block text-secondary">Project</motion.span>
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12"
            >
              <p className="text-lg md:text-2xl text-gray-300 font-light max-w-xl leading-relaxed">
                Have a project in mind? Call, WhatsApp, or email us — whatever works best for you.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute right-12 bottom-24 hidden lg:block z-10 pointer-events-none">
          <span className="text-white/10 text-9xl font-black uppercase select-none" style={{ writingMode: 'vertical-rl' }}>MEMENTOES</span>
        </div>
        <motion.div style={{ scaleX: scrollYProgress }} className="absolute bottom-0 left-0 right-0 h-1 bg-secondary origin-left z-20" />
      </section>

      {/* Contact Details + Map */}
      <section className="relative py-24 md:py-40 lg:py-60 px-6 lg:px-16 bg-dark text-left border-t border-white/5">
        <motion.span style={{ y: floatingY }} className="absolute top-0 right-0 text-[20vw] font-black text-white/[0.02] leading-none pointer-events-none select-none -z-0 uppercase">
          Contact
        </motion.span>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-12 md:space-y-16">
              <div>
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-10 h-[1px] bg-secondary"></div>
                  <span className="text-secondary font-black text-[10px] tracking-[0.5em] uppercase">Reach Us</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-8">
                  Let's Talk
                </h2>
              </div>

              <div className="space-y-8 md:space-y-10">
                {/* Phone */}
                <a href="tel:+27824161012" className="flex items-center gap-4 md:gap-6 group text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-secondary transition-colors duration-500 shrink-0 rounded-xl">
                    <i className="bi bi-telephone text-secondary text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <span className="text-white/30 font-black text-[9px] uppercase tracking-[0.4em] block mb-1">Phone</span>
                    <span className="text-white font-black uppercase text-lg md:text-2xl tracking-tighter hover:text-secondary transition-colors">+27 (0) 82 416 1012</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/27824161012" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 group text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-secondary transition-colors duration-500 shrink-0 rounded-xl">
                    <i className="bi bi-whatsapp text-secondary text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <span className="text-white/30 font-black text-[9px] uppercase tracking-[0.4em] block mb-1">WhatsApp</span>
                    <span className="text-white font-black uppercase text-lg md:text-2xl tracking-tighter hover:text-secondary transition-colors">+27 (0) 82 416 1012</span>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:info@mementoes.co.za" className="flex items-center gap-4 md:gap-6 group text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-secondary transition-colors duration-500 shrink-0 rounded-xl">
                    <i className="bi bi-envelope text-secondary text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <span className="text-white/30 font-black text-[9px] uppercase tracking-[0.4em] block mb-1">Email</span>
                    <span className="text-white font-black uppercase text-sm md:text-2xl tracking-tighter hover:text-secondary transition-colors break-all">info@mementoes.co.za</span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 md:gap-6 group text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center border border-white/10 shrink-0 rounded-xl">
                    <i className="bi bi-geo-alt text-secondary text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <span className="text-white/30 font-black text-[9px] uppercase tracking-[0.4em] block mb-1">Address</span>
                    <span className="text-white font-light text-sm md:text-base leading-relaxed">4353 Nkomo Ave, KwaThomas Mahlanguville, eMalahleni, 1039</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <span className="text-white/20 font-black text-[9px] uppercase tracking-[0.5em] block mb-4">Follow Us</span>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/profile.php?id=100063811852754&locale=gn_PY#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-500 group rounded-xl">
                    <i className="bi bi-facebook text-white text-lg group-hover:text-primary"></i>
                  </a>
                  <a href="https://mementoes360.co.za" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-500 group rounded-xl">
                    <i className="bi bi-lightning-charge text-white text-lg group-hover:text-primary"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div className="lg:col-span-7">
              <div className="sticky top-24 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-secondary"></div>
                  <span className="text-secondary font-black text-[10px] tracking-[0.5em] uppercase">Our Location</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                  Visit our <br />
                  <span className="text-secondary italic font-light">Headquarters</span>
                </h2>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=4353+Nkomo+Ave,+KwaThomas+Mahlanguville,+eMalahleni,+1039" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-secondary font-black uppercase text-xs tracking-widest group"
                >
                  <span>Get Directions</span>
                  <i className="bi bi-arrow-right transition-transform group-hover:translate-x-2"></i>
                </a>
                <div className="relative aspect-video bg-white/5 overflow-hidden shadow-2xl border border-white/10 group rounded-2xl">
                  <iframe 
                    src="https://maps.google.com/maps?q=4353%20Nkomo%20Ave%2C%20KwaThomas%20Mahlanguville%2C%20eMalahleni%2C%201039&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    className="absolute inset-0 w-full h-full grayscale invert opacity-60 contrast-125 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="absolute inset-0 pointer-events-none border-4 border-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-60 w-full flex items-center justify-center bg-primary overflow-hidden text-center">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className="text-center">
            <h2 className="text-5xl md:text-[10rem] font-black text-white uppercase leading-none mb-12 md:mb-16 tracking-tighter text-center">Let's <br /> <span className="text-secondary italic text-center">Build</span></h2>
            <a href="tel:+27824161012" className="inline-block px-10 py-5 md:px-16 md:py-8 bg-secondary text-primary font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl active:scale-95 text-xl md:text-2xl rounded-2xl">Call Us Now</a>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.03] uppercase pointer-events-none whitespace-nowrap">CONTACT</div>
      </section>

    </div>
  );
};

export default Contact;
