import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Smile, MessageCircle, RefreshCw } from 'lucide-react';

const Strengths = () => {
  const strengths = [
    { name: "Quick Learner", icon: <Zap size={24} /> },
    { name: "Positive Attitude", icon: <Smile size={24} /> },
    { name: "Good Communication Skills", icon: <MessageCircle size={24} /> },
    { name: "Adaptability", icon: <RefreshCw size={24} /> }
  ];

  return (
    <section id="strengths" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Strengths</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {strengths.map((strength, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Soft glow hover effect */}
              <div className="absolute inset-0 bg-brand-accent rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <div className="relative flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-sm border border-brand-soft/30 hover:border-brand-accent/50 transition-colors duration-300 z-10">
                <div className="text-brand-accent group-hover:scale-110 transition-transform duration-300">
                  {strength.icon}
                </div>
                <span className="font-semibold text-brand-dark">
                  {strength.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
