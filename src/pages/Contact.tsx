import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import imgContactHero from '../assets/external/contact-hero.jpg';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'rate-limited'>('idle');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    subject: '',
    message: '',
    honeypot: '' // Spam protection
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Backend Error:', result);
        throw new Error(result.error || 'Failed to send');
      }

      setStatus('success');
      setFormData({ user_name: '', user_email: '', user_phone: '', subject: '', message: '', honeypot: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Contact Form Error:', error.message);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div ref={containerRef} className="bg-[#05070a] selection:bg-secondary selection:text-white overflow-x-clip scrollbar-hide relative">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-dark pt-24 lg:pt-20">
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
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="block">Let's Start a</motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="block text-secondary">Conversation</motion.span>
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

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 md:p-12 shadow-2xl relative rounded-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 -z-10 blur-3xl"></div>
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-secondary flex items-center justify-center rounded-full mb-6">
                    <i className="bi bi-check-lg text-primary text-4xl"></i>
                  </div>
                  <h3 className="text-primary font-black uppercase text-2xl mb-2">Message Sent</h3>
                  <p className="text-gray-500 font-light">We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 text-left">
                  {/* Honeypot Field (Hidden) */}
                  <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" />
                  
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-primary/40 block text-left">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="w-full bg-transparent border-b-2 border-primary/10 py-3 md:py-4 focus:border-secondary transition-colors outline-none text-primary font-black uppercase tracking-tighter text-sm md:text-base" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-primary/40 block text-left">Email Address</label>
                      <input 
                        required
                        type="email" 
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        className="w-full bg-transparent border-b-2 border-primary/10 py-3 md:py-4 focus:border-secondary transition-colors outline-none text-primary font-black uppercase tracking-tighter text-sm md:text-base" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-primary/40 block text-left">Phone Number</label>
                      <input 
                        type="tel" 
                        name="user_phone"
                        value={formData.user_phone}
                        onChange={handleChange}
                        placeholder="+27..." 
                        className="w-full bg-transparent border-b-2 border-primary/10 py-3 md:py-4 focus:border-secondary transition-colors outline-none text-primary font-black uppercase tracking-tighter text-sm md:text-base" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-primary/40 block text-left">Subject</label>
                      <input 
                        required
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry" 
                        className="w-full bg-transparent border-b-2 border-primary/10 py-3 md:py-4 focus:border-secondary transition-colors outline-none text-primary font-black uppercase tracking-tighter text-sm md:text-base" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-primary/40 block text-left">Message</label>
                    <textarea 
                      required
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?" 
                      className="w-full bg-transparent border-b-2 border-primary/10 py-3 md:py-4 focus:border-secondary transition-colors outline-none text-primary font-black uppercase tracking-tighter resize-none text-sm md:text-base" 
                    />
                  </div>
                  
                  <button 
                    disabled={status === 'sending'}
                    className="w-full py-4 md:py-6 bg-primary text-white font-black uppercase text-xs md:text-sm tracking-[0.4em] hover:bg-secondary hover:text-primary transition-all shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {status === 'error' && <p className="text-red-500 text-[10px] font-black uppercase text-center mt-4">Failed to send. Please try again.</p>}
                  {status === 'rate-limited' && <p className="text-orange-500 text-[10px] font-black uppercase text-center mt-4">Too many requests. Please wait a minute.</p>}
                </form>
              )}
            </AnimatePresence>
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
