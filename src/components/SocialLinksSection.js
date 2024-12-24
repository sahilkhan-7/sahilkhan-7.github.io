import React from 'react';
import { Github, Linkedin, Instagram, ExternalLink, BookOpen, Trophy } from 'lucide-react';

const SocialLinksSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sahilkhan-7",
      Icon: Github,
      color: "hover:bg-gray-600"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/programmer70",
      Icon: Linkedin,
      color: "hover:bg-blue-600"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/programmer.70",
      Icon: Instagram,
      color: "hover:bg-pink-600"
    },
    {
      name: "Medium",
      url: "https://medium.com/@SahilKhan7824",
      Icon: BookOpen,
      color: "hover:bg-green-600"
    },
    {
      name: "Kaggle",
      url: "https://kaggle.com/SahilKhan782466",
      Icon: Trophy,
      color: "hover:bg-blue-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className={`relative h-full bg-gray-900 rounded-lg p-6 flex flex-col items-center gap-4 
                             transform transition-all duration-300 group-hover:-translate-y-2
                             border border-gray-700 group-hover:border-orange-500 ${link.color}`}
              >
                <link.Icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{link.name}</span>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors absolute top-2 right-2 opacity-0 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinksSection;