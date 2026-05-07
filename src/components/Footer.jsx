function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-gray-400 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© 2026 shamilhossain. Portfolio layout built with React and Tailwind CSS.</p>
        <a className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white" href="#hero">
          Back to top
        </a>
      </div>
    </footer>
  )
}

export default Footer
