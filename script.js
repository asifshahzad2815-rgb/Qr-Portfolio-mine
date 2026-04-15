/**
 * Asif Shahzad Portfolio - Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Hero Parallax Effect
    const hero = document.querySelector('.hero');
    const heroTitle = document.querySelector('.hero h1');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (heroTitle) {
            heroTitle.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroTitle.style.opacity = 1 - (scrolled / 700);
        }
    });

    // 3. Navigation Background Change
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(5, 5, 5, 0.8)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.padding = '20px 40px';
        } else {
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'none';
            nav.style.padding = '40px';
        }
    });

    // 4. Smooth Scroll (Native behavior is set in CSS, but this handles JS triggers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Magnetic Button Effect (Optional Premium Touch)
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0, 0)`;
        });
    });
});
