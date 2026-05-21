import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-brand-bg relative border-t border-brand-secondary">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <a href="#" className="font-heading text-3xl font-bold text-brand-accent tracking-widest mb-6">
          VA.
        </a>
        
        <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-brand-soft to-transparent mb-6"></div>
        
        <p className="text-brand-light text-sm font-medium tracking-wide">
          Designed with elegance and professionalism
        </p>
        
        <p className="text-brand-light/60 text-xs mt-4">
          &copy; {new Date().getFullYear()} Varshini Akkala. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
