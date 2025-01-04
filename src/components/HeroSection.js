import React, { useEffect, useState, useMemo } from 'react';
import { FileText, Sparkles, Database, Brain, Code2 } from 'lucide-react';

const HeroSection = ({ handleNavClick }) => {
  const profiles = useMemo(() => [
    'Data Scientist', 'ML Engineer', 'AI Enthusiast', 
    'Data Analyst', 'Python Developer'
  ], []);

  const [typingText, setTypingText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = profiles[textIndex];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setTypingText(currentText.substring(0, charIndex));
        charIndex++;
      } else {
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % profiles.length);
        }, 2000);
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [textIndex, profiles]);

  const handleResumeDownload = () => {
    // Create a direct link to the resume file in the public directory
    const resumeUrl = `${process.env.PUBLIC_URL}/Sahil Khan Resume.pdf`;
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Sahil Khan Resume.pdf');
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative bg-gray-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-orange-500/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 8}px`,
                height: `${Math.random() * 8}px`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`
              }}
            />
          ))}
        </div>
        {/* Updated gradient with less darkness in bottom right */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16 relative">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm animate-bounce">
                <Sparkles className="w-4 h-4 mr-2" />
                Welcome to my portfolio
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Hi, I'm{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Sahil Khan
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform scale-x-0 animate-expandWidth" />
                </span>
              </h1>
              <div className="h-12 text-2xl md:text-3xl text-gray-400">
                <span className="text-orange-500">{'<'}</span>
                {typingText}
                <span className="animate-pulse">|</span>
                <span className="text-orange-500">{'/>'}</span>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate about transforming data into actionable insights and
              building AI solutions that solve real-world problems.
            </p>

            {/* Skills Icons */}
            <div className="flex justify-center md:justify-start gap-6">
              {[
                { Icon: Brain, label: 'AI/ML' },
                { Icon: Code2, label: 'Python' },
                { Icon: Database, label: 'Data' }
              ].map(({ Icon, label }, index) => (
                <div key={index} className="group flex flex-col items-center gap-2">
                  <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="text-sm text-gray-400">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => handleNavClick('contact')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-medium 
                          hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all"
              >
                Get in Touch
              </button>
              <button
                onClick={handleResumeDownload}
                className="px-8 py-4 border border-orange-500 rounded-lg font-medium
                          hover:bg-orange-500/10 transform hover:scale-105 transition-all 
                          flex items-center justify-center gap-2 text-white"
              >
                <FileText className="w-5 h-5" />
                Download CV
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center mb-8 md:mb-0">
            <div className="relative w-80 md:w-[30rem] aspect-square">
              <img
                src="/images/profile/hero-image.png"
                alt="Sahil Khan"
                className="w-full h-full rounded-full object-cover border-4 border-orange-500/30 
                        transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;