import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Database,
  FileCode,
  Palette,
  BarChart,
  Table,
  Settings,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
}

const skills: Skill[] = [
  { name: 'Python', icon: Code },
  { name: 'Docker', icon: Server },
  { name: 'SQL', icon: Database },
  { name: 'HTML', icon: FileCode },
  { name: 'CSS', icon: Palette },
  { name: 'Tableau', icon: BarChart },
  { name: 'Excel', icon: Table },
  { name: 'Jenkins', icon: Settings },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient in a diverse range of technologies spanning data engineering, DevOps, and analytics
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center glass-card p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 shadow-lg"
              >
                <div className="mb-3">
                  <Icon size={40} className={index % 2 === 0 ? 'text-cyan-400' : 'text-emerald-400'} />
                </div>
                <span className="text-gray-200 font-medium text-lg mt-1">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;