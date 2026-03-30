import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
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

  const skills = [
    { name: 'HTML', level: 95, color: 'text-orange-500' },
    { name: 'CSS', level: 90, color: 'text-blue-500' },
    { name: 'JavaScript', level: 85, color: 'text-yellow-400' },
    { name: 'React', level: 88, color: 'text-cyan-400' },
    { name: 'Tailwind CSS', level: 92, color: 'text-teal-400' },
    { name: 'C++', level: 80, color: 'text-purple-500' },
    { name: 'MySQL', level: 75, color: 'text-indigo-400' },
    { name: 'Git & GitHub', level: 85, color: 'text-gray-400' },
  ];

  const renderProgressBar = (level) => {
    const totalBlocks = 20;
    const filledBlocks = Math.round((level / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    return '[' + '='.repeat(filledBlocks) + ' '.repeat(emptyBlocks) + ']';
  };

  return (
    <section id="skills" className="section bg-secondary relative border-t border-border">
      <div className="max-w-6xl mx-auto font-mono">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="text-muted mb-6">
            <span className="text-accent">~/skills</span> <span className="text-blue-400">./analyze_proficiency.sh</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8 text-white"
          >
             System Capabilities
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-x-12 gap-y-6 bg-primary p-6 md:p-8 rounded-lg border border-border"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-border/50 hover:bg-white/5 transition-colors px-2 rounded"
              >
                <div className="w-32 font-bold mb-1 sm:mb-0 text-white">
                  {skill.name}
                </div>
                <div className="flex-1 flex items-center gap-3">
                  <span className={`${skill.color} tracking-widest text-xs sm:text-sm`}>
                    {renderProgressBar(skill.level)}
                  </span>
                  <span className="text-accent text-sm w-8 text-right">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Grid */}
          <motion.div variants={containerVariants} className="mt-12">
            <motion.div variants={itemVariants} className="text-muted mb-4">
              <span className="text-accent">~/skills</span> <span className="text-blue-400">cat related_tech.json</span>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 bg-primary p-6 rounded-lg border border-border"
            >
              {[
                'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Vite', 'Webpack',
                'TypeScript', 'SASS', 'Bootstrap', 'Material-UI', 'Figma', 'Adobe XD'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary border border-border rounded text-accent text-sm hover:border-accent hover:text-white transition-colors cursor-default"
                >
                  "{tech}"
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;