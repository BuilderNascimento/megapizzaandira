const items = [
  {
    title: "Pizza grande",
    text: "Massas artesanais e recheios generosos — sabor de verdade em cada fatia.",
    icon: "🍕",
    circle: "bg-red-600 text-white",
  },
  {
    title: "Entrega rápida",
    text: "Seu pedido organizado com agilidade para chegar quentinho onde você estiver.",
    icon: "🛵",
    circle: "bg-green-600 text-white",
  },
  {
    title: "Melhor preço",
    text: "Qualidade de pizzaria premium com valor justo para a família toda.",
    icon: "⭐",
    circle: "bg-pink-500 text-white",
  },
  {
    title: "Tradição",
    text: "Receitas que unem o melhor da Itália com o sabor de casa.",
    icon: "🏠",
    circle: "bg-blue-600 text-white",
  },
];

const t = "t-premium";

export function SectionWhyMega() {
  return (
    <section className="relative z-10 -mt-8 py-24 pt-28 md:-mt-10 md:py-28 md:pt-32">
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-amber-400 to-orange-500 clip-angled-both shadow-xl"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-black tracking-tight text-white drop-shadow-sm md:text-5xl">
          Por Que Pedir na Mega Pizza
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-white/95">
          Quatro razões para escolher a experiência italiana com alma brasileira.
        </p>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-10">
          {items.map((b) => (
            <li
              key={b.title}
              className={`rounded-xl bg-white p-8 shadow-xl ${t} hover:scale-105 hover:shadow-2xl`}
            >
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-full text-2xl shadow-md ${b.circle}`}
              >
                <span aria-hidden>{b.icon}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-stone-800">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                {b.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
