import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-wood-warm mb-4 block">Get In Touch</span>
            <h1 className="text-5xl mb-12">Let's Discuss Your <br /><span className="italic">Dream Kitchen</span></h1>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center text-zinc-900">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Visit Our Studio</h4>
                  <p className="text-zinc-600 leading-relaxed">
                    Shop No. 4, Unique Rashmi Shopping Centre,<br />
                    Agashi Rd, Virat Nagar, Virar West,<br />
                    Vasai-Virar, Maharashtra 401303
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center text-zinc-900">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Call Us</h4>
                  <p className="text-zinc-600">08956645631</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-green-100 flex items-center justify-center text-green-600">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2">WhatsApp</h4>
                  <a href="https://wa.me/918956645631" className="text-zinc-600 hover:text-wood-warm transition-colors underline underline-offset-4">
                    Chat with an Expert
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-16 h-64 bg-zinc-100 relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-400 flex-col">
                <MapPin size={32} className="mb-2" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Virar West, Maharashtra</span>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.642738622146!2d72.804861!3d19.471015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a96167866787%3A0x6786678767866787!2sAgni%20Kitchen%20Studio!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Google Maps Location"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-50 p-10 md:p-16">
            <h3 className="text-2xl mb-8">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-2 block">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-zinc-300 py-3 focus:border-zinc-900 outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-2 block">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-transparent border-b border-zinc-300 py-3 focus:border-zinc-900 outline-none transition-colors"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-2 block">Your Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b border-zinc-300 py-3 focus:border-zinc-900 outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="btn-primary w-full flex items-center justify-center space-x-3 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-xs font-bold uppercase tracking-widest text-center">
                  Thank you! We will contact you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-xs font-bold uppercase tracking-widest text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
