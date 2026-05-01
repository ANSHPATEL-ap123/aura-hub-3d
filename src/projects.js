// /**
//  * Aura Series — Project Data
//  * Each project is rendered as an orbiting planet in the 3D scene.
//  */

// export const projects = [
//   {
//     id: 'aurabi',
//     name: 'AuraBI',
//     color: '#50FA7B',
//     type: 'Team Project',
//     description:
//       'AI-driven data visualization engine that transforms raw datasets into interactive, real-time dashboards with predictive analytics and anomaly detection.',
//     tags: ['React', 'D3.js', 'FastAPI'],
//     orbitSpeed: 0.5,
//     orbitRadius: 5,
//   },
//   {
//     id: 'auravision',
//     name: 'AuraVision',
//     color: '#BD93F9',
//     type: 'Solo Project',
//     description:
//       'AI image enhancement tool leveraging state-of-the-art diffusion models for 4K upscaling, noise reduction, and intelligent scene reconstruction.',
//     tags: ['Python', 'Hugging Face'],
//     orbitSpeed: 0.3,
//     orbitRadius: 8,
//   },
// ];




/**
 * Aura Series — Project Data
 * Each project is rendered as an orbiting planet in the 3D scene.
 */

export const projects = [
  {
    id: 'aurabi',
    name: 'AuraBI',
    color: '#50FA7B', // Neon Emerald
    type: 'Team Project',
    description:
      'AI-driven data visualization engine that transforms raw datasets into interactive, real-time dashboards with predictive analytics and anomaly detection.',
    tags: ['React', 'D3.js', 'FastAPI'],
    orbitSpeed: 0.5,
    orbitRadius: 5,
    // Add these lines:
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
    // Add these lines:
    github: 'https://github.com/ANSHPATEL-ap123/AuraVision',
    demo: ' https://auravision-anshp.netlify.app/ ',
  },
  {
    id: 'aurasound',
    name: 'AuraSound',
    color: '🟦 #00F3FF', // Cyber Cyan - Much brighter in the 3D scene
    type: 'Solo Project',
    description:
      'AI-driven audio engine that synchronizes real-time facial expressions with dynamic music playlists and reactive visualizers.',
    tags: ['React', 'Face-API.js', 'Web Audio API'],
    orbitSpeed: 0.4,
    orbitRadius: 11,
    github: 'https://github.com/ANSHPATEL-ap123/AuraSound',
    demo: 'https://aura-sound-v2-0.vercel.app/',
  },
];