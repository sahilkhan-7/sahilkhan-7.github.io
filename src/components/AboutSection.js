import React, { useEffect, useState } from 'react';

const AboutSection = () => {
  const [yearsExperience, setYearsExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const targetYears = new Date().getFullYear() - 2023;
    const timer = setInterval(() => {
      setYearsExperience(prev => prev < targetYears ? prev + 1 : prev);
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full animate-ping" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500 rounded-full animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Profile Image Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000" />
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img 
                src="/images/profile/profile-picture.jpg"
                alt="Sahil Khan" 
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-white">
                About <span className="text-orange-500">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              Hi, I'm Sahil Khan, a passionate Data Scientist with expertise in
              creating innovative solutions to solve real-world problems. With a
              background in Machine Learning, Data Analytics, and Deep Learning, I strive
              to deliver impactful insights and build intelligent systems.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Years Experience', value: '1+' },
                { label: 'Projects Completed', value: '20+' },
                { label: 'CGPA', value: '8.5' },
                { label: 'Awards', value: '5+' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-orange-500 transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                {[
                  { label: 'Location', value: 'Jaipur, Rajasthan' },
                  { label: 'Email', value: 'sahilkhan782466@gmail.com' },
                  { label: 'Phone', value: '+91 9785845847' },
                  { label: 'Available', value: 'For Part-Time, Full-Time, Contract' }
                ].map((info, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-sm font-semibold text-orange-500">{info.label}:</p>
                    <p className="text-sm">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;