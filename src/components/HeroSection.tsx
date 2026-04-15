import heroBg from "@/assets/hero-abstract.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511999816070?text=Ol%C3%A1%2C%20Renata!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento.";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative flex min-h-screen items-center justify-center overflow-hidden"
  >
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt=""
        className="h-full w-full object-cover"
        loading="eager"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/75" />
    </div>

    <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
      <h1 className="font-heading text-4xl font-light leading-tight tracking-tight text-heading-hero md:text-5xl lg:text-6xl animate-fade-up">
        Um espaço de escuta e transformação.
      </h1>

      <p className="mx-auto mt-8 max-w-xl font-body text-base font-light leading-relaxed text-foreground/80 md:text-lg animate-fade-up" style={{ animationDelay: "200ms" }}>
        Atendimento individual e de casais.
        <br />
        Presencial em São Paulo e online.
      </p>

      {/* Decorative dot divider */}
      <div className="mx-auto mt-8 flex items-center justify-center gap-2 animate-fade-up" style={{ animationDelay: "350ms" }}>
        <span className="botanical-dot" />
        <span className="botanical-dot" />
        <span className="botanical-dot" />
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 font-body text-sm font-medium tracking-wide text-accent-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105 animate-fade-up"
        style={{ animationDelay: "450ms" }}
      >
        Agendar uma conversa sem compromisso
      </a>
    </div>
  </section>
);

export default HeroSection;
