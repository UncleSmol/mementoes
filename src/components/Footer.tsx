import { Link } from 'react-router-dom';
import logo from '../assets/Mementoes Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="bg-white p-4 inline-block">
              <img src={logo} alt="Mementoes Trading Logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mementoes Trading is a 100% black women-owned, B-BBEE Level 1 contributor. We are an eco-conscious company providing exceptional logistics, waste management, and construction services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-secondary font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white hover:pl-2 transition-all block">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white hover:pl-2 transition-all block">Our Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white hover:pl-2 transition-all block">Project Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white hover:pl-2 transition-all block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-secondary font-bold text-lg mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center gap-2"><i className="bi bi-check2 text-secondary"></i> Logistics & Transport</li>
              <li className="text-gray-300 flex items-center gap-2"><i className="bi bi-check2 text-secondary"></i> Environmental Waste</li>
              <li className="text-gray-300 flex items-center gap-2"><i className="bi bi-check2 text-secondary"></i> Construction</li>
              <li className="text-gray-300 flex items-center gap-2"><i className="bi bi-check2 text-secondary"></i> Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-secondary font-bold text-lg mb-6 uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <i className="bi bi-geo-alt text-secondary mt-1"></i>
                <span>South Africa</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <i className="bi bi-telephone text-secondary"></i>
                <a href="tel:+27824161012" className="hover:text-white transition-colors">+27 (0) 82 416 1012</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <i className="bi bi-envelope text-secondary"></i>
                <a href="mailto:info@mementoes.co.za" className="hover:text-white transition-colors">info@mementoes.co.za</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <p className="text-gray-400 text-sm md:w-1/2 text-center md:text-left">
            &copy; {new Date().getFullYear()} Mementoes Trading. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400 md:w-1/2 justify-center md:justify-end">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
