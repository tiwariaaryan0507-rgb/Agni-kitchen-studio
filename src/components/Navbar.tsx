import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      scrolled ? "glass-nav py-4 shadow-sm" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="text-xl font-bold tracking-tighter uppercase text-zinc-900">Agni Kitchen Studio</span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 -mt-1">अग्नि किचन स्टूडियो</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-xs uppercase tracking-widest font-bold hover:text-wood-warm transition-colors",
                location.pathname === link.path ? "text-wood-warm" : "text-zinc-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:08956645631" 
            className="flex items-center space-x-2 bg-zinc-900 text-white px-5 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-wood-warm transition-colors"
          >
            <Phone size={14} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm uppercase tracking-widest font-bold text-zinc-800"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-4">
                <a href="tel:08956645631" className="flex items-center space-x-3 text-zinc-800 font-bold">
                  <Phone size={18} />
                  <span>08956645631</span>
                </a>
                <a 
                  href="https://wa.me/918956645631" 
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-none font-bold uppercase tracking-widest text-xs"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
