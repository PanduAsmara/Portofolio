/* =============================================================
   PROJECTS DATA
   -------------------------------------------------------------
   The cards in the "Featured Projects" section.

   To add a project: copy one { ... } block, edit the fields,
   and add a comma between blocks. Order top-to-bottom = order
   shown on the page.

   icon      : Font Awesome class shown in the image box.
   iconColor : Tailwind text color class for that icon.
   tags      : list of small labels under the description.
   ============================================================= */

window.PROJECTS = [
    {
        icon: "fa-solid fa-network-wired",
        iconColor: "text-blue-400",
        title: "Enterprise Network Design",
        description:
            "Designed and implemented a medium-scale office network architecture using the OSPF dynamic routing protocol to support stable, efficient, and scalable connectivity.",
        tags: ["Cisco", "OSPF", "Networking"],
    },
    {
        icon: "fa-solid fa-server",
        iconColor: "text-purple-400",
        title: "Linux Automated Lab",
        description:
            "Built a local Debian-based server environment integrated with Docker containers for virtualization, network service testing, and system automation purposes.",
        tags: ["Debian", "Docker", "Linux Server"],
    },
    {
        icon: "fa-solid fa-display",
        iconColor: "text-cyan-400",
        title: "Portfolio Website",
        description:
            "Developed an interactive portfolio website with a modern, responsive design optimized across all devices using the latest front-end technologies.",
        tags: ["HTML/CSS", "JavaScript"],
    },
];
