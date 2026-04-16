import Image from "next/image";
import Link from "next/link";
import cardapioData from "@/data/cardapio.json";

const t = "t-premium";

const picks = cardapioData.categorias.pizzas_salgadas.slice(0, 4);

export function SectionHotPicks() {
  return (
    <section className="relative bg-amber-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-5xl font-black tracking-tight text-[#1A472A] md:text-6xl">
          Chaud Devant
        </h2>
        <div
          className="mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-red-600 to-amber-500"
          aria-hidden
        />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
          Nossas pizzas em destaque — seleção do chef para conquistar seu
          paladar.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {picks.map((p) => (
            <Link
              key={p.id}
              href="/cardapio"
              className={`group relative block aspect-[3/4] overflow-hidden rounded-2xl border-4 border-white shadow-xl ${t} hover:scale-105 hover:shadow-2xl`}
            >
              <Image
                src={p.imagem}
                alt={p.nome}
                fill
                className={`object-cover ${t} group-hover:scale-110`}
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                aria-hidden
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
                  Destaque
                </p>
                <h3 className="mt-1 text-xl font-black leading-tight text-white drop-shadow-md">
                  {p.nome}
                </h3>
                <p className="mt-1 text-sm font-semibold text-white/90">
                  {p.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/cardapio"
            className={`inline-flex min-h-[56px] items-center justify-center rounded-full bg-red-600 px-8 py-4 text-base font-bold text-white shadow-lg ${t} hover:scale-105 hover:bg-red-700 hover:shadow-xl`}
          >
            Ver cardápio completo
          </Link>
        </div>
      </div>
    </section>
  );
}
