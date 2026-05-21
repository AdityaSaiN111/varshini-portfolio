import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/varshini.jpeg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-soft/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-brand-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-brand-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-brand-accent font-semibold tracking-widest uppercase mb-4 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Welcome to my portfolio
            </motion.h2>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Varshini <br/>
              <span className="text-brand-accent">Akkala</span>
            </motion.h1>
            
            <motion.h3 
              className="text-xl md:text-2xl text-brand-dark/80 font-medium mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              MBA Student | HR & Marketing Enthusiast
            </motion.h3>
            
            <motion.p 
              className="text-brand-light text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Passionate about people management, marketing strategies, and organizational growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a href="#" className="btn-primary w-full sm:w-auto text-center">
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary w-full sm:w-auto text-center">
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Abstract Blob / Image */}
          <motion.div 
            className="flex-1 relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
              {/* Outer decorative blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-soft to-brand-accent/40 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[blob-spin_15s_ease-in-out_infinite_alternate]"></div>
              
              {/* Inner container with photo */}
              <div className="absolute inset-2 bg-brand-secondary rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden border-4 border-white/50 shadow-xl backdrop-blur-sm flex items-center justify-center animate-[blob-morph_20s_ease-in-out_infinite_alternate-reverse]">
                <img src={profilePic} alt="Varshini Akkala" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating aesthetic elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-20 h-20 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 flex items-center justify-center"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 rounded-full bg-brand-accent/80"></div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-8 -left-4 w-24 h-24 bg-white/60 backdrop-blur-md rounded-full shadow-lg border border-white/40 flex items-center justify-center"
                animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-10 h-10 border-4 border-brand-soft rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
