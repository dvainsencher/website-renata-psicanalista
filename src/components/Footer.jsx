import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-warm text-cream/60 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="font-serif text-accent-light text-lg font-normal">Renata Druck</p>
            <p className="text-[10px] tracking-widest uppercase mt-1 text-cream/40">Psicanalista</p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm font-light">
            <Link to="/" className="hover:text-cream transition-colors duration-200">Início</Link>
            <Link to="/sobre" className="hover:text-cream transition-colors duration-200">Sobre</Link>
            <Link to="/atendimento" className="hover:text-cream transition-colors duration-200">Atendimento</Link>
            <Link to="/contato" className="hover:text-cream transition-colors duration-200">Contato</Link>
          </nav>
        </div>
        <div className="border-t border-cream/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-2 text-xs font-light">
          <p>São Paulo — SP</p>
          <p>© {new Date().getFullYear()} Renata Druck. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
