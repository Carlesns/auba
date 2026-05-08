import { Link } from '@tanstack/react-router';
import { useI18n } from '@/lib/i18n';

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-graphite text-bone mt-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-3xl font-light lowercase">{t.footer.brand}</div>
          <p className="mt-2 label-tag !text-stone">{t.footer.sub}</p>
        </div>
        <div className="space-y-2 label-tag !text-stone">
          <div><Link to="/manifiesto" className="hover:text-bone">{t.nav.manifesto}</Link></div>
          <div><Link to="/producto" className="hover:text-bone">{t.nav.product}</Link></div>
          <div><Link to="/brand-book" className="hover:text-bone">{t.nav.brandbook}</Link></div>
          <div><Link to="/sobre" className="hover:text-bone">{t.nav.about}</Link></div>
        </div>
        <div className="space-y-2 label-tag !text-stone">
          <div>auba © {year}</div>
          <div>barcelona</div>
          <div>{t.footer.legal}</div>
        </div>
      </div>
    </footer>
  );
}
