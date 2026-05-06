import { createFileRoute } from '@tanstack/react-router';
import { AubaLayout } from '@/components/auba/Layout';
import { WaitlistForm } from '@/components/auba/WaitlistForm';
import { useI18n } from '@/lib/i18n';

export const Route = createFileRoute('/lista-de-espera')({
  head: () => ({
    meta: [
      { title: 'lista de espera — auba' },
      { name: 'description', content: 'Sé de las primeras en llevar la camiseta auba. Tirada inicial de 400 unidades. Un solo correo cuando esté lista.' },
      { property: 'og:title', content: 'únete a la lista de espera — auba' },
      { property: 'og:description', content: 'Sin spam, sin descuentos. Solo un aviso cuando la primera tirada esté lista.' },
    ],
  }),
  component: () => (
    <AubaLayout>
      <Waitlist />
    </AubaLayout>
  ),
});

function Waitlist() {
  const { t } = useI18n();
  return (
    <section className="bg-moss text-bone min-h-[80vh] flex items-center">
      <div className="mx-auto max-w-[900px] w-full px-6 md:px-10 py-20">
        <div className="label-tag !text-bone/60">{t.nav.waitlist}</div>
        <h1 className="mt-4 text-4xl md:text-6xl font-light leading-[1.05]">{t.home.waitlistTitle}</h1>
        <p className="mt-6 max-w-xl text-base md:text-lg text-bone/85 font-light leading-relaxed">{t.home.waitlistBody}</p>
        <div className="mt-10 bg-bone text-graphite p-6 md:p-8 max-w-xl">
          <WaitlistForm source="dedicated" variant="block" />
        </div>
      </div>
    </section>
  );
}
