import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Terminal } from 'lucide-react';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="resume" className="section bg-primary relative border-t border-border">
      <div className="max-w-4xl mx-auto font-mono">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="text-muted mb-6">
            <span className="text-accent">~/docs</span> <span className="text-blue-400">cat resume.md</span>
          </motion.div>

          {/* Terminal File Viewer */}
          <motion.div variants={itemVariants} className="bg-secondary rounded-lg border border-border shadow-xl overflow-hidden mt-8">
            <div className="bg-primary/50 border-b border-border px-4 py-2 flex items-center justify-between text-muted text-xs">
              <div className="flex items-center gap-2">
                <Terminal size={14} /> 
                <span>resume.md - vi</span>
              </div>
              <a 
                href="/resume.pdf" 
                download="Muhammad_Umair_Resume.pdf"
                className="flex items-center gap-1 text-accent hover:text-white transition-colors"
                title="Download PDF"
              >
                <Download size={14} /> [Download pdf]
              </a>
            </div>

            <div className="p-6 md:p-8 text-gray-300 text-sm md:text-base leading-relaxed overflow-x-auto">
              <div className="text-accent mb-4 font-bold text-xl"># Muhammad Umair</div>
              <div className="text-muted italic mb-6">&gt; BS Software Engineering Student &amp; Frontend Developer</div>
              
              <div className="text-blue-400 font-bold mt-6 mb-2">## Technical Skills</div>
              <ul className="list-none space-y-1 mb-6">
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">Frontend:</span> React, JavaScript, HTML5, CSS3, Tailwind CSS</li>
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">Backend:</span> Node.js, Express.js, MySQL, MongoDB</li>
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">Tools:</span> Git, GitHub, VS Code, Figma</li>
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">Languages:</span> C++, JavaScript, Python</li>
              </ul>

              <div className="text-blue-400 font-bold mt-6 mb-2">## Education</div>
              <ul className="list-none space-y-1 mb-6">
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">Degree:</span> BS Software Engineering (2022-Present)</li>
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">Relevant Coursework:</span> Data Structures, Algorithms, Web Development</li>
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">GPA:</span> 3.5+ (Expected Graduation: 2026)</li>
              </ul>

              <div className="text-blue-400 font-bold mt-6 mb-2">## Top Projects</div>
              <ul className="list-none space-y-1 mb-8">
                <li><span className="text-accent">-</span> SecondShelf - Book Exchange Platform</li>
                <li><span className="text-accent">-</span> Library Management System</li>
                <li><span className="text-accent">-</span> C++ Book Information Chatbot</li>
              </ul>

              {/* Vim style footer */}
              <div className="mt-8 pt-4 border-t border-border/50 flex justify-between text-xs text-muted">
                <span>"resume.md" 25L, 642B</span>
                <span>1,1 <span className="ml-2">All</span></span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;