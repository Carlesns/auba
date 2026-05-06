import { createFileRoute } from '@tanstack/react-router';
import { AubaLayout } from '@/components/auba/Layout';
import { useI18n } from '@/lib/i18n';

export const Route = createFileRoute('/brand-book')({
  head: () => ({
    meta: [
      { title: 'brand book — auba' },
      { name: 'description', content: 'Manual de identidad de auba: misión, voz, tipografía, paleta, logo y aplicaciones. Versión 1.0.' },
      { property: 'og:title', content: 'brand book — auba' },
      { property: 'og:description', content: 'Manual de identidad v1.0. Tres colores, dos tipografías, una decisión.' },
    ],
  }),
  component: () => (
    <AubaLayout>
      <BrandBook />
    </AubaLayout>
  ),
});

const bb = {
  es: {
    eyebrow: 'manual de identidad · v1.0',
    title: 'brand book',
    lead: 'Documento vivo. Define cómo auba se ve, suena y se comporta. Si tienes que decidir algo y no está aquí, decide a favor de la honestidad.',
    toc: 'índice',
    sections: [
      { id: 'mision', n: '01', label: 'misión' },
      { id: 'manifiesto', n: '02', label: 'manifiesto' },
      { id: 'es-no-es', n: '03', label: 'es / no es' },
      { id: 'logo', n: '04', label: 'logo' },
      { id: 'tipografia', n: '05', label: 'tipografía' },
      { id: 'paleta', n: '06', label: 'paleta' },
      { id: 'voz', n: '07', label: 'voz y tono' },
      { id: 'fotografia', n: '08', label: 'fotografía' },
      { id: 'producto', n: '09', label: 'producto' },
      { id: 'transparencia', n: '10', label: 'transparencia' },
      { id: 'aplicaciones', n: '11', label: 'aplicaciones' },
    ],
    mision: {
      title: 'misión',
      body: 'auba hace ropa técnica honesta para gente que entrena con criterio. Honesta con quien la lleva, con quien la fabrica y con el origen de los materiales.',
      kpis: [
        { k: 'porqué', v: 'la mayoría paga por imagen o se conforma con el mínimo. queremos una tercera opción.' },
        { k: 'para quién', v: 'deportista que decide con criterio y rechaza pagar por lo que no ve.' },
        { k: 'cómo', v: 'función real, origen trazable, precio justo, durabilidad estructural.' },
      ],
    },
    manifiesto: {
      title: 'manifiesto',
      lines: [
        'auba hace ropa técnica honesta.',
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
    esnoes: {
      title: 'es / no es',
      es: ['transparente', 'técnica', 'honesta', 'duradera', 'mediterránea'],
      noes: ['aspiracional', 'ruidosa', 'de temporada', 'de oferta permanente', 'desechable'],
      foot: 'cuando dudes entre dos opciones, elige la columna izquierda.',
    },
    logo: {
      title: 'logo',
      body: 'wordmark "auba" en minúsculas, Outfit Light. Sin símbolo, sin escudo, sin tagline anclado. La marca es el nombre.',
      rules: [
        'siempre en minúsculas. nunca capitalizado.',
        'espacio mínimo alrededor: la altura de la "a".',
        'tamaño mínimo: 16px en pantalla, 8mm en impresión.',
        'monocromo: graphite sobre bone, o bone sobre moss/graphite. nunca moss sobre bone.',
        'no rotar, no inclinar, no añadir efectos, no encerrar en formas.',
      ],
    },
    tipografia: {
      title: 'tipografía',
      pairs: [
        {
          name: 'Outfit',
          role: 'titulares · interfaz',
          weights: '200 / 300 / 400',
          rule: 'siempre en minúsculas. tracking apretado en tamaños grandes.',
        },
        {
          name: 'DM Mono',
          role: 'datos · etiquetas · precios · metadata',
          weights: '300 / 400 / 500',
          rule: 'todo monoespaciado: precios, códigos, fichas técnicas, hora.',
        },
      ],
      hierarchy: [
        { tag: 'h1', use: 'titular página', size: '48–72px / Outfit Light' },
        { tag: 'h2', use: 'sección', size: '32–48px / Outfit Light' },
        { tag: 'h3', use: 'bloque', size: '20–24px / Outfit Light' },
        { tag: 'body', use: 'texto largo', size: '15–18px / Outfit Light' },
        { tag: 'tag', use: 'label · uppercase', size: '11px / DM Mono · letter-spacing 0.15em' },
        { tag: 'data', use: 'precio · ficha', size: '14–16px / DM Mono' },
      ],
    },
    paleta: {
      title: 'paleta',
      intro: 'tres colores. ningún acento secundario. ningún gradiente. la disciplina es la marca.',
      colors: [
        { name: 'bone', hex: '#f4f1ea', oklch: 'oklch(0.957 0.012 85)', use: 'fondo principal · papel · packaging', token: '--bone' },
        { name: 'moss', hex: '#5a6b4a', oklch: 'oklch(0.45 0.04 130)', use: 'acento único · ctas · highlights', token: '--moss' },
        { name: 'graphite', hex: '#1a1a1a', oklch: 'oklch(0.18 0 0)', use: 'texto · estructura · contraste', token: '--graphite' },
      ],
      ratios: 'proporción de uso · 70% bone · 25% graphite · 5% moss. el moss nunca domina.',
    },
    voz: {
      title: 'voz y tono',
      attrs: [
        { k: 'directa', v: 'frases cortas. una idea por frase. sin adornos.' },
        { k: 'concreta', v: 'gramos, euros, kilómetros. nunca "muy", "súper", "premium".' },
        { k: 'humilde', v: 'hablamos del producto, no del usuario que lo lleva.' },
        { k: 'minúscula', v: 'casi todo en minúsculas. mayúscula solo en nombres propios.' },
      ],
      do: [
        'merino zq · 50%',
        'fabricado en braga, portugal',
        'la lana neutraliza el olor',
        '72€ — desglose público',
      ],
      dont: [
        'tecnología revolucionaria',
        'la mejor camiseta del mercado',
        'experiencia premium',
        'desbloquea tu potencial',
      ],
    },
    fotografia: {
      title: 'fotografía',
      principles: [
        'luz natural mediterránea. nunca flash directo.',
        'fondos neutros: bone, hormigón, madera sin tratar, piedra.',
        'producto antes que modelo. cuando hay modelo, sin retoque.',
        'macro de tejido permitido. macro de logo prohibido.',
        'sin aspiracional: nada de azoteas, atardeceres, copas de vino.',
      ],
    },
    producto: {
      title: 'producto',
      lead: 'una sola prenda en lanzamiento. tirada limitada de 400 unidades. fabricada en portugal.',
      specs: [
        ['producto', 'camiseta merino / tencel'],
        ['composición', 'merino zq 50% + tencel lyocell 50%'],
        ['gramaje', '160 g/m²'],
        ['fabricante', 'región de braga, portugal'],
        ['certificación', 'zq · oeko-tex'],
        ['acabado', 'costuras planas · sin etiquetas exteriores'],
        ['tirada', '400 unidades'],
      ],
      pillars: [
        { k: 'anti-olor', v: 'el merino es naturalmente antimicrobiano.' },
        { k: 'duradera', v: 'el tencel aporta resistencia mecánica que el merino puro no tiene.' },
        { k: 'sin químicos', v: 'cero tratamientos, cero microplásticos.' },
        { k: 'trazable', v: 'fabricante público una vez cerrado.' },
      ],
    },
    transparencia: {
      title: 'transparencia',
      body: 'la transparencia no es marketing. es una decisión estructural. publicamos el desglose de costes y el fabricante. si no podemos publicarlo, no lo hacemos.',
      principles: [
        'el desglose se publica antes de la primera venta.',
        'el fabricante se nombra cuando se cierra el contrato.',
        'el margen no son dividendos: cubre estructura e inversión.',
        'cuando algo cambia (precio, fabricante, materiales), se comunica.',
      ],
    },
    aplicaciones: {
      title: 'aplicaciones',
      items: [
        { k: 'web', v: 'fondo bone. estructura tipográfica. animación mínima. sin sliders, sin pop-ups.' },
        { k: 'packaging', v: 'papel sin blanquear. wordmark + ficha técnica + qr al desglose. cero plástico.' },
        { k: 'etiquetado', v: 'etiqueta interior cosida. composición + origen + lavado. sin etiqueta exterior.' },
        { k: 'redes', v: 'instagram. fotografía y datos. cero stories aspiracionales. cero reels coreografiados.' },
        { k: 'email', v: 'texto plano. sin banners, sin gifs. asunto en minúsculas.' },
      ],
    },
    footer: 'manual de identidad v1.0 · barcelona · documento vivo, se actualiza con la marca.',
  },
  en: {
    eyebrow: 'visual identity manual · v1.0',
    title: 'brand book',
    lead: 'A living document. Defines how auba looks, sounds and behaves. When in doubt, decide in favor of honesty.',
    toc: 'contents',
    sections: [
      { id: 'mision', n: '01', label: 'mission' },
      { id: 'manifiesto', n: '02', label: 'manifesto' },
      { id: 'es-no-es', n: '03', label: 'is / is not' },
      { id: 'logo', n: '04', label: 'logo' },
      { id: 'tipografia', n: '05', label: 'typography' },
      { id: 'paleta', n: '06', label: 'palette' },
      { id: 'voz', n: '07', label: 'voice & tone' },
      { id: 'fotografia', n: '08', label: 'photography' },
      { id: 'producto', n: '09', label: 'product' },
      { id: 'transparencia', n: '10', label: 'transparency' },
      { id: 'aplicaciones', n: '11', label: 'applications' },
    ],
    mision: {
      title: 'mission',
      body: 'auba makes honest technical clothing for people who train with criteria. Honest with the wearer, with the maker, and with the origin of the materials.',
      kpis: [
        { k: 'why', v: 'most pay for image or settle for the minimum. we want a third option.' },
        { k: 'for whom', v: 'athletes who decide with criteria and refuse to pay for what they cannot see.' },
        { k: 'how', v: 'real function, traceable origin, fair price, structural durability.' },
      ],
    },
    manifiesto: {
      title: 'manifesto',
      lines: [
        'auba makes honest technical clothing.',
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
    esnoes: {
      title: 'is / is not',
      es: ['transparent', 'technical', 'honest', 'durable', 'mediterranean'],
      noes: ['aspirational', 'loud', 'seasonal', 'permanently on sale', 'disposable'],
      foot: 'when torn between two options, choose the left column.',
    },
    logo: {
      title: 'logo',
      body: '"auba" wordmark in lowercase, Outfit Light. No symbol, no crest, no fixed tagline. The brand is the name.',
      rules: [
        'always lowercase. never capitalized.',
        'minimum clear space around: the height of the "a".',
        'minimum size: 16px on screen, 8mm in print.',
        'monochrome: graphite on bone, or bone on moss/graphite. never moss on bone.',
        'do not rotate, skew, add effects, or enclose in shapes.',
      ],
    },
    tipografia: {
      title: 'typography',
      pairs: [
        {
          name: 'Outfit',
          role: 'headlines · interface',
          weights: '200 / 300 / 400',
          rule: 'always lowercase. tight tracking at large sizes.',
        },
        {
          name: 'DM Mono',
          role: 'data · labels · prices · metadata',
          weights: '300 / 400 / 500',
          rule: 'everything monospaced: prices, codes, specs, time.',
        },
      ],
      hierarchy: [
        { tag: 'h1', use: 'page title', size: '48–72px / Outfit Light' },
        { tag: 'h2', use: 'section', size: '32–48px / Outfit Light' },
        { tag: 'h3', use: 'block', size: '20–24px / Outfit Light' },
        { tag: 'body', use: 'long text', size: '15–18px / Outfit Light' },
        { tag: 'tag', use: 'label · uppercase', size: '11px / DM Mono · letter-spacing 0.15em' },
        { tag: 'data', use: 'price · spec', size: '14–16px / DM Mono' },
      ],
    },
    paleta: {
      title: 'palette',
      intro: 'three colors. no secondary accent. no gradients. discipline is the brand.',
      colors: [
        { name: 'bone', hex: '#f4f1ea', oklch: 'oklch(0.957 0.012 85)', use: 'main background · paper · packaging', token: '--bone' },
        { name: 'moss', hex: '#5a6b4a', oklch: 'oklch(0.45 0.04 130)', use: 'single accent · ctas · highlights', token: '--moss' },
        { name: 'graphite', hex: '#1a1a1a', oklch: 'oklch(0.18 0 0)', use: 'text · structure · contrast', token: '--graphite' },
      ],
      ratios: 'usage ratio · 70% bone · 25% graphite · 5% moss. moss never dominates.',
    },
    voz: {
      title: 'voice & tone',
      attrs: [
        { k: 'direct', v: 'short sentences. one idea per sentence. no adornment.' },
        { k: 'concrete', v: 'grams, euros, kilometers. never "very", "super", "premium".' },
        { k: 'humble', v: 'we talk about the product, not the user wearing it.' },
        { k: 'lowercase', v: 'almost everything in lowercase. capital only for proper nouns.' },
      ],
      do: [
        'merino zq · 50%',
        'made in braga, portugal',
        'wool neutralizes odor',
        '€72 — public breakdown',
      ],
      dont: [
        'revolutionary technology',
        'the best t-shirt on the market',
        'premium experience',
        'unlock your potential',
      ],
    },
    fotografia: {
      title: 'photography',
      principles: [
        'natural mediterranean light. never direct flash.',
        'neutral backgrounds: bone, concrete, untreated wood, stone.',
        'product over model. when there is a model, no retouching.',
        'fabric macro allowed. logo macro forbidden.',
        'no aspirational: no rooftops, no sunsets, no wine glasses.',
      ],
    },
    producto: {
      title: 'product',
      lead: 'one garment at launch. limited run of 400 units. made in portugal.',
      specs: [
        ['product', 'merino / tencel t-shirt'],
        ['composition', 'merino zq 50% + tencel lyocell 50%'],
        ['weight', '160 g/m²'],
        ['maker', 'braga region, portugal'],
        ['certification', 'zq · oeko-tex'],
        ['finish', 'flat seams · no exterior labels'],
        ['run', '400 units'],
      ],
      pillars: [
        { k: 'anti-odor', v: 'merino is naturally antimicrobial.' },
        { k: 'durable', v: 'tencel adds mechanical resistance pure merino lacks.' },
        { k: 'no chemicals', v: 'zero treatments, zero microplastics.' },
        { k: 'traceable', v: 'maker disclosed once contract is signed.' },
      ],
    },
    transparencia: {
      title: 'transparency',
      body: 'transparency is not marketing. it is a structural decision. we publish the cost breakdown and the maker. if we cannot publish it, we do not do it.',
      principles: [
        'the breakdown is published before the first sale.',
        'the maker is named once the contract is signed.',
        'the margin is not dividends: it covers structure and investment.',
        'when something changes (price, maker, materials), we communicate it.',
      ],
    },
    aplicaciones: {
      title: 'applications',
      items: [
        { k: 'web', v: 'bone background. typographic structure. minimal animation. no sliders, no pop-ups.' },
        { k: 'packaging', v: 'unbleached paper. wordmark + spec sheet + qr to breakdown. zero plastic.' },
        { k: 'labeling', v: 'sewn interior label. composition + origin + wash. no exterior label.' },
        { k: 'social', v: 'instagram. photography and data. zero aspirational stories. zero choreographed reels.' },
        { k: 'email', v: 'plain text. no banners, no gifs. lowercase subject line.' },
      ],
    },
    footer: 'visual identity manual v1.0 · barcelona · living document, evolves with the brand.',
  },
} as const;

function BrandBook() {
  const { locale } = useI18n();
  const c = bb[locale];

  return (
    <article>
      {/* HERO */}
      <header className="border-b border-bone-deep">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-16 md:py-24">
          <div className="label-tag">{c.eyebrow}</div>
          <h1 className="mt-4 text-5xl md:text-7xl font-light leading-[0.95]">{c.title}</h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-graphite/80 font-light leading-relaxed">{c.lead}</p>
        </div>
      </header>

      {/* TOC */}
      <nav aria-label={c.toc} className="border-b border-bone-deep bg-bone-deep/30">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-10">
          <div className="label-tag mb-6">{c.toc}</div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            {c.sections.map((s) => (
              <li key={s.id} className="border-b border-bone-deep/70">
                <a href={`#${s.id}`} className="flex items-baseline gap-4 py-2 hover:text-moss transition-colors">
                  <span className="font-mono text-xs text-stone">{s.n}</span>
                  <span className="lowercase">{s.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <div className="mx-auto max-w-[1100px] px-6 md:px-10 divide-y divide-bone-deep">
        {/* 01 MISIÓN */}
        <Section id="mision" n="01" title={c.mision.title}>
          <p className="text-lg md:text-xl text-graphite/85 font-light leading-relaxed max-w-2xl">{c.mision.body}</p>
          <dl className="mt-12 grid md:grid-cols-3 gap-px bg-bone-deep">
            {c.mision.kpis.map((k) => (
              <div key={k.k} className="bg-bone p-6 md:p-8">
                <dt className="label-tag">{k.k}</dt>
                <dd className="mt-3 text-base text-graphite/85 leading-relaxed">{k.v}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* 02 MANIFIESTO */}
        <Section id="manifiesto" n="02" title={c.manifiesto.title}>
          <div className="bg-graphite text-bone p-8 md:p-12 max-w-2xl">
            {c.manifiesto.lines.map((l, i) =>
              l === '' ? (
                <div key={i} className="h-4" />
              ) : (
                <p key={i} className="text-lg md:text-xl font-light leading-relaxed">
                  {l}
                </p>
              ),
            )}
          </div>
        </Section>

        {/* 03 ES / NO ES */}
        <Section id="es-no-es" n="03" title={c.esnoes.title}>
          <div className="grid md:grid-cols-2 gap-px bg-bone-deep">
            <div className="bg-bone p-8">
              <div className="label-tag text-moss">auba {locale === 'es' ? 'es' : 'is'}</div>
              <ul className="mt-6 space-y-3">
                {c.esnoes.es.map((i) => (
                  <li key={i} className="font-mono text-base lowercase border-b border-bone-deep pb-2">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-graphite text-bone p-8">
              <div className="label-tag !text-bone/60">auba {locale === 'es' ? 'no es' : 'is not'}</div>
              <ul className="mt-6 space-y-3">
                {c.esnoes.noes.map((i) => (
                  <li key={i} className="font-mono text-base lowercase border-b border-bone/15 pb-2">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-stone">{c.esnoes.foot}</p>
        </Section>

        {/* 04 LOGO */}
        <Section id="logo" n="04" title={c.logo.title}>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-base text-graphite/85 leading-relaxed max-w-md">{c.logo.body}</p>
              <ul className="mt-8 space-y-3">
                {c.logo.rules.map((r, i) => (
                  <li key={i} className="flex gap-3 text-sm text-graphite/80 leading-relaxed border-b border-bone-deep pb-3">
                    <span className="font-mono text-xs text-stone shrink-0 w-6">0{i + 1}</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <LogoCard variant="bone" />
              <LogoCard variant="graphite" />
              <LogoCard variant="moss" />
            </div>
          </div>
        </Section>

        {/* 05 TIPOGRAFÍA */}
        <Section id="tipografia" n="05" title={c.tipografia.title}>
          <div className="grid md:grid-cols-2 gap-px bg-bone-deep">
            {c.tipografia.pairs.map((p) => (
              <div key={p.name} className="bg-bone p-8">
                <div className="label-tag">{p.role}</div>
                <div
                  className="mt-4 text-6xl md:text-7xl leading-none"
                  style={{ fontFamily: p.name === 'Outfit' ? "'Outfit', sans-serif" : "'DM Mono', monospace" }}
                >
                  {p.name === 'Outfit' ? 'Aa' : 'Aa'}
                </div>
                <div className="mt-6 font-mono text-sm">{p.name}</div>
                <div className="font-mono text-xs text-stone mt-1">{p.weights}</div>
                <p className="mt-4 text-sm text-graphite/75 leading-relaxed">{p.rule}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="label-tag mb-4">{locale === 'es' ? 'jerarquía' : 'hierarchy'}</div>
            <div className="divide-y divide-bone-deep border-y border-bone-deep">
              {c.tipografia.hierarchy.map((h) => (
                <div key={h.tag} className="grid grid-cols-[80px_1fr_auto] gap-4 py-3 items-baseline">
                  <span className="font-mono text-xs uppercase tracking-wider text-stone">{h.tag}</span>
                  <span className="text-sm text-graphite/85">{h.use}</span>
                  <span className="font-mono text-xs text-stone">{h.size}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 06 PALETA */}
        <Section id="paleta" n="06" title={c.paleta.title}>
          <p className="text-base text-graphite/85 leading-relaxed max-w-xl">{c.paleta.intro}</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {c.paleta.colors.map((color) => (
              <div key={color.name} className="space-y-3">
                <div
                  className={`aspect-[4/3] border border-bone-deep ${
                    color.name === 'bone' ? 'bg-bone' : color.name === 'moss' ? 'bg-moss' : 'bg-graphite'
                  }`}
                />
                <div className="flex items-baseline justify-between">
                  <span className="text-lg lowercase">{color.name}</span>
                  <span className="font-mono text-xs text-stone">{color.token}</span>
                </div>
                <div className="font-mono text-xs space-y-1 text-graphite/80">
                  <div>{color.hex}</div>
                  <div className="text-stone">{color.oklch}</div>
                </div>
                <p className="text-sm text-graphite/75 leading-relaxed">{color.use}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 font-mono text-xs uppercase tracking-wider text-stone">{c.paleta.ratios}</p>
          <div className="mt-4 flex h-8 border border-bone-deep">
            <div className="w-[70%] bg-bone border-r border-bone-deep" />
            <div className="w-[25%] bg-graphite" />
            <div className="w-[5%] bg-moss" />
          </div>
        </Section>

        {/* 07 VOZ */}
        <Section id="voz" n="07" title={c.voz.title}>
          <div className="grid md:grid-cols-2 gap-px bg-bone-deep">
            {c.voz.attrs.map((a) => (
              <div key={a.k} className="bg-bone p-6">
                <div className="label-tag text-moss">{a.k}</div>
                <p className="mt-3 text-sm text-graphite/85 leading-relaxed">{a.v}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-px bg-bone-deep">
            <div className="bg-bone p-8">
              <div className="label-tag text-moss">do</div>
              <ul className="mt-4 space-y-2 font-mono text-sm">
                {c.voz.do.map((d) => (
                  <li key={d} className="border-b border-bone-deep pb-2">+ {d}</li>
                ))}
              </ul>
            </div>
            <div className="bg-bone p-8">
              <div className="label-tag text-destructive">don't</div>
              <ul className="mt-4 space-y-2 font-mono text-sm">
                {c.voz.dont.map((d) => (
                  <li key={d} className="border-b border-bone-deep pb-2 line-through text-stone">— {d}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* 08 FOTOGRAFÍA */}
        <Section id="fotografia" n="08" title={c.fotografia.title}>
          <ul className="space-y-3 max-w-2xl">
            {c.fotografia.principles.map((p, i) => (
              <li key={i} className="flex gap-4 text-base text-graphite/85 leading-relaxed border-b border-bone-deep pb-3">
                <span className="font-mono text-xs text-stone shrink-0 w-8 pt-1">0{i + 1}</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* 09 PRODUCTO */}
        <Section id="producto" n="09" title={c.producto.title}>
          <p className="text-lg text-graphite/85 font-light leading-relaxed max-w-2xl">{c.producto.lead}</p>
          <div className="mt-10 grid md:grid-cols-2 gap-12">
            <dl className="divide-y divide-bone-deep border-y border-bone-deep">
              {c.producto.specs.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[140px_1fr] gap-4 py-3">
                  <dt className="label-tag">{k}</dt>
                  <dd className="font-mono text-sm">{v}</dd>
                </div>
              ))}
            </dl>
            <ul className="space-y-4">
              {c.producto.pillars.map((p) => (
                <li key={p.k} className="border-l-2 border-moss pl-4">
                  <div className="text-lg lowercase">{p.k}</div>
                  <p className="mt-1 text-sm text-graphite/75 leading-relaxed">{p.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* 10 TRANSPARENCIA */}
        <Section id="transparencia" n="10" title={c.transparencia.title}>
          <p className="text-lg text-graphite/85 font-light leading-relaxed max-w-2xl">{c.transparencia.body}</p>
          <ol className="mt-10 space-y-4 max-w-2xl">
            {c.transparencia.principles.map((p, i) => (
              <li key={i} className="grid grid-cols-[40px_1fr] gap-4 border-b border-bone-deep pb-3">
                <span className="font-mono text-xs text-stone pt-1">0{i + 1}</span>
                <span className="text-base text-graphite/85 leading-relaxed">{p}</span>
              </li>
            ))}
          </ol>
        </Section>

        {/* 11 APLICACIONES */}
        <Section id="aplicaciones" n="11" title={c.aplicaciones.title}>
          <dl className="divide-y divide-bone-deep border-y border-bone-deep">
            {c.aplicaciones.items.map((it) => (
              <div key={it.k} className="grid md:grid-cols-[160px_1fr] gap-4 py-5">
                <dt className="label-tag">{it.k}</dt>
                <dd className="text-sm text-graphite/85 leading-relaxed max-w-2xl">{it.v}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>

      <footer className="border-t border-bone-deep mt-12">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-12">
          <p className="font-mono text-xs uppercase tracking-wider text-stone">{c.footer}</p>
        </div>
      </footer>
    </article>
  );
}

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 md:py-24 scroll-mt-20">
      <div className="flex items-baseline gap-6 mb-10">
        <span className="font-mono text-xs text-stone">{n}</span>
        <h2 className="text-3xl md:text-5xl font-light lowercase">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function LogoCard({ variant }: { variant: 'bone' | 'graphite' | 'moss' }) {
  const cls =
    variant === 'bone'
      ? 'bg-bone text-graphite border border-bone-deep'
      : variant === 'graphite'
      ? 'bg-graphite text-bone'
      : 'bg-moss text-bone';
  return (
    <div className={`${cls} aspect-[5/2] flex items-center justify-center`}>
      <span className="text-5xl md:text-6xl font-light lowercase tracking-tight">auba</span>
    </div>
  );
}
