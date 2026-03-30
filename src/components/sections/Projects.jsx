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
      title: 'secondshelf-app',
      description: 'A comprehensive book exchange platform that connects readers to share and discover new books. Features include user authentication, book listings, exchange requests, and review system.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
      github: 'https://github.com/umair/secondshelf',
      demo: 'https://secondshelf-demo.com',
      stars: 12,
      forks: 3
    },
    {
      title: 'library-mgmt-sys',
      description: 'A full-stack library management application with features for book cataloging, user management, borrowing/returning books, and generating reports.',
      tech: ['React', 'MySQL', 'Express', 'Node.js', 'MUI'],
      github: 'https://github.com/umair/lib-mgmt',
      demo: 'https://library-mgmt-demo.com',
      stars: 8,
      forks: 2
    },
    {
      title: 'cpp-book-bot',
      description: 'An intelligent chatbot built in C++ that provides book recommendations, information lookup, and conversational interactions about literature.',
      tech: ['C++', 'NLP', 'Data Structures', 'File I/O'],
      github: 'https://github.com/umair/cpp-bot',
      demo: null,
      stars: 24,
      forks: 5
    },
    {
      title: 'ecomm-dashboard-admin',
      description: 'A modern admin dashboard for e-commerce platforms with analytics, inventory management, and order tracking features.',
      tech: ['React', 'Chart.js', 'TailwindCSS', 'Firebase'],
      github: 'https://github.com/umair/ecomm-dashboard',
      demo: 'https://ecommerce-dashboard-demo.com',
      stars: 15,
      forks: 1
    },
    {
      title: 'weather-analytics-app',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      tech: ['React', 'OpenWeatherAPI', 'Leaflet', 'CSS3'],
      github: 'https://github.com/umair/weather-app',
      demo: 'https://weather-app-demo.com',
      stars: 5,
      forks: 0
    },
    {
      title: 'collab-task-manager',
      description: 'A collaborative task management application with real-time updates, team collaboration, and project tracking features.',
      tech: ['React', 'Socket.io', 'MongoDB', 'Express'],
      github: 'https://github.com/umair/task-mgmt',
      demo: 'https://task-mgmt-demo.com',
      stars: 18,
      forks: 4
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