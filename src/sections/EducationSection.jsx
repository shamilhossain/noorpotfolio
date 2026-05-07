import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const educationItems = [
  {
    title: 'BSc in CSE',
    institution: 'East West University',
    period: '2021 — 2025',
    metric: 'CGPA 3.11',
    description: 'Computer Science and Engineering with a focus on core computing foundations and practical development.',
  },
  {
    title: 'HSC Science',
    institution: 'Narsingdi Public College',
    period: '2020',
    metric: 'GPA 4.75',
    description: 'Science background that built the analytical base.',
  },
]

function EducationSection() {
  return (
    <section id="education" className="border-b border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <motion.div
          className="max-w-2xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeInUp}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400">Education</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A sleek timeline of growth          </h2>
        </motion.div>

        <motion.div
          className="relative mt-12 space-y-6 pl-6 sm:pl-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="absolute left-[0.72rem] top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent sm:left-[0.95rem]" />

          {educationItems.map((item) => (
            <motion.article
              key={`${item.title}-${item.institution}`}
              variants={fadeInUp}
              className="relative rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_16px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_0_35px_rgba(59,130,246,0.14)]"
            >
              <motion.span
                className="absolute -left-[1.15rem] top-6 h-4 w-4 rounded-full border border-white/20 bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(59,130,246,0.55))] shadow-[0_0_0_6px_rgba(59,130,246,0.08)] sm:-left-[1.4rem]"
                initial={{ scale: 0.75, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{item.period}</p>
                  <h3 className="mt-2 text-xl font-medium text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-300">{item.institution}</p>
                </div>
                <span className="inline-flex w-fit rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-medium text-gray-200">
                  {item.metric}
                </span>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default EducationSection
