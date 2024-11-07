// Add active class to the current section in the navigation
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
  
    window.addEventListener('scroll', () => {
      let currentSection = '';
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          currentSection = section.getAttribute('id');
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    });
  }
  
  // Toggle dark mode
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  }
  
  // Check if dark mode is enabled from localStorage
  function checkDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }
  
  // Initialize the website functionality
  function initWebsite() {
    setActiveNavLink();
    checkDarkMode();
  
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
  
  document.addEventListener('DOMContentLoaded', initWebsite);