import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Activity, GitBranch, Cpu, MemoryStick, Code } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Muhammad-Umair-80', label: 'github' },
    { icon: Linkedin, href: 'https://linkedin.com/in/muhammad-umair-3a1737363', label: 'linkedin' },
    { icon: Mail, href: 'mailto:44muhammadumair@gmail.com', label: 'email' },
    { icon: Code, href: 'https://leetcode.com/u/MuhammadUmair-80/', label: 'leetcode' },
  ];

  return (
    <footer className="bg-primary border-t border-border font-mono text-xs text-muted">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Status */}
        <div className="w-full md:w-auto flex items-stretch">
          <div className="bg-accent text-primary font-bold px-4 py-2 flex items-center gap-2">
            <Activity className="animate-pulse" size={14} />
            NORMAL
          </div>
          <div className="hidden sm:flex bg-secondary px-4 py-2 border-r border-border items-center gap-2">
            <GitBranch size={14} className="text-blue-400" />
            main*
          </div>
          <div className="bg-primary px-4 py-2 hidden md:flex items-center text-white/50">
            src/portfolio.jsx
          </div>
        </div>

        {/* Center Memory/CPU Simulation (Decorative) */}
        <div className="hidden lg:flex items-center gap-6 px-4 py-2">
           <div className="flex items-center gap-2">
              <Cpu size={14} className="text-yellow-400" /> [||||||    ] 60%
           </div>
           <div className="flex items-center gap-2">
              <MemoryStick size={14} className="text-green-400" /> 16GB / 32GB
           </div>
        </div>

        {/* Right Info */}
        <div className="w-full md:w-auto flex items-stretch justify-between md:justify-end">
          <div className="flex items-center px-2 py-1 md:py-2 border-l border-border bg-secondary">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 text-muted hover:text-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
          <div className="bg-primary px-4 py-2 border-l border-border flex items-center gap-2">
            utf-8
          </div>
          <div className="bg-secondary px-4 py-2 border-l border-border flex items-center gap-2 text-white">
            {time}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;