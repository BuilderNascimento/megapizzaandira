"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";
import { SITE, whatsappUrl } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "/contato", label: "Contato" },
];

const t = "t-premium";

/** Fundo escuro fixo + CTA laranja com texto escuro (contraste alto) */
const headerBg = "bg-[#1A472A]";
const ctaClass =
  "bg-amber-400 text-[#1A472A] shadow-md ring-1 ring-black/10 hover:bg-amber-500";

function IconInsta({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM18 6.5a1 1 0 110 2 1 1 0 010-2z" />
    </svg>
  );
}

function IconFb({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 22v-8.2h2.7l.4-3.2h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.5H7v3.2h2.8V22h3.7z" />
    </svg>
  );
}

function IconWa({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/20 shadow-lg ${headerBg}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          <span
            className="relative h-[62px] w-[min(11.5rem,52vw)] shrink-0 overflow-hidden rounded-xl bg-white shadow-md ring-2 ring-white/80"
            aria-hidden
          >
            <Image
              src="/logo-mega-pizza.png"
              alt=""
              fill
              className="object-contain object-center p-0.5"
              sizes="(max-width: 640px) 52vw, 184px"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-black tracking-tight text-white">
              Mega Pizza
            </span>
            <span className="block text-xs font-semibold uppercase tracking-widest text-white/90">
              Andirá
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-semibold text-white",
                t,
                "hover:bg-white/15 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden items-center gap-1 sm:flex">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-white hover:bg-white/15 hover:text-white"
              aria-label="Instagram"
            >
              <IconInsta className="h-5 w-5" />
            </a>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-white hover:bg-white/15 hover:text-white"
              aria-label="Facebook"
            >
              <IconFb className="h-5 w-5" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-white hover:bg-white/15 hover:text-white"
              aria-label="WhatsApp"
            >
              <IconWa className="h-5 w-5" />
            </a>
          </div>

          <a
            href={SITE.pedidoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "hidden items-center rounded-full px-6 py-2.5 text-sm font-bold sm:inline-flex",
              ctaClass,
              t,
              "hover:scale-105 hover:shadow-xl"
            )}
          >
            Fazer pedido
          </a>

          <button
            type="button"
            className={clsx(
              "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/25 text-white lg:hidden",
              t,
              "hover:bg-white/10"
            )}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={clsx(
          `border-t border-white/20 ${headerBg} lg:hidden`,
          open ? "block shadow-xl" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-base font-semibold text-white hover:bg-white/15"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex justify-center gap-4 border-t border-white/10 pt-4">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-90"
              aria-label="Instagram"
            >
              <IconInsta className="h-6 w-6" />
            </a>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-90"
              aria-label="Facebook"
            >
              <IconFb className="h-6 w-6" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-90"
              aria-label="WhatsApp"
            >
              <IconWa className="h-6 w-6" />
            </a>
          </div>
          <a
            href={SITE.pedidoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "mt-3 rounded-full py-3 text-center text-base font-bold shadow-md",
              ctaClass,
              t,
              "hover:scale-[1.02] hover:shadow-lg"
            )}
            onClick={() => setOpen(false)}
          >
            Fazer pedido
          </a>
        </nav>
      </div>
    </header>
  );
}
