// =============================================
// Navbar scroll effect
// =============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 20, 0.97)';
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
        navbar.style.background = '';
        navbar.style.boxShadow = '';
    }
});

// =============================================
// Smooth scroll
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
// Scroll Animations — sederhana, tidak konflik
// =============================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

// Semua elemen animasi
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// =============================================
// Skill bar animation
// =============================================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.bar div').forEach(bar => {
                const w = bar.getAttribute('data-width') || bar.style.width;
                bar.style.width = '0';
                setTimeout(() => { bar.style.width = w; }, 150);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsCard = document.querySelector('.skills-card');
if (skillsCard) skillObserver.observe(skillsCard);

// =============================================
// Active nav highlight
// =============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active-nav');
                if (link.getAttribute('href') === `#${entry.target.id}`) {
                    link.classList.add('active-nav');
                }
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => navObserver.observe(s));

// =============================================
// Hamburger menu
// =============================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}

// =============================================
// Contact Form
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
        const submitBtn  = document.getElementById('submitBtn');
        const btnText    = document.getElementById('btnText');
        const btnLoading = document.getElementById('btnLoading');

        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                contactForm.style.display = 'none';
                document.getElementById('successMsg').style.display = 'block';
            } else throw new Error();
        } catch {
            alert('Terjadi kesalahan. Silakan coba lagi atau hubungi langsung via email.');
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
        }
    });
}
