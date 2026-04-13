import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Server } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  major?: boolean;
}

const projects: Project[] = [
  {
    title: 'End-to-End CI/CD Pipeline',
    description: 'Comprehensive DevOps pipeline implementing automated testing, building, and deployment using industry-standard tools and practices.',
    technologies: ['Docker', 'Jenkins', 'Python', 'Git', 'Linux', 'AWS'],
    features: [
      'Automated code testing and quality checks',
      'Containerized applications with Docker',
      'Multi-stage deployment pipeline',
      'Infrastructure as Code (IaC)',
      'Monitoring and logging integration',
      'Rollback capabilities and blue-green deployment'
    ],
    github: 'https://github.com/dhruv2113/Myproject.git',
    major: true
  },
  {
    title: 'Menu Based Automation Project',
    description: 'A Python-based menu-driven automation tool that allows users to send WhatsApp messages, SMS, make phone calls, and post on LinkedIn and Instagram, all from a single interface. Each automation is provided as a function for easy use.',
    technologies: ['Python', 'Twilio', 'Selenium', 'LinkedIn API', 'Instagram API'],
    features: [
      'Automate WhatsApp messages to any contact',
      'Send SMS programmatically',
      'Initiate phone calls via code',
      'Post updates to LinkedIn automatically',
      'Automate Instagram posts',
      'All features accessible via a menu-based interface',
      'Reusable functions for each automation task'
    ],
    github: 'https://github.com/dhruv2113/Myproject2.git',
    major: true
  },
  // Add more projects here, set major: true for your top projects
  // Example:
  // {
  //   title: 'My Other Major Project',
  //   description: '...',
  //   technologies: [...],
  //   features: [...],
  //   github: '...',
  //   demo: '...',
  //   major: true
  // },
  // {
  //   title: 'A Smaller Project',
  //   description: '...',
  //   technologies: [...],
  //   features: [...],
  //   github: '...',
  //   demo: '...',
  //   major: false
  // }
];

const MajorProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="glass-card p-12 rounded-3xl border-2 border-cyan-400/40 bg-gradient-to-br from-cyan-900/40 to-emerald-900/30 shadow-2xl mb-12"
  >
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
      <div className="flex items-center space-x-4">
        <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 border border-cyan-500/40">
          <Code size={36} className="text-cyan-400" />
        </div>
        <h3 className="text-3xl font-bold text-cyan-300">{project.title}</h3>
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-full glass-card border border-cyan-500/40 hover:border-cyan-400/70 transition-all duration-300">
            <Github size={28} className="text-cyan-400" />
          </a>
        )}
      </div>
    </div>
    <p className="text-gray-200 text-lg mb-8 leading-relaxed">{project.description}</p>
    <div className="mb-8">
      <h4 className="text-xl font-semibold text-emerald-400 mb-3 flex items-center">
        <Server size={22} className="mr-2" />
        Technologies Used
      </h4>
      <div className="flex flex-wrap gap-3">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-4 py-2 text-base bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 rounded-full text-cyan-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div>
      <h4 className="text-xl font-semibold text-emerald-400 mb-3 flex items-center">
        <Database size={22} className="mr-2" />
        Key Features
      </h4>
      <ul className="space-y-3">
        {project.features.map((feature, idx) => (
          <li key={idx} className="text-gray-200 flex items-start">
            <span className="text-cyan-400 mr-2">▸</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="glass-card p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-3">
        <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30">
          <Code size={24} className="text-cyan-400" />
        </div>
        <h3 className="text-2xl font-bold text-cyan-400">{project.title}</h3>
      </div>
      <div className="flex space-x-3">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-full glass-card border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
            <Github size={20} className="text-cyan-400" />
          </a>
        )}
      </div>
    </div>
    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
    <div className="mb-6">
      <h4 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center">
        <Server size={18} className="mr-2" />
        Technologies Used
      </h4>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-full text-cyan-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div>
      <h4 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center">
        <Database size={18} className="mr-2" />
        Key Features
      </h4>
      <ul className="space-y-2">
        {project.features.map((feature, idx) => (
          <li key={idx} className="text-gray-300 flex items-start">
            <span className="text-cyan-400 mr-2">▸</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ProjectsSection: React.FC = () => {
  const majorProjects = projects.filter((p) => p.major);
  const otherProjects = projects.filter((p) => !p.major);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Showcasing technical expertise through practical implementations. Major projects are highlighted at the top.
          </p>
        </motion.div>

        {/* Major Projects */}
        {majorProjects.map((project) => (
          <MajorProjectCard key={project.title} project={project} />
        ))}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;