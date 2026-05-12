import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { useI18n } from '@/lib/i18n';
import { Logo } from './Logo';

export function Nav() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  const sections = [
    {
      group: locale === 'es' ? 'marca' : 'brand',
      items: [
        { to: '/',            label: locale === 'es' ? 'inicio'       : 'home'         },
        { to: '/manifiesto',  label: t.nav.manifesto                                   },
        { to: '/sobre',       label: t.nav.about                                       },
        { to: '/producto',    label: t.nav.product                                     },
        { to: '/transparencia', label: t.nav.transparency                              },
      ],
    },
    {
      group: locale === 'es' ? 'identidad' : 'identity',
      items: [
        { to: '/brand-book',  label: t.nav.brandbook                                   },
        { to: '/social-kit',  label: locale === 'es' ? 'social kit'  : 'social kit'   },
        { to: '/pitch',       label: locale === 'es' ? 'pitch deck'  : 'pitch deck'   },
      ],
    },
    {
      group: locale === 'es' ? 'acceso' : 'access',
      items: [
        { to: '/lista-de-espera', label: t.nav.waitlist                                },
      ],
    },
  ] as const;

  return (
    <>
      <header className="sticky top-0 z-40 bg-bone/85 backdrop-blur supports-[backdrop-filter]:bg-bone/70 border-b border-bone-deep">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="auva — home" onClick={close}>
            <Logo className="h-5 w-auto text-graphite" />
          </Link>

          <div className="flex items-center gap-4">
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
              onClick={close}
            >
              {t.nav.waitlist}
            </Link>
            <button
              type="button"
              className="label-tag hover:text-graphite transition-colors w-10 text-right"
              aria-expanded={open}
              aria-controls="full-nav"
              aria-label={open ? 'cerrar menú' : 'abrir menú'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? '×' : 'menú'}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      {open && (
        <div
          id="full-nav"
          className="fixed inset-0 z-30 bg-bone flex flex-col"
          style={{ paddingTop: '3.5rem' /* header height */ }}
        >
          <nav
            aria-label="all sections"
            className="flex-1 overflow-y-auto px-6 md:px-16 py-12 md:py-16"
          >
            <div className="mx-auto max-w-[900px] grid md:grid-cols-3 gap-12 md:gap-16">
              {sections.map((sec) => (
                <div key={sec.group}>
                  <p className="label-tag text-graphite/40 mb-6">{sec.group}</p>
                  <ul className="space-y-4">
                    {sec.items.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          onClick={close}
                          activeProps={{ className: 'text-graphite' }}
                          className="block text-2xl md:text-3xl font-light tracking-tight lowercase text-graphite/60 hover:text-graphite transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* Bottom strip */}
          <div className="border-t border-bone-deep px-6 md:px-16 py-5 flex items-center justify-between">
            <span className="label-tag text-graphite/40">auva · barcelona</span>
            <button
              type="button"
              onClick={close}
              className="label-tag hover:text-graphite transition-colors"
            >
              {locale === 'es' ? 'cerrar' : 'close'} ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
