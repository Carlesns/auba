import { createFileRoute, Link } from '@tanstack/react-router';
import { AubaLayout } from '@/components/auba/Layout';
import { WaitlistForm } from '@/components/auba/WaitlistForm';
import { CostBreakdown } from '@/components/auba/CostBreakdown';
import { useI18n } from '@/lib/i18n';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'auba — ropa técnica honesta · barcelona' },
      { name: 'description', content: 'Una camiseta merino/tencel a 72€. Fabricada en Portugal. Desglose público de costes. Únete a la lista de espera.' },
      { property: 'og:title', content: 'auba — ropa técnica honesta' },
      { property: 'og:description', content: 'Ropa honesta. Hecha para sudar y no oler. Dura porque debe durar.' },
    ],
  }),
  component: () => (
    <AubaLayout>
      <Home />
    </AubaLayout>
  ),
});

function Home() {
  const { t } = useI18n();
  return (
    <>
      {/* HERO */}
      <section className="border-b border-bone-deep">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-32 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7 space-y-6">
            <div className="label-tag">{t.home.tagline} · {t.home.city}</div>
            <h1 className="text-5xl md:text-7xl font-light leading-[0.95] tracking-tight">
              {t.home.hero1}<br />
              {t.home.hero2}<br />
              <span className="text-moss">{t.home.hero3}</span>
            </h1>
            <p className="max-w-xl text-base md:text-lg text-graphite/80 font-light leading-relaxed">
              {t.home.heroBody}
            </p>
          </div>
          <div className="md:col-span-5 space-y-6">
            <div className="aspect-[4/5] bg-moss relative overflow-hidden">
              <div className="absolute inset-0 flex items-end p-6">
                <div className="text-bone">
                  <div className="font-mono text-xs opacity-70">camiseta merino / tencel · 72€</div>
                  <div className="text-3xl font-light lowercase mt-1">auba</div>
                </div>
              </div>
              <div className="absolute top-6 right-6 label-tag !text-bone/60">{t.product.tirada}</div>
            </div>
            <WaitlistForm source="home-hero" />
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="border-b border-bone-deep">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20">
          <h2 className="text-3xl md:text-5xl font-light max-w-2xl mb-12">{t.home.compareTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone-deep">
            {t.home.compare.map((c) => (
              <div
                key={c.brand}
                className={`p-8 ${c.highlight ? 'bg-graphite text-bone' : 'bg-bone'}`}
              >
                <div className={`label-tag ${c.highlight ? '!text-bone/60' : ''}`}>{c.brand}</div>
                <div className={`mt-6 text-sm leading-relaxed ${c.highlight ? 'text-bone/80' : 'text-graphite/70'}`}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-b border-bone-deep">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20">
          <h2 className="text-3xl md:text-5xl font-light max-w-2xl mb-12">{t.home.pillars}</h2>
          <div className="grid md:grid-cols-2 gap-px bg-bone-deep">
            {t.home.pillarsList.map((p) => (
              <div key={p.k} className="bg-bone p-8 md:p-10">
                <div className="font-mono text-sm text-stone">{p.k}</div>
                <div className="mt-3 text-2xl font-light lowercase">{p.t}</div>
                <p className="mt-3 text-sm text-graphite/75 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST BREAKDOWN PREVIEW */}
      <section className="border-b border-bone-deep bg-bone-deep/30">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="label-tag">{t.transparency.title}</div>
            <h2 className="text-3xl md:text-5xl font-light mt-3 max-w-md">{t.home.priceIsBrand}</h2>
            <p className="mt-6 text-sm text-graphite/75 leading-relaxed max-w-md">{t.transparency.lead}</p>
            <Link to="/transparencia" className="inline-block mt-8 label-tag border-b border-graphite hover:text-moss hover:border-moss">
              {t.home.viewBreakdown}
            </Link>
          </div>
          <CostBreakdown />
        </div>
      </section>

      {/* IS / IS NOT */}
      <section className="border-b border-bone-deep">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20">
          <h2 className="text-3xl md:text-5xl font-light max-w-3xl mb-12">{t.home.isnotTitle}</h2>
          <div className="grid md:grid-cols-2 gap-px bg-bone-deep">
            <div className="bg-bone p-8 md:p-10">
              <div className="label-tag text-moss">{t.home.isLabel}</div>
              <ul className="mt-6 space-y-3">
                {t.home.is.map((i) => (
                  <li key={i} className="font-mono text-base lowercase border-b border-bone-deep pb-2">{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-graphite text-bone p-8 md:p-10">
              <div className="label-tag !text-bone/60">{t.home.isnotLabel}</div>
              <ul className="mt-6 space-y-3">
                {t.home.isnot.map((i) => (
                  <li key={i} className="font-mono text-base lowercase border-b border-bone/15 pb-2">{i}</li>
                ))}
              </ul>
            </div>
          </div>

          {t.home.never.length > 0 && (
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="label-tag">{t.home.neverTitle}</div>
              </div>
              <ul className="md:col-span-2 space-y-2">
                {t.home.never.map((n) => (
                  <li key={n} className="font-mono text-sm py-3 border-b border-bone-deep">— {n}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* WAITLIST */}
      <section className="bg-moss text-bone">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12">
          <div>
            <div className="label-tag !text-bone/60">{t.nav.waitlist}</div>
            <h2 className="mt-3 text-4xl md:text-6xl font-light leading-tight">{t.home.waitlistTitle}</h2>
          </div>
          <div className="space-y-6">
            <p className="text-base md:text-lg text-bone/85 font-light leading-relaxed">{t.home.waitlistBody}</p>
            <div className="bg-bone text-graphite p-6">
              <WaitlistForm source="home-bottom" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
