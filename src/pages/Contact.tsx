import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
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

      if (!response.ok) throw new Error('Failed to send');

      setStatus('success');
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Contact Form Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

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
            <span className="text-secondary font-black text-[10px] md:text-xs tracking-[0.5em] uppercase text-left">Connect With Us</span>
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
              <h3 className="text-white/20 font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8 text-left">Operational Hub</h3>
              <div className="flex items-start gap-4 md:gap-6 group text-left">
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
              <h3 className="text-white/20 font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8 text-left">Direct Lines</h3>
              <div className="space-y-6 md:space-y-8 text-left">
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
              <h3 className="text-white/20 font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8 text-left">Social Ecosystem</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=100063811852754&locale=gn_PY#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-500 group">
                  <i className="bi bi-facebook text-white text-lg md:text-xl group-hover:text-primary"></i>
                </a>
                <a href="https://mementoes360.co.za" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-500 group">
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
            className="bg-white p-6 md:p-12 shadow-2xl relative"
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
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 md:space-y-8 text-left">
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
                    className="w-full py-4 md:py-6 bg-primary text-white font-black uppercase text-xs md:text-sm tracking-[0.4em] hover:bg-secondary hover:text-primary transition-all shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  {status === 'error' && <p className="text-red-500 text-[10px] font-black uppercase text-center mt-4">Failed to send. Please try again.</p>}
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
