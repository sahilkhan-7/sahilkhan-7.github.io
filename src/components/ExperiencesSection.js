import React from 'react';

const ExperienceSection = () => {
  const experience = [
    {
      role: "Data Science Intern",
      company: "Learn and Build",
      location: "Jaipur, Rajasthan, India",
      duration: "Jul 2024 - Oct 2024",
      icon: "🤖",
      achievements: [
        "Collaborated on real-world data science projects, including analyzing large datasets, building predictive models, and creating interactive dashboards.",
        "Gained hands-on experience in data preprocessing, visualization, and machine learning model development."
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Learn and Build",
      location: "Jaipur, Rajasthan, India",
      duration: "Aug 2023 - Sep 2023",
      icon: "📊",
      achievements: [
        "Analyzed e-commerce sales data using SQL and Python (Pandas), resulting in 25% improvement in product tracking and identifying market trends.",
        "Created Power BI dashboards, reducing reporting time by 30% and enabling data-driven decisions."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-full w-px left-1/2 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold text-white">Professional Journey</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-16 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-500">✦</span>
            <div className="h-1 w-16 bg-orange-500 rounded-full animate-pulse" />
          </div>
        </div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 md:-left-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-180">
                <span className="text-lg">{exp.icon}</span>
              </div>

              {/* Content card */}
              <div className="ml-12 md:ml-8 relative">
                <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/20">
                  {/* Header */}
                  <div className="space-y-3 mb-6">
                    <h3 className="text-2xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <span className="flex items-center gap-1">
                        🏢 {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        📍 {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        ⏱️ {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    {exp.achievements.map((achievement, i) => (
                      <div 
                        key={i}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 group-hover/item:scale-150 transition-transform" />
                        <p className="text-gray-300 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 to-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;