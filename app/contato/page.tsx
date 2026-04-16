import { SITE, whatsappUrl } from "@/lib/site";

const mapEmbedSrc =
  "https://www.google.com/maps?q=Av.+Goiás,+1294+-+Centro+-+Andirá+-+PR,+86380-000&hl=pt&z=16&output=embed";

const t = "t-premium";

export default function ContatoPage() {
  return (
    <div className="bg-mist px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-ink sm:text-6xl">
          Contato
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70">
          Venha nos visitar, peça pelo site ou fale com a gente pelo WhatsApp.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-h-0 overflow-hidden rounded-lg border border-black/5 bg-canvas shadow-lg">
            <iframe
              title="Localização Mega Pizza Andirá, Av. Goiás, 1294"
              src={mapEmbedSrc}
              className="h-72 w-full border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-10">
            <section className="rounded-lg border border-black/5 bg-canvas p-6 shadow-md md:p-8">
              <h2 className="text-2xl font-bold text-ink">Endereço</h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                {SITE.endereco}
              </p>
            </section>

            <section className="rounded-lg border border-black/5 bg-canvas p-6 shadow-md md:p-8">
              <h2 className="text-2xl font-bold text-ink">Horário</h2>
              <p className="mt-4 text-base text-ink/70">{SITE.horarios}</p>
            </section>

            <section className="rounded-lg border border-black/5 bg-canvas p-6 shadow-md md:p-8">
              <h2 className="text-2xl font-bold text-ink">E-mail</h2>
              <a
                href={`mailto:${SITE.email}`}
                className={`mt-4 inline-block text-base font-bold text-wine underline-offset-2 hover:underline ${t}`}
              >
                {SITE.email}
              </a>
              <p className="mt-2 text-sm font-medium text-ink/50">
                Pedidos: use o botão Pedir online ou o WhatsApp abaixo.
              </p>
            </section>

            <section className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={SITE.pedidoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full bg-amber-400 px-6 text-base font-bold text-[#1A472A] shadow-lg ${t} hover:scale-105 hover:bg-amber-300 hover:shadow-2xl`}
              >
                Pedir online
              </a>
              <a
                href={whatsappUrl(
                  "Olá! Gostaria de fazer um pedido pela página de contato."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full bg-[#25D366] px-6 text-base font-bold text-white shadow-lg ${t} hover:scale-105 hover:shadow-2xl`}
              >
                WhatsApp
              </a>
              <a
                href={`tel:${SITE.telefoneE164.replace(/\s/g, "")}`}
                className={`inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full border-2 border-wine bg-canvas px-6 text-base font-bold text-wine shadow-sm ${t} hover:bg-wine hover:text-white`}
              >
                Ligar: {SITE.telefoneDisplay}
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink">Redes sociais</h2>
              <ul className="mt-6 flex flex-wrap gap-4">
                <li>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center rounded-full bg-wine px-6 py-3 text-base font-bold text-white shadow-md ${t} hover:scale-105`}
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center rounded-full border-2 border-ink/15 bg-canvas px-6 py-3 text-base font-bold text-ink shadow-sm ${t} hover:shadow-md`}
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
