import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const [expandedProjects, setExpandedProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
      id: 1,
      title: "AI-Based Accident Damage Detection",
      shortDesc: "Vehicle damage detection system with 94% precision using YOLO model",
      fullDesc: "Achieved a 94% precision score in vehicle damage detection using a YOLO model, trained on over 16,000 images. Designed an automated system for accurate vehicle condition assessment, reducing repair cost estimation errors. Enabled remote damage assessment, expediting insurance claim processing and improving incident investigation efficiency.",
      image: "/images/projects/aicar.png",
      github: "https://github.com/sahilkhan-7/accident-damage-detection",
      live: "#",
      tags: ['AI', 'Computer Vision', 'Python']
    },
    {
      id: 2,
      title: "Personalized Movie Recommendation System",
      shortDesc: "Hybrid recommendation engine combining content-based and collaborative filtering",
      fullDesc: "Built a recommendation engine combining content-based and collaborative filtering to enhance user experience. Improved recommendation accuracy by 12% through hybrid filtering, providing relevant movie suggestions. Leveraged user feedback and matrix factorization to increase personalization.",
      image: "/images/projects/movie.png",
      github: "https://github.com/sahilkhan-7/Movie-Recommendation-System",
      live: "#",
      tags: ['Machine Learning', 'Python', 'Recommendation Systems']
    },
    {
      id: 3,
      title: "Speech Emotion Recognition",
      shortDesc: "Interactive dashboard for real-time sales forecasting and performance tracking",
      fullDesc: "Built a CNN-LSTM model for recognizing emotions from speech data, achieving over 98% accuracy on benchmark datasets by extracting MFCC, chroma, and other audio features. The project demonstrates expertise in audio signal processing and advanced neural network architectures.",
      image: "/images/projects/ser.png",
      github: "https://github.com/sahilkhan-7/speech-emotion-recognition",
      live: "#",
      tags: ['Machine Learning', 'Python']
    },
    {
      id: 4,
      title: "Crime Section Recommendation System",
      shortDesc: "NLP-powered tool for suggesting crime sections based on user descriptions. Utilized text preprocessing, embeddings, and cosine similarity for accurate matching.",
      fullDesc: "Developed a recommendation system for suggesting crime sections based on user descriptions. Utilized NLP techniques such as text preprocessing, embeddings, and cosine similarity to match user input with relevant sections. Achieved 85% accuracy in section recommendations, improving user experience and efficiency.",
      image: "/images/projects/csr.png",
      github: "https://github.com/sahilkhan-7/crime-section-recommender",
      live: "#",
      tags: ['NLP', 'Machine Learning','Python']
    },
    {
      id: 5,
      title: "Handwritten Digit Recognition",
      shortDesc: "Deep learning solution for handwritten digit recognition with a CNN, achieving 97.5% accuracy. Includes a real-time Gradio interface for user interaction.",
      fullDesc: "Developed a deep learning solution for handwritten digit recognition using a CNN, achieving 97.5% accuracy on the MNIST dataset. Created a real-time Gradio interface for user interaction, enabling users to draw digits and receive instant predictions. Demonstrates proficiency in computer vision and deep learning.",
      image: "/images/projects/hdr.png",
      github: "https://github.com/sahilkhan-7/handwritten-digit-recognition",
      live: "#",
      tags: ['Computer Vision', 'Machine Learning', 'Python']
    },
    {
      id: 6,
      title: "Amazon Sales Analysis",
      shortDesc: "Interactive Power BI dashboard and Python-based analysis of Amazon sales data, identifying key trends and drivers for business optimization.",
      fullDesc: "Analyzed Amazon sales data using Python (Pandas) and SQL, identifying key trends and drivers for business optimization. Created an interactive Power BI dashboard for visualizing sales performance, enabling data-driven decisions. Improved sales forecasting accuracy by 20% and identified market opportunities for revenue growth.",
      image: "/images/projects/amazon.png",
      github: "https://github.com/sahilkhan-7/amazon-sales-analysis",
      live: "#",
      tags: ['Data Analysis', 'Python']
    },
  ];

  const categories = ['all', 'AI', 'Machine Learning', 'Data Analysis', 'Computer Vision'];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.tags.includes(activeFilter)
  );

  const toggleExpandedProject = (id) => {
    setExpandedProjects(prev => 
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4 animate-bounce">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-2">
            Explore my portfolio of projects showcasing expertise in AI, machine learning, and data analysis
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeFilter === category 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-700'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects
              .slice(0, showAll ? undefined : (isMobile ? 4 : 6))
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/20"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
                        >
                          <Eye className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-400 transition-all duration-300"
                      style={{
                        maxHeight: expandedProjects.includes(project.id) ? '1000px' : '4.5rem',
                        overflow: 'hidden'
                      }}
                    >
                      {expandedProjects.includes(project.id) ? project.fullDesc : project.shortDesc}
                    </p>
                    <button
                      onClick={() => toggleExpandedProject(project.id)}
                      className="mt-4 text-orange-500 hover:text-orange-400 flex items-center gap-1 transition-colors"
                    >
                      {expandedProjects.includes(project.id) ? 'Show less' : 'Read more'}
                      <ChevronDown
                        className={`transition-transform duration-300 ${
                          expandedProjects.includes(project.id) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length > (isMobile ? 4 : 6) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-orange-500 text-white rounded-full font-medium
                hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {showAll ? 'Show Less' : 'Load More Projects'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;