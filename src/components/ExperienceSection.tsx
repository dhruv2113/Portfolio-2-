import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'Summer Intern',
      company: 'LinuxWorld Informatics',
      location: 'Jaipur, India',
      duration: 'Jun 2023 - Aug 2023',
      description: [
        'Worked on RedHat Linux and automation technologies',
        'Implemented containerization using Docker and Kubernetes',
        'Developed automation scripts using Ansible and Python',
        'Configured CI/CD pipelines for application deployment'
      ]
    },
    {
      title: 'ASR Vetting Intern',
      company: 'Pinnacle Infotech',
      location: 'Remote',
      duration: 'Jun 2024 - Aug 2024',
      description: [
        'Implemented automated speech recognition vetting processes',
        'Developed Python scripts for data validation and quality assurance',
        'Collaborated with cross-functional teams to optimize workflow efficiency',
        'Reduced manual vetting time by 40% through automation'
      ]
    }
  ];

  const ExperienceCard: React.FC<{ experience: Experience; index: number }> = ({ experience, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-card p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 mb-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-2">{experience.title}</h3>
          <div className="flex items-center space-x-4 text-gray-300">
            <div className="flex items-center space-x-1">
              <Building size={16} className="text-emerald-400" />
              <span>{experience.company}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={16} className="text-emerald-400" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-gray-400 mt-2 md:mt-0">
          <Calendar size={16} className="text-emerald-400" />
          <span className="text-sm">{experience.duration}</span>
        </div>
      </div>
      <ul className="space-y-2">
        {experience.description.map((desc, idx) => (
          <li key={idx} className="text-gray-300 flex items-start">
            <span className="text-cyan-400 mr-2">▸</span>
            {desc}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey in data engineering and DevOps automation
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-emerald-400 hidden md:block"></div>
          {experiences.map((experience, index) => (
            <div key={index} className="relative md:ml-8">
              <div className="absolute -left-12 top-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full hidden md:block"></div>
              <ExperienceCard experience={experience} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;