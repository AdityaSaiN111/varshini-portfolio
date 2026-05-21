import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Megaphone, MessageSquare, TrendingUp, Monitor } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: "Recruitment Basics & HR Processes", icon: <Users size={24} /> },
    { name: "Employee Engagement Concepts", icon: <Briefcase size={24} /> },
    { name: "Marketing Fundamentals", icon: <TrendingUp size={24} /> },
    { name: "Communication & Presentation", icon: <MessageSquare size={24} /> },
    { name: "Teamwork and Leadership", icon: <Megaphone size={24} /> },
    { name: "MS Office (Excel, Word, PowerPoint)", icon: <Monitor size={24} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Skills</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-brand-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-accent to-brand-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              <div className="absolute inset-[1px] rounded-2xl bg-white z-0"></div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-secondary/50 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand-accent transition-colors">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
