import { Link } from 'react-router-dom';
import logo from '../assets/Mementoes Logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="inline-block rounded-[var(--radius-sm)] bg-white p-4">
              <img src={logo} alt="Mementoes Trading Logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Mementoes Trading is a 100% black women-owned, B-BBEE Level 1 contributor. We are an eco-conscious company providing exceptional logistics, waste management, and construction services.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100063811852754&locale=gn_PY#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white hover:text-secondary transition-colors rounded-xl">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://mementoes360.co.za" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white transition-colors group rounded-xl">
                <i className="bi bi-lightning-charge group-hover:text-secondary"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/70 hover:text-white hover:pl-2 transition-all block">About Us</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white hover:pl-2 transition-all block">Our Services</Link></li>
              <li><Link to="/portfolio" className="text-white/70 hover:text-white hover:pl-2 transition-all block">Project Portfolio</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white hover:pl-2 transition-all block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-white/70 flex items-center gap-2"><i className="bi bi-check2 text-white"></i> Logistics & Transport</li>
              <li className="text-white/70 flex items-center gap-2"><i className="bi bi-check2 text-white"></i> Environmental Waste</li>
              <li className="text-white/70 flex items-center gap-2"><i className="bi bi-check2 text-white"></i> Construction</li>
              <li className="text-white/70 flex items-center gap-2"><i className="bi bi-check2 text-white"></i> Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <i className="bi bi-geo-alt text-white mt-1"></i>
                <span>
                  4353 Nkomo Ave,<br />
                  KwaThomas Mahlanguville,<br />
                  eMalahleni, 1039
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <i className="bi bi-telephone text-white"></i>
                <a href="tel:+27824161012" className="hover:text-white transition-colors">+27 (0) 82 416 1012</a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <i className="bi bi-envelope text-white"></i>
                <a href="mailto:info@mementoes.co.za" className="hover:text-white transition-colors">info@mementoes.co.za</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <p className="text-white/50 text-sm md:w-1/2 text-center md:text-left">
            &copy; {new Date().getFullYear()} Mementoes Trading. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-white/50 md:w-1/2 justify-center md:justify-end">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
