import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Modern', 'Classic', 'Compact'];

  const items = [
    { id: 1, category: 'Modern', title: 'Minimalist Charcoal', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800' },
    { id: 2, category: 'Classic', title: 'Traditional Oak', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800' },
    { id: 3, category: 'Compact', title: 'Urban Studio Kitchen', img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800' },
    { id: 4, category: 'Modern', title: 'Pure White Gloss', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
    { id: 5, category: 'Classic', title: 'Vintage Country', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800' },
    { id: 6, category: 'Compact', title: 'Smart Corner Unit', img: 'https://images.unsplash.com/photo-1556911261-6bd741186b3f?auto=format&fit=crop&q=80&w=800' },
  ];

  const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-wood-warm mb-4 block">Our Portfolio</span>
          <h1 className="text-5xl mb-8">Design <span className="italic">Gallery</span></h1>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                  filter === cat ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden aspect-square"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-wood-light mb-2">{item.category}</span>
                  <h3 className="text-white text-xl font-display">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
