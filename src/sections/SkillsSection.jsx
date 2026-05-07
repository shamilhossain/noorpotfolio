import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: '⌘',
    accent: 'from-blue-500/20 to-cyan-400/10',
    items: ['Python', 'C', 'C++', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Machine Learning',
    icon: 'AI',
    accent: 'from-fuchsia-500/20 to-violet-400/10',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
  },
  {
    title: 'Data Visualization',
    icon: '↗',
    accent: 'from-emerald-500/20 to-teal-400/10',
    items: ['Matplotlib', 'Seaborn'],
  },
  {
    title: 'Productivity Tools',
    icon: '✦',
    accent: 'from-amber-500/20 to-orange-400/10',
    items: ['Excel', 'PowerPoint', 'LaTeX'],
  },
  {
    title: 'Soft Skills',
    icon: '◌',
    accent: 'from-rose-500/20 to-pink-400/10',
    items: ['Problem Solving', 'Communication', 'Teamwork'],
  },
]

function SkillsSection() {
  return (
    <section id="skills" className="border-b border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <motion.div
          className="max-w-2xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeInUp}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A carefully structured toolkit across code, data, and communication.
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.16)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${group.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-sm font-semibold text-white shadow-[0_0_25px_rgba(255,255,255,0.08)]">
                    {group.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Category</p>
                    <h3 className="mt-1 text-xl font-medium text-white">{group.title}</h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-medium text-gray-200 transition group-hover:border-white/20 group-hover:bg-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
