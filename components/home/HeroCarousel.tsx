"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { whatsappUrl } from "@/lib/site";

const t = "t-premium";

/** Altura = viewport menos header sticky */
const heroMin = "min-h-[calc(100svh-4.5rem)]";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&q=85",
    subtitle: "Sabores autênticos que derretem na boca",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&q=85",
    subtitle: "Massa leve, borda crocante e ingredientes selecionados",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1920&q=85",
    subtitle: "Da nossa forno à sua mesa — pedido fácil pelo WhatsApp",
  },
];

function HeroContent({
  subtitle,
  active,
  onDotClick,
}: {
  subtitle: string;
  active: number;
  onDotClick: (i: number) => void;
}) {
  return (
    <div className="flex w-full max-w-xl flex-col justify-center py-10 sm:py-12 lg:max-w-[min(36rem,92vw)] lg:py-16">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F4A300] drop-shadow-sm">
        Mega Pizza Andirá
      </p>
      <h1 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl xl:text-[3.5rem] xl:leading-[1.08]">
        Mega Pizza Andirá — A Maior Pizza da Região
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/95">
        {subtitle}
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          href="/cardapio"
          className={clsx(
            "inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-[#0f172a]/10 bg-[#F4A300] px-10 text-base font-bold text-[#111827] shadow-lg",
            t,
            "hover:scale-105 hover:brightness-105 hover:shadow-2xl"
          )}
        >
          Ver cardápio
        </Link>
        <a
          href={whatsappUrl(
            "Olá! Quero fazer um pedido — vim do banner principal."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-white bg-transparent px-10 text-base font-bold text-white shadow-md",
            t,
            "hover:bg-white/10"
          )}
        >
          Fazer pedido
        </a>
      </div>
      <div
        className="mt-12 flex gap-2"
        role="tablist"
        aria-label="Slides do banner"
      >
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Slide ${i + 1}`}
            className={clsx(
              "h-3 rounded-full t-premium",
              active === i
                ? "w-12 bg-amber-400"
                : "h-3 w-3 bg-white/50 hover:bg-white/80"
            )}
            onClick={() => onDotClick(i)}
          />
        ))}
      </div>
    </div>
  );
}

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative w-full overflow-x-clip bg-[#C41E3A]">
      {/* Mobile */}
      <div className={clsx("flex flex-col lg:hidden", heroMin)}>
        <div className="relative h-[38vh] min-h-[220px] w-full shrink-0 sm:h-[42vh] sm:min-h-[260px]">
          <Image
            key={slide.id}
            src={slide.image}
            alt="Pizza artesanal em destaque"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            aria-hidden
          />
        </div>
        <div className="relative flex flex-1 flex-col bg-[#C41E3A]">
          <HeroContent
            subtitle={slide.subtitle}
            active={active}
            onDotClick={setActive}
          />
        </div>
      </div>

      {/* Desktop: camadas — foto 100% da área + máscara vermelha em diagonal (sem faixas brancas) */}
      <div
        className={clsx(
          "relative hidden w-full overflow-hidden lg:block",
          heroMin
        )}
      >
        {/* Camada 1: imagem cobre TODO o hero (full-bleed até à direita e fundo) */}
        <div className="absolute inset-0 z-0">
          <Image
            key={`bg-${slide.id}`}
            src={slide.image}
            alt="Pizza artesanal em destaque"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={active === 0}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent"
            aria-hidden
          />
        </div>

        {/* Camada 2: painel vermelho com clip-path — o “vazio” do clip mostra a pizza por baixo (não o fundo da página) */}
        <div
          className="absolute inset-y-0 left-0 z-[1] w-[62%] bg-[#C41E3A] xl:w-[58%]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 76% 100%, 0 100%)",
          }}
          aria-hidden
        />

        {/* Camada 3: conteúdo */}
        <div
          className={clsx(
            "relative z-[2] flex w-full",
            heroMin
          )}
        >
          <div className="flex w-full flex-col justify-center px-6 sm:px-10 lg:w-[50%] lg:max-w-none lg:pl-12 lg:pr-6 xl:pl-16">
            <HeroContent
              subtitle={slide.subtitle}
              active={active}
              onDotClick={setActive}
            />
          </div>
          {/* Coluna direita “fantasma” só para empilhar altura; a imagem é a camada absoluta */}
          <div className="hidden flex-1 lg:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}
