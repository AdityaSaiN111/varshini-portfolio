import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "MBA (HR & Marketing)",
      institution: "CH.S.D.ST. THERESA'S (A) COLLEGE FOR WOMEN",
      year: "2025 – 2027",
    },
    {
      degree: "Bachelor's Degree",
      institution: "CH.S.D.ST. THERESA'S (A) COLLEGE FOR WOMEN",
      year: "2022 – 2025",
    }
  ];

  return (
    <section id="education" className="py-20 bg-brand-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-soft/50 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-10 h-10 bg-white border-4 border-brand-accent rounded-full flex items-center justify-center -translate-x-1/2 shadow-lg z-10">
                  <GraduationCap size={18} className="text-brand-accent" />
                </div>

                {/* Content Card */}
                <div className="w-full pl-20 md:pl-0 md:w-1/2">
                  <div className={`bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-brand-soft/30 hover:shadow-md transition-shadow ${
                    index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
                  }`}>
                    <span className="text-sm font-semibold text-brand-accent tracking-wider uppercase mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-brand-light font-medium">
                      {item.institution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
