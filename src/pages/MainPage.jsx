import { Helmet } from 'react-helmet-async'

const WHATSAPP_URL =
  'https://wa.me/5511999816070?text=Ol%C3%A1%2C%20Renata!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento.'

export default function MainPage() {
  return (
    <div>
      <Helmet>
        <title>Renata Druck — Psicanalista em São Paulo</title>
        <meta name="description" content="Atendimento psicanalítico individual e de casais em São Paulo. Presencial, remoto e híbrido. Consultório próximo ao metrô Sumaré e Butantã." />
        <link rel="canonical" href="https://renatadruck.com.br/" />
        <meta property="og:title" content="Renata Druck — Psicanalista em São Paulo" />
        <meta property="og:url" content="https://renatadruck.com.br/" />
      </Helmet>

      {/* ── INÍCIO ── */}
      <section id="inicio" className="min-h-[70vh] flex items-center bg-cream pt-24">
        <div className="max-w-5xl mx-auto px-6 py-10 w-full">
          <div className="max-w-2xl">
            <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-accent italic leading-snug mb-6">
              Um espaço de escuta e transformação.
            </h1>
            <p className="text-warm-400 font-light text-lg leading-relaxed mb-10">
              Atendimento individual e de casais em São Paulo.<br />
              Presencial, remoto e híbrido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white text-sm tracking-wide font-light hover:bg-accent-dark transition-colors duration-200"
              >
                Agendar uma conversa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="bg-cream-dark py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-warm-400 mb-10">Sobre</p>
          <div className="max-w-2xl mb-16">
            <h2 className="font-serif font-light text-4xl md:text-5xl text-warm mb-6">Quem sou eu</h2>
            <p className="text-warm-400 font-light text-lg leading-relaxed mb-4">
              Psicanalista formada pelo CEP — Centro de Estudos Psicanalíticos,
              em São Paulo, e cineasta com especialização em documentários. Minha prática é fundamentada na psicanálise contemporânea,
              com atenção às singularidades de cada pessoa ou casal que busca atendimento.
            </p>
            <p className="text-warm-400 font-light text-lg leading-relaxed mb-4">
              Ofereço um espaço de escuta qualificada, onde o sofrimento pode ser
              acolhido, compreendido e trabalhado com seriedade e cuidado.
            </p>
            <p className="text-warm-400 font-light text-lg leading-relaxed">
              Atendo adultos, jovens adultos e casais, de forma presencial em
              São Paulo ou remotamente para todo o Brasil.
            </p>
          </div>

          <div className="max-w-3xl">
            <p className="text-xs tracking-widest uppercase text-warm-400 mb-8">Abordagem</p>
            <div className="space-y-10">
              {[
                {
                  title: 'Uma escuta sem julgamento',
                  text: 'O espaço analítico é, antes de tudo, um lugar de acolhimento. Cada pessoa traz uma história única, e meu trabalho é oferecer a escuta necessária para que essa singularidade possa emergir e ser compreendida.',
                },
                {
                  title: 'Psicanálise contemporânea',
                  text: 'Minha prática é enraizada na psicanálise e enriquecida por abordagens contemporâneas, sempre em diálogo com o que emerge de cada processo. Não se trata de aplicar um método rígido, mas de construir junto um percurso que faça sentido.',
                },
                {
                  title: 'O tempo do processo',
                  text: 'A análise tem seu próprio tempo. O trabalho psicanalítico respeita a profundidade e o ritmo de cada processo — porque é da profundidade que surgem as transformações mais duradouras.',
                },
              ].map(({ title, text }) => (
                <div key={title} className="grid md:grid-cols-3 gap-6 items-start">
                  <h3 className="font-serif text-2xl text-warm">{title}</h3>
                  <p className="md:col-span-2 text-warm-400 font-light text-lg leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ATENDIMENTO ── */}
      <section id="atendimento" className="bg-cream py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-warm-400 mb-10">Atendimento</p>

          {/* Individual */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="font-serif font-light text-4xl md:text-5xl text-warm mb-6">
                Atendimento Individual
              </h2>
              <p className="text-warm-400 font-light text-lg leading-relaxed mb-4">
                O atendimento individual oferece um espaço de escuta psicanalítica
                dedicado ao seu processo. É um lugar onde você pode falar livremente
                sobre o que sente, pensa e vivencia — sem julgamentos.
              </p>
              <p className="text-warm-400 font-light text-lg leading-relaxed">
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
                <div key={item} className="flex items-center gap-3 text-warm-400 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Couples */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
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
                <div key={item} className="flex items-center gap-3 text-warm-400 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-peach-dark flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif font-light text-4xl md:text-5xl text-warm mb-6">
                Atendimento de Casais
              </h2>
              <p className="text-warm-400 font-light text-lg leading-relaxed mb-4">
                O atendimento de casais oferece um espaço analítico para que parceiros
                possam explorar juntos os impasses e dinâmicas que atravessam a relação.
              </p>
              <p className="text-warm-400 font-light text-lg leading-relaxed">
                O olhar psicanalítico sobre o casal vai além da gestão de conflitos:
                busca compreender o que está em jogo no vínculo, o que cada um traz de
                sua história e o que constroem juntos.
              </p>
            </div>
          </div>

          {/* Modalities */}
          <div>
            <p className="text-xs tracking-widest uppercase text-warm-400 mb-8">Modalidades</p>
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
                <div key={title} className="border border-accent/25 p-8 hover:border-accent/60 transition-colors duration-200">
                  <div className="w-8 h-px bg-peach-dark mb-6" />
                  <h3 className="font-serif text-2xl text-warm mb-3">{title}</h3>
                  <p className="text-warm-400 font-light text-lg leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="bg-accent py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-white/60 mb-10">Contato</p>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif font-light text-4xl md:text-5xl text-white mb-4">
                Fale comigo
              </h2>
              <p className="text-white/70 font-light text-lg leading-relaxed mb-6">
                A forma mais rápida de entrar em contato é pelo WhatsApp. Envie uma
                mensagem para conversarmos sobre o atendimento ou agendar uma conversa inicial.
              </p>
              <p className="font-serif text-white text-2xl mb-8">(11) 99981-6070</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-accent text-sm tracking-wide font-light hover:bg-white/90 transition-colors duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Enviar mensagem
              </a>
            </div>

            <div className="space-y-10">
              <div>
                <p className="text-xs tracking-widest uppercase text-white/60 mb-4">Email</p>
                <a
                  href="mailto:renatadruck@gmail.com"
                  className="font-serif text-white text-xl hover:text-white/80 transition-colors duration-200"
                >
                  renatadruck@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-white/60 mb-5">Consultórios</p>
                <div className="space-y-4">
                  {[
                    { name: 'Próximo ao Metrô Sumaré', sub: 'São Paulo, SP' },
                    { name: 'Próximo ao Metrô Butantã', sub: 'São Paulo, SP' },
                    { name: 'Atendimento Remoto', sub: 'Para todo o Brasil' },
                  ].map(({ name, sub }) => (
                    <div key={name} className="border-l-2 border-white/30 pl-4">
                      <p className="text-white font-light">{name}</p>
                      <p className="text-white/60 font-light text-sm">{sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-16 pt-12 max-w-2xl">
            <p className="font-serif text-2xl md:text-3xl text-white font-light italic leading-relaxed">
              "O primeiro contato não precisa ser perfeito —<br />
              precisa apenas acontecer."
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
