// Burger Menu Animation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Toggle Navigation
burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Language Switcher
const translations = {
    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        portfolio: "Portfolio",
        newsletter: "Newsletter",
        contact: "Contact",
        greeting: "Hi, I'm",
        tagline: "Full Stack Developer | UI/UX Designer | Tech Enthusiast",
        viewWork: "View My Work",
        getInTouch: "Get In Touch",
        aboutTitle: "About Me",
        aboutText: "I am a passionate Full Stack Developer with expertise in creating modern web applications. With a strong foundation in both front-end and back-end development, I specialize in building scalable, user-friendly solutions that solve real-world problems.",
        education: "BS Computer Science",
        experience: "5+ Years Experience",
        projects: "50+ Projects",
        skillsTitle: "Skills & Expertise",
        portfolioTitle: "Portfolio",
        ecommerceTitle: "E-commerce Platform",
        ecommerceDesc: "A full-stack e-commerce solution with React frontend and Node.js backend.",
        taskTitle: "Task Management App",
        taskDesc: "A collaborative task management application with real-time updates.",
        weatherTitle: "Weather Dashboard",
        weatherDesc: "An interactive weather dashboard using OpenWeather API.",
        newsletterTitle: "Stay Updated",
        newsletterText: "Subscribe to my newsletter for the latest updates and insights!",
        emailPlaceholder: "Enter your email",
        subscribe: "Subscribe",
        contactTitle: "Get In Touch",
        namePlaceholder: "Your Name",
        messagePlaceholder: "Your Message",
        sendMessage: "Send Message",
        copyright: "All rights reserved."
    },
    es: {
        home: "Inicio",
        about: "Sobre Mí",
        skills: "Habilidades",
        portfolio: "Portafolio",
        newsletter: "Boletín",
        contact: "Contacto",
        greeting: "Hola, soy",
        tagline: "Desarrollador Full Stack | Diseñador UI/UX | Entusiasta de la Tecnología",
        viewWork: "Ver Mi Trabajo",
        getInTouch: "Contactar",
        aboutTitle: "Sobre Mí",
        aboutText: "Soy un Desarrollador Full Stack apasionado con experiencia en la creación de aplicaciones web modernas. Con una sólida base tanto en desarrollo front-end como back-end, me especializo en construir soluciones escalables y amigables que resuelven problemas del mundo real.",
        education: "Licenciatura en Ciencias de la Computación",
        experience: "5+ Años de Experiencia",
        projects: "50+ Proyectos",
        skillsTitle: "Habilidades y Experiencia",
        portfolioTitle: "Portafolio",
        ecommerceTitle: "Plataforma E-commerce",
        ecommerceDesc: "Una solución e-commerce full-stack con frontend en React y backend en Node.js.",
        taskTitle: "Aplicación de Gestión de Tareas",
        taskDesc: "Una aplicación colaborativa de gestión de tareas con actualizaciones en tiempo real.",
        weatherTitle: "Panel del Clima",
        weatherDesc: "Un panel interactivo del clima utilizando la API de OpenWeather.",
        newsletterTitle: "Mantente Actualizado",
        newsletterText: "¡Suscríbete a mi boletín para recibir las últimas actualizaciones e información!",
        emailPlaceholder: "Ingresa tu email",
        subscribe: "Suscribirse",
        contactTitle: "Contacta Conmigo",
        namePlaceholder: "Tu Nombre",
        messagePlaceholder: "Tu Mensaje",
        sendMessage: "Enviar Mensaje",
        copyright: "Todos los derechos reservados."
    }
};

const languageToggle = document.querySelector('.language-toggle');
const currentLang = languageToggle.querySelector('.current-lang');

// Check for saved language preference
const savedLang = localStorage.getItem('language') || 'en';
currentLang.textContent = savedLang.toUpperCase();
updateContent(savedLang);

// Toggle language
languageToggle.addEventListener('click', () => {
    const newLanguage = currentLang.textContent === 'EN' ? 'es' : 'en';
    currentLang.textContent = newLanguage.toUpperCase();
    localStorage.setItem('language', newLanguage);
    updateContent(newLanguage);
});

function updateContent(language) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    // Update other text content
    if (translations[language]) {
        document.querySelector('.hero-description').textContent = translations[language].tagline || '';
        
        // Update buttons
        const primaryBtn = document.querySelector('.btn-primary');
        const secondaryBtn = document.querySelector('.btn-secondary');
        if (primaryBtn) primaryBtn.textContent = translations[language].getInTouch || 'Get in Touch';
        if (secondaryBtn) secondaryBtn.textContent = translations[language].viewWork || 'View Portfolio';
        
        // Update sections
        document.querySelectorAll('section').forEach(section => {
            const sectionId = section.id;
            const titleElement = section.querySelector('h2');
            if (titleElement && translations[language][`${sectionId}Title`]) {
                titleElement.textContent = translations[language][`${sectionId}Title`];
            }
        });
    }
}

// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.querySelector('i').classList.remove('fa-moon');
    themeToggle.querySelector('i').classList.add('fa-sun');
}

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Skills Progress Animation
const skillCards = document.querySelectorAll('.skill-card');
const animateSkills = () => {
    skillCards.forEach(card => {
        const progress = card.querySelector('.progress');
        if (progress) {
            const width = progress.style.width;
            progress.style.width = '0';
            setTimeout(() => {
                progress.style.width = width;
            }, 100);
        }
    });
};

// Animate skills when they come into view
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

// Add CSS animation for burger menu
const style = document.createElement('style');
style.textContent = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .burger.toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .burger.toggle .line2 {
        opacity: 0;
    }

    .burger.toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// Scroll to Top Button Functionality
const scrollToTopButton = document.getElementById('scrollToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Smooth scroll to top when button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 