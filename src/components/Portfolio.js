import emailjs from 'emailjs-com';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Github, Instagram, Linkedin} from 'lucide-react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SocialLinksSection from './SocialLinksSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import ExperiencesSection from './ExperiencesSection';
import ProjectsSection from './ProjectsSection';
import AchievementsSection from './AchievementsSection';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { BookOpen, Trophy } from 'lucide-react';


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeSection, setActiveSection] = useState('about');

  // Intersection Observer for section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    ['about', 'skills', 'projects', 'experience', 'services', 'contact'].forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Responsive design handler
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const profiles = useMemo(() => [
    'Data Scientist',
    'ML Engineer',
    'AI Enthusiast',
    'Data Analyst',
    'Python Developer'
  ], []);
  
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
  }, [textIndex, profiles]);
  
  // Navigation handler
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    setIsMenuOpen(false);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Email form
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_w19m80n',
        'template_w0667d4',
        e.target,
        'Sr2hI8LgOnzeyUCyj'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send the message. Please try again later.');
          console.error(error);
        }
      );

      e.target.reset(); 
  };

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
        document.body.style.overflowX = '';
    };
  }, []);

  useEffect(() => {
    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    };
  
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 768);
    }, 300);
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Social media links with hover animations
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

  // Skills grouped by category
  const skillGroups = {
    "Programming Languages": [
      { name: "Python", proficiency: 95, logo: "/images/skills/python.png", color: "bg-yellow-400" },
      { name: "SQL", proficiency: 88, logo: "/images/skills/sql.png", color: "bg-blue-500" },
      { name: "C++", proficiency: 82, logo: "/images/skills/cpp.png", color: "bg-emerald-500" },
      { name: "HTML/CSS", proficiency: 85, logo: "/images/skills/htmlcss.png", color: "bg-pink-500" },
    ],
    "Data Science & ML": [
      { name: "Statistical Analysis", proficiency: 90, logo: "/images/skills/statistics.png", color: "bg-teal-500" },
      { name: "Machine Learning", proficiency: 92, logo: "/images/skills/ml.png", color: "bg-indigo-500" },
      { name: "Deep Learning", proficiency: 88, logo: "/images/skills/dl.png", color: "bg-yellow-400" },
      { name: "Computer Vision", proficiency: 85, logo: "/images/skills/cv.png", color: "bg-blue-500" },
      { name: "NLP", proficiency: 83, logo: "/images/skills/nlp.png", color: "bg-green-500" },
    ],
    "Libraries & Frameworks": [
      { name: "TensorFlow", proficiency: 85, logo: "/images/skills/tf.png", color: "bg-orange-600" },
      { name: "Keras", proficiency: 82, logo: "/images/skills/keras.png", color: "bg-red-600" },
      { name: "OpenCV", proficiency: 82, logo: "/images/skills/opencv.png", color: "bg-green-400" },
      { name: "Scikit-learn", proficiency: 88, logo: "/images/skills/sklearn.png", color: "bg-orange-400" },
      { name: "Pandas", proficiency: 92, logo: "/images/skills/pandas.png", color: "bg-blue-800" },
      { name: "NumPy", proficiency: 90, logo: "/images/skills/numpy.png", color: "bg-blue-400" },
    ],
    "Development": [
      { name: "Flask", proficiency: 85, logo: "/images/skills/flask.png", color: "bg-cyan-500" },
      { name: "GitHub", proficiency: 82, logo: "/images/social/github.svg", color: "bg-violet-500" },
      { name: "Git", proficiency: 82, logo: "/images/skills/git.png", color: "bg-orange-600" },
      { name: "Streamlit", proficiency: 88, logo: "/images/skills/streamlit.png", color: "bg-red-500" },
    ],
  };  

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
    <div className="min-h-screen bg-gray-900">
      <Header handleNavClick={handleNavClick} />
      
      <main>

          <HeroSection handleNavClick={handleNavClick} />

          <AboutSection />

          <SocialLinksSection socialLinks={socialLinks} />

          <EducationSection education={education} />

          <SkillsSection skillGroups={skillGroups}/>

          <ExperiencesSection experience={experience} />

          <ProjectsSection isMobile={isMobile} />
      
          <AchievementsSection achievements = {achievements}/>

          <ServicesSection />

          <ContactSection sendEmail={sendEmail} socialLinks={socialLinks} />
          
          <Footer/>
          
      </main>
    </div>
  );
};

export default Portfolio;