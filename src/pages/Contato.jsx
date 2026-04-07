const WHATSAPP_URL =
  'https://wa.me/5511999816070?text=Ol%C3%A1%2C%20Renata!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento.'

export default function Contato() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-accent mb-4">Contato</p>
          <h1 className="font-serif font-light text-5xl md:text-6xl text-warm">
            Fale comigo
          </h1>
        </div>
      </section>

      {/* Contact info */}
      <section className="bg-cream-dark py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {/* WhatsApp */}
          <div>
            <p className="text-xs tracking-widest uppercase text-accent mb-6">Principal</p>
            <h2 className="font-serif font-light text-3xl text-warm mb-4">WhatsApp</h2>
            <p className="text-warm-400 font-light leading-relaxed mb-6">
              A forma mais rápida de entrar em contato. Envie uma mensagem
              para conversarmos sobre o atendimento, tirar dúvidas ou agendar
              uma conversa inicial.
            </p>
            <p className="font-serif text-warm text-xl mb-8">(11) 99981-6070</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#25D366] text-white text-sm tracking-wide font-light hover:bg-[#20C45E] transition-colors duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Enviar mensagem
            </a>
          </div>

          {/* Email + Location */}
          <div className="space-y-10">
            <div>
              <p className="text-xs tracking-widest uppercase text-accent mb-4">Email</p>
              <h3 className="font-serif font-light text-2xl text-warm mb-3">E-mail</h3>
              <p className="text-warm-400 font-light text-sm leading-relaxed mb-2">
                Para contatos por e-mail:
              </p>
              <a
                href="mailto:[EMAIL]"
                className="font-serif text-warm hover:text-accent transition-colors duration-200"
              >
                [EMAIL]
              </a>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-accent mb-4">Localização</p>
              <h3 className="font-serif font-light text-2xl text-warm mb-5">Consultórios</h3>
              <div className="space-y-4">
                {[
                  { name: 'Próximo ao Metrô Sumaré', sub: 'São Paulo, SP' },
                  { name: 'Próximo ao Metrô Butantã', sub: 'São Paulo, SP' },
                  { name: 'Atendimento Remoto', sub: 'Para todo o Brasil' },
                ].map(({ name, sub }) => (
                  <div key={name} className="border-l-2 border-accent/40 pl-4">
                    <p className="text-warm font-light">{name}</p>
                    <p className="text-warm-400 font-light text-sm">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing note */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl text-warm font-light italic leading-relaxed">
            "O primeiro contato não precisa ser perfeito —<br />
            precisa apenas acontecer."
          </p>
        </div>
      </section>
    </div>
  )
}
