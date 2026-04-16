import heroDesktop from "@/assets/hero-desktop.webp";
import heroMobile from "@/assets/hero-mobile.webp";
import heroFallback from "@/assets/hero-fallback.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511999816070?text=Ol%C3%A1%2C%20Renata!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento.";

const HeroSection = () => (
  <section id="inicio" className="relative overflow-hidden">

    {/* ── MOBILE: full-bleed photo with gradient overlay ── */}
    <div className="relative flex min-h-screen flex-col md:hidden">
      <div className="absolute inset-x-0 bottom-0 top-20">
        <img
          src={heroMobile}
          alt=""
          className="h-full w-full object-cover object-top"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/80 to-background/95" />
      </div>
      <div className="relative z-10 mt-auto px-6 pb-16 animate-fade-up">
        <h1 className="font-heading text-4xl font-light leading-tight tracking-tight text-heading-hero">
          Um espaço de escuta e transformação.
        </h1>
        <p className="mt-6 font-body text-base font-light leading-relaxed text-foreground/80">
          Atendimento individual e de casais.<br />
          Presencial em São Paulo e online.
        </p>
        <div className="mt-6 flex items-center gap-2">
          <span className="botanical-dot" />
          <span className="botanical-dot" />
          <span className="botanical-dot" />
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-accent px-8 py-3.5 font-body text-sm font-medium tracking-wide text-accent-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105"
        >
          Agendar uma conversa sem compromisso
        </a>
      </div>
    </div>

    {/* ── DESKTOP: two-column — photo left, text right ── */}
    <div className="hidden md:flex min-h-screen">
      {/* Photo column — 42% with right-edge fade */}
      <div className="relative w-[42%]">
        <picture>
          <source srcSet={heroDesktop} type="image/webp" />
          <img
            src={heroFallback}
            alt="Renata Druck"
            className="absolute inset-x-0 bottom-0 top-20 w-full object-cover object-top"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Soft fade into cream background */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-background" />
      </div>

      {/* Text column — 58%, centered accounting for navbar height */}
      <div className="w-[58%] bg-background flex items-center pt-20 px-12 lg:px-16">
        <div className="max-w-sm animate-fade-up">
          <h1 className="font-heading text-4xl font-light leading-tight tracking-tight text-heading-hero lg:text-5xl">
            Um espaço de escuta e transformação.
          </h1>
          <p className="mt-8 font-body text-base font-light leading-relaxed text-foreground/80 lg:text-lg">
            Atendimento individual e de casais.<br />
            Presencial em São Paulo e online.
          </p>
          <div className="mt-8 flex items-center gap-2">
            <span className="botanical-dot" />
            <span className="botanical-dot" />
            <span className="botanical-dot" />
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 font-body text-sm font-medium tracking-wide text-accent-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105"
          >
            Agendar uma conversa sem compromisso
          </a>
        </div>
      </div>
    </div>

  </section>
);

export default HeroSection;
