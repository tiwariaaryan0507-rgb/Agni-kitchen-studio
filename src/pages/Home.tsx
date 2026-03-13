import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Modular Kitchen" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-[1px] w-12 bg-wood-light" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-wood-light">Premium Kitchen Studio</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display mb-8 leading-tight">
              Design Your <br />
              <span className="italic">Dream Kitchen</span>
            </h1>
            <p className="text-lg text-zinc-200 mb-10 max-w-lg leading-relaxed font-light">
              Agni Kitchen Studio brings you the perfect blend of aesthetics and functionality. 
              Transform your cooking space into a masterpiece of modern design.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn-primary flex items-center justify-center space-x-2 bg-white text-zinc-900 hover:bg-wood-light">
                <span>Get Free Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/gallery" className="btn-secondary border-white text-white hover:bg-white hover:text-zinc-900">
                View Designs
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Rating */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-12 right-12 hidden lg:flex items-center space-x-4 bg-white/10 backdrop-blur-md p-6 border border-white/20"
        >
          <div className="text-white">
            <div className="flex items-center space-x-1 text-yellow-400 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-2xl font-display">4.4 / 5</p>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Google Rating</p>
          </div>
          <div className="h-12 w-[1px] bg-white/20" />
          <div className="text-white">
            <p className="text-2xl font-display">31+</p>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Happy Clients</p>
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200" 
                alt="Kitchen Design" 
                className="w-full aspect-[4/5] object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-wood-warm mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Where Innovation Meets <span className="italic">Craftsmanship</span></h2>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                At Agni Kitchen Studio, we believe the kitchen is the heart of every home. 
                Our team of expert designers and craftsmen work tirelessly to create modular kitchens 
                that are not just beautiful, but also ergonomically superior.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Quality Materials', desc: 'We use only premium, water-resistant and durable materials.' },
                  { title: 'Expert Installation', desc: 'Precision fitting by our professional installation team.' },
                  { title: 'Custom Solutions', desc: 'Tailored designs that fit your space and lifestyle perfectly.' }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-wood-warm/20 flex items-center justify-center text-wood-warm">
                      <div className="w-2 h-2 rounded-full bg-wood-warm" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
