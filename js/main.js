// =============================================
// Render dynamic content FIRST
// -------------------------------------------------------------
// js/render.js builds all the cards/sections from the data files.
// It must run before the observers below query the DOM so that
// the generated elements get the fade-in animations too.
// =============================================
if (typeof window.renderPortfolio === 'function') {
    window.renderPortfolio();
}

// =============================================
// Dark / Light theme toggle (persisted in localStorage)
// -------------------------------------------------------------
// The default is dark — the saved preference (if "light") is
// applied in <head> before paint to avoid a flash.
// =============================================
(function () {
    const themeToggle = document.getElementById('themeToggle');

    function syncIcon() {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i');
        if (!icon) return;
        const isLight = document.documentElement.classList.contains('light-mode');
        icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    syncIcon();

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = document.documentElement.classList.toggle('light-mode');
            try { localStorage.setItem('theme', isLight ? 'light' : 'dark'); } catch (e) {}
            syncIcon();
        });
    }
})();

// =============================================
// Horizontal scroll: let the mouse wheel scroll the
// Projects / Achievements carousels sideways when they
// overflow (only the grids that got the .scrollable class).
// =============================================
document.querySelectorAll('.projects-grid.scrollable, .achievements-grid.scrollable').forEach((el) => {
    el.addEventListener('wheel', (e) => {
        // Nothing to scroll horizontally → let the page scroll normally.
        if (el.scrollWidth <= el.clientWidth) return;
        // Ignore real horizontal gestures (trackpads handle those already).
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
        e.preventDefault();
        el.scrollLeft += e.deltaY;
    }, { passive: false });
});

// =============================================
// Navbar scroll effect
// =============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// =============================================
// Smooth scroll for nav links
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// =============================================
// Scroll-triggered fade-in animations
// =============================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.glass, .timeline-item, .project-card, .cert-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// =============================================
// Skill bar animation on scroll
// =============================================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.bar div').forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => { bar.style.width = width; }, 100);
            });
        }
    });
}, { threshold: 0.3 });

const skillsCard = document.querySelector('.skills-card');
if (skillsCard) skillObserver.observe(skillsCard);

// =============================================
// Contact Form - AJAX submission with FormSubmit
// =============================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('sent') === 'true') {
        contactForm.style.display = 'none';
        document.getElementById('successMsg').style.display = 'block';
        window.history.replaceState({}, document.title, window.location.pathname + '#contact');
    }

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitBtn = document.getElementById('submitBtn');
        const btnText = document.getElementById('btnText');
        const btnLoading = document.getElementById('btnLoading');

        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                contactForm.style.display = 'none';
                document.getElementById('successMsg').style.display = 'block';
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            alert('Something went wrong. Please try again or contact me directly via email.');
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
        }
    });
}

// =============================================
// Active nav link highlight on scroll
// =============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active-nav');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-nav');
        }
    });
});

// =============================================
// Hamburger mobile menu toggle
// =============================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        });
    });
}
