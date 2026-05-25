// =============================================
// Navbar scroll effect
// =============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 20, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
        navbar.style.background = '';
        navbar.style.boxShadow = '';
    }
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
    // Check if redirected back after successful send
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('sent') === 'true') {
        contactForm.style.display = 'none';
        document.getElementById('successMsg').style.display = 'block';
        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname + '#contact');
    }

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitBtn = document.getElementById('submitBtn');
        const btnText = document.getElementById('btnText');
        const btnLoading = document.getElementById('btnLoading');

        // Show loading state
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
                // Hide form, show success message
                contactForm.style.display = 'none';
                document.getElementById('successMsg').style.display = 'block';
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            // Fallback: show error and re-enable button
            alert('Terjadi kesalahan. Silakan coba lagi atau hubungi langsung via email.');
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

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        });
    });
}
