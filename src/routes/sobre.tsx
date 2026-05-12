import { createFileRoute } from '@tanstack/react-router';
import { AubaLayout } from '@/components/auba/Layout';
import { useI18n } from '@/lib/i18n';

export const Route = createFileRoute('/sobre')({
  head: () => ({
    meta: [
      { title: 'sobre auva — barcelona' },
      { name: 'description', content: 'auva significa alba en catalán. Diseñado en Barcelona, fabricado en Catalunya. Una marca con propósito real.' },
      { property: 'og:title', content: 'sobre auva' },
      { property: 'og:description', content: 'Raíz mediterránea. Pronunciación universal. Decisión de compra consciente.' },
    ],
  }),
  component: () => (
    <AubaLayout>
      <About />
    </AubaLayout>
  ),
});

function About() {
  const { t } = useI18n();
  return (
    <section>
      <div className="mx-auto max-w-[1000px] px-6 md:px-10 py-20 md:py-28">
        <div className="label-tag">{t.nav.about}</div>
        <h1 className="mt-4 text-4xl md:text-6xl font-light leading-[1.05]">{t.about.title}</h1>
        <p className="mt-8 text-lg md:text-xl text-graphite/85 font-light leading-relaxed max-w-2xl">{t.about.lead}</p>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-start">
          <div className="aspect-[4/5] bg-moss flex items-end p-8">
            <div className="text-bone">
              <div className="font-mono text-xs opacity-70">{t.about.where}</div>
              <div className="text-3xl font-light lowercase mt-1">mediterráneo</div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="label-tag">{t.about.where}</div>
            {t.about.whereBody && <p className="text-base text-graphite/80 leading-relaxed">{t.about.whereBody}</p>}
            <div className="hairline" />
            <p className="font-mono text-xs uppercase tracking-wider text-stone leading-relaxed">{t.about.legal}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
