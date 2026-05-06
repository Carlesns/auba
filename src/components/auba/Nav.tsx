import { Link } from '@tanstack/react-router';
import { useI18n } from '@/lib/i18n';

export function Nav() {
  const { t, locale, setLocale } = useI18n();
  return (
    <header className="sticky top-0 z-40 bg-bone/85 backdrop-blur supports-[backdrop-filter]:bg-bone/70 border-b border-bone-deep">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 h-14 flex items-center justify-between">
        <Link to="/" className="text-xl font-light tracking-tight lowercase">
          auba
        </Link>
        <nav className="hidden md:flex items-center gap-8 label-tag">
          <Link to="/manifiesto" activeProps={{ className: 'text-graphite' }} className="hover:text-graphite transition-colors">
            {t.nav.manifesto}
          </Link>
          <Link to="/producto" activeProps={{ className: 'text-graphite' }} className="hover:text-graphite transition-colors">
            {t.nav.product}
          </Link>
          <Link to="/transparencia" activeProps={{ className: 'text-graphite' }} className="hover:text-graphite transition-colors">
            {t.nav.transparency}
          </Link>
          <Link to="/sobre" activeProps={{ className: 'text-graphite' }} className="hover:text-graphite transition-colors">
            {t.nav.about}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
            className="label-tag hover:text-graphite transition-colors"
            aria-label="toggle language"
          >
            {locale === 'es' ? 'en' : 'es'}
          </button>
          <Link
            to="/lista-de-espera"
            className="label-tag bg-graphite text-bone px-3 py-1.5 hover:bg-moss transition-colors"
          >
            {t.nav.waitlist}
          </Link>
        </div>
      </div>
    </header>
  );
}
