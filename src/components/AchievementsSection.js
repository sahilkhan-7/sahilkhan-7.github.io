import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Medal, Trophy, Award, Star, ChevronRight } from 'lucide-react';

const AchievementsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Academic Excellence Awardee",
      description: "Featured in the city newspaper for achieving exceptional academic results and setting a benchmark of excellence.",
      year: "2017",
      category: "Academic Excellence"
    },    
    // {
    //   icon: <Medal className="w-8 h-8" />,
    //   title: "IEEE Paper Publication",
    //   description: "Published research paper on AI-based accident detection in IEEE International Conference.",
    //   year: "2022",
    //   category: "Research"
    // },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Hackathon Participator",
      description: "Participated in two AI/ML hackathons, building innovative solutions under time constraints.",
      year: "2022",
      category: "Competition"
    },
    // {
    //   icon: <Star className="w-8 h-8" />,
    //   title: "Research Grant",
    //   description: "Secured $50,000 research grant for AI project in autonomous systems.",
    //   year: "2021",
    //   category: "Research"
    // }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Notable <span className="text-orange-500">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition and accomplishments throughout my academic and professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 h-full transform transition-all duration-300 
                  hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-500 
                          transition-colors">
                          {achievement.title}
                        </h3>
                        <span className="text-sm text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-3">{achievement.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm px-3 py-1 bg-gray-700 text-gray-300 rounded-full">
                          {achievement.category}
                        </span>
                        <motion.div
                          animate={{
                            x: hoveredIndex === index ? 5 : 0,
                            opacity: hoveredIndex === index ? 1 : 0.5,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="text-orange-500" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/5 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/10 
                  to-orange-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity 
                  duration-300 rounded-xl" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Awards", value: "7+" },
            { label: "Competitions", value: "5" },
            { label: "Certificates", value: "7+" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 p-6 text-center transform transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
              <h4 className="text-3xl font-bold text-orange-500 mb-2">{stat.value}</h4>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
