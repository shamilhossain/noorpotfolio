import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const projectHighlights = ['React', 'Premium UI', 'Responsive', 'Glassmorphism']

function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <motion.div
          className="max-w-2xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeInUp}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400">Projects</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A product-style showcase built to feel polished and intentional.
          </h2>
        </motion.div>

        <motion.article
          className="group relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_100px_rgba(0,0,0,0.38)] backdrop-blur-xl"
          style={{ perspective: 1400 }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          whileHover={{ rotateX: 4, rotateY: -5, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_34%)] opacity-70 transition duration-300 group-hover:opacity-100" />
          <div className="absolute inset-x-24 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Featured Project</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Titan Crest</h3>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Live
                </span>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
                A premium product landing page experience designed to feel fast, clean, and conversion-ready.
                The layout balances bold visual hierarchy, strong call-to-action placement, and a refined
                polished presentation.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {projectHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-xs font-medium text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://titan-crest.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:bg-gray-100"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="relative p-6 sm:p-8">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/35 shadow-[0_0_60px_rgba(59,130,246,0.12)]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400/90" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/90" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                  <div className="ml-3 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-400">
                    titan-crest.vercel.app
                  </div>
                </div>

                <div className="grid gap-4 p-5 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-4">
                    <div className="h-8 w-28 rounded-full bg-white/12" />
                    <div className="space-y-3">
                      <div className="h-4 w-full rounded-full bg-white/10" />
                      <div className="h-4 w-5/6 rounded-full bg-white/10" />
                      <div className="h-4 w-2/3 rounded-full bg-white/10" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="h-4 w-16 rounded-full bg-white/10" />
                        <div className="mt-4 h-10 w-full rounded-2xl bg-[linear-gradient(135deg,rgba(59,130,246,0.35),rgba(168,85,247,0.35))]" />
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="h-4 w-16 rounded-full bg-white/10" />
                        <div className="mt-4 h-10 w-full rounded-2xl bg-white/10" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),rgba(10,10,10,0.7)),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4">
                    <div className="h-full rounded-[1.25rem] border border-white/10 bg-black/30 p-4">
                      <div className="flex items-center justify-between">
                        <div className="h-4 w-24 rounded-full bg-white/10" />
                        <div className="h-4 w-10 rounded-full bg-emerald-400/30" />
                      </div>
                      <div className="mt-5 space-y-3">
                        <div className="h-3 w-full rounded-full bg-white/10" />
                        <div className="h-3 w-5/6 rounded-full bg-white/10" />
                        <div className="h-3 w-2/3 rounded-full bg-white/10" />
                      </div>
                      <div className="mt-5 grid gap-3">
                        <div className="h-16 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(59,130,246,0.18))]" />
                        <div className="h-16 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(168,85,247,0.16))]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

export default ProjectsSection
