import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group rounded-3xl p-[1px] bg-gradient-to-r from-brand-soft via-brand-accent/50 to-brand-soft hover:from-brand-accent hover:via-brand-soft hover:to-brand-accent transition-all duration-700">
            {/* Animated Border Glow Behind Card */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent to-brand-soft rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-700"></div>
            
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-8">
              
              <div className="flex-1 text-center md:text-left">
                <p className="text-xl md:text-2xl text-brand-dark leading-relaxed font-medium">
                  "Motivated MBA student specializing in <span className="text-brand-accent font-bold">Human Resources</span> and <span className="text-brand-accent font-bold">Marketing</span>, seeking opportunities to apply academic knowledge, enhance professional skills, and contribute effectively to organizational success."
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
