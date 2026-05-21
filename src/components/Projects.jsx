import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, LineChart, Target } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Employee Satisfaction Survey",
      description: "Designed questionnaires, collected employee feedback, and analyzed results using Excel.",
      icon: <ClipboardList size={28} className="text-brand-accent" />
    },
    {
      title: "Market Research Study",
      description: "Conducted surveys and analyzed consumer behavior trends.",
      icon: <LineChart size={28} className="text-brand-accent" />
    },
    {
      title: "Social Media Marketing Analysis",
      description: "Studied digital brand strategies and audience engagement techniques.",
      icon: <Target size={28} className="text-brand-accent" />
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Projects</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="glass-card glass-card-hover p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Decorative background glow on hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-soft/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-6 inline-block p-4 bg-brand-secondary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-4 leading-tight relative z-10">
                {project.title}
              </h3>
              
              <p className="text-brand-light leading-relaxed relative z-10">
                {project.description}
              </p>

              {/* Animated Bottom Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-soft to-brand-accent group-hover:w-full transition-all duration-500 ease-out"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
