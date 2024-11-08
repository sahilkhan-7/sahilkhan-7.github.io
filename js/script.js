// Add active class to the current section in the navigation

const heroTitle = document.querySelector('.typing-animation');
const titles = ["Data Scientist", "ML Engineer", "Data Analyst", "AI Enthusiast"];
let titleIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 50;
let newTitleDelay = 2000;

function type() {
    if (charIndex < titles[titleIndex].length) {
        heroTitle.textContent += titles[titleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTitleDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        heroTitle.textContent = titles[titleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTitleDelay);
});

function setActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-menu a');

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
// Ensure DOM is fully loaded before initializing AOS
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 800, // Animation duration
    once: true,    // Only animate once when scrolled into view
  });
});

// Toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

// Toggle mobile menu
function toggleMobileMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
}

// Check if dark mode is enabled from localStorage
function checkDarkMode() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
}

function initWebsite() {
  setActiveNavLink();
  checkDarkMode();

  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  darkModeToggle.addEventListener('click', toggleDarkMode);

  const navToggle = document.querySelector('.nav-toggle');
  navToggle.addEventListener('click', toggleMobileMenu);

  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        smoothScroll(targetElement);
      }
    });
  });
}

function smoothScroll(target) {
  const targetPosition = target.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; // Adjust the duration as needed (in milliseconds)
  let start = null;

  function animation(currentTime) {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, targetPosition);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

  // Skill progress animation
function animateSkills() {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
      const width = bar.getAttribute('data-skill-level');
      bar.style.width = width;
  });
}

// Trigger animation on scroll
window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('#skills');
  const sectionTop = skillsSection.getBoundingClientRect().top;
  if (sectionTop < window.innerHeight && sectionTop > 0) {
      animateSkills();
  }
});

document.addEventListener('DOMContentLoaded', initWebsite);