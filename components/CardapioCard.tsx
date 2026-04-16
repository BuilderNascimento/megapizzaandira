import Image from "next/image";
import { SITE } from "@/lib/site";

export type CardapioCardProps = {
  nome: string;
  descricao?: string;
  preco: number;
  imagem: string;
  tamanho?: string;
  /** Badge ex.: Pizzas salgadas */
  categoria?: string;
};

const t = "t-premium";

export function CardapioCard({
  nome,
  descricao,
  preco,
  imagem,
  tamanho,
  categoria,
}: CardapioCardProps) {
  const href = SITE.pedidoUrl;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-lg bg-canvas shadow-md ${t} hover:scale-105 hover:shadow-2xl`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist">
        <Image
          src={imagem}
          alt={nome}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover ${t} group-hover:scale-110`}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
          aria-hidden
        />
        {categoria ? (
          <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md">
            {categoria}
          </span>
        ) : null}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-black leading-tight text-white drop-shadow-md md:text-xl">
            {nome}
          </h3>
          {tamanho ? (
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
              {tamanho}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        {descricao ? (
          <p className="line-clamp-3 text-sm leading-relaxed text-stone-700">
            {descricao}
          </p>
        ) : null}
        <p className="mt-4 text-3xl font-black tabular-nums text-red-600">
          {preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-amber-400 px-4 py-3 text-center text-base font-bold text-[#1A472A] shadow-lg ${t} hover:bg-amber-500 hover:shadow-xl`}
        >
          Pedir online
        </a>
      </div>
    </article>
  );
}
