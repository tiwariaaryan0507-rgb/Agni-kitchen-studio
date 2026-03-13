import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.3em] font-bold text-wood-warm mb-4 block"
          >
            About Agni Kitchen Studio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-8"
          >
            Crafting Culinary <br />
            <span className="italic">Excellence Since Inception</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 leading-relaxed"
          >
            Located in the heart of Virar, Agni Kitchen Studio has been a pioneer in modular kitchen solutions. 
            We specialize in creating bespoke kitchen environments that reflect the unique personality of our clients.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { icon: <Award className="text-wood-warm" />, title: 'Premium Quality', desc: 'Sourced from the finest materials to ensure longevity.' },
            { icon: <Users className="text-wood-warm" />, title: 'Customer First', desc: 'Your satisfaction is our primary metric of success.' },
            { icon: <ShieldCheck className="text-wood-warm" />, title: 'Reliable Service', desc: 'Comprehensive after-sales support for peace of mind.' },
            { icon: <CheckCircle2 className="text-wood-warm" />, title: 'Expert Fitting', desc: 'Meticulous installation by certified professionals.' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-zinc-50 border border-zinc-100 hover:border-wood-warm/30 transition-colors"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl mb-8">Our Commitment to <span className="italic">Quality</span></h2>
            <div className="space-y-6 text-zinc-600">
              <p>
                Every kitchen we design is a result of rigorous planning and attention to detail. 
                We understand that a kitchen is more than just a place to cook; it's a space for 
                family gatherings, morning coffee, and late-night snacks.
              </p>
              <p>
                Our materials are tested for heat resistance, moisture protection, and durability 
                against the Indian climate. From soft-close hinges to scratch-resistant surfaces, 
                we ensure every component meets international standards.
              </p>
              <p>
                Our after-sales service is what sets us apart. We don't just install and leave; 
                we ensure your kitchen remains in top condition for years to come.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200" 
              alt="Our Workshop" 
              className="w-full aspect-video object-cover shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
