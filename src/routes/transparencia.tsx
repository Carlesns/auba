import { createFileRoute } from '@tanstack/react-router';
import { AubaLayout } from '@/components/auba/Layout';
import { CostBreakdown } from '@/components/auba/CostBreakdown';
import { useI18n } from '@/lib/i18n';

export const Route = createFileRoute('/transparencia')({
  head: () => ({
    meta: [
      { title: 'transparencia — auba' },
      { name: 'description', content: 'Desglose público del coste de cada prenda Auba: tejido, mano de obra, packaging, logística y margen.' },
      { property: 'og:title', content: 'transparencia radical — auba' },
      { property: 'og:description', content: 'Sabes qué pagas y por qué. Cada euro, justificado.' },
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
    <>
      <section className="border-b border-bone-deep">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10 py-20 md:py-28">
          <div className="label-tag">{t.nav.transparency}</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-light leading-[1.05] max-w-3xl">{t.transparency.title}</h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-graphite/80 font-light leading-relaxed">{t.transparency.lead}</p>
        </div>
      </section>

      <section className="border-b border-bone-deep">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10 py-20">
          <div className="label-tag mb-6">{t.transparency.breakdownTitle}</div>
          <CostBreakdown />
          <p className="mt-8 max-w-2xl text-sm text-graphite/70 leading-relaxed">{t.transparency.footnote}</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1000px] px-6 md:px-10 py-20">
          <div className="label-tag mb-3">{t.transparency.makerTitle}</div>
          <h2 className="text-3xl md:text-4xl font-light max-w-xl">braga · porto · portugal</h2>
          <p className="mt-6 max-w-2xl text-sm md:text-base text-graphite/80 leading-relaxed">{t.transparency.makerBody}</p>
        </div>
      </section>
    </>
  );
}
