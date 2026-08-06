import { motion } from 'framer-motion'
import profileImage from '../assets/profile.jpg'
import { fadeInLeft, fadeInRight, fadeInUp } from '../utils/animations'

const highlightCards = [
  {
    title: 'AI/ML',
    description: 'Exploring machine learning workflows, model thinking, and practical AI applications.',
  },
  {
    title: 'Frontend Development',
    description: 'Crafting responsive, polished interfaces with React and modern CSS systems.',
  },
  {
    title: 'Problem Solving',
    description: 'Turning complex requirements into clear, usable, and maintainable experiences.',
  },
]

function AboutSection() {
  return (
    <section id="about" className="border-b border-white/10">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          className="relative w-fit justify-self-center lg:justify-self-end"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeInLeft}
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_55%)] blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_24px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.12),transparent_40%,rgba(168,85,247,0.12))]" />
              <img
                src={profileImage}
                alt="Portrait of Shamil Bin Hossain"
                className="relative h-[360px] w-auto rounded-[1.5rem] object-cover md:h-[480px]"
              />
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-gray-400">About</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              I am Shamil Bin Hossain,</h2>
              <h2 className="max-w-2xl text-xl font-medium tracking-tight text-white sm:text-2xl lg:text-3xl">
                Computer Science and Engineering student passionate about AI,
                machine learning, and modern web development.
              </h2>
            <p className="max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              I enjoy building thoughtful digital experiences where technical depth and visual clarity work
              together. My focus is on elegant frontend execution, practical AI/ML curiosity, and a
              design approach that feels minimal, premium, and purposeful.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInUp}
          >
            {highlightCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 text-left shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-gray-400">{card.title}</p>
                <p className="mt-3 text-sm leading-6 text-gray-300">{card.description}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
