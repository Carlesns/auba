import { createFileRoute } from '@tanstack/react-router';
import { AubaLayout } from '@/components/auba/Layout';
import { WaitlistForm } from '@/components/auba/WaitlistForm';
import { useI18n } from '@/lib/i18n';

export const Route = createFileRoute('/manifiesto')({
  head: () => ({
    meta: [
      { title: 'manifiesto — auba' },
      { name: 'description', content: 'Auba hace ropa técnica honesta. Honesta con quien la lleva, con quien la hace, con de dónde vienen los materiales.' },
      { property: 'og:title', content: 'manifiesto — auba' },
      { property: 'og:description', content: 'No vendemos un estilo de vida. Vendemos una decisión de compra.' },
    ],
  }),
  component: () => (
    <AubaLayout>
      <Manifesto />
    </AubaLayout>
  ),
});

function Manifesto() {
  const { t } = useI18n();
  return (
    <section>
      <div className="mx-auto max-w-[900px] px-6 md:px-10 py-12 md:py-20">
        <div className="label-tag">{t.manifesto.title}</div>
        <div className="mt-8 space-y-1">
          {t.manifesto.lines.map((line, i) =>
            line === '' ? (
              <div key={i} className="h-8" />
            ) : (
              <p key={i} className="text-3xl md:text-5xl font-light leading-tight tracking-tight lowercase">
                {line}
              </p>
            )
          )}
        </div>
        <div className="mt-20 max-w-md">
          <WaitlistForm source="manifesto" />
        </div>
      </div>
    </section>
  );
}
