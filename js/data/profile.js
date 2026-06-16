/* =============================================================
   PROFILE DATA
   -------------------------------------------------------------
   Your personal information, hero text, contact details, the
   terminal code snippet, tech icons and social links.

   This is the file you will edit most often. Nothing here
   changes the design — only the words and links on the page.
   ============================================================= */

window.PROFILE = {
    /* --- Identity --- */
    name: "Frasya Pandu Asmara",
    role: "Network Engineer & Student",
    location: "Indonesia",
    educationStatus: "College Student",
    avatar: "assets/profile.jpeg",

    /* --- CV / Resume ---
       Drop your CV file in the assets/ folder and point to it here.
       Example: "assets/cv.pdf". The "Download CV" button uses this. */
    cvUrl: "assets/cv.pdf",

    /* --- Hero section (top of the page) --- */
    hero: {
        badge: "OPEN TO OPPORTUNITIES",
        // The <span> wraps the gradient-highlighted words. Keep the tag.
        titleHtml: 'Building modern <span>digital experiences</span> that make impact.',
        description:
            "Network Engineer & Multimedia Developer passionate about building scalable infrastructure, configuring enterprise networks, and crafting modern digital experiences.",
    },

    /* --- About section paragraph --- */
    about:
        "Computer & Networking graduate with a BNSP-certified competency in Computer & Network Engineering, valid for 3 years. I bring 6 months of real-world internship experience at PT. YCH Distripark, where I managed network stability across a large-scale logistics warehouse. Skilled in Cisco/MikroTik routing, Linux server administration, and front-end web development. A consistent competition achiever at both city and national level, currently enrolled at Politeknik Negeri Jakarta and actively seeking opportunities in network engineering or IT infrastructure",

    /* --- Terminal code snippet (inside the profile card) ---
       Rendered as a small "const engineer = { ... }" block. */
    terminal: {
        name: "Frasya Pandu Asmara",
        focus: ["Networking", "Linux", "Web Dev"],
        experience: "PT. YCH Distripark (6 months)",
        college: "Politeknik Negeri Jakarta",
        status: "Open to Opportunities 🟢",
    },

    /* --- Tech icons row (profile card) ---
       icon  = Font Awesome class, color = Tailwind text color class */
    techs: [
        { title: "Cisco",      icon: "fa-solid fa-network-wired", color: "text-blue-400" },
        { title: "Linux",      icon: "fa-brands fa-linux",        color: "text-yellow-500" },
        { title: "Docker",     icon: "fa-brands fa-docker",       color: "text-cyan-400" },
        { title: "HTML5",      icon: "fa-brands fa-html5",        color: "text-orange-500" },
        { title: "CSS3",       icon: "fa-brands fa-css3-alt",     color: "text-blue-500" },
        { title: "JavaScript", icon: "fa-brands fa-js",           color: "text-yellow-300" },
        { title: "Python",     icon: "fa-brands fa-python",       color: "text-yellow-400" },
        { title: "Cloud",      icon: "fa-solid fa-cloud",         color: "text-sky-400" },
    ],

    /* --- Social links (hero) --- */
    socials: [
        { label: "GitHub",    icon: "fa-brands fa-github",    url: "https://github.com/PanduAsmara" },
        { label: "Instagram", icon: "fa-brands fa-instagram", url: "https://www.instagram.com/pandu_asmaraa/" },
        { label: "LinkedIn",  icon: "fa-brands fa-linkedin",  url: "https://www.linkedin.com/in/frasya-pandu-asmara/" },
    ],

    /* --- Contact details --- */
    contact: {
        email: "frasyapanduasmara@gmail.com",
        locationLabel: "Bekasi, Indonesia",
        whatsapp: "https://wa.me/6283116835817",
        // FormSubmit endpoint used by the contact form.
        formAction: "https://formsubmit.co/frasyapanduasmara@gmail.com",
    },

    /* --- Footer line --- */
    footer: "© 2026 Frasya Pandu Asmara — Portfolio. All Rights Reserved.",
};
