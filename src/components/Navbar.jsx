import { useState } from 'react'

const navLinks = [
  { href: '#', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#atendimento', label: 'Atendimento' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#inicio" onClick={handleClick} className="flex flex-col leading-none group">
          <span className="font-serif text-4xl font-normal tracking-wider text-accent transition-colors group-hover:text-accent-dark">
            Renata Druck
          </span>
          <span className="text-[11px] tracking-[0.3em] uppercase text-warm-400 font-normal mt-1">
            Psicanalista — São Paulo
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm tracking-wide font-light text-warm hover:text-accent transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-warm p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-accent/20 py-6 px-6">
          <nav className="flex flex-col gap-5">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={handleClick}
                className="text-base font-light tracking-wide text-warm hover:text-accent transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
