import { createFileRoute } from '@tanstack/react-router';
import { AubaLayout } from '@/components/auba/Layout';
import { WaitlistForm } from '@/components/auba/WaitlistForm';
import { Logo } from '@/components/auba/Logo';
import { useI18n } from '@/lib/i18n';

export const Route = createFileRoute('/producto')({
  head: () => ({
    meta: [
      { title: 'camiseta merino/tencel · 72€ — auba' },
      { name: 'description', content: 'Camiseta técnica manga corta. Merino ZQ + Tencel Lyocell. Fabricada en Braga, Portugal. 72€ con desglose público de costes.' },
      { property: 'og:title', content: 'camiseta merino/tencel · 72€' },
      { property: 'og:description', content: 'Anti-olor, técnica, duradera. Tirada inicial de 400 unidades.' },
    ],
  }),
  component: () => (
    <AubaLayout>
      <Product />
    </AubaLayout>
  ),
});

function Product() {
  const { t } = useI18n();
  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-moss flex items-end p-8">
            <div className="text-bone">
              <div className="text-4xl font-light lowercase">auba</div>
              <div className="font-mono text-xs mt-2 opacity-70">producto piloto · merino zq + tencel</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square bg-graphite" />
            <div className="aspect-square bg-bone-deep" />
            <div className="aspect-square bg-moss/40" />
          </div>
        </div>
        <div>
          <div className="label-tag">{t.nav.product}</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-light lowercase">{t.product.title}</h1>
          <p className="mt-3 text-graphite/70">{t.product.subtitle}</p>
          <div className="mt-8">
            <div className="label-tag">{t.product.tirada}</div>
          </div>

          <div className="mt-10">
            <div className="label-tag mb-3">{t.product.specsTitle}</div>
            <dl className="border-t border-bone-deep">
              {t.product.specs.map(([k, v]) => (
                <div key={k} className="grid grid-cols-1 sm:grid-cols-[140px_1fr] py-3 border-b border-bone-deep gap-1 sm:gap-4">
                  <dt className="font-mono text-xs uppercase tracking-wider text-stone">{k}</dt>
                  <dd className="font-mono text-sm">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <div className="label-tag mb-3">{t.product.whyTitle}</div>
            <p className="text-sm leading-relaxed text-graphite/80">{t.product.whyBody}</p>
          </div>

          <div className="mt-10">
            <WaitlistForm source="product" />
          </div>
        </div>
      </div>

    </section>
  );
}
