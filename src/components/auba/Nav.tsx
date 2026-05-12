import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { useI18n } from '@/lib/i18n';
import { Logo } from './Logo';

export function Nav() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  type Section = { group: string; items: { to: string; label: string }[] };
  const sections: Section[] = [
    {
      group: locale === 'es' ? 'marca' : 'brand',
      items: [
        { to: '/',               label: locale === 'es' ? 'inicio'      : 'home'       },
        { to: '/manifiesto',     label: t.nav.manifesto                                },
        { to: '/sobre',          label: t.nav.about                                    },
        { to: '/producto',       label: t.nav.product                                  },
        { to: '/transparencia',  label: t.nav.transparency                             },
      ],
    },
    {
      group: locale === 'es' ? 'identidad' : 'identity',
      items: [
        { to: '/brand-book',     label: t.nav.brandbook                                },
        { to: '/social-kit',     label: 'social kit'                                   },
        { to: '/pitch',          label: 'pitch deck'                                   },
      ],
    },
    {
      group: locale === 'es' ? 'acceso' : 'access',
      items: [
        { to: '/lista-de-espera', label: t.nav.waitlist                                },
      ],
    },
  ];

  return (
    <>
      {/* Header — always on top */}
      <header className="sticky top-0 z-50 bg-bone/90 backdrop-blur border-b border-bone-deep">
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
            {!open && (
              <Link
                to="/lista-de-espera"
                className="hidden sm:inline-block label-tag bg-graphite text-bone px-3 py-1.5 hover:bg-moss transition-colors"
              >
                {t.nav.waitlist}
              </Link>
            )}
            <button
              type="button"
              className="label-tag hover:text-graphite transition-colors min-w-[3rem] text-right"
              aria-expanded={open}
              aria-label={open ? (locale === 'es' ? 'cerrar menú' : 'close menu') : (locale === 'es' ? 'abrir menú' : 'open menu')}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? '✕' : 'menú'}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay — below header */}
      {open && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 bg-bone flex flex-col overflow-hidden"
          style={{ top: '3.5rem' }}
          role="dialog"
          aria-modal="true"
          aria-label={locale === 'es' ? 'menú de navegación' : 'navigation menu'}
        >
          <nav className="flex-1 overflow-y-auto px-6 md:px-16 py-10 md:py-16">
            <div className="mx-auto max-w-[900px] grid md:grid-cols-3 gap-10 md:gap-16">
              {sections.map((sec) => (
                <div key={sec.group}>
                  <p className="label-tag text-graphite/40 mb-6">{sec.group}</p>
                  <ul className="space-y-4">
                    {sec.items.map((item) => (
                      <li key={item.to}>
                        <a
                          href={item.to}
                          onClick={(e) => { e.preventDefault(); close(); window.location.href = item.to; }}
                          className="block text-2xl md:text-3xl font-light tracking-tight lowercase text-graphite/60 hover:text-graphite transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          <div className="border-t border-bone-deep px-6 md:px-16 py-5 flex items-center justify-between shrink-0">
            <span className="label-tag text-graphite/40">auva · barcelona</span>
            <button
              type="button"
              onClick={close}
              className="label-tag hover:text-graphite transition-colors"
            >
              {locale === 'es' ? 'cerrar' : 'close'} ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
