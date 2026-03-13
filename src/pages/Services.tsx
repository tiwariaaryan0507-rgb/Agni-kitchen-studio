import React from 'react';
import { motion } from 'motion/react';
import { Layout, Hammer, Paintbrush, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Layout size={32} />,
      title: 'Modular Kitchen Design',
      desc: 'Customized layouts including L-shape, U-shape, Island, and Parallel kitchens designed for maximum efficiency.',
      img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: <Hammer size={32} />,
      title: 'Custom Cabinets',
      desc: 'High-quality cabinetry with soft-close mechanisms and smart storage solutions tailored to your needs.',
      img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: <Paintbrush size={32} />,
      title: 'Kitchen Renovation',
      desc: 'Give your old kitchen a complete makeover with modern finishes, new countertops, and updated hardware.',
      img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Installation & Service',
      desc: 'Professional installation followed by dedicated after-sales support to ensure your kitchen stays perfect.',
      img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-wood-warm mb-4 block">Expert Solutions</span>
          <h1 className="text-5xl md:text-6xl mb-8">Comprehensive <br /><span className="italic">Kitchen Services</span></h1>
          <p className="text-lg text-zinc-600">
            From initial concept to final installation, we provide a seamless experience 
            for creating your perfect kitchen.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="mb-8 text-wood-warm">{service.icon}</div>
                <h2 className="text-3xl mb-6">{service.title}</h2>
                <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
                  {service.desc}
                </p>
                <Link to="/contact" className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-900 pb-2 hover:text-wood-warm hover:border-wood-warm transition-all">
                  <span>Inquire Now</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className="flex-1 w-full">
                <div className="relative group overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full aspect-video object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
