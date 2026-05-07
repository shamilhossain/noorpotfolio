import { motion } from 'framer-motion'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shamil-bin-hossain/',
    description: 'Connect professionally',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/shamilhossain',
    description: 'View code and projects',
  },
]

function ContactSection() {
  return (
    <section id="contact">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <motion.div
          className="max-w-2xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeInUp}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s create something thoughtful and premium.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">
            Reach out for collaboration, project opportunities, or a quick conversation about product,
            frontend, and AI-focused work.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <motion.aside
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_32%)]" />
            <div className="relative space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Social</p>
                <h3 className="mt-2 text-2xl font-medium text-white">Find me online</h3>
              </div>

              <motion.div
                className="space-y-3"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-left transition hover:border-white/20 hover:bg-white/10"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">{link.label}</p>
                      <p className="mt-1 text-xs text-gray-400">{link.description}</p>
                    </div>
                    <span className="text-sm text-gray-400 transition group-hover:text-white">↗</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.aside>

          <motion.form
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />
            <div className="relative space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Message</p>
                <h3 className="mt-2 text-2xl font-medium text-white">Send a quick note</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-gray-300">
                  <span>Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-white/20 focus:bg-black/35"
                  />
                </label>

                <label className="space-y-2 text-sm text-gray-300">
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-white/20 focus:bg-black/35"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm text-gray-300">
                <span>Message</span>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project or idea..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-white/20 focus:bg-black/35"
                />
              </label>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(255,255,255,0.12)] transition hover:bg-gray-100"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
