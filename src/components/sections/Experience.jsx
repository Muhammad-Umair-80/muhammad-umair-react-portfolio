import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitCommit, GitBranch } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const experiences = [
    {
      hash: 'a1b2c3d',
      title: 'Head of Media',
      organization: 'Confiniti Student Society, PAF-IAST',
      period: '2024 - Present',
      description: 'Managed digital media campaigns, content creation, and promotional materials for university events.',
      achievements: [
        'Led social media strategy to increase engagement',
        'Coordinated content production for campus events'
      ],
      tag: 'leadership'
    },
    {
      hash: 'e4f5g6h',
      title: 'Independent Web Developer',
      organization: 'Freelance / Personal Projects',
      period: '2023 - Present',
      description: 'Design and development of full-stack web applications, including SecondShelf and SkillSwap.',
      achievements: [
        'Built end-to-end projects using MERN stack',
        'Implemented JWT auth, image uploads, and admin panels'
      ],
      tag: 'freelance'
    },
    {
      hash: 'z9y8x7w',
      title: 'Event Organiser',
      organization: 'First Aid Awareness Initiative (Rescue 1122 Collaboration)',
      period: '2023',
      description: 'Co-organised public safety seminars and managed logistics for events with 200+ participants.',
      achievements: [
        'Organised seminars reaching 200+ attendees',
        'Managed event logistics and coordination'
      ],
      tag: 'community'
    }
  ];

  return (
    <section id="experience" className="section bg-secondary relative border-t border-border">
      <div className="max-w-4xl mx-auto font-mono">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="text-muted mb-6 flex items-center gap-2">
            <span className="text-accent">~/experience</span> <span className="text-blue-400">git log --graph --oneline --decorate</span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-10 text-white"
          >
             Commit History
          </motion.h2>

          <div className="relative pl-4 md:pl-8 space-y-8">
            {/* Git branching line */}
            <div className="absolute left-6 md:left-10 top-2 bottom-0 w-px bg-border group-hover:bg-accent transition-colors" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 md:pl-12"
              >
                {/* Commit node */}
                <div className="absolute left-[-11px] md:left-[-1px] top-1.5 bg-primary border-2 border-accent w-4 h-4 rounded-full z-10" />

                <div className="mb-1 flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-yellow-400 font-bold">{exp.hash}</span>
                  {exp.tag && (
                    <span className="flex items-center gap-1 text-green-400 border border-green-500/30 bg-green-500/10 px-1.5 rounded text-xs select-none">
                      <GitBranch size={12} /> {exp.tag}
                    </span>
                  )}
                  <span className="text-muted ml-auto md:ml-2">({exp.period})</span>
                </div>

                <div className="bg-primary border border-border rounded-md p-4 mt-2 hover:border-accent/50 transition-colors shadow-sm">
                  <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                  <div className="text-accent text-sm mb-3">@ {exp.organization}</div>
                  
                  <p className="text-muted text-sm mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-1 bg-secondary/50 p-3 rounded border border-border/50 text-sm overflow-x-auto">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-2 text-gray-300">
                        <span className="text-green-500 select-none">+</span>
                        <span className="truncate">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;