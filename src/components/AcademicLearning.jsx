import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, CheckCircle } from 'lucide-react';

const AcademicLearning = () => {
  const topics = [
    "Human Resource Management",
    "Organizational Behavior",
    "Marketing Management",
    "Consumer Behavior",
    "Recruitment & Training Basics"
  ];

  return (
    <section id="academic" className="py-20 bg-brand-secondary/40 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="flex-1 lg:pr-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark">Academic Learning</h2>
            <div className="w-16 h-1 bg-brand-accent rounded-full mb-8"></div>
            
            <p className="text-brand-light text-lg mb-8 leading-relaxed">
              Through my MBA coursework, I have developed a strong foundational understanding of key concepts in both Human Resources and Marketing. These subjects have equipped me with the theoretical knowledge needed to understand organizational dynamics and consumer markets.
            </p>
          </motion.div>

          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-soft/20">
              <div className="space-y-6">
                {topics.map((topic, index) => (
                  <motion.div 
                    key={index}
                    className="group relative flex items-center gap-4 pb-4 border-b border-brand-secondary last:border-0 last:pb-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  >
                    <div className="text-brand-soft group-hover:text-brand-accent transition-colors duration-300">
                      <CheckCircle size={20} />
                    </div>
                    <span className="text-brand-dark font-medium text-lg group-hover:text-brand-accent transition-colors duration-300">
                      {topic}
                    </span>
                    
                    {/* Animated underline on hover */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AcademicLearning;
