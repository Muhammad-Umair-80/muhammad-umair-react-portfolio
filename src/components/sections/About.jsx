import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileBadge, Code2, Cpu } from 'lucide-react';

const About = () => {
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

  const aboutJson = {
    name: "Muhammad Umair",
    role: "BS Software Engineering Student & Frontend Developer",
    education: "BS Software Engineering (PAF-IAST) — CGPA 3.41",
    location: "Peshawar, Pakistan",
    passions: ["MERN Stack", "UI/UX", "Web Performance"],
    bio: "I build full-stack web applications with a focus on user-centered frontend experiences. Experienced with React, Node.js, and modern tooling; seeking opportunities to contribute to real-world projects."
  };

  return (
    <section id="about" className="section bg-primary relative pt-24 pb-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-12 gap-8 items-start"
        >
          {/* Main Info JSON View */}
          <motion.div variants={itemVariants} className="md:col-span-7 bg-secondary rounded-lg border border-border overflow-hidden font-mono text-sm shadow-xl">
            <div className="bg-primary/50 border-b border-border px-4 py-2 flex items-center gap-2 text-muted text-xs">
              <span className="text-yellow-400">{}</span> 
              <span>about.json</span>
            </div>
            <div className="p-4 md:p-6 text-blue-300">
              <div><span className="text-gray-500">1</span> <span className="text-yellow-400">{'{'}</span></div>
              <div className="pl-4"><span className="text-gray-500 mr-4">2</span> <span className="text-accent">"name"</span>: <span className="text-green-400">"{aboutJson.name}"</span>,</div>
              <div className="pl-4"><span className="text-gray-500 mr-4">3</span> <span className="text-accent">"role"</span>: <span className="text-green-400">"{aboutJson.role}"</span>,</div>
              <div className="pl-4"><span className="text-gray-500 mr-4">4</span> <span className="text-accent">"education"</span>: <span className="text-green-400">"{aboutJson.education}"</span>,</div>
              <div className="pl-4"><span className="text-gray-500 mr-4">5</span> <span className="text-accent">"location"</span>: <span className="text-green-400">"{aboutJson.location}"</span>,</div>
              <div className="pl-4"><span className="text-gray-500 mr-4">6</span> <span className="text-accent">"passions"</span>: <span className="text-purple-400">[</span></div>
              {aboutJson.passions.map((passion, index) => (
                <div key={index} className="pl-12">
                  <span className="text-gray-500 mr-4">{7 + index}</span> <span className="text-green-400">"{passion}"</span>{index < aboutJson.passions.length - 1 ? ',' : ''}
                </div>
              ))}
              <div className="pl-4"><span className="text-gray-500 mr-2">10</span> <span className="text-purple-400">]</span>,</div>
              <div className="pl-4"><span className="text-gray-500 mr-2">11</span> <span className="text-accent">"bio"</span>: <span className="text-green-400">"{aboutJson.bio}"</span></div>
              <div><span className="text-gray-500">12</span> <span className="text-yellow-400">{'}'}</span></div>
            </div>
          </motion.div>

          {/* Core Focus Area */}
          <motion.div variants={itemVariants} className="md:col-span-5 grid gap-4 font-mono">
            <h3 className="text-muted mb-2 flex items-center gap-2">
              <span className="text-accent">##</span> Focus Areas
            </h3>
            
            <div className="card group hover:border-accent border border-border p-4 bg-secondary">
              <div className="flex items-start space-x-4">
                <Code2 className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Frontend Arch</h4>
                  <p className="text-muted text-sm">Scalable component architectures.</p>
                </div>
              </div>
            </div>

            <div className="card group hover:border-accent border border-border p-4 bg-secondary">
              <div className="flex items-start space-x-4">
                <FileBadge className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Modern tooling</h4>
                  <p className="text-muted text-sm">Vite, React 19, Tailwind CSS.</p>
                </div>
              </div>
            </div>

            <div className="card group hover:border-accent border border-border p-4 bg-secondary">
              <div className="flex items-start space-x-4">
                <Cpu className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Performance</h4>
                  <p className="text-muted text-sm">Optimizing critical rendering paths.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;