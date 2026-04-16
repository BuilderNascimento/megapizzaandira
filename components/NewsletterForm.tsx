"use client";

import { useState, type FormEvent } from "react";

const t = "t-premium";

export function NewsletterForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      <p className="text-sm font-semibold text-white">Newsletter</p>
      <p className="mt-2 text-sm leading-relaxed text-white/70">
        Receba novidades e promoções (em breve integração com e-mail).
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
        <label htmlFor="news-email" className="sr-only">
          E-mail
        </label>
        <input
          id="news-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="seu@email.com"
          className="min-h-[44px] flex-1 rounded-full border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
        />
        <button
          type="submit"
          className={`min-h-[44px] rounded-full bg-gold px-6 text-sm font-bold text-ink shadow-md ${t} hover:scale-105`}
        >
          {sent ? "Obrigado!" : "Inscrever"}
        </button>
      </form>
    </div>
  );
}
