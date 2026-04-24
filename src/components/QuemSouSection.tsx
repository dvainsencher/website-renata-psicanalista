import ScrollReveal from "./ScrollReveal";


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
        <p className="mt-10 font-body text-base font-normal leading-[1.9] text-foreground/90 md:text-lg">
          Fundamentada na psicanálise e enriquecida pelo diálogo com
          abordagens contemporâneas, Renata oferece um espaço de escuta
          para elaboração de conflitos, padrões de comportamento que se repetem,
          angústias e impasses nas relações, entre outras questões.
          Um processo que convida à mudanças e à construção de novos sentidos
          para a própria história.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={250}>
        <p className="mt-8 font-body text-base font-normal leading-[1.9] text-foreground/90 md:text-lg">
          Atendimento para jovens, adultos e casais, de forma online e presencial na cidade de São Paulo.
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

    </div>
  </section>
);

export default QuemSouSection;
