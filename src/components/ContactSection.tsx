import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dhruvgour498@gmail.com',
      href: 'mailto:dhruvgour498@gmail.com',
      color: 'cyan'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/dhruv2113',
      href: 'https://github.com/dhruv2113',
      color: 'gray'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/dhruv-gaur-2107dg',
      href: 'https://www.linkedin.com/in/dhruv-gaur-2107dg',
      color: 'emerald'
    }
  ];

  const ContactCard: React.FC<{ contact: typeof contactLinks[0]; index: number }> = ({ contact, index }) => (
    <motion.a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group flex items-center justify-center"
    >
      <div className={`p-3 rounded-full bg-gradient-to-r ${
        contact.color === 'cyan' ? 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30' :
        contact.color === 'emerald' ? 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30' :
        'from-gray-500/20 to-gray-600/20 border-gray-500/30'
      } border`}>
        <contact.icon size={32} className={`${
          contact.color === 'cyan' ? 'text-cyan-400' :
          contact.color === 'emerald' ? 'text-emerald-400' :
          'text-gray-400'
        } group-hover:scale-110 transition-transform`} />
      </div>
    </motion.a>
  );

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to discuss your next data engineering or DevOps project? Let's connect and build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((contact, index) => (
            <ContactCard key={contact.label} contact={contact} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="glass-card p-8 rounded-2xl border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Let's Collaborate</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new opportunities, innovative projects, and ways to optimize your data infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mail.google.com/mail/?view=cm&to=dhruvgour498@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-8 py-3 rounded-full border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 glow-cyan group"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Mail size={20} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-cyan-400 font-medium">Send Email</span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;