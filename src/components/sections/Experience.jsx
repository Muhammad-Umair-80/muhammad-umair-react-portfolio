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
      hash: 'a7b8e9c',
      title: 'BS Software Engineering',
      organization: 'Current Institution',
      period: '2022 - Present',
      description: 'Pursuing Bachelor\'s degree in Software Engineering with focus on modern development practices, algorithms, and system design.',
      achievements: [
        'Maintained GPA above 3.5',
        'Completed advanced coursework in Data Structures and Algorithms',
        'Active participant in coding competitions and hackathons'
      ],
      tag: 'HEAD -> main, education'
    },
    {
      hash: 'f1e2d3c',
      title: 'Frontend Development Bootcamp',
      organization: 'Self-Directed Learning',
      period: '2023 - 2024',
      description: 'Intensive self-study program covering modern frontend technologies and best practices.',
      achievements: [
        'Mastered React ecosystem and modern JavaScript',
        'Built multiple full-stack applications',
        'Learned responsive design and accessibility principles'
      ],
      tag: 'learning'
    },
    {
      hash: '9a8b7c6',
      title: 'Open Source Contributions',
      organization: 'GitHub Community',
      period: '2023 - Present',
      description: 'Active contributor to open source projects, focusing on frontend libraries and developer tools.',
      achievements: [
        'Contributed to React-based UI libraries',
        'Fixed bugs and improved documentation',
        'Collaborated with developers worldwide'
      ],
      tag: 'oss'
    },
    {
      hash: '5d4e3f2',
      title: 'Coding Competition Participant',
      organization: 'Various Platforms',
      period: '2023 - Present',
      description: 'Regular participant in coding challenges and competitive programming contests.',
      achievements: [
        'Solved 500+ algorithmic problems',
        'Achieved top 20% ranking in multiple contests',
        'Improved problem-solving and optimization skills'
      ],
      tag: 'achievements'
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