import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, Terminal, Play, FolderOpen, User } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'BS Software Engineering Student & Frontend Developer';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center bg-primary bg-grid overflow-hidden pt-16">
      <div className="max-w-4xl w-full mx-auto px-4 z-10">
        
        {/* IDE Window Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-secondary rounded-lg border border-border shadow-2xl overflow-hidden font-mono text-sm sm:text-base relative"
        >
          {/* Mac-style Window Top Bar */}
          <div className="bg-primary/50 border-b border-border px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-accent/80"></div>
            </div>
            <div className="flex-1 text-center text-muted text-xs flex items-center justify-center gap-2">
              <Terminal size={14} /> 
              <span>portfolio.sh - ~muhammad/workspace</span>
            </div>
          </div>

          {/* Window Content */}
          <div className="p-6 md:p-8 space-y-6">
            <motion.div variants={itemVariants} className="flex flex-col gap-1">
              <div className="text-muted flex gap-2">
                <span className="text-accent">~/workspace</span> $ <span className="text-blue-400">whoami</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
                Muhammad Umair
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="text-muted mb-4">
              <span className="text-accent mb-2 block">~/workspace/roles $</span>
              <span className="text-white border-r-2 border-accent pr-1 animate-pulse-fast">
                {displayText}
              </span>
            </motion.div>

            {/* Code lines */}
            <motion.div variants={itemVariants} className="bg-primary/40 rounded p-4 border border-border text-muted">
              <div className="flex text-blue-400 gap-2"><span className="text-gray-500">1</span> <span>/**</span></div>
              <div className="flex text-blue-400 gap-2"><span className="text-gray-500">2</span> <span> * Passionate about creating beautiful, functional,</span></div>
              <div className="flex text-blue-400 gap-2"><span className="text-gray-500">3</span> <span> * and user-centered digital experiences representing</span></div>
              <div className="flex text-blue-400 gap-2"><span className="text-gray-500">4</span> <span> * modern frontend technologies.</span></div>
              <div className="flex text-blue-400 gap-2"><span className="text-gray-500">5</span> <span> */</span></div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a href="#projects" className="btn flex items-center justify-center gap-2">
                <FolderOpen size={18} /> View Projects
              </a>
              <a href="/resume.pdf" download className="btn-secondary flex items-center justify-center gap-2">
                <Download size={18} /> export resume.pdf
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
                <User size={18} /> init connection
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2 border-t border-border/50">
              <span className="text-muted">Links:</span>
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:umair@example.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors duration-200 hover:bg-white/5 p-2 rounded"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;