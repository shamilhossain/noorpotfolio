import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ResearchSection from './sections/ResearchSection'
import EducationSection from './sections/EducationSection'
import ContactSection from './sections/ContactSection'

function App() {
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false })

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-[#0A0A0A] text-gray-200"
      onPointerMove={(event) => {
        setSpotlight({ x: event.clientX, y: event.clientY, visible: true })
      }}
      onPointerLeave={() => {
        setSpotlight((current) => ({ ...current, visible: false }))
      }}
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_28%)]" />
      <div
        className="spotlight-glow"
        style={{
          '--spotlight-x': `${spotlight.x}px`,
          '--spotlight-y': `${spotlight.y}px`,
          '--spotlight-opacity': spotlight.visible ? 1 : 0,
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key="portfolio-shell"
          className="relative z-10"
          initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -12, filter: 'blur(10px)' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ResearchSection />
            <EducationSection />
            <ContactSection />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
