import Image from "next/image";
import { SITE } from "@/lib/site";

const t = "t-premium";

export function SectionPromo() {
  return (
    <section className="relative z-0 overflow-visible px-6 py-24 md:py-28">
      {/* Fundo em gradiente + corte diagonal (Del'Arte) */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-red-600 via-orange-500 to-amber-500 clip-angled-both"
        aria-hidden
      />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-white">
          <h3 className="text-3xl font-black tracking-tight text-white md:text-4xl">
            Oferta especial
          </h3>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white">
            Compre 2 pizzas e ganhe 1 bebida grátis. Válido em pedidos feitos
            pelo site. Consulte condições.
          </p>
          <a
            href={SITE.pedidoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-10 inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-10 text-base font-bold text-red-600 shadow-lg ${t} hover:scale-105 hover:bg-amber-400 hover:text-red-700 hover:shadow-2xl`}
          >
            Aproveitar oferta
          </a>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/20 lg:aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=900&q=85"
            alt="Pizza promocional"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
