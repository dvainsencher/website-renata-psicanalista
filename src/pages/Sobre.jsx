const WHATSAPP_URL =
  'https://wa.me/5511999816070?text=Ol%C3%A1%2C%20Renata!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento.'

export default function Sobre() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-accent mb-4">Sobre</p>
          <h1 className="font-serif font-light text-5xl md:text-6xl text-warm">
            Renata Druck
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream-dark py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif font-light text-3xl text-warm mb-6">Quem sou eu</h2>
            <p className="text-warm-400 font-light leading-relaxed mb-4">
              Sou psicanalista, com formação pelo CEP — Centro de Estudos Psicanalíticos,
              em São Paulo. Minha prática é fundamentada na psicanálise contemporânea,
              com atenção às singularidades de cada pessoa ou casal que busca atendimento.
            </p>
            <p className="text-warm-400 font-light leading-relaxed mb-4">
              Ofereço um espaço de escuta qualificada, onde o sofrimento pode ser
              acolhido, compreendido e trabalhado com seriedade e cuidado.
            </p>
            <p className="text-warm-400 font-light leading-relaxed">
              Atendo adultos, jovens adultos e casais, de forma presencial em
              São Paulo ou remotamente para todo o Brasil.
            </p>
          </div>
          <div>
            <h2 className="font-serif font-light text-3xl text-warm mb-6">Formação</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-accent/40 pl-6">
                <p className="font-serif text-warm text-lg font-normal">
                  CEP — Centro de Estudos Psicanalíticos
                </p>
                <p className="text-warm-400 font-light text-sm mt-1">
                  Formação em Psicanálise — São Paulo, SP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-accent mb-4 text-center">Abordagem</p>
          <h2 className="font-serif font-light text-4xl text-warm text-center mb-14">
            Filosofia clínica
          </h2>
          <div className="space-y-10">
            {[
              {
                title: 'Uma escuta sem julgamento',
                text: 'O espaço analítico é, antes de tudo, um lugar de acolhimento. Cada pessoa traz uma história única, e meu trabalho é oferecer a escuta necessária para que essa singularidade possa emergir e ser compreendida.',
              },
              {
                title: 'Psicanálise contemporânea',
                text: 'Minha prática é enraizada na psicanálise e enriquecida por abordagens contemporâneas, sempre em diálogo com o que emerge de cada processo. Não se trata de aplicar um método rígido, mas de construir junto um percurso que faça sentido para quem busca análise.',
              },
              {
                title: 'O tempo do processo',
                text: 'A análise tem seu próprio tempo. O trabalho psicanalítico respeita a profundidade e o ritmo de cada processo — porque é da profundidade que surgem as transformações mais duradouras.',
              },
            ].map(({ title, text }) => (
              <div key={title} className="grid md:grid-cols-3 gap-6 items-start">
                <h3 className="font-serif text-xl text-warm">{title}</h3>
                <p className="md:col-span-2 text-warm-400 font-light leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif font-light text-4xl text-cream mb-6">
            Vamos conversar?
          </h2>
          <p className="text-cream/60 font-light leading-relaxed mb-8">
            Entre em contato pelo WhatsApp para agendar uma conversa inicial
            e saber mais sobre o atendimento.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 border border-cream/30 text-cream text-sm tracking-wide font-light hover:bg-cream hover:text-warm transition-all duration-200"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
