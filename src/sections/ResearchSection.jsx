import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const researchPapers = [
  {
    title: 'Green Machine Learning (GML): Energy-Aware Approaches for Sustainable Computing',
    status: 'Accepted',
    journal: 'Research Paper',
    summary:
      'Exploring energy-aware machine learning strategies that improve computational efficiency while supporting sustainable AI systems.',
  },
  {
    title: 'Detection of Lemon Leaf Diseases Using Inception V3-Based Machine Learning Model',
    status: 'Accepted',
    journal: 'Research Paper',
    summary:
      'A computer vision study focused on classifying lemon leaf diseases through an Inception V3-based deep learning workflow.',
  },
]

function ResearchSection() {
  return (
    <section id="research" className="border-b border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <motion.div
          className="max-w-2xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeInUp}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400">Research</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Academic work presented with a clean, publication-inspired layout.
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-5"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {researchPapers.map((paper) => (
            <motion.article
              key={paper.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 rounded-[1.75rem] border border-transparent bg-[linear-gradient(135deg,rgba(59,130,246,0.14),rgba(168,85,247,0.1),rgba(255,255,255,0.04))] opacity-0 blur-sm transition duration-300 group-hover:opacity-100" />
              <div className="relative space-y-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-4xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{paper.journal}</p>
                    <h3 className="mt-3 text-xl font-medium leading-8 text-white sm:text-2xl">
                      {paper.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    {paper.status}
                  </span>
                </div>

                <p className="max-w-4xl text-sm leading-7 text-gray-300 sm:text-base">
                  {paper.summary}
                </p>

                <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gray-500">
                    <span className="h-2 w-2 rounded-full bg-blue-400/70 shadow-[0_0_18px_rgba(59,130,246,0.65)]" />
                    Publication entry
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ResearchSection
