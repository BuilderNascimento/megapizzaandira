import { SITE, whatsappUrl } from "@/lib/site";

const mapEmbedSrc =
  "https://www.google.com/maps?q=Av.+Goiás,+1294+-+Centro+-+Andirá+-+PR,+86380-000&hl=pt&z=16&output=embed";

const t = "t-premium";

export function SectionVisit() {
  return (
    <section className="bg-[#1A472A] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div className="flex flex-col justify-center text-white">
            <h3 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Visite-nos
            </h3>
            <ul className="mt-8 space-y-5 text-base leading-relaxed text-white">
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-lg text-[#1A472A]"
                  aria-hidden
                >
                  🕐
                </span>
                <span>
                  <strong className="text-amber-400">Horários:</strong> Qua–Dom,
                  18:00–23:55
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-400 text-lg text-white"
                  aria-hidden
                >
                  📍
                </span>
                <span>
                  <strong className="text-amber-400">Local:</strong> Av. Goiás,
                  1294 — Andirá, PR
                </span>
              </li>
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl(
                  "Olá! Quero informações sobre retirada no local."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full bg-green-500 px-8 text-base font-bold text-white shadow-lg ${t} hover:scale-105 hover:bg-green-600 hover:shadow-xl`}
              >
                WhatsApp
              </a>
              <a
                href={`tel:${SITE.telefoneE164.replace(/\s/g, "")}`}
                className={`inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-[#1A472A] shadow-md ${t} hover:scale-105 hover:bg-amber-400 hover:text-[#1A472A]`}
              >
                Telefone
              </a>
            </div>
          </div>
          <div className="min-h-0 overflow-hidden rounded-2xl border-4 border-amber-500 shadow-2xl">
            <iframe
              title="Mapa Mega Pizza Andirá"
              src={mapEmbedSrc}
              className="h-72 w-full border-0 sm:h-96 lg:min-h-[22rem] lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
