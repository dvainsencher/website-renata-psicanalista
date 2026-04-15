import { User, Users, MapPin, Monitor } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: User, label: "Atendimento individual" },
  { icon: Users, label: "Atendimento para casais" },
  { icon: Monitor, label: "Presencial, remoto e híbrido" },
  { icon: MapPin, label: "Próximos às estações Sumaré e Butantã" },
];

const questoes = [
  "Conflitos internos",
  "Padrões de comportamento que se repetem",
  "Angústias",
  "Impasses nas relações",
  "Autoestima",
  "Questões identitárias",
  "Relacionamentos conflituosos ou efêmeros",
  "Instabilidade profissional",
  "Fobias",
  "Isolamento social",
  "Transtornos de ansiedade",
  "Compulsões",
];

const AtendimentoSection = () => (
  <section id="atendimento" className="section-padding bg-sage">
    <div className="mx-auto max-w-4xl">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-normal tracking-tight text-foreground md:text-4xl">
            Atendimento
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-accent/40" />
            <span className="botanical-dot" />
            <span className="h-px w-8 bg-accent/40" />
          </div>
        </div>
      </ScrollReveal>

      {/* Services grid */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {services.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 100}>
            <div className="flex items-center gap-4 rounded-2xl bg-background/60 px-6 py-5 backdrop-blur-sm">
              <s.icon size={22} className="shrink-0 text-accent" />
              <span className="font-body text-sm font-light text-foreground/85">
                {s.label}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Questões */}
      <ScrollReveal delay={200}>
        <div className="mt-16 text-center">
          <h3 className="font-heading text-xl font-normal text-foreground md:text-2xl">
            Questões trabalhadas
          </h3>
          <div className="mx-auto mt-8 flex flex-wrap justify-center gap-3">
            {questoes.map((q) => (
              <span
                key={q}
                className="rounded-full border border-accent/25 bg-background/50 px-4 py-2 font-body text-xs font-light text-foreground/75"
              >
                {q}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AtendimentoSection;
