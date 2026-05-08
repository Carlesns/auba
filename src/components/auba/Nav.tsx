import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { useI18n } from '@/lib/i18n';
import { Logo } from './Logo';

export function Nav() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/manifiesto', label: t.nav.manifesto },
    { to: '/producto', label: t.nav.product },
    { to: '/brand-book', label: t.nav.brandbook },
    { to: '/sobre', label: t.nav.about },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-bone/85 backdrop-blur supports-[backdrop-filter]:bg-bone/70 border-b border-bone-deep">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="auba — home">
          <Logo className="h-5 w-auto text-graphite" />
        </Link>
        <nav aria-label="primary" className="hidden md:flex items-center gap-8 label-tag">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: 'text-graphite', 'aria-current': 'page' }}
              className="hover:text-graphite transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
            className="label-tag hover:text-graphite transition-colors"
            aria-label={locale === 'es' ? 'switch to english' : 'cambiar a español'}
          >
            {locale === 'es' ? 'en' : 'es'}
          </button>
          <Link
            to="/lista-de-espera"
            className="hidden sm:inline-block label-tag bg-graphite text-bone px-3 py-1.5 hover:bg-moss transition-colors"
          >
            {t.nav.waitlist}
          </Link>
          <button
            type="button"
            className="md:hidden label-tag"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'close menu' : 'open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '×' : 'menu'}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="mobile"
          className="md:hidden border-t border-bone-deep bg-bone"
        >
          <ul className="px-6 py-4 space-y-3 label-tag">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: 'text-graphite', 'aria-current': 'page' }}
                  className="block py-1 hover:text-graphite"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/lista-de-espera"
                onClick={() => setOpen(false)}
                className="inline-block bg-graphite text-bone px-3 py-1.5"
              >
                {t.nav.waitlist}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
