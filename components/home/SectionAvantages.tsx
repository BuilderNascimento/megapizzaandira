import Image from "next/image";
import Link from "next/link";

const t = "t-premium";

/** Fotos reais (Unsplash), sem emojis */
const cards = [
  {
    title: "Qualidade",
    text: "Ingredientes selecionados e receitas testadas todos os dias.",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
    alt: "Mesa com vegetais frescos e ingredientes coloridos",
  },
  {
    title: "Rapidez",
    text: "Pedido organizado do WhatsApp à saída para entrega.",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
    alt: "Entrega urbana em moto na cidade",
  },
  {
    title: "Família",
    text: "Porções generosas para dividir à mesa.",
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80",
    alt: "Pessoas a partilhar pizza à mesa",
  },
  {
    title: "Confiança",
    text: "Anos de presença em Andirá com clientes fiéis.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    alt: "Ambiente acolhedor de restaurante com mesas postas",
  },
];

export function SectionAvantages() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 py-16 md:py-24">
      {/* Textura suave + corte superior */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a472a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 z-0 h-16 bg-gradient-to-b from-[#1A472A]/10 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1A472A]/80">
            Mega Pizza Andirá
          </p>
          <h2 className="mt-3 font-serif text-4xl font-black tracking-tight text-[#1A472A] md:text-5xl">
            As nossas vantagens
          </h2>
          <div
            className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#1A472A]/30"
            aria-hidden
          />
          <p className="mt-6 text-lg leading-relaxed text-stone-800 md:text-xl">
            O que nos diferencia, além do sabor que você já conhece.
          </p>
        </header>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {cards.map((c) => (
            <li key={c.title}>
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-stone-900/5 ${t} hover:-translate-y-1 hover:shadow-2xl`}
              >
                <div className="relative aspect-[5/4] w-full overflow-hidden bg-stone-200">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-90"
                    aria-hidden
                  />
                  <h3 className="absolute bottom-4 left-4 right-4 font-serif text-2xl font-bold tracking-tight text-white drop-shadow-md">
                    {c.title}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col border-t border-stone-100 p-6">
                  <p className="text-left text-sm leading-relaxed text-stone-700">
                    {c.text}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex justify-center md:mt-20">
          <Link
            href="/cardapio"
            className={`inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#1A472A] px-12 text-sm font-black tracking-[0.25em] text-amber-300 shadow-xl ring-2 ring-[#1A472A]/20 ${t} hover:scale-105 hover:bg-[#142c1f] hover:text-amber-200 hover:shadow-2xl`}
          >
            CARDÁPIO
          </Link>
        </div>
      </div>
    </section>
  );
}
