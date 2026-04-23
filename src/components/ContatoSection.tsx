import { Phone, Mail, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_URL =
  "https://wa.me/5511999816070?text=Ol%C3%A1%2C%20Renata!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento.";

const items = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(11) 99981-6070",
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "renatadruck@gmail.com",
    href: undefined,
    external: false,
  },
  {
    icon: MapPin,
    label: "Consultórios",
    value: "Próximos ao metrô Sumaré e Butantã, São Paulo",
    href: undefined,
    external: false,
  },
];

const ContatoSection = () => (
  <section id="contato" className="section-padding bg-blush">
    <div className="mx-auto max-w-3xl">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-normal tracking-tight text-foreground md:text-4xl">
            Contato
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-accent/40" />
            <span className="botanical-dot" />
            <span className="h-px w-8 bg-accent/40" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <p className="mt-10 text-center font-body text-sm font-light leading-relaxed text-foreground/70">
          Atendimento individual e de casais.<br />
          Online e Presencial em São Paulo.
        </p>
      </ScrollReveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {items.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 100}>
            <div className="rounded-2xl bg-background/60 px-6 py-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <item.icon size={20} className="text-accent" />
                <span className="font-body text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </span>
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="mt-3 block font-body text-sm font-light text-foreground/85 underline decoration-accent/30 underline-offset-4 transition-colors hover:text-foreground"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-3 font-body text-sm font-light text-foreground/85">
                  {item.value}
                </p>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={400}>
        <div className="mt-14 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-accent px-8 py-3.5 font-body text-sm font-medium tracking-wide text-accent-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105"
          >
            Agendar uma conversa inicial
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ContatoSection;
