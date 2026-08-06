import { useState, useEffect } from 'react'

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
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light-theme')
    } else {
      document.documentElement.classList.remove('light-theme')
    }
  }, [isLightMode])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <a
          href="#hero"
          className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
        >
          Portfolio
        </a>

        <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end">
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

          <button
            onClick={() => setIsLightMode(!isLightMode)}
            className="inline-flex flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
            aria-label="Toggle light mode"
          >
            {isLightMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
