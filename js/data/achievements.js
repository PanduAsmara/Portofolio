/* =============================================================
   ACHIEVEMENTS DATA
   -------------------------------------------------------------
   Competition placements and awards shown in the
   "Certificates & Achievements" section.

   Both ACHIEVEMENTS (this file) and CERTIFICATES (certificates.js)
   are rendered into the same grid — achievements first, then
   certificates. Use this file for competition wins / awards and
   certificates.js for formal certifications.

   icon      : Font Awesome class (e.g. fa-trophy, fa-medal, fa-award).
   iconColor : Tailwind text color class for the icon.
   badge     : pill text (e.g. "Gold Medalist", "2nd Place").
   badgeClass : pill color — "gold", "silver", or "bronze".
   url       : link to the certificate (Google Drive, PDF, etc.).
   ============================================================= */

window.ACHIEVEMENTS = [
    {
        icon: "fa-solid fa-trophy",
        iconColor: "text-amber-400",
        badge: "Gold Medalist",
        badgeClass: "gold",
        title: "Garuda Science Competition",
        subtitle: "English Language — National Level",
        year: "2025",
        url: "https://drive.google.com/drive/folders/10sc6FHGdN8F_s4JtLOvrPCyq-iZLU0_Z",
    },
    {
        icon: "fa-solid fa-medal",
        iconColor: "text-slate-300",
        badge: "3rd Place",
        badgeClass: "bronze",
        title: "Cisco Networking Competition",
        subtitle: "Universitas Bakrie — National Level",
        year: "2026",
        url: "https://drive.google.com/drive/folders/140k6xU6TpmWHq43tldLMCL9IZS01fi3a",
    },
    {
        icon: "fa-solid fa-award",
        iconColor: "text-purple-400",
        badge: "2nd Place",
        badgeClass: "silver",
        title: "Student Skills Competition (LKS)",
        subtitle: "IT Network System Administration — Bekasi City Level",
        year: "2026",
        url: "https://drive.google.com/drive/folders/14KVVTNBvqH5j5SoadpMX-oClW1lw1otJ",
    },
];
