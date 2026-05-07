const navItems = [
  { label: 'Hero', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <a
          href="#hero"
          className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
        >
          Portfolio
        </a>

        <nav aria-label="Primary" className="w-full md:w-auto">
          <ul className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1 text-sm text-gray-300 sm:flex-wrap sm:overflow-visible md:justify-end">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="inline-flex whitespace-nowrap rounded-full border border-transparent px-3 py-2 transition duration-200 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/5 hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
