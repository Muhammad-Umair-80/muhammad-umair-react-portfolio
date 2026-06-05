import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, FolderGit2, Star, GitFork, Activity } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const projects = [
    {
      title: 'SecondShelf - Book Exchange Platform',
      description: 'Community platform for listing, searching, and exchanging second-hand books. Includes JWT auth, image uploads, admin panel, and search.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
      github: 'https://github.com/Muhammad-Umair-80/Booksexchange-website',
      demo: null,
      stars: 0,
      forks: 0
    },
    {
      title: 'SkillSwap - MERN Skill Exchange',
      description: 'Peer-to-peer skill-sharing application built with the MERN stack.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Muhammad-Umair-80/SkillSwap',
      demo: null,
      stars: 0,
      forks: 0
    },
    {
      title: 'Restaurant Cafe - Responsive Frontend',
      description: 'Responsive frontend showcasing modern UI patterns, built with React and Vite.',
      tech: ['React', 'Vite', 'TailwindCSS'],
      github: 'https://github.com/Muhammad-Umair-80/Resturant-Cafe',
      demo: null,
      stars: 0,
      forks: 0
    },
  ];

  return (
    <section id="projects" className="section bg-primary relative border-t border-border">
      <div className="max-w-7xl mx-auto font-mono">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="text-muted mb-6">
            <span className="text-accent">~/projects</span> <span className="text-blue-400">ls -la --git</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8 text-white"
          >
             Repositories
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="card group hover:border-accent border border-border bg-secondary p-5 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="text-accent" size={20} />
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-blue-400 hover:underline">
                      {project.title}
                    </a>
                  </div>
                  <div className="flex gap-2 text-muted text-xs">
                    <span className="flex items-center gap-1 group-hover:text-yellow-400 transition-colors"><Star size={14} /> {project.stars}</span>
                    <span className="flex items-center gap-1"><GitFork size={14} /> {project.forks}</span>
                  </div>
                </div>

                <p className="text-muted text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <div className="mt-auto">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary border border-border text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm mt-4 pt-4 border-t border-border/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-muted hover:text-white transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-muted hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    <span className="ml-auto text-accent flex items-center gap-1 text-xs">
                      <Activity size={14} /> Active
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;