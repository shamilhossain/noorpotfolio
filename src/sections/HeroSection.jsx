import { motion } from 'framer-motion'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations'

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_30%),linear-gradient(180deg,#0A0A0A_0%,#090909_100%)]" />
      <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl animate-float" />
      <div className="absolute right-[-5rem] top-1/3 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl animate-glow-pulse" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-28">
        <motion.div
          className="grid w-full gap-12 text-center lg:grid-cols-[1.1fr_0.9fr] lg:text-left"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="space-y-8" variants={fadeInLeft}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-gray-300 backdrop-blur-sm">
              HAPPY TO SEE YOU HERE
            </div>

            <div className="space-y-5">
              <motion.h1
                className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
                variants={fadeInUp}
              >
                Shamil Bin Hossain
              </motion.h1>
              <motion.p
                className="max-w-3xl text-lg font-medium text-gray-300 sm:text-xl"
                variants={fadeInUp}
              >
                Native AI Software Engineer specializing in AI engineering, explainable AI frameworks, deep learning, and intelligent system architecture.
              </motion.p>
            </div>

            <motion.p
              className="mx-auto max-w-2xl text-base leading-8 text-gray-400 lg:mx-0 lg:text-lg"
              variants={fadeInUp}
            >
              Passionate about machine learning and frontend development, focused on creating
              polished digital experiences with strong structure, clarity, and premium visual feel.
            </motion.p>

            <motion.div className="flex flex-wrap justify-center gap-4 lg:justify-start" variants={fadeInUp}>
              <a
                href="#projects"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:bg-gray-100"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.aside
            className="relative flex items-center justify-center"
            variants={fadeInRight}
          >
            <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-8 text-left shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_45%)]" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Profile</p>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Open to work
                  </span>
                </div>

                <div className="space-y-3 rounded-3xl border border-white/10 bg-black/25 p-6">
                  <p className="text-sm text-gray-400">Current focus</p>
                  <p className="text-xl font-medium leading-8 text-white">
                    AI-assisted product thinking, frontend systems, and high-end portfolio experiences.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Strength</p>
                    <p className="mt-2 text-sm text-gray-200">Readable UI with refined structure</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Direction</p>
                    <p className="mt-2 text-sm text-gray-200">Machine learning and modern web</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
