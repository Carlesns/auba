import { useState, type ReactNode, useMemo, useEffect } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { I18nContext, bundles, type Locale } from '@/lib/i18n';

export function AubaLayout({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('auva-locale') as Locale | null;
      if (saved === 'es' || saved === 'en') setLocaleState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem('auva-locale', l); } catch {}
  };

  const value = useMemo(() => ({ locale, t: bundles[locale], setLocale }), [locale]);
  return (
    <I18nContext.Provider value={value}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-graphite focus:text-bone focus:px-3 focus:py-2 label-tag"
      >
        skip to content
      </a>
      <div className="min-h-screen flex flex-col bg-bone text-graphite">
        <Nav />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </div>
    </I18nContext.Provider>
  );
}
