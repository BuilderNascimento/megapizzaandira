"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";
import cardapioData from "@/data/cardapio.json";
import { CardapioCard } from "@/components/CardapioCard";

const tabs = [
  { id: "pizzas_salgadas" as const, label: "Pizzas salgadas" },
  { id: "pizzas_doces" as const, label: "Pizzas doces" },
  { id: "bebidas" as const, label: "Bebidas" },
  { id: "porcoes" as const, label: "Porções" },
];

type TabId = (typeof tabs)[number]["id"];

const t = "t-premium";

export default function CardapioPage() {
  const [active, setActive] = useState<TabId>("pizzas_salgadas");

  const items = useMemo(
    () => cardapioData.categorias[active],
    [active]
  );

  const badgeLabel = tabs.find((tab) => tab.id === active)?.label ?? "";

  return (
    <div className="bg-mist px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-ink sm:text-6xl">
            Cardápio
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink/70">
            Escolha a categoria e peça pelo WhatsApp — mensagem já vem com o nome
            do item.
          </p>
        </div>

        <div
          className="mt-12 flex gap-3 overflow-x-auto pb-2 md:flex-wrap md:gap-4"
          role="tablist"
          aria-label="Categorias do cardápio"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              className={clsx(
                "shrink-0 rounded-full px-6 py-3 text-base font-bold shadow-sm",
                t,
                active === tab.id
                  ? "bg-wine text-white shadow-lg hover:scale-105"
                  : "bg-canvas text-ink ring-1 ring-black/10 hover:shadow-md"
              )}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10"
          role="tabpanel"
        >
          {items.map((item) => (
            <CardapioCard
              key={item.id}
              nome={item.nome}
              descricao={"descricao" in item ? item.descricao : undefined}
              preco={item.preco}
              imagem={item.imagem}
              tamanho={"tamanho" in item ? item.tamanho : undefined}
              categoria={badgeLabel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
