/**
 * Aura Series — Project Data
 * Each project is rendered as an orbiting planet in the 3D scene.
 */

export const projects = [
  {
    id: 'aurabi',
    name: 'AuraBI',
    color: '#FF8C00', // Neon Emerald
    type: 'Team Project',
    description:
      'AI-driven data visualization engine that transforms raw datasets into interactive, real-time dashboards with predictive analytics and anomaly detection.',
    tags: ['React', 'D3.js', 'FastAPI'],
    orbitSpeed: 0.5,
    orbitRadius: 5,
    github: 'https://github.com/brajesh1210/ai-data-visualizer.git',
    demo: 'https://ai-data-visualizer-drab.vercel.app/',
  },
  {
    id: 'auravision',
    name: 'AuraVision',
    color: '#BD93F9', // Vivid Purple
    type: 'Solo Project',
    description:
      'AI image enhancement tool leveraging state-of-the-art diffusion models for 4K upscaling, noise reduction, and intelligent scene reconstruction.',
    tags: ['Python', 'Hugging Face'],
    orbitSpeed: 0.3,
    orbitRadius: 8,
    github: 'https://github.com/ANSHPATEL-ap123/AuraVision',
    demo: 'https://auravision-anshp.netlify.app/',
  },
  {
    id: 'aurasound',
    name: 'AuraSound-V2.0',
    color: '#00F3FF', // Cyber Cyan - Much brighter in the 3D scene
    type: 'Solo Project',
    description:
      'AI-driven audio engine that synchronizes real-time facial expressions with dynamic music playlists and reactive visualizers.',
    tags: ['React', 'Face-API.js', 'Web Audio API'],
    orbitSpeed: 0.4,
    orbitRadius: 11,
    github: 'https://github.com/ANSHPATEL-ap123/AuraSound-V2.0',
    demo: 'https://aura-sound-v2-0.vercel.app/',
  },
  {
    id: 'risklens',
    name: 'risk-LENS',
    color: '#00FF41', // Matrix Neon Green
    type: 'Team Project',
    description:
      'Zero-trust supply chain threat intelligence and autonomous remediation engine featuring hardware-accelerated WebGL blast radius topology.',
    tags: ['Next.js', 'Three.js', 'Gemini AI'],
    orbitSpeed: 0.25,
    orbitRadius: 14,
    github: 'https://github.com/brajesh1210/risk-LENS.git', // Verify this link
    demo: 'https://risk-lens-nine.vercel.app/', // Update with your actual Vercel link once deployed
  },
];