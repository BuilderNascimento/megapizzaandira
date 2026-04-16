import Image from "next/image";

const t = "t-premium";

const items = [
  {
    title: "Pizza grande",
    text: "Massas artesanais e recheios generosos — sabor de verdade em cada fatia.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    alt: "Pizza grande com ingredientes frescos em close",
  },
  {
    title: "Entrega rápida",
    text: "Seu pedido organizado com agilidade para chegar quentinho onde você estiver.",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
    alt: "Entrega rápida em moto na cidade",
  },
  {
    title: "Melhor preço",
    text: "Qualidade de pizzaria premium com valor justo para a família toda.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    alt: "Pizza servida à mesa para a família",
  },
  {
    title: "Tradição",
    text: "Receitas que unem o melhor da Itália com o sabor de casa.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    alt: "Pizza artesanal com queijo derretido e manjericão",
  },
];

export function SectionWhyMega() {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-br from-amber-400 via-orange-400 to-orange-600 py-16 md:py-24">
      {/* Textura leve — sem clip-path que expõe fundo branco da página */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a472a'%3E%3Cpath d='M40 40h40v40H40V40zm0-40h40v40H40V0zM0 40h40v40H0V40zm0-40h40v40H0V0z' fill-opacity='0.4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-white drop-shadow-sm md:text-5xl">
            Por Que Pedir na Mega Pizza
          </h2>
          <div
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-white/40"
            aria-hidden
          />
          <p className="mt-6 text-lg leading-relaxed text-white/95 md:text-xl">
            Quatro razões para escolher a experiência italiana com alma
            brasileira.
          </p>
        </header>

        <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((b) => (
            <li key={b.title}>
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-stone-900/10 ${t} hover:-translate-y-1 hover:shadow-2xl`}
              >
                <div className="relative aspect-[5/4] w-full overflow-hidden bg-stone-200">
                  <Image
                    src={b.image}
                    alt={b.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    aria-hidden
                  />
                  <h3 className="absolute bottom-3 left-4 right-4 font-serif text-xl font-bold tracking-tight text-white drop-shadow-md md:text-2xl">
                    {b.title}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-left text-sm leading-relaxed text-stone-700">
                    {b.text}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
