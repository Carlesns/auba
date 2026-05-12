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
      hero3: 'el sudor es tuyo. el olor, no.',
      heroBody:
        'Podías pagar poco y conformarte. O pagar mucho por el logo.\nAuva es la tercera opción: función real, origen trazable, precio justo.',
      ctaJoin: 'únete a la lista de espera',
      ctaProduct: 'ver producto',
      pillars: 'cuatro decisiones, no negociables',
      pillarsList: [
        { k: '01', t: 'anti-olor', d1: 'sudas. la prenda no lo recuerda.', d2: 'lana merino: nació en españa, recorrió el mundo, volvió para quedarse. la más fina, la que no huele. sin química.' },
        { k: '02', t: 'diseño que no caduca', d1: 'el buen diseño no caduca.', d2: 'prendas que son bonitas porque están bien hechas, no porque estén de moda.' },
        { k: '03', t: 'sostenibilidad estructural', d1: 'la prenda más sostenible es la que no necesitas reemplazar.', d2: 'fibras certificadas, origen trazable, fabricación honesta.' },
        { k: '04', t: 'honestidad de precio', d1: 'nada que esconder.', d2: 'el precio no es un secreto. lo que pagas, adónde va: tejido, confección, logística, margen. publicado. siempre. porque la honestidad no debería ser una excepción.' },
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
      waitlistTitle: 'algo está naciendo.',
      waitlistBody:
        '400 prendas. un solo correo cuando estén listas. sin ruido. sin spam. solo la noticia cuando llegue.',
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
        'hacemos ropa técnica honesta.',
        'honesta con tu cuerpo.',
        'honesta con quien la cose.',
        'honesta con la tierra de donde vienen los hilos.',
        '',
        'sabemos el nombre del taller.',
        'sabemos lo que cobra.',
        'sabemos de qué campo viene la lana.',
        'y lo publicamos todo.',
        '',
        'no te vendemos un sueño.',
        'te vendemos una prenda.',
        'bien hecha, bien pagada, bien contada.',
        '',
        'eso es auva.',
      ],
    },
    about: {
      title: 'sobre auva',
      lead:
        'auva nació en barcelona. de la convicción de que se puede hacer bien sin esconderlo. de que una prenda puede ser técnica y bonita. honesta y asequible. nuestra y de quien la lleva.',
      closing: 'no somos una gran marca. somos una decisión.',
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
      hero3: 'the sweat is yours. the smell is not.',
      heroBody:
        'You could pay less and settle. Or pay more for the logo. auva is the third option: real function, traceable origin, fair price.',
      ctaJoin: 'join the waitlist',
      ctaProduct: 'see product',
      pillars: 'four non-negotiable decisions',
      pillarsList: [
        { k: '01', t: 'anti-odor', d1: 'you sweat. the garment forgets.', d2: 'merino wool: born in spain, traveled the world, came back to stay. the finest, the one that does not smell. no chemistry.' },
        { k: '02', t: 'timeless design', d1: 'good design does not expire.', d2: 'garments that are beautiful because they are well made, not because they are trending.' },
        { k: '03', t: 'structural sustainability', d1: 'the most sustainable garment is the one you never need to replace.', d2: 'certified fibers, traceable origin, honest manufacturing.' },
        { k: '04', t: 'honest price', d1: 'nothing to hide.', d2: 'the price is not a secret. what you pay, where it goes: fabric, manufacturing, logistics, margin. published. always. because honesty should not be the exception.' },
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
      waitlistTitle: 'something is being born.',
      waitlistBody:
        '400 garments. one email when they are ready. no noise. no spam. just the news when it arrives.',
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
        'we make honest technical clothing.',
        'honest with your body.',
        'honest with the people who sew it.',
        'honest with the land where the fibers come from.',
        '',
        'we know the name of the factory.',
        'we know what they are paid.',
        'we know which fields the wool comes from.',
        'and we publish it all.',
        '',
        'we do not sell a dream.',
        'we sell a garment.',
        'well made, fairly paid, honestly told.',
        '',
        'that is auva.',
      ],
    },
    about: {
      title: 'about auva',
      lead:
        'auva was born in barcelona. from the conviction that things can be done well without hiding it. that a garment can be technical and beautiful. honest and accessible. ours and yours.',
      closing: 'we are not a big brand. we are a decision.',
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
