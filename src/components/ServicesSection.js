import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart2, 
  Brain, 
  Network, 
  Cpu, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: "Data Analysis & Visualization",
      description: "Transform raw data into actionable insights with tailored dashboards and reports.",
      icon: <BarChart2 className="w-6 h-6" />,
      features: [
        "Interactive Dashboards",
        "Statistical Analysis",
        "Data Cleaning & Preprocessing",
        "Custom Reporting Solutions"
      ],
      highlight: "99% Client Satisfaction"
    },
    {
      title: "Machine Learning Models",
      description: "Design, train, and deploy predictive models to solve real-world problems.",
      icon: <Brain className="w-6 h-6" />,
      features: [
        "Predictive Analytics",
        "Classification Models",
        "Regression Analysis",
        "Model Optimization"
      ],
      highlight: "85% Accuracy Rate"
    },
    {
      title: "Deep Learning Solutions",
      description: "Create AI models for tasks like computer vision, NLP, and speech recognition.",
      icon: <Network className="w-6 h-6" />,
      features: [
        "Computer Vision",
        "Natural Language Processing",
        "Speech Recognition",
        "Neural Network Design"
      ],
      highlight: "State-of-the-art Performance"
    },
    // {
    //   title: "ETL Pipelines",
    //   description: "Build robust pipelines for data extraction, transformation, and loading.",
    //   icon: <Database className="w-6 h-6" />,
    //   features: [
    //     "Automated Data Extraction",
    //     "Data Transformation",
    //     "Quality Assurance",
    //     "Scalable Architecture"
    //   ],
    //   highlight: "99.9% Uptime"
    // },
    {
      title: "Custom AI Applications",
      description: "Develop end-to-end AI applications tailored to your needs.",
      icon: <Cpu className="w-6 h-6" />,
      features: [
        "Customized Solutions",
        "Integration Support",
        "Performance Optimization",
        "Maintenance & Updates"
      ],
      highlight: "100+ Projects Delivered"
    },
    // {
    //   title: "Consulting & Workshops",
    //   description: "Provide hands-on training and strategic guidance in AI and data science.",
    //   icon: <GraduationCap className="w-6 h-6" />,
    //   features: [
    //     "Expert Consultation",
    //     "Training Workshops",
    //     "Strategy Development",
    //     "Technical Support"
    //   ],
    //   highlight: "500+ Trained Professionals"
    // }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-850">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive AI and data science solutions tailored to transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6 h-full transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: hoveredService === index ? 1 : 0.7,
                          x: hoveredService === index ? 0 : -10
                        }}
                        transition={{ duration: 0.2, delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full">
                      {service.highlight}
                    </span>
                    <motion.div
                      animate={{
                        x: hoveredService === index ? 5 : 0,
                        opacity: hoveredService === index ? 1 : 0.5
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="text-orange-500" />
                    </motion.div>
                  </div>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 rounded-xl" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Looking for a custom solution? Let's discuss how I can help you achieve your goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
