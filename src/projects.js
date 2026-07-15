/**
 * Aura Series — Project Data
 * Each project is rendered as an orbiting planet in the 3D scene.
 * The Sun (Portfolio) is anchored at the center with a radius of 0.
 */

export const projects = [
  {
    id: 'portfolio-sun',
    name: 'Ansh Patel | Portfolio',
    color: '#FFB300', // Radiant Sun Gold
    type: 'Main Hub',
    description:
      'The gravitational center of my digital universe. A minimalist, professional portfolio showcasing my engineering journey, technical skills, and core projects.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    orbitSpeed: 0, // Stays perfectly still in the center
    orbitRadius: 0, // Anchored at the origin (0,0,0)
    github: 'https://github.com/ANSHPATEL-ap123/resume-ansh.git',
    demo: 'https://ansh-portfolio-ten-gamma.vercel.app/',
  },
  {
    id: 'aurabi',
    name: 'AuraBI',
    color: '#FF8C00', // Vivid Cyber Orange
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
    color: '#00F3FF', // Cyber Cyan
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
    github: 'https://github.com/brajesh1210/risk-lens', 
    demo: 'https://risk-lens.vercel.app/', 
  },
  {
    id: 'nyas-upasthiti',
    name: 'NYAS-UPASTHITI',
    color: '#FFD700', // Cyber Gold / Bright Yellow
    type: 'Team Project',
    description:
      'A modern attendance and organizational management system designed for seamless tracking and operational efficiency.',
    tags: ['Next.js', 'Tailwind CSS', 'Database'],
    orbitSpeed: 0.2, 
    orbitRadius: 17, 
    github: 'https://github.com/ANSHPATEL-ap123/NYAS-UPASTHITI-FINAL.git',
    demo: 'https://your-live-link-here.vercel.app/', 
  },
  {
    id: 'dermlens',
    name: 'DermLens',
    color: '#10B981', // Bioluminescent Emerald
    type: 'Team Project', 
    description:
      'AI-driven clinical dermatology dashboard generating personalized AM/PM treatment protocols, lifestyle adjustments, and risk assessments.', 
    tags: ['Next.js', 'Tailwind', 'Firebase', 'AI'], 
    orbitSpeed: 0.15, 
    orbitRadius: 20, 
    github: 'https://github.com/ANSHPATEL-ap123/DERMLENS.git',
    demo: 'https://dermlens-brown.vercel.app/', 
  },
 {
    id: 'auraspace',
    name: 'AuraSpace',
    color: '#FF007F', // Neon Bright Pink
    type: 'Solo Project',
    description:
      'A personal celestial navigation hub designed for astronomy enthusiasts. Features real-time tracking, orbital mechanics visualization, and environmental quality assessment for optimal stargazing.',
    tags: ['Next.js', 'TypeScript', 'Lucide-React'],
    orbitSpeed: 0.35,
    orbitRadius: 23,
    github: 'https://github.com/ANSHPATEL-ap123/auraspace', 
    demo: 'https://auraspace-lake.vercel.app/', 
  },
  {
    id:'PRISM',
    name:'PRISM',
    color: '#ff0000', 
    type: 'Solo Project',
    description:
      'A personal celestial navigation hub designed for astronomy enthusiasts. Features real-time tracking, orbital mechanics visualization, and environmental quality assessment for optimal stargazing.',
    tags: ['huggingface','gradio','python'],
    orbitSpeed: 0.45,
    orbitRadius: 26,
    github: 'https://huggingface.co/spaces/anshpatel123/PRISM/tree/main', 
    demo: 'https://huggingface.co/spaces/anshpatel123/PRISM', 
  }
];