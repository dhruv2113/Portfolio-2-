import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface FloatingNavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onSectionChange(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-6 right-6 z-50">
      {isMobile ? (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="glass-card p-3 rounded-full border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
          >
            {isOpen ? <X size={20} className="text-cyan-400" /> : <Menu size={20} className="text-cyan-400" />}
          </button>
          {isOpen && (
            <div className="absolute top-16 right-0 glass-card border border-cyan-500/30 rounded-lg p-4 min-w-[150px]">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="glass-card rounded-full p-2 border border-cyan-500/30">
          <div className="flex space-x-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeSection === section.id
                    ? 'text-cyan-400 bg-cyan-500/20 border border-cyan-500/50 glow-cyan'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default FloatingNavbar;