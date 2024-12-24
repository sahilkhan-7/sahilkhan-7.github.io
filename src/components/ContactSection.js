import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
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

  return (
    <section id="contact" className="py-16 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-900 p-6 rounded-lg"
            initial={{ opacity: 0 }}              
            animate={{ opacity: 1 }}             
            transition={{ duration: 1 }}
            viewport={{ once: true }}   
          >
            <form id='contactForm' className="space-y-4" onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">Name</label>
                <input
                  type="text"
                  id="name"
                  name='name'
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">Email</label>
                <input
                  type="email"
                  id="email"
                  name='email'
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">Message</label>
                <textarea
                  id="message"
                  name='message'
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="Your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded-lg transition-colors text-white font-semibold"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            className="bg-gray-900 p-6 rounded-lg"
            initial={{ opacity: 0 }}               // Initial state - hidden
            animate={{ opacity: 1 }}               // When in view - visible
            transition={{ duration: 1 }}           // Transition duration
            viewport={{ once: true }}             // Animation happens only once
          >
            <h3 className="text-xl font-bold mb-6 text-orange-500">Connect With Me</h3>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
