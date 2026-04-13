import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const WHATSAPP_URL =
  'https://wa.me/5511999816070?text=Ol%C3%A1%2C%20Renata!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento.'

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Renata Druck — Psicanalista em São Paulo</title>
        <meta name="description" content="Atendimento psicanalítico individual e de casais em São Paulo. Presencial, remoto e híbrido. Consultório próximo ao metrô Sumaré e Butantã." />
        <link rel="canonical" href="https://renatadruck.com.br/" />
        <meta property="og:title" content="Renata Druck — Psicanalista em São Paulo" />
        <meta property="og:url" content="https://renatadruck.com.br/" />
      </Helmet>

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center bg-cream pt-16">
        <div className="max-w-5xl mx-auto px-6 py-10 w-full">
          <div className="max-w-2xl">
            <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-accent italic leading-snug mb-5">
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
          <Link
            to="/sobre"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-accent text-warm text-sm tracking-wide font-light hover:bg-accent/10 transition-colors duration-200"
          >
            Conhecer o trabalho
          </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream-dark py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-warm-400 mb-4">A escuta psicanalítica</p>
              <h2 className="font-serif font-light text-4xl md:text-5xl text-warm leading-snug">
                Um encontro com o que é mais singular em você
              </h2>
            </div>
            <div>
              <p className="text-warm-400 font-light text-lg leading-relaxed mb-4">
                A psicanálise contemporânea oferece um espaço de escuta qualificada,
                onde é possível explorar conflitos internos, padrões que se repetem
                e os impasses que surgem na vida pessoal e relacional.
              </p>
              <p className="text-warm-400 font-light text-lg leading-relaxed">
                Mais do que aliviar sintomas, o trabalho psicanalítico convida a uma
                compreensão mais profunda de si mesmo — abrindo caminhos onde antes
                havia bloqueio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase text-warm-400 mb-3">Modalidades</p>
            <h2 className="font-serif font-light text-4xl text-warm">Formas de atendimento</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Atendimento Individual',
                text: 'Espaço dedicado ao seu processo singular. Para quem busca autoconhecimento, bem-estar emocional e uma nova relação consigo mesmo.',
                dot: 'bg-accent',
              },
              {
                title: 'Atendimento de Casais',
                text: 'Um olhar psicanalítico para a dinâmica do casal. Para quem deseja compreender os impasses relacionais e construir novos caminhos juntos.',
                dot: 'bg-peach-dark',
              },
              {
                title: 'Presencial, Remoto ou Híbrido',
                text: 'Consultório próximo ao metrô Sumaré e Butantã, São Paulo. Atendimento remoto disponível para todo o Brasil.',
                dot: 'bg-accent',
              },
            ].map(({ title, text, dot }) => (
              <div
                key={title}
                className="border border-accent/25 p-8 hover:border-accent/60 transition-colors duration-200"
              >
                <div className={`w-1.5 h-1.5 rounded-full ${dot} mb-6`} />
                <h3 className="font-serif text-xl font-normal text-warm mb-4">{title}</h3>
                <p className="text-warm-400 font-light leading-relaxed text-sm">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/atendimento"
              className="text-sm tracking-wide text-accent hover:text-accent-dark transition-colors duration-200 border-b border-accent/40 pb-0.5"
            >
              Ver todos os detalhes →
            </Link>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-cream-dark py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase text-warm-400 mb-3">Localização</p>
            <h2 className="font-serif font-light text-4xl text-warm">Onde nos encontramos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { place: 'Sumaré', desc: 'Consultório próximo à estação Sumaré do Metrô, em São Paulo.' },
              { place: 'Butantã', desc: 'Consultório próximo à estação Butantã do Metrô, em São Paulo.' },
              { place: 'Online', desc: 'Atendimento remoto para todo o Brasil. Flexível e acessível.' },
            ].map(({ place, desc }) => (
              <div key={place} className="py-8 px-6">
                <div className="w-px h-8 bg-accent mx-auto mb-6" />
                <h3 className="font-serif text-2xl font-light text-warm mb-3">{place}</h3>
                <p className="text-warm-400 font-light text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-white/60 mb-6">Primeiro passo</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-white/70 font-light leading-relaxed mb-10">
            O primeiro contato é o começo de tudo. Entre em contato para
            conversarmos sobre o atendimento e tirar suas dúvidas.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 border border-white/40 text-white text-sm tracking-wide font-light hover:bg-white hover:text-accent transition-all duration-200"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
