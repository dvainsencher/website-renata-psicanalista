import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Quem sou", href: "#quem-sou" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    const nav = document.querySelector("nav");
    if (el) {
      const navHeight = nav ? nav.getBoundingClientRect().height : 64;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <button
          onClick={() => handleClick("#inicio")}
          className="flex items-baseline gap-2 text-left"
        >
          <span className="font-heading text-xl font-semibold tracking-wide text-heading-hero md:text-2xl">
            Renata Druck
          </span>
          <span className="hidden font-body text-xs font-medium uppercase tracking-widest text-muted-foreground sm:inline">
            · Psicanalista · São Paulo
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className={`nav-link ${active === l.href ? "nav-link-active" : ""}`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-foreground md:hidden"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-6 bg-background/95 backdrop-blur-md py-8 md:hidden animate-fade-in">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className={`nav-link text-base ${active === l.href ? "nav-link-active" : ""}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
