/** Dados oficiais Mega Pizza Andirá */
export const SITE = {
  nome: "Mega Pizza Andirá",
  slogan: "A Maior Pizza da Região",
  endereco: "Av. Goiás, 1294 - Centro, Andirá - PR, 86380-000",
  telefoneDisplay: "(43) 99603-7562",
  telefoneE164: "+5543996037562",
  whatsappDigits: "5543996037562",
  horarios: "Qua–Dom, 18:00–23:55",
  instagramHandle: "pizzariamegapizza_andira",
  instagramUrl: "https://www.instagram.com/pizzariamegapizza_andira/",
  facebookUrl: "https://www.facebook.com/search/top?q=MEGA%20PIZZA%20Andir%C3%A1",
  email: "contato@megapizzaandira.com.br",
  /** Pedidos online (Anota AI), canal usado pela loja */
  pedidoUrl: "https://pedido.anota.ai/loja/mega-pizza-andira?f=msa",
} as const;

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${SITE.whatsappDigits}`;
  if (!text?.trim()) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
