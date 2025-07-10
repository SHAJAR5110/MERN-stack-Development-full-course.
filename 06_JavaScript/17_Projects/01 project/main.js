// Car Website JavaScript - Complete Interactive Functionality

// Global Variables
let isLoading = true;
let currentFilter = 'all';
let animationTimeline = null;

// Car Data
const carData = {
    lamborghini: {
        title: "Lamborghini Huracán",
        price: "$248,295",
        engine: "5.2L V10",
        horsepower: "630 HP",
        acceleration: "2.9 seconds",
        topSpeed: "202 mph",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='lamboGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23ff6b35;stop-opacity:1' /><stop offset='100%' style='stop-color:%23f7931e;stop-opacity:1' /></linearGradient></defs><path d='M50 200 Q50 150 120 140 L280 140 Q350 150 350 200 L350 220 Q350 240 330 240 L70 240 Q50 240 50 220 Z' fill='url(%23lamboGrad)'/><circle cx='100' cy='220' r='20' fill='%23222'/><circle cx='300' cy='220' r='20' fill='%23222'/><rect x='100' y='150' width='200' height='50' fill='rgba(255,255,255,0.3)' rx='8'/><path d='M120 160 Q150 150 200 150 Q250 150 280 160 L280 180 Q250 170 200 170 Q150 170 120 180 Z' fill='rgba(255,255,255,0.2)'/></svg>"
    },
    ferrari: {
        title: "Ferrari F8 Tributo",
        price: "$280,000",
        engine: "3.9L Twin-Turbo V8",
        horsepower: "710 HP",
        acceleration: "2.9 seconds",
        topSpeed: "211 mph",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='ferrariGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23dc2626;stop-opacity:1' /><stop offset='100%' style='stop-color:%23991b1b;stop-opacity:1' /></linearGradient></defs><path d='M50 200 Q50 150 120 140 L280 140 Q350 150 350 200 L350 220 Q350 240 330 240 L70 240 Q50 240 50 220 Z' fill='url(%23ferrariGrad)'/><circle cx='100' cy='220' r='20' fill='%23222'/><circle cx='300' cy='220' r='20' fill='%23222'/><rect x='100' y='150' width='200' height='50' fill='rgba(255,255,255,0.3)' rx='8'/><path d='M120 160 Q150 150 200 150 Q250 150 280 160 L280 180 Q250 170 200 170 Q150 170 120 180 Z' fill='rgba(255,255,255,0.2)'/></svg>"
    },
    porsche: {
        title: "Porsche 911 Turbo S",
        price: "$207,000",
        engine: "3.8L Twin-Turbo Flat-6",
        horsepower: "640 HP",
        acceleration: "2.6 seconds",
        topSpeed: "205 mph",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='porscheGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%231f2937;stop-opacity:1' /><stop offset='100%' style='stop-color:%23374151;stop-opacity:1' /></linearGradient></defs><path d='M50 200 Q50 150 120 140 L280 140 Q350 150 350 200 L350 220 Q350 240 330 240 L70 240 Q50 240 50 220 Z' fill='url(%23porscheGrad)'/><circle cx='100' cy='220' r='20' fill='%23222'/><circle cx='300' cy='220' r='20' fill='%23222'/><rect x='100' y='150' width='200' height='50' fill='rgba(255,255,255,0.3)' rx='8'/><path d='M120 160 Q150 150 200 150 Q250 150 280 160 L280 180 Q250 170 200 170 Q150 170 120 180 Z' fill='rgba(255,255,255,0.2)'/></svg>"
    },
    mclaren: {
        title: "McLaren 720S",
        price: "$299,000",
        engine: "4.0L Twin-Turbo V8",
        horsepower: "710 HP",
        acceleration: "2.8 seconds",
        topSpeed: "212 mph",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='mclarenGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23059669;stop-opacity:1' /><stop offset='100%' style='stop-color:%23047857;stop-opacity:1' /></linearGradient></defs><path d='M50 200 Q50 150 120 140 L280 140 Q350 150 350 200 L350 220 Q350 240 330 240 L70 240 Q50 240 50 220 Z' fill='url(%23mclarenGrad)'/><circle cx='100' cy='220' r='20' fill='%23222'/><circle cx='300' cy='220' r='20' fill='%23222'/><rect x='100' y='150' width='200' height='50' fill='rgba(255,255,255,0.3)' rx='8'/><path d='M120 160 Q150 150 200 150 Q250 150 280 160 L280 180 Q250 170 200 170 Q150 170 120 180 Z' fill='rgba(255,255,255,0.2)'/></svg>"
    }
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize Website
function initializeWebsite() {
    showLoading();
    setTimeout(() => {
        hideLoading();
        initializeComponents();
        startAnimations();
    }, 2000);
}

// Loading Screen
function showLoading() {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loading);
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.remove();
        }, 300);
    }
}

// Initialize All Components
function initializeComponents() {
    initializeNavigation();
    initializeSmoothScroll();
    initializeCarCards();
    initializeGallery();
    initializeContactForm();
    initializeScrollAnimations();
    initializeParticles();
    initializeModal();
    initializeHeroAnimations();
}

// Navigation
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger Menu Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        }
    });
}

// Smooth Scroll
function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Car Cards
function initializeCarCards() {
    const carCards = document.querySelectorAll('.car-card');
    
    carCards.forEach(card => {
        // Hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
        
        // Click to open modal
        card.addEventListener('click', () => {
            const carType = card.getAttribute('data-car');
            openCarModal(carType);
        });
        
        // Button click handling
        const cardBtn = card.querySelector('.card-btn');
        if (cardBtn) {
            cardBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const carType = card.getAttribute('data-car');
                openCarModal(carType);
            });
        }
    });
}

// Gallery
function initializeGallery() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter gallery items
            const filter = btn.getAttribute('data-filter');
            currentFilter = filter;
            
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Gallery item interactions
    galleryItems.forEach(item => {
        const galleryBtns = item.querySelectorAll('.gallery-btn');
        
        galleryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Add animation
                btn.classList.add('pulse-animation');
                setTimeout(() => {
                    btn.classList.remove('pulse-animation');
                }, 600);
                
                // Handle button action
                if (btn.innerHTML.includes('eye')) {
                    // View action
                    showNotification('Opening gallery view...');
                } else if (btn.innerHTML.includes('heart')) {
                    // Like action
                    btn.style.color = '#ff6b35';
                    showNotification('Added to favorites!');
                }
            });
        });
    });
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    
    // Form input animations
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'translateY(-2px)';
            input.style.boxShadow = '0 5px 15px rgba(255, 107, 53, 0.3)';
        });
        
        input.addEventListener('blur', () => {
            input.style.transform = 'translateY(0)';
            input.style.boxShadow = 'none';
        });
        
        // Real-time validation
        input.addEventListener('input', () => {
            validateField(input);
        });
    });
    
    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate all fields
        let isValid = true;
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            submitForm();
        } else {
            showNotification('Please fill in all required fields correctly.', 'error');
        }
    });
}

// Field Validation
function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const isRequired = field.hasAttribute('required');
    
    // Remove previous error styling
    field.style.borderColor = '';
    
    if (isRequired && !value) {
        field.style.borderColor = '#dc2626';
        return false;
    }
    
    if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            field.style.borderColor = '#dc2626';
            return false;
        }
    }
    
    if (fieldType === 'tel' && value) {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;    
        if (!phoneRegex.test(value)) {
            field.style.borderColor = '#dc2626';
            return false;
        }
    }
    
    // If all checks pass, reset border color
    field.style.borderColor = '#34d399';
    return true;
}                       
// Form Submission