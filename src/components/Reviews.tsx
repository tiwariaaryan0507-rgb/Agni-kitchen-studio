import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const Reviews = () => {
  const reviews = [
    {
      text: "Good work and after sales service. The team was very professional and delivered on time.",
      author: "Satisfied Customer",
      rating: 5
    },
    {
      text: "Nice visit experience, good staff, properly groomed. They explained everything in detail.",
      author: "Local Guide",
      rating: 4
    },
    {
      text: "Great experience and such a kind person. The design suggestions were exactly what we needed.",
      author: "Home Owner",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-wood-warm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl">What Our <span className="italic">Clients Say</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 bg-zinc-50 border border-zinc-100"
            >
              <Quote className="absolute top-6 right-6 text-zinc-200" size={40} />
              <div className="flex space-x-1 text-yellow-500 mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-zinc-600 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-wood-warm/10 flex items-center justify-center text-wood-warm font-bold text-xs">
                  {review.author[0]}
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-900">{review.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
