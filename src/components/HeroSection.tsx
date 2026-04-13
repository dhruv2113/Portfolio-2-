import React from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Dhruv Gaur
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              DevOps-Focused Data Engineer
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Passionate about building scalable data pipelines and automating infrastructure. 
              Specializing in cloud technologies, containerization, and continuous integration 
              to deliver robust data solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/Revised_Resume (1).pdf"
                download
                className="glass-card px-8 py-3 rounded-full border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 glow-cyan group"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Download size={20} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-cyan-400 font-medium">Download Resume</span>
                </div>
              </a>
              <button className="glass-card px-8 py-3 rounded-full border border-emerald-500/50 hover:border-emerald-400 transition-all duration-300 glow-emerald group" onClick={onContactClick}>
                <div className="flex items-center justify-center space-x-2">
                  <Mail size={20} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-emerald-400 font-medium">Contact Me</span>
                </div>
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full glass-card border-2 border-cyan-500/50 glow-cyan overflow-hidden">
                <img
                  src="myimage.jpg"
                  alt="Dhruv Gaur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
