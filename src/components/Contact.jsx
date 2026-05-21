import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-brand-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-brand-light max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          
          {/* Contact Information */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-soft/20 h-full">
              <h3 className="text-2xl font-bold text-brand-dark mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-brand-accent shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-light uppercase tracking-wider mb-1">Email</h4>
                    <a href="mailto:varshiniakkala9999@gmail.com" className="text-brand-dark font-medium hover:text-brand-accent transition-colors">
                      varshiniakkala9999@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-brand-accent shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-light uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-brand-dark font-medium leading-relaxed">
                      Galayagudem, Eluru District,<br/>Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-brand-accent shrink-0">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-light uppercase tracking-wider mb-1">Languages</h4>
                    <p className="text-brand-dark font-medium">
                      Telugu, English
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Placeholders */}
              <div className="mt-10 pt-8 border-t border-brand-secondary">
                <h4 className="text-sm font-semibold text-brand-light uppercase tracking-wider mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {['LinkedIn', 'Twitter', 'Instagram'].map((social, index) => (
                    <a key={index} href="#" className="w-10 h-10 rounded-full bg-brand-soft/20 flex items-center justify-center text-brand-dark hover:bg-brand-accent hover:text-white transition-all duration-300">
                      <span className="text-xs font-medium">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="flex-[1.5]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="bg-white p-8 rounded-3xl shadow-sm border border-brand-soft/20 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-brand-dark">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl bg-brand-secondary/50 border border-transparent focus:border-brand-accent focus:bg-white focus:outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-brand-dark">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl bg-brand-secondary/50 border border-transparent focus:border-brand-accent focus:bg-white focus:outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-brand-dark">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-xl bg-brand-secondary/50 border border-transparent focus:border-brand-accent focus:bg-white focus:outline-none transition-all duration-300"
                  placeholder="Job Opportunity"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-brand-dark">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-brand-secondary/50 border border-transparent focus:border-brand-accent focus:bg-white focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Hello Varshini, I'd like to talk about..."
                ></textarea>
              </div>

              <button className="btn-primary w-full flex items-center justify-center gap-2 group">
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
