/* =============================================================
   SKILLS DATA
   -------------------------------------------------------------
   The "Skills & Expertise" badges in the About section.

   level     : the text shown in the pill (e.g. "Intermediate").
   levelClass: controls the pill color. Use "intermediate" (cyan)
               or "advanced" (purple). These match css/style.css.
   ============================================================= */

window.SKILLS = [
    {
        icon: "fa-solid fa-network-wired",
        color: "text-blue-400",
        name: "Cisco & MikroTik Routing",
        level: "Intermediate",
        levelClass: "intermediate",
        detail: "CCNA-level routing, OSPF, VLANs, subnetting",
    },
    {
        icon: "fa-brands fa-linux",
        color: "text-yellow-400",
        name: "Linux Server Administration",
        level: "Intermediate",
        levelClass: "intermediate",
        detail: "Debian, SSH, Docker, service configuration",
    },
    {
        icon: "fa-brands fa-html5",
        color: "text-orange-400",
        name: "Web Frontend",
        level: "Intermediate",
        levelClass: "intermediate",
        detail: "HTML/CSS/JS, responsive design, modern UI",
    },
    {
        icon: "fa-solid fa-bug",
        color: "text-cyan-400",
        name: "Network Troubleshooting",
        level: "Intermediate",
        levelClass: "intermediate",
        detail: "ping diagnostics, switch & router reconfiguration, device connectivity checks, traffic monitoring",
    },
];
