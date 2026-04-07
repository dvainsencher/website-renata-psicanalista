const WHATSAPP_URL =
  'https://wa.me/5511999816070?text=Ol%C3%A1%2C%20Renata!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento.'

export default function Atendimento() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-warm-400 mb-4">Serviços</p>
          <h1 className="font-serif font-light text-5xl md:text-6xl text-warm">
            Atendimento
          </h1>
        </div>
      </section>

      {/* Individual */}
      <section className="bg-cream-dark py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-widest uppercase text-warm-400 mb-4">01</p>
            <h2 className="font-serif font-light text-4xl text-warm mb-6">
              Atendimento Individual
            </h2>
            <p className="text-warm-400 font-light leading-relaxed mb-4">
              O atendimento individual oferece um espaço de escuta psicanalítica
              dedicado ao seu processo. É um lugar onde você pode falar livremente
              sobre o que sente, pensa e vivencia — sem julgamentos.
            </p>
            <p className="text-warm-400 font-light leading-relaxed">
              Indicado para quem atravessa momentos de sofrimento psíquico, deseja
              maior autoconhecimento, ou percebe padrões recorrentes que dificultam
              o bem-estar e as relações.
            </p>
          </div>
          <div className="space-y-3 md:pt-16">
            <p className="text-xs tracking-widest uppercase text-warm-400 mb-5">Temas frequentes</p>
            {[
              'Conflitos internos e emocionais',
              'Ansiedade e transtornos de ansiedade',
              'Questões de autoestima e identidade',
              'Dificuldades nas relações',
              'Padrões de comportamento que se repetem',
              'Isolamento social',
              'Fobias e compulsões',
              'Instabilidade profissional',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-warm-400 font-light text-sm">
                <div className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Couples */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="order-2 md:order-1 space-y-3 md:pt-16">
            <p className="text-xs tracking-widest uppercase text-warm-400 mb-5">Temas frequentes</p>
            {[
              'Conflitos relacionais recorrentes',
              'Dificuldades de comunicação',
              'Crises de confiança',
              'Relacionamentos curtos ou conflituosos',
              'Questões de intimidade',
              'Momentos de transição (casamento, filhos, separação)',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-warm-400 font-light text-sm">
                <div className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs tracking-widest uppercase text-warm-400 mb-4">02</p>
            <h2 className="font-serif font-light text-4xl text-warm mb-6">
              Atendimento de Casais
            </h2>
            <p className="text-warm-400 font-light leading-relaxed mb-4">
              O atendimento de casais oferece um espaço analítico para que parceiros
              possam explorar juntos os impasses e dinâmicas que atravessam a relação.
            </p>
            <p className="text-warm-400 font-light leading-relaxed">
              O olhar psicanalítico sobre o casal vai além da gestão de conflitos:
              busca compreender o que está em jogo no vínculo, o que cada um traz de
              sua história e o que constroem juntos.
            </p>
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section className="bg-cream-dark py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase text-warm-400 mb-3">03</p>
            <h2 className="font-serif font-light text-4xl text-warm">Modalidades</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Presencial',
                text: 'Consultórios em São Paulo, próximos às estações de metrô Sumaré e Butantã.',
              },
              {
                title: 'Remoto',
                text: 'Atendimento online por videoconferência, para todo o Brasil. Mesma qualidade, mais flexibilidade.',
              },
              {
                title: 'Híbrido',
                text: 'Combinação de sessões presenciais e remotas, conforme a necessidade de cada pessoa.',
              },
            ].map(({ title, text }) => (
              <div key={title} className="border border-accent/30 p-8">
                <div className="w-8 h-px bg-accent mb-6" />
                <h3 className="font-serif text-xl text-warm mb-3">{title}</h3>
                <p className="text-warm-400 font-light text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif font-light text-4xl text-cream mb-6">
            Tem alguma dúvida?
          </h2>
          <p className="text-cream/60 font-light leading-relaxed mb-8">
            Entre em contato pelo WhatsApp para conversarmos sobre qual
            modalidade é mais adequada para você.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 border border-cream/30 text-cream text-sm tracking-wide font-light hover:bg-cream hover:text-warm transition-all duration-200"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
