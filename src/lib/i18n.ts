import { createContext, useContext } from 'react';

export type Locale = 'es' | 'en';

export const content = {
  es: {
    nav: {
      manifesto: 'manifiesto',
      product: 'producto',
      transparency: 'transparencia',
      brandbook: 'brand book',
      about: 'sobre',
      waitlist: 'lista de espera',
    },
    home: {
      tagline: 'ropa técnica honesta',
      city: 'barcelona',
      hero1: 'ropa honesta.',
      hero2: 'diseñada para quedarse.',
      hero3: 'el sudor habla de tu esfuerzo, el olor se va.',
      heroBody:
        'Podías pagar poco y conformarte. O pagar mucho por el logo.\nAuva es la tercera opción: función real, origen trazable, precio justo.',
      ctaJoin: 'únete a la lista de espera',
      ctaProduct: 'ver producto',
      pillars: 'cuatro decisiones, no negociables',
      pillarsList: [
        { k: '01', t: 'anti-olor', d: 'merino certificado, naturalmente antimicrobiano. Sin tratamientos químicos.' },
        { k: '02', t: 'diseño que no caduca', d: 'pensado para el deporte, sin concesiones estéticas.' },
        { k: '03', t: 'sostenibilidad estructural', d: 'fibras certificadas. Producto duradero.' },
        { k: '04', t: 'trazabilidad pública', d: 'sabes quién hace cada prenda, dónde y con qué materiales.' },
      ],
      compareTitle: 'el espacio que ocupa auva',
      compare: [
        { brand: 'deportivo masivo', price: '', note: 'funcional, sin propósito ni trazabilidad', highlight: false },
        { brand: 'lifestyle deportivo', price: '', note: 'pagas imagen, no producto', highlight: false },
        { brand: 'técnico premium', price: '', note: 'buen producto, marca inaccesible', highlight: false },
        { brand: 'auva', price: '', note: 'función + propósito + trazabilidad', highlight: true },
      ],
      isnotTitle: 'lo que auva es y lo que no es nunca',
      is: ['transparente', 'técnica', 'honesta', 'duradera', 'mediterránea'],
      isnot: ['aspiracional', 'ruidosa', 'de temporada', 'de oferta permanente', 'desechable'],
      neverTitle: '',
      never: [] as string[],
      waitlistTitle: 'sé de los primeros en llevarla',
      waitlistBody:
        'Empezamos por una camiseta. Después vendrán otras prenda. Un solo correo cuando la primera tirada esté lista.',
      priceIsBrand: '',
      viewBreakdown: '',
      isLabel: 'auva es',
      isnotLabel: 'auva no es',
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
        ['fabricante', 'catalunya'],
        ['certificación', 'zq · oeko-tex'],
        ['gramaje', '160 g/m²'],
        ['acabado', 'costuras planas, sin etiquetas exteriores'],
      ],
      whyTitle: 'por qué este blend',
      whyBody:
        'El merino es naturalmente antimicrobiano: la lana neutraliza las bacterias responsables del olor, así que puedes entrenar varias sesiones sin lavar la prenda. El Tencel aporta frescor, caída y una resistencia mecánica que el merino puro no tiene — juntos alargan la vida útil de la camiseta varios años. Cero tratamientos químicos, cero microplásticos. Manga corta porque lanzamos en verano. La manga larga llegará en año 2.',
    },
    transparency: {
      title: 'transparencia radical',
      lead:
        'Publicamos siempre el desglose completo. No es una promesa de marketing, es una decisión estructural.',
      breakdownTitle: 'desglose por unidad',
      rows: [
        ['tejido (merino zq + tencel)', '11€'],
        ['mano de obra · catalunya', '6€'],
        ['packaging · papel sin blanquear', '2€'],
        ['logística y envíos', '3€'],
        ['plataforma y operaciones', '3€'],
        ['margen auva · estructura e inversión', '47€'],
      ],
      total: 'precio venta · 72€',
      footnote:
        'El margen no son dividendos. Cubre fotografía, registro de marca (OEPM/EUIPO), web, administración y la siguiente tirada. En año 2, sin costes de identidad ni desarrollo, parte de ese margen vuelve al producto.',
      makerTitle: 'fabricante',
      makerBody:
        'Catalunya. Mínimos asumibles, alta calidad textil, experiencia con marcas pequeñas y sostenibles. Estamos validando muestras antes de comprometer la tirada de 400 unidades. Cuando cerremos el fabricante, publicaremos el nombre.',
    },
    manifesto: {
      title: 'manifiesto',
      lines: [
        'auva hace ropa técnica honesta.',
        'honesta con quien la lleva.',
        'honesta con quien la hace.',
        'honesta con el origen de los materiales.',
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
      title: 'sobre auva',
      lead:
        'Diseñado en Barcelona. Fabricado en Catalunya. Para quien hace deporte con criterio y no quiere pagar por cosas que no ve.',
      where: 'barcelona',
      whereBody: '',
      legal: 'registro oepm clase 25 en curso · cobertura euipo prevista 2026',
    },
    footer: {
      brand: 'auva',
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
      brandbook: 'brand book',
      about: 'about',
      waitlist: 'waitlist',
    },
    home: {
      tagline: 'honest technical clothing',
      city: 'barcelona',
      hero1: 'honest clothing.',
      hero2: 'built to stay.',
      hero3: 'sweat speaks of effort. the smell doesn\'t.',
      heroBody:
        'You could pay less and settle. Or pay more for the logo. auva is the third option: real function, traceable origin, fair price.',
      ctaJoin: 'join the waitlist',
      ctaProduct: 'see product',
      pillars: 'four non-negotiable decisions',
      pillarsList: [
        { k: '01', t: 'anti-odor', d: 'certified merino, naturally antimicrobial. No chemical treatments.' },
        { k: '02', t: 'timeless design', d: 'built for sport, without aesthetic compromise.' },
        { k: '03', t: 'structural sustainability', d: 'certified fibers. Built to last.' },
        { k: '04', t: 'public traceability', d: 'you know who makes each garment, where and with which materials.' },
      ],
      compareTitle: 'where auva sits',
      compare: [
        { brand: 'mass sport', price: '', note: 'functional, no purpose, no traceability', highlight: false },
        { brand: 'sport lifestyle', price: '', note: 'you pay for image, not product', highlight: false },
        { brand: 'technical premium', price: '', note: 'good product, inaccessible brand', highlight: false },
        { brand: 'auva', price: '', note: 'function + purpose + traceability', highlight: true },
      ],
      isnotTitle: 'what auva is and what it never is',
      is: ['transparent', 'technical', 'honest', 'durable', 'mediterranean'],
      isnot: ['aspirational', 'loud', 'seasonal', 'permanently on sale', 'disposable'],
      neverTitle: '',
      never: [] as string[],
      waitlistTitle: 'be among the first to wear it',
      waitlistBody:
        'We start with a t-shirt. More garments will follow. One email when the first run is ready.',
      priceIsBrand: '',
      viewBreakdown: '',
      isLabel: 'auva is',
      isnotLabel: 'auva is not',
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
        ['maker', 'catalonia'],
        ['certification', 'zq · oeko-tex'],
        ['weight', '160 g/m²'],
        ['finish', 'flat seams, no exterior labels'],
      ],
      whyTitle: 'why this blend',
      whyBody:
        'Merino is naturally antimicrobial: the wool neutralizes the bacteria responsible for odor, so you can train several sessions without washing. Tencel adds coolness, drape and a mechanical resistance pure merino lacks — together they extend the t-shirt lifespan by years. Zero chemical treatments, zero microplastics. Short sleeve because we launch in summer. Long sleeve will arrive in year two.',
    },
    transparency: {
      title: 'radical transparency',
      lead:
        'We always publish the full breakdown. It is not a marketing promise, it is a structural decision.',
      breakdownTitle: 'breakdown per unit',
      rows: [
        ['fabric (merino zq + tencel)', '€11'],
        ['labor · catalonia', '€6'],
        ['packaging · unbleached paper', '€2'],
        ['logistics and shipping', '€3'],
        ['platform and operations', '€3'],
        ['auva margin · structure & investment', '€47'],
      ],
      total: 'retail price · €72',
      footnote:
        'The margin is not dividends. It covers photography, trademark registration (OEPM/EUIPO), the website, administration and the next production run. In year two, with no identity or development costs, part of that margin returns to the product.',
      makerTitle: 'maker',
      makerBody:
        'Catalonia. Manageable minimums, high textile quality, experience with small sustainable brands. We are validating samples before committing to the 400-unit run. We will publish the maker name once selected.',
    },
    manifesto: {
      title: 'manifesto',
      lines: [
        'auva makes honest technical clothing.',
        'honest with the wearer.',
        'honest with the maker.',
        'honest about the origin of the materials.',
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
      title: 'about auva',
      lead:
        'Designed in Barcelona. Made in Catalonia. For those who train with criteria and refuse to pay for things they cannot see.',
      where: 'barcelona',
      whereBody: '',
      legal: 'oepm class 25 registration in progress · euipo coverage planned 2026',
    },
    footer: {
      brand: 'auva',
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
