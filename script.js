// Mobile menu functionality
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    
    // Add/remove scrolled class based on scroll position
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Creative Section Animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// Creative Text Animation
const animateText = (element) => {
    const text = element.textContent;
    element.textContent = '';
    
    text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${i * 0.05}s`;
        element.appendChild(span);
    });
};

document.querySelectorAll('h1, h2').forEach(animateText); 