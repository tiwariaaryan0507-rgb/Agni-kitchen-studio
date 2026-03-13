import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter uppercase">Agni Kitchen Studio</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 -mt-1">अग्नि किचन स्टूडियो</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Premium modular kitchen solutions in Virar. We blend modern aesthetics with functional excellence to create your dream cooking space.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-wood-warm transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-wood-warm transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-wood-light">Quick Links</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Kitchen Designs</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-wood-light">Contact Info</h4>
            <ul className="space-y-6 text-sm text-zinc-400">
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="text-wood-warm flex-shrink-0" />
                <span>Shop No. 4, Unique Rashmi Shopping Centre, Agashi Rd, Virar West, Maharashtra 401303</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={18} className="text-wood-warm flex-shrink-0" />
                <span>08956645631</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-wood-light">Business Hours</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-center justify-between">
                <span className="flex items-center space-x-2"><Clock size={14} /> <span>Mon - Sat</span></span>
                <span>10:00 AM - 8:30 PM</span>
              </li>
              <li className="flex items-center justify-between text-zinc-500">
                <span className="flex items-center space-x-2"><Clock size={14} /> <span>Sunday</span></span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            © {new Date().getFullYear()} Agni Kitchen Studio. All Rights Reserved.
          </p>
          <a 
            href="https://wa.me/918956645631" 
            className="fixed bottom-8 right-8 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
            title="Chat on WhatsApp"
          >
            <MessageSquare size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
