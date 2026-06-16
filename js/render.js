/* =============================================================
   RENDER
   -------------------------------------------------------------
   Turns the data files (js/data/*.js) into the HTML shown on the
   page. This keeps index.html free of hardcoded content — to
   change what appears on the site you edit the data files, not
   the markup here.

   The generated markup matches the original class names exactly,
   so css/style.css and the scroll animations work unchanged.
   ============================================================= */

(function () {
    "use strict";

    // Set element content only when the element exists.
    function fill(selector, html) {
        const el = document.querySelector(selector);
        if (el) el.innerHTML = html;
    }

    // Turn a grid into a horizontal scroller when it has many items.
    // Keeps the original grid look for 3 or fewer.
    function setScrollable(selector, count) {
        const el = document.querySelector(selector);
        if (el) el.classList.toggle("scrollable", count > 3);
    }

    // --- HERO (left column: badge, title, text, buttons, socials) ---
    function renderHero(p) {
        const socials = p.socials
            .map(
                (s) =>
                    `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}"><div><i class="${s.icon}"></i></div></a>`
            )
            .join("");

        fill(
            ".hero-left",
            `
            <div class="badge"><div class="dot"></div> ${p.hero.badge}</div>
            <h1>${p.hero.titleHtml}</h1>
            <p>${p.hero.description}</p>
            <div class="hero-buttons">
                <a href="#projects"><button class="primary-btn">View My Projects</button></a>
                <a href="${p.cvUrl}" download><button class="secondary-btn">Download CV</button></a>
            </div>
            <div class="socials">${socials}</div>
        `
        );
    }

    // --- HERO (right column: profile card with terminal + techs) ---
    function renderProfileCard(p) {
        const t = p.terminal;
        const focus = t.focus
            .map((f) => `<span class="string">"${f}"</span>`)
            .join(", ");

        const techs = p.techs
            .map(
                (tech) =>
                    `<div title="${tech.title}"><i class="${tech.icon} ${tech.color}"></i></div>`
            )
            .join("");

        fill(
            ".hero-right",
            `
            <div class="profile-card">
                <div class="profile-top">
                    <img src="${p.avatar}" alt="${p.name}">
                    <div>
                        <h2>${p.name}</h2>
                        <h3>${p.role}</h3>
                        <div class="info-grid">
                            <div><i class="fa-solid fa-graduation-cap text-purple-400"></i> ${p.educationStatus}</div>
                            <div><i class="fa-solid fa-location-dot text-purple-400"></i> ${p.location}</div>
                        </div>
                    </div>
                </div>

                <div class="terminal">
                    <div class="terminal-header">
                        <span class="dot-term red"></span><span class="dot-term yellow"></span><span class="dot-term green"></span>
                    </div>
                    <pre><code><span class="keyword">const</span> engineer = {
  name: <span class="string">"${t.name}"</span>,
  focus: [${focus}],
  experience: <span class="string">"${t.experience}"</span>,
  college: <span class="string">"${t.college}"</span>,
  status: <span class="string">"${t.status}"</span>
};</code></pre>
                </div>

                <div class="techs">${techs}</div>
            </div>
        `
        );
    }

    // --- ABOUT paragraph ---
    function renderAbout(p) {
        fill(".about-card p", p.about);
    }

    // --- SKILLS badges ---
    function renderSkills(skills) {
        const html = skills
            .map(
                (s) => `
            <div class="skill-badge-item">
                <div class="skill-badge-top">
                    <span class="skill-name"><i class="${s.icon} ${s.color}"></i> ${s.name}</span>
                    <span class="skill-level ${s.levelClass}">${s.level}</span>
                </div>
                <p class="skill-detail">${s.detail}</p>
            </div>`
            )
            .join("");
        fill(".skills-badge-list", html);
    }

    // --- PROJECTS cards ---
    function renderProjects(projects) {
        const html = projects
            .map((proj) => {
                const tags = proj.tags
                    .map((t) => `<span class="proj-tag">${t}</span>`)
                    .join("");
                return `
            <div class="glass project-card">
                <div class="project-img-box">
                    <i class="${proj.icon} text-4xl ${proj.iconColor}"></i>
                </div>
                <div class="project-info">
                    <h3>${proj.title}</h3>
                    <p>${proj.description}</p>
                    <div class="project-tech-tags">${tags}</div>
                </div>
            </div>`;
            })
            .join("");
        fill(".projects-grid", html);
        setScrollable(".projects-grid", projects.length);
    }

    // --- CERTIFICATES & ACHIEVEMENTS cards (one shared grid) ---
    function renderAchievements(achievements, certificates) {
        const items = [].concat(achievements || [], certificates || []);
        const html = items
            .map(
                (c) => `
            <div class="glass cert-card">
                <div class="cert-icon-box">
                    <i class="${c.icon} ${c.iconColor} text-3xl"></i>
                </div>
                <div class="cert-info">
                    <span class="cert-badge ${c.badgeClass}">${c.badge}</span>
                    <h3>${c.title}</h3>
                    <p class="cert-sub">${c.subtitle}</p>
                    <span class="cert-year"><i class="fa-solid fa-calendar-days mr-1"></i> ${c.year}</span>
                    <a href="${c.url}" target="_blank" rel="noopener" class="cert-btn">View Certificate <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>`
            )
            .join("");
        fill(".achievements-grid", html);
        setScrollable(".achievements-grid", items.length);
    }

    // --- EXPERIENCE timeline ---
    function renderExperience(items) {
        const html = items
            .map((item) => {
                const dotStyle = item.dotColor
                    ? ` style="background: ${item.dotColor}; box-shadow: 0 0 10px ${item.dotColor};"`
                    : "";

                let contentStyle = "";
                if (item.borderColor || item.bg) {
                    const parts = [];
                    if (item.borderColor) parts.push(`border-color: ${item.borderColor}`);
                    if (item.bg) parts.push(`background: ${item.bg}`);
                    contentStyle = ` style="${parts.join("; ")};"`;
                }

                const subtitles = (item.subtitles || [])
                    .map((s) => `<h4>${s}</h4>`)
                    .join("");

                return `
            <div class="timeline-item">
                <div class="timeline-dot"${dotStyle}></div>
                <div class="timeline-date">${item.date}</div>
                <div class="glass timeline-content"${contentStyle}>
                    <h3>${item.title}</h3>
                    ${subtitles}
                    <p>${item.description}</p>
                </div>
            </div>`;
            })
            .join("");
        fill(".timeline", html);
    }

    // --- CONTACT details + footer + links driven by profile ---
    function renderContact(p) {
        fill(
            ".contact-info-list",
            `
            <div class="contact-info-item">
                <div class="icon-box"><i class="fa-solid fa-envelope"></i></div>
                <div>
                    <h4>Email Me</h4>
                    <p>${p.contact.email}</p>
                </div>
            </div>
            <div class="contact-info-item">
                <div class="icon-box"><i class="fa-solid fa-location-dot"></i></div>
                <div>
                    <h4>Location</h4>
                    <p>${p.contact.locationLabel}</p>
                </div>
            </div>
        `
        );

        const talkLink = document.getElementById("talkLink");
        if (talkLink) talkLink.href = p.contact.whatsapp;

        const form = document.getElementById("contactForm");
        if (form) form.action = p.contact.formAction;

        const footer = document.querySelector("footer");
        if (footer) footer.textContent = p.footer;
    }

    // --- Run everything (data globals come from js/data/*.js) ---
    function render() {
        if (window.PROFILE) {
            renderHero(window.PROFILE);
            renderProfileCard(window.PROFILE);
            renderAbout(window.PROFILE);
            renderContact(window.PROFILE);
        }
        if (window.SKILLS) renderSkills(window.SKILLS);
        if (window.PROJECTS) renderProjects(window.PROJECTS);
        renderAchievements(window.ACHIEVEMENTS, window.CERTIFICATES);
        if (window.EXPERIENCE) renderExperience(window.EXPERIENCE);
    }

    // Expose so main.js can render before attaching observers.
    window.renderPortfolio = render;
})();
