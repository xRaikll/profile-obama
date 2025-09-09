// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate skill bars on scroll
const skillFills = document.querySelectorAll('.skill-fill');

function animateSkills() {
    skillFills.forEach(fill => {
        const skillValue = fill.getAttribute('data-skill');
        fill.style.width = skillValue + '%';
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            if (entry.target.id === 'skills') {
                animateSkills();
            }
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// CTA button click animation
document.querySelector('.cta-button').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});

// Form submission animation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const button = this.querySelector('button');
    button.textContent = 'Sending...';
    button.style.backgroundColor = '#000';
    button.style.color = '#fff';
    
    setTimeout(() => {
        button.textContent = 'Sent!';
        setTimeout(() => {
            button.textContent = 'Send';
            button.style.backgroundColor = '#00ffff';
            button.style.color = '#000';
        }, 2000);
    }, 1000);
});

// Add some particle effect to hero section
function createParticles() {
    const hero = document.getElementById('hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        hero.appendChild(particle);
    }
}

createParticles();

// CSS for particles (added via JS for simplicity)
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        animation: float 3s ease-in-out infinite;
        top: 100%;
    }
    
    @keyframes float {
        0% { transform: translateY(0) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(particleStyle);
