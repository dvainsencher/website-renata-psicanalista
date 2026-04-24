import ScrollReveal from "./ScrollReveal";

const abordagemItems = [
  {
    title: "Uma escuta sem julgamento",
    description:
      "O espaço analítico é, antes de tudo, um lugar de acolhimento. Cada pessoa traz uma história única, e meu trabalho é oferecer a escuta necessária para que essa singularidade possa emergir e ser compreendida.",
  },
  {
    title: "Psicanálise contemporânea",
    description:
      "Minha prática é enraizada na psicanálise e enriquecida por abordagens contemporâneas, sempre em diálogo com o que emerge de cada processo. Não se trata de aplicar um método rígido, mas de construir juntos um percurso que faça sentido.",
  },
  {
    title: "O tempo do processo",
    description:
      "A análise tem seu próprio tempo. O trabalho psicanalítico respeita a profundidade e o ritmo de cada processo — porque é da profundidade que surgem as transformações mais duradouras.",
  },
];

const temas = [
  "Autoconhecimento",
  "Ansiedade e angústia",
  "Perdas e transições",
  "Conflitos afetivos",
  "Crises conjugais e novos modelos de relacionamento",
  "Modelos de maturidade e envelhecimento",
];

const AtendimentoSection = () => (
  <section id="a-analise" className="section-padding bg-sage">
    <div className="mx-auto max-w-4xl">

      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-normal tracking-tight text-foreground md:text-4xl">
            A Análise
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-accent/40" />
            <span className="botanical-dot" />
            <span className="h-px w-8 bg-accent/40" />
          </div>
        </div>
      </ScrollReveal>

      {/* Abordagem */}
      <ScrollReveal delay={100}>
        <h3 className="mt-14 text-center font-heading text-xl font-normal tracking-tight text-foreground md:text-2xl">
          Abordagem
        </h3>
      </ScrollReveal>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {abordagemItems.map((item, i) => (
          <ScrollReveal key={item.title} delay={150 + i * 100}>
            <div className="rounded-2xl border border-accent/20 bg-background/50 p-6 backdrop-blur-sm">
              <h4 className="font-heading text-xl font-medium italic text-heading-hero">
                {item.title}
              </h4>
              <p className="mt-3 font-body text-sm font-normal leading-relaxed text-foreground/85">
                {item.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Temáticas */}
      <ScrollReveal delay={150}>
        <div className="mt-16 text-center">
          <h3 className="font-heading text-xl font-normal tracking-tight text-foreground md:text-2xl">
            Temáticas
          </h3>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-accent/40" />
            <span className="botanical-dot" />
            <span className="h-px w-6 bg-accent/40" />
          </div>
          <p className="mx-auto mt-6 max-w-lg font-body text-sm font-normal leading-relaxed text-foreground/85">
            As questões iniciais são sempre singulares e devem partir dos analisandos, coloco abaixo algumas temáticas frequentes no início do trabalho analítico.
          </p>
          <ul className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-x-12 gap-y-4 text-left sm:grid-cols-2">
            {temas.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                <span className="font-body text-sm font-normal leading-relaxed text-foreground/90">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

    </div>
  </section>
);

export default AtendimentoSection;
