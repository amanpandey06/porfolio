// Modern Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.classList.add('active');
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        themeToggle.classList.toggle('active');
        
        // Save theme preference
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Typing Animation for Name and Title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        element.classList.add('typing-cursor');
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                element.classList.remove('typing-cursor');
            }
        }
        type();
    }
    
    // Start typing animations after a delay
    setTimeout(() => {
        const nameElement = document.getElementById('typingName');
        const titleElement = document.getElementById('typingTitle');
        
        typeWriter(nameElement, 'Aman Pandey', 150);
        
        setTimeout(() => {
            typeWriter(titleElement, 'BTech CSE (Data Science) | AI & Full Stack Developer', 50);
        }, 2000);
    }, 1000);
    
    // Scroll Progress Indicator
    const scrollIndicator = document.getElementById('scrollIndicator');
    
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / documentHeight) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
    }
    
    window.addEventListener('scroll', updateScrollProgress);
    
    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.1s';
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
    
    // Skill Items Hover Effects with Staggered Animation
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        // Add staggered entrance animation
        item.style.animationDelay = `${index * 0.1}s`;
        
        // Enhanced hover effects
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05) rotateY(5deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
        });
    });
    
    // Project Cards Enhanced Interactions
    const projectCards = document.querySelectorAll('.project');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add subtle rotation and scale
            this.style.transform = 'translateY(-10px) rotateX(5deg) scale(1.02)';
            this.style.transformStyle = 'preserve-3d';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
        });
    });
    
    // Social Links Pulse Animation on Hover
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.6s ease-in-out';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
    
    // Add pulse keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: translateY(-5px) scale(1.1); }
            50% { transform: translateY(-8px) scale(1.15); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
            100% { transform: translateY(-5px) scale(1.1); }
        }
    `;
    document.head.appendChild(style);
    
    // Parallax Effect for Header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('header');
        const rate = scrolled * -0.5;
        
        if (header) {
            header.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
    });
    
    // Navigation Bar Show/Hide on Scroll
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) { // Show navbar after scrolling 100px
            navbar.style.transform = 'translateY(0)';
        }
        
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scrolling down - hide navbar
            navbar.style.transform = 'translateY(-100%)';
        } else if (scrollTop < lastScrollTop) {
            // Scrolling up - show navbar
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // CTA Button Click Effect
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
    
    // Add ripple animation keyframes
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // Loading Animation (if needed)
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Easter Egg: Konami Code
    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up, Up, Down, Down, Left, Right, Left, Right, B, A
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Activate easter egg
                document.body.style.animation = 'rainbow 2s ease-in-out infinite';
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 6000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // Add rainbow animation
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);
    
    // Performance optimization: Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // Replace direct scroll listeners with throttled versions
    window.removeEventListener('scroll', updateScrollProgress);
    window.addEventListener('scroll', throttle(updateScrollProgress, 16));
    
    // Advanced Animations and Interactions
    
    // Magnetic Hover Effect for Interactive Elements
    function addMagneticEffect(elements) {
        elements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px) scale(1)';
            });
        });
    }
    
    // Apply magnetic effect to buttons and cards
    addMagneticEffect(document.querySelectorAll('.cta-button, .social-link, .theme-toggle'));
    
    // Enhanced Intersection Observer for Staggered Animations
    const advancedObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    
                    // Add specific animation classes based on element type
                    if (entry.target.classList.contains('skill-item')) {
                        entry.target.classList.add('skill-pop');
                        
                        // Animate progress bars
                        const progressBar = entry.target.querySelector('.progress-bar');
                        const progress = progressBar.dataset.progress;
                        setTimeout(() => {
                            progressBar.style.width = progress + '%';
                        }, 300);
                    }
                    
                    if (entry.target.classList.contains('slide-left')) {
                        entry.target.classList.add('slide-left');
                    }
                    
                    if (entry.target.classList.contains('slide-right')) {
                        entry.target.classList.add('slide-right');
                    }
                    
                    if (entry.target.classList.contains('slide-bottom')) {
                        entry.target.classList.add('slide-bottom');
                    }
                }, index * 100); // Stagger the animations
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe all animated elements
    document.querySelectorAll('.fade-in, .skill-item').forEach(el => {
        advancedObserver.observe(el);
    });
    
    // 3D Tilt Effect for Cards
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
    
    // Custom Cursor Trail Effect
    let mouseX = 0, mouseY = 0;
    let trailElements = [];
    
    // Create cursor trail elements
    for (let i = 0; i < 15; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, #000 30%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: ${1 - i * 0.07};
            transform: scale(${1 - i * 0.05});
        `;
        document.body.appendChild(trail);
        trailElements.push({
            element: trail,
            x: 0,
            y: 0
        });
    }
    
    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animate cursor trail
    function animateCursorTrail() {
        let x = mouseX;
        let y = mouseY;
        
        trailElements.forEach((trail, index) => {
            trail.x += (x - trail.x) * 0.3;
            trail.y += (y - trail.y) * 0.3;
            
            trail.element.style.left = trail.x + 'px';
            trail.element.style.top = trail.y + 'px';
            
            x = trail.x;
            y = trail.y;
        });
        
        requestAnimationFrame(animateCursorTrail);
    }
    
    animateCursorTrail();
    
    // Advanced Loading Animation
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="loading-text">AMAN PANDEY</div>
            <div class="loading-subtext">Portfolio Loading...</div>
            <div class="loading-bar">
                <div class="loading-progress"></div>
            </div>
        </div>
    `;
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #000000 0%, #333333 100%);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        font-family: 'Segoe UI', sans-serif;
    `;
    
    // Add loading screen styles
    const loadingStyles = document.createElement('style');
    loadingStyles.textContent = `
        .loading-content {
            text-align: center;
        }
        .loading-text {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #fff, #ccc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: pulse 2s ease-in-out infinite;
        }
        .loading-subtext {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.8;
        }
        .loading-bar {
            width: 300px;
            height: 4px;
            background: #333;
            border-radius: 2px;
            overflow: hidden;
        }
        .loading-progress {
            height: 100%;
            background: linear-gradient(45deg, #fff, #ccc);
            width: 0%;
            animation: loadingProgress 3s ease-out forwards;
        }
        @keyframes loadingProgress {
            to { width: 100%; }
        }
    `;
    
    document.head.appendChild(loadingStyles);
    document.body.appendChild(loadingScreen);
    
    // Remove loading screen after animation
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            loadingScreen.remove();
            loadingStyles.remove();
        }, 500);
    }, 3500);
    
    // Dark theme cursor trail
    function updateCursorTrailTheme() {
        const isDark = body.classList.contains('dark-theme');
        const color = isDark ? '#fff' : '#000';
        
        trailElements.forEach(trail => {
            trail.element.style.background = `radial-gradient(circle, ${color} 30%, transparent 70%)`;
        });
    }
    
    // Update cursor theme when theme changes
    const originalThemeToggle = themeToggle.addEventListener;
    themeToggle.addEventListener('click', function() {
        setTimeout(updateCursorTrailTheme, 100);
    });
    
    updateCursorTrailTheme();
    
    console.log('🎆 Ultra-cool portfolio loaded! Matrix effects, magnetic hover, 3D tilts, and cursor trails active!');
});
