import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', key: 'h' },
    { name: 'About', href: '#about', key: 'a' },
    { name: 'Skills', href: '#skills', key: 's' },
    { name: 'Projects', href: '#projects', key: 'p' },
    { name: 'Experience', href: '#experience', key: 'e' },
    { name: 'Contact', href: '#contact', key: 'c' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:umair@example.com', label: 'Email' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-200 font-mono ${
        scrolled ? 'bg-primary border-b border-border shadow-md' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center gap-2 text-accent font-bold text-lg select-none">
            <Terminal size={20} />
            <span>&lt;Umair /&gt;</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted hover:text-accent transition-colors duration-200 text-sm flex items-center gap-1 group"
              >
                <span className="text-border group-hover:text-accent/50 transition-colors">/</span>
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-200 flex items-center"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted hover:text-accent transition-colors duration-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-primary border-t border-border mt-1 pt-2">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted hover:text-accent hover:bg-secondary/50 px-3 py-2 rounded-md transition-colors duration-200 text-sm flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-border">/</span> {item.name}
                </a>
              ))}
              <div className="flex space-x-4 pt-4 px-3 border-t border-border mt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;