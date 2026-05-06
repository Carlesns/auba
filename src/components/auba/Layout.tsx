import { useState, type ReactNode, useMemo } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { I18nContext, content, type Locale } from '@/lib/i18n';

export function AubaLayout({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es');
  const value = useMemo(() => ({ locale, t: content[locale], setLocale }), [locale]);
  return (
    <I18nContext.Provider value={value}>
      <div className="min-h-screen flex flex-col bg-bone text-graphite">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </I18nContext.Provider>
  );
}
