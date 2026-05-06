import { createContext, useContext } from 'react';

export type Locale = 'es' | 'en';

export const content = {
  es: {
    nav: {
      manifesto: 'manifiesto',
      product: 'producto',
      transparency: 'transparencia',
      about: 'sobre',
      waitlist: 'lista de espera',
    },
    home: {
      tagline: 'ropa técnica honesta',
      city: 'barcelona',
      hero1: 'una camiseta.',
      hero2: 'merino y tencel.',
      hero3: 'sabes quién la cosió.',
      heroBody:
        'Decathlon te da funcional a 15€. Nike te da marca a 90€. Auba te da los dos. Y sabes exactamente de dónde viene cada cosa.',
      ctaJoin: 'únete a la lista de espera',
      ctaProduct: 'ver producto',
      pillars: 'cuatro decisiones, no negociables',
      pillarsList: [
        { k: '01', t: 'anti-olor', d: 'merino certificado, naturalmente antimicrobiano. Sin tratamientos químicos.' },
        { k: '02', t: 'diseño discreto', d: 'funciona dentro y fuera del deporte. Sin logos, sin temporada.' },
        { k: '03', t: 'sostenibilidad estructural', d: 'fibras certificadas ZQ y OEKO-TEX. Producto duradero.' },
        { k: '04', t: 'honestidad de precio', d: 'desglose público de costes. Sabes qué pagas y por qué.' },
      ],
      compareTitle: 'el espacio que ocupa auba',
      compare: [
        { brand: 'decathlon', price: '15–20€', note: 'funcional, sin propósito ni trazabilidad', highlight: false },
        { brand: 'nike / adidas', price: '60–90€', note: 'pagas marca, no producto', highlight: false },
        { brand: 'lululemon', price: '90–120€', note: 'buen producto, precio inaccesible', highlight: false },
        { brand: 'auba', price: '72€', note: 'función + propósito + trazabilidad', highlight: true },
      ],
      isnotTitle: 'lo que auba es y lo que no es nunca',
      is: ['transparente', 'técnica', 'honesta', 'discreta', 'mediterránea'],
      isnot: ['aspiracional', 'ruidosa', 'de temporada', 'con logo', 'en oferta'],
      neverTitle: 'lo que auba nunca hará',
      never: [
        'colaboraciones de pago con atletas',
        'colecciones de temporada',
        'ocultar costes',
        'descuentos agresivos',
        'fotografía aspiracional o lifestyle fabricado',
      ],
      waitlistTitle: 'sé de las primeras en llevarla',
      waitlistBody:
        'Tirada inicial de 400 unidades. Producción en Braga, Portugal. Lanzamiento verano 2026. Sin spam, un solo correo cuando esté lista.',
      priceIsBrand: 'el precio es parte de la marca.',
      viewBreakdown: 'ver desglose completo →',
      isLabel: 'auba es',
      isnotLabel: 'auba no es',
    },
    waitlist: {
      label: 'tu correo',
      placeholder: 'tu@correo.com',
      submit: 'avísame',
      submitting: 'enviando…',
      success: 'estás dentro. te escribiremos cuando la primera tirada esté lista.',
      already: 'ya estabas en la lista.',
      error: 'algo no funcionó. inténtalo de nuevo.',
      invalid: 'correo no válido.',
      counter: (n: number) => `${n.toLocaleString('es')} personas esperan la primera tirada`,
    },
    product: {
      title: 'camiseta merino / tencel',
      subtitle: 'manga corta. unisex. xs–xl.',
      price: '72€',
      tirada: 'tirada inicial 400 u.',
      specsTitle: 'ficha técnica',
      specs: [
        ['composición', 'merino zq 50% + tencel lyocell 50%'],
        ['fabricante', 'braga, portugal'],
        ['certificación', 'zq · oeko-tex'],
        ['gramaje', '160 g/m²'],
        ['acabado', 'costuras planas, sin etiquetas exteriores'],
        ['precio venta', '72€'],
      ],
      whyTitle: 'por qué este blend',
      whyBody:
        'El merino es naturalmente antimicrobiano: no retiene olor aunque sudes. El Tencel aporta frescor y caída. Juntos resuelven anti-olor, comodidad y sostenibilidad sin tratamientos químicos. Manga corta porque lanzamos en verano. La manga larga llegará en año 2.',
    },
    transparency: {
      title: 'transparencia radical',
      lead:
        'Publicamos siempre el desglose completo. No es una promesa de marketing, es una decisión estructural.',
      breakdownTitle: 'desglose por unidad',
      rows: [
        ['tejido (merino zq + tencel)', '11€'],
        ['mano de obra · braga, portugal', '6€'],
        ['packaging · papel sin blanquear', '2€'],
        ['logística y envíos', '3€'],
        ['plataforma y operaciones', '3€'],
        ['margen auba · estructura e inversión', '47€'],
      ],
      total: 'precio venta · 72€',
      footnote:
        'El margen no son dividendos. Cubre fotografía, registro de marca (OEPM/EUIPO), web, administración y la siguiente tirada. En año 2, sin costes de identidad ni desarrollo, parte de ese margen vuelve al producto.',
      makerTitle: 'fabricante',
      makerBody:
        'Región de Braga y Porto, Portugal. Mínimos asumibles, alta calidad textil, experiencia con marcas pequeñas y sostenibles. Estamos validando muestras antes de comprometer la tirada de 400 unidades. Cuando cerremos el fabricante, publicaremos el nombre.',
    },
    manifesto: {
      title: 'manifiesto',
      lines: [
        'auba hace ropa técnica honesta.',
        'honesta con quien la lleva.',
        'honesta con quien la hace.',
        'honesta con de dónde vienen los materiales.',
        '',
        'sabemos quién cosió esta prenda.',
        'sabemos cuánto cobró.',
        'eso es todo lo que necesitas saber antes de comprar.',
        '',
        'no vendemos un estilo de vida.',
        'vendemos una decisión de compra.',
      ],
    },
    about: {
      title: 'sobre auba',
      lead:
        'Auba significa alba en catalán. Inicio, frescor, claridad. Una raíz mediterránea con pronunciación universal.',
      where: 'barcelona',
      whereBody:
        'Diseñado en Barcelona. Fabricado en Portugal. Pensado para urbanitas activos de 30 a 45 años: bici, gym, trabajo, viaje. Una sola camiseta que funciona en los cinco contextos.',
      legal: 'registro oepm clase 25 en curso · cobertura euipo prevista 2026',
    },
    footer: {
      brand: 'auba',
      sub: 'ropa técnica honesta · barcelona',
      legal: 'manual de identidad v1.0',
      lang: 'EN',
    },
  },
  en: {
    nav: {
      manifesto: 'manifesto',
      product: 'product',
      transparency: 'transparency',
      about: 'about',
      waitlist: 'waitlist',
    },
    home: {
      tagline: 'honest technical clothing',
      city: 'barcelona',
      hero1: 'one t-shirt.',
      hero2: 'merino and tencel.',
      hero3: 'you know who sewed it.',
      heroBody:
        'Decathlon gives you function at €15. Nike gives you a brand at €90. Auba gives you both. And you know exactly where every cent goes.',
      ctaJoin: 'join the waitlist',
      ctaProduct: 'see product',
      pillars: 'four non-negotiable decisions',
      pillarsList: [
        { k: '01', t: 'anti-odor', d: 'certified merino, naturally antimicrobial. No chemical treatments.' },
        { k: '02', t: 'discreet design', d: 'works on the bike and in a meeting. No logos, no seasons.' },
        { k: '03', t: 'structural sustainability', d: 'ZQ and OEKO-TEX certified fibers. Built to last.' },
        { k: '04', t: 'honest price', d: 'public cost breakdown. You know what you pay for.' },
      ],
      compareTitle: 'where auba sits',
      compare: [
        { brand: 'decathlon', price: '€15–20', note: 'functional, no purpose, no traceability', highlight: false },
        { brand: 'nike / adidas', price: '€60–90', note: 'you pay for the brand, not the product', highlight: false },
        { brand: 'lululemon', price: '€90–120', note: 'good product, inaccessible price', highlight: false },
        { brand: 'auba', price: '€72', note: 'function + purpose + traceability', highlight: true },
      ],
      isnotTitle: 'what auba is and what it never is',
      is: ['transparent', 'technical', 'honest', 'discreet', 'mediterranean'],
      isnot: ['aspirational', 'loud', 'seasonal', 'logo-heavy', 'on sale'],
      neverTitle: 'what auba will never do',
      never: [
        'paid athlete collaborations',
        'seasonal collections',
        'hidden costs',
        'aggressive discounts',
        'aspirational or fabricated lifestyle photography',
      ],
      waitlistTitle: 'be among the first to wear it',
      waitlistBody:
        'First run of 400 units. Made in Braga, Portugal. Launching summer 2026. No spam, one email when ready.',
    },
    waitlist: {
      label: 'your email',
      placeholder: 'you@email.com',
      submit: 'notify me',
      submitting: 'sending…',
      success: 'you are in. we will write when the first run is ready.',
      already: 'you were already on the list.',
      error: 'something failed. try again.',
      invalid: 'invalid email.',
      counter: (n: number) => `${n.toLocaleString('en')} people are waiting for the first run`,
    },
    product: {
      title: 'merino / tencel t-shirt',
      subtitle: 'short sleeve. unisex. xs–xl.',
      price: '€72',
      tirada: 'first run · 400 u.',
      specsTitle: 'specs',
      specs: [
        ['composition', 'merino zq 50% + tencel lyocell 50%'],
        ['maker', 'braga, portugal'],
        ['certification', 'zq · oeko-tex'],
        ['weight', '160 g/m²'],
        ['finish', 'flat seams, no exterior labels'],
        ['retail price', '€72'],
      ],
      whyTitle: 'why this blend',
      whyBody:
        'Merino is naturally antimicrobial: it does not retain odor even when you sweat. Tencel adds coolness and drape. Together they solve anti-odor, comfort and sustainability with no chemical treatments. Short sleeve because we launch in summer. Long sleeve will arrive in year two.',
    },
    transparency: {
      title: 'radical transparency',
      lead:
        'We always publish the full breakdown. It is not a marketing promise, it is a structural decision.',
      breakdownTitle: 'breakdown per unit',
      rows: [
        ['fabric (merino zq + tencel)', '€11'],
        ['labor · braga, portugal', '€6'],
        ['packaging · unbleached paper', '€2'],
        ['logistics and shipping', '€3'],
        ['platform and operations', '€3'],
        ['auba margin · structure & investment', '€47'],
      ],
      total: 'retail price · €72',
      footnote:
        'The margin is not dividends. It covers photography, trademark registration (OEPM/EUIPO), the website, administration and the next production run. In year two, with no identity or development costs, part of that margin returns to the product.',
      makerTitle: 'maker',
      makerBody:
        'Braga and Porto region, Portugal. Manageable minimums, high textile quality, experience with small sustainable brands. We are validating samples before committing to the 400-unit run. We will publish the maker name once selected.',
    },
    manifesto: {
      title: 'manifesto',
      lines: [
        'auba makes honest technical clothing.',
        'honest with the wearer.',
        'honest with the maker.',
        'honest about where the materials come from.',
        '',
        'we know who sewed this garment.',
        'we know what they were paid.',
        'that is everything you need to know before you buy.',
        '',
        'we do not sell a lifestyle.',
        'we sell a buying decision.',
      ],
    },
    about: {
      title: 'about auba',
      lead:
        'Auba means dawn in Catalan. Beginning, freshness, clarity. A Mediterranean root with universal pronunciation.',
      where: 'barcelona',
      whereBody:
        'Designed in Barcelona. Made in Portugal. Built for active urbanites aged 30–45: bike, gym, work, travel. One t-shirt that works across all five contexts.',
      legal: 'oepm class 25 registration in progress · euipo coverage planned 2026',
    },
    footer: {
      brand: 'auba',
      sub: 'honest technical clothing · barcelona',
      legal: 'visual identity manual v1.0',
      lang: 'ES',
    },
  },
} as const;

export type Bundle = (typeof content)['es'];
export const bundles: Record<Locale, Bundle> = content as unknown as Record<Locale, Bundle>;
export const I18nContext = createContext<{ locale: Locale; t: Bundle; setLocale: (l: Locale) => void }>({
  locale: 'es',
  t: bundles.es,
  setLocale: () => {},
});

export const useI18n = () => useContext(I18nContext);
