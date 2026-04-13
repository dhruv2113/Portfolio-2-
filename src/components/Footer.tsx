import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-cyan-500/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Code2 size={20} className="text-cyan-400" />
            <span>by</span>
            <span className="text-cyan-400 font-semibold">Dhruv Gaur</span>
            <span>© 2025</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;