import { Link } from '@tanstack/react-router';
import { useI18n } from '@/lib/i18n';
import { Logo } from './Logo';

const BONE = '#f4f1ea';
const GRAPHITE = '#1a1a1a';
const STONE = '#9a9488';
const BORDER = '#e4e0d8';

// Native DOM script — works with or without React hydration
const MENU_SCRIPT = `(function(){
  function init(){
    var btn=document.getElementById('nav-menu-btn');
    var overlay=document.getElementById('nav-menu-overlay');
    var wl=document.getElementById('nav-waitlist-btn');
    if(!btn||!overlay)return;
    function open(){
      overlay.style.display='flex';
      btn.textContent='✕';
      btn.setAttribute('aria-expanded','true');
      document.body.style.overflow='hidden';
      if(wl)wl.style.display='none';
    }
    function close(){
      overlay.style.display='none';
      btn.textContent='menú';
      btn.setAttribute('aria-expanded','false');
      document.body.style.overflow='';
      if(wl)wl.style.display='';
    }
    btn.addEventListener('click',function(){
      overlay.style.display==='flex'?close():open();
    });
    overlay.querySelectorAll('a,button[data-close]').forEach(function(el){
      el.addEventListener('click',close);
    });
  }
  document.readyState==='loading'
    ?document.addEventListener('DOMContentLoaded',init)
    :init();
})();`;

export function Nav() {
  const { t, locale, setLocale } = useI18n();

  type Section = { group: string; items: { to: string; label: string }[] };
  const sections: Section[] = [
    {
      group: locale === 'es' ? 'marca' : 'brand',
      items: [
        { to: '/',                label: locale === 'es' ? 'inicio'     : 'home'       },
        { to: '/manifiesto',      label: t.nav.manifesto                               },
        { to: '/sobre',           label: t.nav.about                                   },
        { to: '/producto',        label: t.nav.product                                 },
        { to: '/transparencia',   label: t.nav.transparency                            },
      ],
    },
    {
      group: locale === 'es' ? 'identidad' : 'identity',
      items: [
        { to: '/brand-book',      label: t.nav.brandbook                               },
        { to: '/social-kit',      label: 'social kit'                                  },
        { to: '/pitch',           label: 'pitch deck'                                  },
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
      {/* ── Header ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 1000,
        background: BONE, borderBottom: `1px solid ${BORDER}`,
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 24px',
          height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link to="/" aria-label="auva — home" style={{ display: 'flex', alignItems: 'center' }}>
            <Logo className="h-5 w-auto text-graphite" />
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button
              type="button"
              onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
              style={{ fontFamily: 'inherit', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer', color: STONE, padding: '4px 0' }}
              aria-label={locale === 'es' ? 'switch to english' : 'cambiar a español'}
            >
              {locale === 'es' ? 'en' : 'es'}
            </button>

            <a
              id="nav-waitlist-btn"
              href="/lista-de-espera"
              className="hidden sm:inline-block"
              style={{ fontFamily: 'inherit', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', background: GRAPHITE, color: BONE, padding: '6px 12px', textDecoration: 'none' }}
            >
              {t.nav.waitlist}
            </a>

            {/* Menu toggle — toggled via native script, not React state */}
            <button
              id="nav-menu-btn"
              type="button"
              style={{ fontFamily: 'inherit', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer', color: GRAPHITE, padding: '4px 0', minWidth: 40, textAlign: 'right' }}
              aria-expanded="false"
              aria-label="abrir menú"
            >
              menú
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen overlay ── hidden by default, toggled by script */}
      <div
        id="nav-menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label={locale === 'es' ? 'menú de navegación' : 'navigation menu'}
        style={{
          display: 'none',
          flexDirection: 'column',
          position: 'fixed',
          top: 56,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          background: BONE,
          overflowY: 'auto',
        }}
      >
        {/* Links grid */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '48px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px 48px' }}>
            {sections.map((sec) => (
              <div key={sec.group}>
                <p style={{ fontFamily: 'inherit', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: STONE, marginBottom: 24 }}>
                  {sec.group}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {sec.items.map((item) => (
                    <li key={item.to}>
                      <a
                        href={item.to}
                        style={{ display: 'block', fontFamily: 'inherit', fontSize: 28, fontWeight: 300, letterSpacing: '-0.02em', textTransform: 'lowercase', color: GRAPHITE, textDecoration: 'none', opacity: 0.55 }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '0.55')}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer strip */}
        <div style={{ borderTop: `1px solid ${BORDER}`, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <span style={{ fontFamily: 'inherit', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: STONE }}>
            auva · barcelona
          </span>
          <button
            type="button"
            data-close="true"
            style={{ fontFamily: 'inherit', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer', color: STONE }}
          >
            {locale === 'es' ? 'cerrar' : 'close'} ✕
          </button>
        </div>
      </div>

      {/* Native script — runs immediately, no React dependency */}
      <script dangerouslySetInnerHTML={{ __html: MENU_SCRIPT }} />
    </>
  );
}
