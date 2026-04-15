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
      "Minha prática é enraizada na psicanálise e enriquecida por abordagens contemporâneas, sempre em diálogo com o que emerge de cada processo. Não se trata de aplicar um método rígido, mas de construir junto um percurso que faça sentido.",
  },
  {
    title: "O tempo do processo",
    description:
      "A análise tem seu próprio tempo. O trabalho psicanalítico respeita a profundidade e o ritmo de cada processo — porque é da profundidade que surgem as transformações mais duradouras.",
  },
];

const QuemSouSection = () => (
  <section id="quem-sou" className="section-padding bg-background">
    <div className="mx-auto max-w-3xl text-center">
      <ScrollReveal>
        <h2 className="font-heading text-3xl font-normal tracking-tight text-foreground md:text-4xl">
          Quem sou
        </h2>
        <div className="mx-auto mt-4 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-accent/40" />
          <span className="botanical-dot" />
          <span className="h-px w-8 bg-accent/40" />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <p className="mt-10 font-body text-base font-light leading-[1.9] text-foreground/80 md:text-lg">
          Fundamentada na psicanálise e enriquecida pelo diálogo com
          abordagens contemporâneas, Renata oferece um espaço de escuta
          para elaboração de conflitos, padrões de comportamento que se repetem,
          angústias e impasses nas relações, entre outras questões.
          Um processo que convida à mudanças e à construção de novos sentidos
          para a própria história.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={250}>
        <p className="mt-8 font-body text-base font-light leading-[1.9] text-foreground/80 md:text-lg">
          Atendimento para jovens, adultos e casais, de forma presencial na cidade de São Paulo e online.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={350}>
        <p className="mt-6 font-body text-sm font-medium tracking-wide text-muted-foreground">
          Psicanalista formada pelo CEP – Centro de Estudos Psicanalíticos
        </p>
        <p className="mt-2 font-body text-sm font-medium tracking-wide text-muted-foreground">
          Cineasta com especialização em documentários
        </p>
      </ScrollReveal>

      {/* Abordagem section */}
      <ScrollReveal delay={400}>
        <div className="mt-16">
          <h3 className="font-heading text-2xl font-normal tracking-tight text-foreground md:text-3xl">
            Abordagem
          </h3>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-accent/40" />
            <span className="botanical-dot" />
            <span className="h-px w-6 bg-accent/40" />
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
        {abordagemItems.map((item, index) => (
          <ScrollReveal key={item.title} delay={500 + index * 100}>
            <div className="rounded-2xl border border-accent/20 bg-muted/30 p-6">
              <h4 className="font-heading text-lg font-normal text-foreground">
                {item.title}
              </h4>
              <p className="mt-3 font-body text-sm font-light leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default QuemSouSection;
