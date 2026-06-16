/* =============================================================
   EXPERIENCE / JOURNEY DATA
   -------------------------------------------------------------
   The vertical timeline in the "My Journey" section. Items appear
   top-to-bottom in the order listed here.

   date        : the small colored label above the card.
   title       : the card heading (h3).
   subtitles   : optional list of sub-headings (h4 lines). Omit or
                 leave [] for none.
   description : the paragraph text.

   OPTIONAL styling (used by the highlighted entries). Omit these
   to use the default purple dot and plain card:
     dotColor    : color of the timeline dot, e.g. "#a855f7".
     borderColor : card border color, e.g. "rgba(168,85,247,0.25)".
     bg          : card background, e.g. "rgba(34,211,238,0.02)".
   ============================================================= */

window.EXPERIENCE = [
    {
        date: "Primary Education",
        title: "SDN Mustika Jaya 7",
        subtitles: [],
        description: "Completed elementary level education.",
    },
    {
        date: "Middle School",
        title: "SMPN 14 Tambun Selatan",
        subtitles: [],
        description: "Active academic participation in junior high school.",
    },
    {
        date: "Vocational High School",
        title: "SMKN 3 Kota Bekasi",
        subtitles: ["Major: Computer & Network Engineering (TKJ)"],
        description:
            "Studied network topology fundamentals, subnetting, MikroTik (MTCNA), Cisco (CCNA), and Linux server administration.",
    },
    {
        date: "Organizational Experience",
        title: "Japanese Club — SMKN 3 Kota Bekasi",
        subtitles: ["Vice President"],
        description:
            "Led internal community management, organized cultural events, and coordinated activities across multiple divisions.",
        dotColor: "#ec4899",
        borderColor: "rgba(236, 72, 153, 0.25)",
    },
    {
        date: "Nov 2024 – Apr 2025",
        title: "PT. YCH Distripark",
        subtitles: ["IT Network & Infrastructure Support — Internship (6 Months)"],
        description:
            "Responsible for monitoring warehouse logistics network stability, troubleshooting operational network devices, and supporting internal IT infrastructure administration.",
        dotColor: "#a855f7",
        borderColor: "rgba(168, 85, 247, 0.25)",
    },
    {
        date: "2026 — Incoming Freshman",
        title: "Politeknik Negeri Jakarta (PNJ)",
        subtitles: [
            "Faculty: Informatics & Computer Engineering (TIK)",
            "Program: Multimedia & Network Engineering (TMJ)",
        ],
        description:
            "Enrolled as a new student to deepen the integration of interactive multimedia systems with advanced network infrastructure techniques.",
        dotColor: "#22d3ee",
        borderColor: "rgba(34, 211, 238, 0.3)",
        bg: "rgba(34, 211, 238, 0.02)",
    },
];
