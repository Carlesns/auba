import { createFileRoute } from '@tanstack/react-router';
import { AubaLayout } from '@/components/auba/Layout';
import { useI18n } from '@/lib/i18n';

export const Route = createFileRoute('/transparencia')({
  head: () => ({
    meta: [
      { title: 'transparencia — auva' },
      { name: 'description', content: 'Desglose público de costes. Sabemos quién lo hace, dónde y cuánto cobra. Siempre.' },
    ],
  }),
  component: () => (
    <AubaLayout>
      <Transparency />
    </AubaLayout>
  ),
});

function Transparency() {
  const { t } = useI18n();
  return (
    <section>
      <div className="mx-auto max-w-[900px] px-6 md:px-10 py-20 md:py-28">
        <div className="label-tag">{t.nav.transparency}</div>
        <h1 className="mt-4 text-4xl md:text-6xl font-light leading-[1.05]">{t.transparency.title}</h1>
        <p className="mt-6 text-lg text-graphite/80 font-light leading-relaxed max-w-2xl">{t.transparency.lead}</p>

        {/* DESGLOSE */}
        <div className="mt-16">
          <div className="label-tag mb-4">{t.transparency.breakdownTitle}</div>
          <dl className="border-t border-bone-deep">
            {t.transparency.rows.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[1fr_80px] py-4 border-b border-bone-deep items-baseline">
                <dt className="font-mono text-sm text-graphite/80">{k}</dt>
                <dd className="font-mono text-sm text-right">{v}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[1fr_80px] py-4 items-baseline">
              <dt className="font-mono text-sm font-medium">{t.transparency.total}</dt>
              <dd />
            </div>
          </dl>
          <p className="mt-6 text-sm text-graphite/60 leading-relaxed max-w-xl">{t.transparency.footnote}</p>
        </div>

        {/* FRASE SOSTENIBILIDAD */}
        <div className="my-20 text-center">
          <p className="text-2xl md:text-3xl font-light text-graphite leading-relaxed italic max-w-2xl mx-auto">
            "{t.home.pillarsList[2].d1}"
          </p>
        </div>

        {/* FABRICANTE */}
        <div className="border-t border-bone-deep pt-12">
          <div className="label-tag mb-4">{t.transparency.makerTitle}</div>
          <p className="text-base text-graphite/80 font-light leading-relaxed max-w-2xl">{t.transparency.makerBody}</p>
        </div>
      </div>
    </section>
  );
}
