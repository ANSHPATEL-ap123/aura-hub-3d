import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GitFork, ExternalLink, X, Orbit, Sparkles, Satellite, Radio } from 'lucide-react';
import AuraBackground from './components/AuraBackground';
import { projects } from './projects';

/* ═══════════════════════════════════════════
   APP — Main application with 3D canvas + UI overlay
   ═══════════════════════════════════════════ */

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: '#050508' }}>

      {/* ─── 3D Canvas (full viewport) ─── */}
      <div className="absolute inset-0 w-full h-full">
        <AuraBackground
          projects={projects}
          onSelectProject={setSelectedProject}
          selectedProject={selectedProject}
        />
      </div>

      {/* ─── Vignette overlay ─── */}
      <div className="vignette" />
      <div className="scanlines" />

      {/* ─── Header ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 sm:px-10 sm:py-5">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <Orbit className="w-6 h-6 text-amber-400" />
            <div className="absolute inset-0 w-6 h-6 rounded-full bg-amber-400/20 blur-md" />
          </div>
          <h1
            className="text-sm sm:text-base font-bold tracking-[0.35em] uppercase"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="text-white/90">THE </span>
            <span className="text-gold-gradient">AURA</span>
            <span className="text-white/90"> SERIES</span>
          </h1>
        </motion.div>

        <motion.nav
          className="hidden sm:flex items-center gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {['Explore', 'About', 'Contact'].map((item) => (
            <span
              key={item}
              className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/30 hover:text-white/80 cursor-pointer transition-colors duration-300"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {item}
            </span>
          ))}
        </motion.nav>
      </header>

      {/* ─── Bottom Status Bar ─── */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex items-center gap-2.5 text-[10px] text-white/20 tracking-[0.2em] uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          SYSTEMS NOMINAL
        </div>
        <div className="flex items-center gap-2 text-[10px] text-white/20 tracking-[0.2em]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <Satellite className="w-3 h-3" />
          {projects.length} OBJECTS DETECTED
        </div>
      </motion.div>

      {/* ─── Instruction Hint ─── */}
      <AnimatePresence>
        {!selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="fixed bottom-14 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass animate-float">
              <Sparkles className="w-3.5 h-3.5 text-amber-400/70" />
              <span
                className="text-[10px] text-white/35 tracking-[0.2em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                CLICK A PLANET TO ANALYZE
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Intelligence Card ─── */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div
            key={selectedProject.id}
            initial={{ x: '110%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '110%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 260, mass: 0.8 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[430px] z-50 flex items-center p-4 sm:pr-6 sm:pl-0"
          >
            <div className="relative w-full max-h-[90vh] rounded-2xl overflow-hidden glass-card gold-glow">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent" />
              <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-400/60 via-amber-400/15 to-transparent" />

              <button
                id="close-intelligence-card"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/30 hover:text-white transition-all duration-300 group z-10"
              >
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="p-7 sm:p-8 overflow-y-auto max-h-[90vh]">
                <div className="flex items-center gap-2.5 mb-2">
                  <motion.span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: selectedProject.color }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <span className="text-[10px] font-semibold text-white/25 tracking-[0.25em] uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {selectedProject.type}
                  </span>
                </div>

                <motion.h2
                  className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1"
                  style={{ fontFamily: "'Orbitron', sans-serif", color: selectedProject.color }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                >
                  {selectedProject.name}
                </motion.h2>

                <motion.div
                  className="h-[1px] mb-5 mt-3"
                  style={{
                    background: `linear-gradient(to right, ${selectedProject.color}60, transparent)`,
                    maxWidth: '80px',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />

                <motion.p className="text-[13px] leading-relaxed text-white/45 mb-7">
                  {selectedProject.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div className="mb-8">
                  <span className="text-[9px] font-semibold text-white/15 tracking-[0.25em] uppercase block mb-3"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    TECH STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        className="px-3.5 py-1.5 text-[11px] font-medium rounded-full"
                        style={{
                          border: `1px solid ${selectedProject.color}25`,
                          color: selectedProject.color,
                          backgroundColor: `${selectedProject.color}0A`,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons — Functional Logic Added Here */}
                <motion.div className="flex gap-3 mb-7">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[13px] font-semibold transition-all duration-200 border border-white/8 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"
                    >
                      <GitFork className="w-4 h-4" /> Github
                    </motion.button>
                  </a>

                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[13px] font-bold transition-all duration-200 text-black"
                      style={{
                        backgroundColor: selectedProject.color,
                        boxShadow: `0 4px 20px ${selectedProject.color}30`,
                      }}
                    >
                      <ExternalLink className="w-4 h-4" /> Launch
                    </motion.button>
                  </a>
                </motion.div>

                {/* Telemetry */}
                <div className="pt-5 border-t border-white/5">
                  <span className="text-[9px] font-semibold text-white/15 tracking-[0.25em] uppercase block mb-4"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    ORBITAL TELEMETRY
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-[9px] text-white/20 tracking-widest uppercase block mb-1.5">VELOCITY</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold" style={{ color: selectedProject.color, fontFamily: "'Orbitron', sans-serif" }}>
                          {selectedProject.orbitSpeed}
                        </span>
                        <span className="text-[10px] text-white/20">AU/s</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-[9px] text-white/20 tracking-widest uppercase block mb-1.5">DISTANCE</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold" style={{ color: selectedProject.color, fontFamily: "'Orbitron', sans-serif" }}>
                          {selectedProject.orbitRadius}
                        </span>
                        <span className="text-[10px] text-white/20">AU</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/[0.03]">
                  <Radio className="w-3 h-3 text-amber-400/40 animate-pulse-glow" />
                  <span className="text-[9px] text-white/15 tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    SIGNAL LOCKED • DATA STREAM ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}