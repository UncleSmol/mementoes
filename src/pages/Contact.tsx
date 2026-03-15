import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-[#05070a] min-h-screen selection:bg-secondary selection:text-white pt-24 pb-20 lg:pt-60 lg:pb-40 px-6 lg:px-16 overflow-hidden relative">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-12 h-[1px] bg-secondary"></div>
            <span className="text-secondary font-black text-[10px] md:text-xs tracking-[0.5em] uppercase">Connect With Us</span>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-[10vw] font-black text-white uppercase leading-[0.9] tracking-tighter mb-12 md:mb-24">
            Let's Start a <br />
            <span className="text-secondary italic font-light">Conversation</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12 md:space-y-16"
          >
            <div>
              <h3 className="text-white/20 font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8">Operational Hub</h3>
              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-secondary transition-colors duration-500 shrink-0">
                  <i className="bi bi-geo-alt text-secondary text-lg md:text-xl"></i>
                </div>
                <div className="space-y-2">
                  <span className="text-white font-black uppercase text-base md:text-lg tracking-tight block">South Africa</span>
                  <p className="text-white/40 font-light text-sm md:text-lg">Central Operations - Serving a 100km radius from Witbank.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white/20 font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8">Direct Lines</h3>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-secondary transition-colors duration-500 shrink-0">
                    <i className="bi bi-telephone text-secondary text-lg md:text-xl"></i>
                  </div>
                  <a href="tel:+27824161012" className="text-white font-black uppercase text-xl md:text-3xl tracking-tighter hover:text-secondary transition-colors">+27 (0) 82 416 1012</a>
                </div>
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-secondary transition-colors duration-500 shrink-0">
                    <i className="bi bi-envelope text-secondary text-lg md:text-xl"></i>
                  </div>
                  <a href="mailto:info@mementoes.co.za" className="text-white font-black uppercase text-lg md:text-3xl tracking-tighter hover:text-secondary transition-colors break-all">info@mementoes.co.za</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white/20 font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8">Social Ecosystem</h3>
              <div className="flex gap-4">
                {['facebook', 'linkedin', 'instagram'].map((social) => (
                  <a key={social} href="#" className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-500 group">
                    <i className={`bi bi-${social} text-white text-lg md:text-xl group-hover:text-primary`}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 md:p-12 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 -z-10 blur-3xl"></div>
            <form className="space-y-6 md:space-y-8">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-primary/40 block">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b-2 border-primary/10 py-3 md:py-4 focus:border-secondary transition-colors outline-none text-primary font-black uppercase tracking-tighter text-sm md:text-base" />
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-primary/40 block">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-b-2 border-primary/10 py-3 md:py-4 focus:border-secondary transition-colors outline-none text-primary font-black uppercase tracking-tighter text-sm md:text-base" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-primary/40 block">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full bg-transparent border-b-2 border-primary/10 py-3 md:py-4 focus:border-secondary transition-colors outline-none text-primary font-black uppercase tracking-tighter text-sm md:text-base" />
              </div>
              <div className="space-y-2">
                <label className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-primary/40 block">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full bg-transparent border-b-2 border-primary/10 py-3 md:py-4 focus:border-secondary transition-colors outline-none text-primary font-black uppercase tracking-tighter resize-none text-sm md:text-base" />
              </div>
              <button className="w-full py-4 md:py-6 bg-primary text-white font-black uppercase text-xs md:text-sm tracking-[0.4em] hover:bg-secondary hover:text-primary transition-all shadow-xl active:scale-95">Send Message</button>
            </form>
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
            <span className="text-secondary font-black text-[10px] md:text-xs tracking-[0.5em] uppercase">Global Location</span>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
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
            
            <div className="lg:col-span-8 relative aspect-video lg:aspect-[21/9] bg-white/5 overflow-hidden shadow-2xl border border-white/10 group">
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

      {/* Background Decorative Text */}
      <span className="absolute bottom-0 right-0 text-[25vw] font-black text-white/[0.02] leading-none select-none pointer-events-none uppercase">
        Network
      </span>
    </div>
  );
};

export default Contact;
