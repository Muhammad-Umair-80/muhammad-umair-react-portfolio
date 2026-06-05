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
                href="/Muhammad_Umair_Resume.pdf" 
                download="Muhammad_Umair_Resume.pdf"
                className="flex items-center gap-1 text-accent hover:text-white transition-colors"
                title="Download PDF"
              >
                <Download size={14} /> [Download pdf]
              </a>
            </div>

            <div className="p-6 md:p-8 text-gray-300 text-sm md:text-base leading-relaxed overflow-x-auto">
              <div className="text-accent mb-4 font-bold text-xl"># Muhammad Umair</div>
              <div className="text-muted italic mb-6">&gt; BS Software Engineering Student (5th Sem) • MERN Stack & Full-Stack Developer</div>
              
              <div className="text-blue-400 font-bold mt-6 mb-2">## Objectives</div>
              <p className="text-muted mb-6">
                Seeking an IT-related position in a government or semi-government organisation where I can apply full-stack web development skills, contribute to real-world projects, and grow as a software engineer.
              </p>

              <div className="text-blue-400 font-bold mt-6 mb-2">## Education</div>
              <ul className="list-none space-y-2 mb-6">
                <li>
                  <span className="text-accent">-</span> <span className="text-white font-semibold">BS Software Engineering (2024 - 2028 Expected)</span>
                  <div className="text-muted pl-4">PAF-IAST Pak-Austria Fachhochschule, Haripur</div>
                  <div className="text-muted pl-4">CGPA: 3.41 / 4.0 | Top 15% of class | Government Laptop Scholarship Recipient</div>
                </li>
                <li>
                  <span className="text-accent">-</span> <span className="text-white font-semibold">Intermediate (Pre-Engineering) — 2024</span>
                  <div className="text-muted pl-4">Government College Peshawar | Marks: 974 / 1100 (81%)</div>
                </li>
                <li>
                  <span className="text-accent">-</span> <span className="text-white font-semibold">Matric (Science) — 2022</span>
                  <div className="text-muted pl-4">Iqra Rozatul Atfal School Peshawar | Marks: 964 / 1100 (87%)</div>
                </li>
              </ul>

              <div className="text-blue-400 font-bold mt-6 mb-2">## Technical Skills</div>
              <ul className="list-none space-y-1 mb-6">
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">Programming:</span> JavaScript (Advanced), C++ (Advanced), Python, SQL</li>
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">Frontend:</span> HTML & CSS (Advanced), React (Intermediate), Next.js, Tailwind CSS</li>
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">Backend:</span> Node.js, Express.js</li>
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">Databases:</span> MySQL, MongoDB, PostgreSQL</li>
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">Tools:</span> Git, GitHub, Docker, Linux</li>
              </ul>

              <div className="text-blue-400 font-bold mt-6 mb-2">## Projects</div>
              <ul className="list-none space-y-1 mb-6">
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">SecondShelf:</span> Full-Stack Book Exchange Platform (Node.js/Express backend, React frontend)</li>
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">SkillSwap:</span> MERN Stack Skill Exchange Platform</li>
                <li><span className="text-accent">-</span> <span className="text-white font-semibold">Restaurant Cafe:</span> Responsive Frontend Application (React + Vite)</li>
              </ul>

              <div className="text-blue-400 font-bold mt-6 mb-2">## Achievements</div>
              <ul className="list-none space-y-1 mb-8">
                <li><span className="text-accent">-</span> Government Laptop Scholarship awarded on academic merit.</li>
                <li><span className="text-accent">-</span> Top 15% of class CGPA 3.41 at PAF-IAST.</li>
                <li><span className="text-accent">-</span> Selected as Head of Media for Confiniti Student Society.</li>
                <li><span className="text-accent">-</span> Co-organised public safety events (Rescue 1122 Collaboration) reaching 200+ attendees.</li>
              </ul>

              {/* Vim style footer */}
              <div className="mt-8 pt-4 border-t border-border/50 flex justify-between text-xs text-muted">
                <span>"resume.md" 48L, 1892B</span>
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