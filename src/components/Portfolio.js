import React, { useState, useEffect, useRef } from 'react';
import { Menu, ExternalLink, Mail, ChevronDown, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [typingText, setTypingText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Navigation handler
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    setIsMenuOpen(false);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const profiles = [
    'Data Scientist',
    'ML Engineer',
    'AI Enthusiast',
    'Data Analyst',
    'Python Developer'
  ];

  // Typing animation effect
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
  }, [textIndex]);

const [isVisible, setIsVisible] = useState({});
const sectionRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    },
    { threshold: 0.1 }
  );

  const skillElements = document.querySelectorAll('.skill-item');
  skillElements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);


  // Social media links with hover animations
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sahilkhan-7",
      icon: "/images/social/github.svg"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/programmer70",
      icon: "/images/social/linkedin.svg"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/programmer.70",
      icon: "/images/social/instagram.svg"
    },
    {
      name: "Medium",
      url: "https://medium.com/@SahilKhan7824",
      icon: "/images/social/medium.svg"
    },
    {
      name: "Kaggle",
      url: "https://kaggle.com/SahilKhan782466",
      icon: "/images/social/kaggle.svg"
    }
  ];

  // Skills grouped by category
  const skillGroups = {
    "Programming Languages": [
      { name: "Python", proficiency: 95, logo: "/images/skills/python.png", color: "text-blue-500" },
      { name: "SQL", proficiency: 88, logo: "/images/skills/sql.png", color: "text-orange-500" },
      { name: "C++", proficiency: 82, logo: "/images/skills/sql.png", color: "text-red-500" },
      { name: "HTML/CSS", proficiency: 85, logo: "/images/skills/sql.png", color: "text-purple-500" }
    ],
    "Data Science & ML": [
      { name: "Statistical Analysis", proficiency: 90, logo: "/images/skills/statistics.png", color: "text-green-500" },
      { name: "Machine Learning", proficiency: 92, logo: "/images/skills/ml.png", color: "text-blue-500" },
      { name: "Deep Learning", proficiency: 88, logo: "/images/skills/dl.png", color: "text-purple-500" },
      { name: "Computer Vision", proficiency: 85, logo: "/images/skills/ml.png", color: "text-yellow-500" },
      { name: "NLP", proficiency: 83, logo: "/images/skills/dl.png", color: "text-indigo-500" }
    ],
    "Libraries & Frameworks": [
      { name: "NumPy", proficiency: 90, logo: "/images/skills/ml.png", color: "text-blue-500" },
      { name: "Pandas", proficiency: 92, logo: "/images/skills/ml.png", color: "text-green-500" },
      { name: "Scikit-learn", proficiency: 88, logo: "/images/skills/ml.png", color: "text-red-500" },
      { name: "TensorFlow", proficiency: 85, logo: "/images/skills/ml.png", color: "text-yellow-500" },
      { name: "OpenCV", proficiency: 82, logo: "/images/skills/ml.png", color: "text-purple-500" }
    ]
  };
  

  const projects = [
    {
      id: 1,
      title: "AI-Based Accident Damage Detection",
      shortDesc: "Vehicle damage detection system with 94% precision using YOLO model",
      fullDesc: "Achieved a 94% precision score in vehicle damage detection using a YOLO model, trained on over 16,000 images. Designed an automated system for accurate vehicle condition assessment, reducing repair cost estimation errors. Enabled remote damage assessment, expediting insurance claim processing and improving incident investigation efficiency.",
      image: "/images/projects/project1.png",
      github: "https://github.com/sahilkhan-7/accident-damage-detection",
      live: "#"
    },
    {
      id: 2,
      title: "Personalized Movie Recommendation System",
      shortDesc: "Hybrid recommendation engine combining content-based and collaborative filtering",
      fullDesc: "Built a recommendation engine combining content-based and collaborative filtering to enhance user experience. Improved recommendation accuracy by 12% through hybrid filtering, providing relevant movie suggestions. Leveraged user feedback and matrix factorization to increase personalization.",
      image: "/images/projects/project2.png",
      github: "https://github.com/sahilkhan-7/Movie-Recommendation-System",
      live: "#"
    },
    {
      id: 3,
      title: "Customer Churn Prediction",
      shortDesc: "ML model for telecom customer churn prediction with 85% accuracy",
      fullDesc: "Developed a machine learning model to predict customer churn with 85% accuracy, using Logistic Regression, Random Forest, and XGBoost. Conducted feature engineering and data preprocessing to improve model effectiveness. Evaluated the model with precision, recall, and F1-score, identifying high-risk customers for proactive retention.",
      image: "/images/projects/project3.png",
      github: "https://github.com/sahilkhan-7/customer-churn-prediction",
      live: "#"
    },
    {
      id: 4,
      title: "Financial Data Analysis & Visualization",
      shortDesc: "Comprehensive analysis of stock/cryptocurrency data with technical indicators",
      fullDesc: "Analyzed 5+ years of stock/cryptocurrency data, identifying market trends, price movements, and volatility patterns using technical indicators (e.g., Moving Averages, RSI, MACD). Created a dashboard that visualized price trends and volatility, improving data-driven insights by 30% for investment decisions.",
      image: "/images/projects/project4.png",
      github: "https://github.com/sahilkhan-7/accident-damage-detection",
      live: "#"
    },
    {
      id: 5,
      title: "Customer Churn Prediction",
      shortDesc: "ML model for telecom customer churn prediction with 85% accuracy",
      fullDesc: "Developed a machine learning model to predict customer churn with 85% accuracy, using Logistic Regression, Random Forest, and XGBoost. Conducted feature engineering and data preprocessing to improve model effectiveness. Evaluated the model with precision, recall, and F1-score, identifying high-risk customers for proactive retention.",
      image: "/images/projects/project3.png",
      github: "https://github.com/sahilkhan-7/customer-churn-prediction",
      live: "#"
    },
    {
      id: 6,
      title: "Financial Data Analysis & Visualization",
      shortDesc: "Comprehensive analysis of stock/cryptocurrency data with technical indicators",
      fullDesc: "Analyzed 5+ years of stock/cryptocurrency data, identifying market trends, price movements, and volatility patterns using technical indicators (e.g., Moving Averages, RSI, MACD). Created a dashboard that visualized price trends and volatility, improving data-driven insights by 30% for investment decisions.",
      image: "/images/projects/project4.png",
      github: "https://github.com/sahilkhan-7/accident-damage-detection",
      live: "#"
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Rajasthan Technical University, Jaipur",
      duration: "2021 - Present",
      details: "Current CGPA: 8.5/10"
    },
    {
      degree: "Higher Secondary Education",
      institution: "AVN (Ajeet Vidhya Niketa School), Jaipur",
      duration: "2019 - 2021",
      details: "Percentage: 94%"
    }
  ];

  const experience = [
    {
      role: "Data Analyst Intern",
      company: "Learn and Build",
      location: "Jaipur, Rajasthan, India",
      duration: "Aug 2023 - Sep 2023",
      achievements: [
        "Analyzed e-commerce sales data using SQL and Python (Pandas), resulting in 25% improvement in product tracking and identifying market trends",
        "Created Power BI dashboards, reducing reporting time by 30% and enabling data-driven decisions"
      ]
    }
  ];

  const achievements = [
    "Achieved top ranks in 10th and 12th-grade exams with distinctions; recognized in local media for academic excellence",
    "Participated in multiple AI and ML hackathons, developing innovative solutions under time constraints, gaining hands-on experience in rapid prototyping"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm border-b border-orange-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">Sahil Khan</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavClick('about')} className="hover:text-orange-500 transition-colors">About</button>
              <button onClick={() => handleNavClick('skills')} className="hover:text-orange-500 transition-colors">Skills</button>
              <button onClick={() => handleNavClick('experience')} className="hover:text-orange-500 transition-colors">Experience</button>
              <button onClick={() => handleNavClick('projects')} className="hover:text-orange-500 transition-colors">Projects</button>
              <button onClick={() => handleNavClick('education')} className="hover:text-orange-500 transition-colors">Education</button>
              <button onClick={() => handleNavClick('contact')} className="hover:text-orange-500 transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-orange-500"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-gray-800/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => handleNavClick('about')} className="block w-full text-left px-3 py-2 hover:bg-gray-700">About</button>
              <button onClick={() => handleNavClick('skills')} className="block w-full text-left px-3 py-2 hover:bg-gray-700">Skills</button>
              <button onClick={() => handleNavClick('experience')} className="block w-full text-left px-3 py-2 hover:bg-gray-700">Experience</button>
              <button onClick={() => handleNavClick('projects')} className="block w-full text-left px-3 py-2 hover:bg-gray-700">Projects</button>
              <button onClick={() => handleNavClick('educations')} className="block w-full text-left px-3 py-2 hover:bg-gray-700">Education</button>
              <button onClick={() => handleNavClick('contact')} className="block w-full text-left px-3 py-2 hover:bg-gray-700">Contact</button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section id="about" className="pt-20 md:pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Mobile layout (column) */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
            {/* Image appears first on mobile */}
            <div className="order-1 md:order-2 mb-8 md:mb-0">
              <img 
                src="/images/profile/hero-image.png" 
                alt="Sahil Khan" 
                className="rounded-full w-3/4 mx-auto"
              />
            </div>
            {/* Text content appears second on mobile */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-orange-500">Sahil Khan</span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-400 mb-8 h-8">
                {typingText}<span className="animate-pulse">|</span>
              </div>
              <p className="text-gray-300 mb-8">
                Passionate about transforming data into actionable insights and building AI solutions that solve real-world problems.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <button onClick={() => handleNavClick('contact')} 
                  className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg transition-colors">
                  Get in Touch
                </button>
                <a href="Sahil Khan 14112024.pdf" 
                  download 
                  className="border border-orange-500 hover:bg-orange-500/10 px-6 py-3 rounded-lg transition-colors flex items-center">
                  <FileText className="mr-2" size={20} />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section
      <section id="about-me" className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              I am a passionate Data Scientist with a knack for transforming data into actionable insights. My expertise lies in Machine Learning, Deep Learning, NLP, and Data Analysis. I strive to make data-driven solutions accessible and impactful. With a strong foundation in Computer Science, I am proficient in Python, SQL, and various data analysis tools. I have a keen interest in exploring the latest advancements in AI and ML, and I am always eager to learn and apply new techniques.
            </p>
            <p className="text-gray-300 mb-6">
              In my free time, I enjoy contributing to open-source projects and participating in hackathons. I believe in continuous learning and growth, and I am excited to collaborate with like-minded individuals and organizations.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold text-orange-500">Name:</h3>
                <p>Sahil Khan</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-500">Location:</h3>
                <p>Jaipur, Rajasthan</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-500">Email:</h3>
                <p>sahilkhan782466@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-500">Phone:</h3>
                <p>9785845847</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="/images/profile/profile-picture.jpg" 
              alt="Sahil Khan Profile" 
              className="rounded-lg shadow-lg w-2/3 mx-auto"
            />
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section id="about-me" className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              Hello! I'm Sahil Khan, a dedicated Data Scientist passionate about leveraging data to solve real-world challenges. With a solid foundation in Machine Learning, Deep Learning, and Data Analytics, I specialize in creating impactful, data-driven solutions. My expertise includes Python, SQL, and various analytical tools, complemented by strong visualization and storytelling abilities.
            </p>
            <p className="text-gray-300 mb-6">
              I have hands-on experience working on projects ranging from speech emotion recognition to building recommendation systems and conducting advanced regression analyses. My work philosophy revolves around continuous learning, collaboration, and exploring innovative approaches in AI and machine learning.
            </p>
            <p className="text-gray-300 mb-6">
              When I'm not diving into data, you'll find me engaging in open-source contributions, enhancing my skills through hackathons, or sharing insights with the community. I'm always excited to connect and collaborate with professionals who share a passion for making an impact through technology.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold text-orange-500">Name:</h3>
                <p>Sahil Khan</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-500">Location:</h3>
                <p>Jaipur, Rajasthan</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-500">Email:</h3>
                <p>sahilkhan782466@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-500">Phone:</h3>
                <p>9785845847</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="/images/profile/profile-picture.jpg" 
              alt="Sahil Khan Profile" 
              className="rounded-lg shadow-lg w-2/3 mx-auto"
            />
          </div>
        </div>
      </section>

      
      {/* Social Links Section */}
      <section id="social-links" className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Connect With Me</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-gray-900 rounded-lg hover:-translate-y-2 transition-all duration-300 w-16 h-16 flex items-center justify-center"
              >
                {/* Render logo as an image */}
                <img
                  src={link.icon}
                  alt={`${link.name} logo`}
                  className="w-8 h-8"
                />
                {/* Tooltip with name */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-gray-400">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* Education Section */}
      <section id="education" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="grid grid-cols-1 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-500">{edu.degree}</h3>
                    <p className="text-lg text-gray-300">{edu.institution}</p>
                  </div>
                </div>
                <div className="ml-16">
                  <p className="text-gray-400">{edu.duration}</p>
                  <p className="text-gray-300 mt-2">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        {Object.entries(skillGroups).map(([category, skills]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-orange-500">{category}</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  id={`skill-${category}-${index}`}
                  className="skill-item bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center mb-6">
                      <img src={skill.logo} alt={skill.name} className="w-8 h-8 mr-3" />
                      <span className="font-semibold text-lg">{skill.name}</span>
                    </div>
                    {/* Animated Donut Progress */}
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          fill="none"
                          stroke="currentColor"
                          className="text-gray-700"
                          strokeWidth="12"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          fill="none"
                          stroke="currentColor"
                          className={`${skill.color.replace('bg-', 'text-')} transition-all duration-1000 ease-out`}
                          strokeWidth="12"
                          strokeDasharray={`${isVisible[`skill-${category}-${index}`] ? skill.proficiency * 3.51 : 0} 351`}
                          strokeLinecap="round"
                          style={{
                            transition: 'stroke-dasharray 1.5s ease-out'
                          }}
                        />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-2xl font-bold text-white">
                          {isVisible[`skill-${category}-${index}`] ? skill.proficiency : 0}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-item {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
      </section>


      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all">
                <h3 className="text-xl font-bold text-orange-500">{exp.role}</h3>
                <p className="text-lg mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.duration} | {exp.location}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, showAll ? projects.length : (isMobile ? 4 : projects.length)).map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">
                    {expandedProject === project.id ? project.fullDesc : project.shortDesc}
                  </p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="text-orange-500 hover:text-orange-400 flex items-center"
                    >
                      {expandedProject === project.id ? "Show less" : "Read more"}
                      <ChevronDown
                        className={`ml-1 transition-transform ${
                          expandedProject === project.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    <div className="flex space-x-4">
                    {/* Code Link */}
                    <div className="relative group">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-orange-500"
                      >
                        Code
                      </a>
                      {/* Tooltip for Code */}
                      <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded transition-opacity duration-200 bottom-full left-1/2 transform -translate-x-1/2 mb-1">
                        View on GitHub
                      </div>
                    </div>

                    {/* Live Link (only for the first two projects) */}
                    {index < 2 && (
                      <div className="relative group">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-orange-500 flex items-center"
                        >
                          <ExternalLink size={20} />
                        </a>
                        {/* Tooltip for Live */}
                        <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded transition-opacity duration-200 bottom-full left-1/2 transform -translate-x-1/2 mb-1">
                          See Live
                        </div>
                      </div>
                    )}
                  </div>


                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* See More Projects Button */}
          {isMobile && projects.length > 4 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-400 transition"
              >
                {showAll ? "Show Less" : "See More Projects"}
              </button>
            </div>
          )}
        </div>
      </section>


      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
          <div className="space-y-8">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all">
            <p className="text-gray-300">{achievement}</p>
          </div>
        ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Connect Section */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a 
                  href="https://github.com/sahilkhan-7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 transition-colors"
                >
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/programmer70" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 transition-colors"
                >
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://instagram.com/programmer.70" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 transition-colors"
                >
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.kaggle.com/sahilkhan70" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 transition-colors"
                >
                  <span>kaggle</span>
                </a>
                <a 
                  href="mailto:sahilkhan782466@gmail.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 transition-colors"
                >
                  <Mail size={20} />
                  <span>sahilkhan782466@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sahil Khan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;