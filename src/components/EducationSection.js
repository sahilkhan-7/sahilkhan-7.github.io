import React from 'react';

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Rajasthan Technical University, Jaipur",
      duration: "2021 - Present",
      details: "Current CGPA: 8.5/10",
      icon: "🎓"
    },
    {
      degree: "Higher Secondary Education",
      institution: "AVN (Ajeet Vidhya Niketa School), Jaipur",
      duration: "2019 - 2021",
      details: "Percentage: 94%",
      icon: "📚"
    }
  ];

  return (
    <section id="education" className="py-16 px-4 bg-gray-900 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold text-white animate-bounce">
            Education Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl bg-gray-800 p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 ${
                index % 2 === 0 ? 'animate-slide-right' : 'animate-slide-left'
              }`}
            >
              <div className="absolute -right-4 -top-4 text-6xl opacity-10 transition-transform duration-300 group-hover:scale-150 group-hover:opacity-20">
                {edu.icon}
              </div>
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold text-orange-500 group-hover:text-orange-400">
                  {edu.degree}
                </h3>
                <div className="space-y-2">
                  <p className="text-lg text-gray-300 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-orange-400 font-semibold">
                    {edu.duration}
                  </p>
                  <p className="text-gray-400 border-l-2 border-orange-500 pl-4">
                    {edu.details}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 to-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;