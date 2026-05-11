import { createFileRoute } from '@tanstack/react-router';
import { Logo } from '@/components/auba/Logo';

export const Route = createFileRoute('/social-kit')({
  head: () => ({
    meta: [{ title: 'social kit — auva' }],
  }),
  component: SocialKit,
});

function SocialKit() {
  return (
    <div className="bg-stone/20 min-h-screen py-16 px-6">
      <div className="max-w-[600px] mx-auto space-y-2 mb-16">
        <div className="font-mono text-xs uppercase tracking-widest text-stone">auva · social kit</div>
        <h1 className="text-3xl font-light">piezas para redes sociales</h1>
        <p className="text-sm text-graphite/60 font-mono">
          haz captura de pantalla de cada tarjeta. instagram: 1:1 · stories: 9:16
        </p>
      </div>

      <div className="max-w-[600px] mx-auto space-y-24">

        {/* 01 HERO */}
        <Card id="01" label="ig · hero · fondo moss">
          <div className="w-full aspect-square bg-moss flex flex-col items-center justify-center p-12 relative">
            <Logo className="w-2/3 text-bone" strokeWidth={10} />
            <div className="mt-10 text-center text-bone font-light">
              <p className="text-2xl">ropa técnica honesta.</p>
              <p className="text-2xl">barcelona.</p>
            </div>
          </div>
        </Card>

        {/* 02 MANIFIESTO */}
        <Card id="02" label="ig · manifiesto · fondo bone">
          <div className="w-full aspect-square bg-[#f4f1ea] flex flex-col justify-between p-12">
            <div className="font-mono text-xs text-moss tracking-widest uppercase">manifiesto</div>
            <div className="space-y-4">
              <p className="text-3xl font-bold text-graphite leading-tight">auva hace ropa<br />técnica honesta.</p>
              <p className="text-3xl font-bold text-graphite leading-tight">honesta con quien<br />la lleva.</p>
              <p className="text-3xl font-bold text-graphite leading-tight">honesta con quien<br />la hace.</p>
            </div>
            <div className="font-mono text-sm text-stone">— auva</div>
          </div>
        </Card>

        {/* 03 PILLARS */}
        <Card id="03" label="ig · pilares · fondo bone">
          <div className="w-full aspect-square bg-[#f4f1ea] flex flex-col justify-between p-12">
            <div className="font-mono text-xs text-moss tracking-widest uppercase leading-relaxed">
              cuatro decisiones<br />no negociables
            </div>
            <div className="space-y-6">
              {[
                { n: '01', t: 'anti-olor', d: 'merino certificado, naturalmente antimicrobiano.' },
                { n: '02', t: 'diseño que no caduca', d: 'pensado para el deporte, sin concesiones estéticas.' },
                { n: '03', t: 'sostenibilidad', d: 'fibras certificadas. producto duradero.' },
                { n: '04', t: 'trazabilidad pública', d: 'sabes quién lo hace, dónde y con qué.' },
              ].map((p) => (
                <div key={p.n} className="flex gap-6 items-baseline">
                  <span className="font-mono text-xs text-stone w-6 shrink-0">{p.n}</span>
                  <div>
                    <span className="font-bold text-graphite">{p.t}</span>
                    <span className="text-graphite/60 text-sm ml-2">{p.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* 04 ES / NO ES */}
        <Card id="04" label="ig · es / no es · fondo bone">
          <div className="w-full aspect-square bg-[#f4f1ea] flex flex-col p-12">
            <div className="grid grid-cols-2 gap-8 flex-1">
              <div>
                <div className="font-mono text-xs text-moss tracking-widest uppercase mb-6">auva es</div>
                <div className="space-y-4">
                  {['transparente', 'técnica', 'honesta', 'duradera', 'mediterránea'].map((i) => (
                    <p key={i} className="text-2xl font-bold text-graphite">{i}</p>
                  ))}
                </div>
              </div>
              <div className="border-l border-graphite/20 pl-8">
                <div className="font-mono text-xs text-stone tracking-widest uppercase mb-6">auva no es</div>
                <div className="space-y-4">
                  {['aspiracional', 'ruidosa', 'de temporada', 'oferta permanente', 'desechable'].map((i) => (
                    <p key={i} className="text-2xl text-stone/60">{i}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* 05 QUOTE */}
        <Card id="05" label="ig · cita manifiesto · fondo graphite">
          <div className="w-full aspect-square bg-graphite flex flex-col justify-between p-12">
            <div className="w-8 h-0.5 bg-moss" />
            <div className="space-y-6">
              <p className="text-3xl font-bold text-bone leading-tight">sabemos quién<br />cosió esta prenda.</p>
              <p className="text-3xl font-bold text-bone leading-tight">sabemos cuánto<br />cobró.</p>
              <p className="text-3xl font-bold text-bone leading-tight">eso es todo.</p>
            </div>
            <div className="font-mono text-sm text-stone">auva · barcelona</div>
          </div>
        </Card>

        {/* 06 FABRICANTE */}
        <Card id="06" label="ig · fabricante · fondo moss">
          <div className="w-full aspect-square bg-moss flex flex-col justify-between p-12">
            <div className="font-mono text-xs text-bone/60 tracking-widest uppercase">fabricante</div>
            <div className="space-y-6">
              <p className="text-6xl font-bold text-bone leading-tight">fabricado<br />con criterio.</p>
              <div className="space-y-2 text-bone/80 text-base font-light">
                <p>mínimos asumibles. alta calidad textil.</p>
                <p>experiencia con marcas pequeñas y sostenibles.</p>
                <p className="mt-4">publicaremos el nombre cuando cerremos la primera tirada.</p>
              </div>
            </div>
          </div>
        </Card>

        {/* 07 WAITLIST */}
        <Card id="07" label="ig · lista de espera · fondo bone">
          <div className="w-full aspect-square bg-[#f4f1ea] flex flex-col items-center justify-between p-12 text-center">
            <Logo className="w-1/2 text-moss" strokeWidth={10} />
            <div>
              <div className="font-mono text-xs text-stone tracking-widest uppercase mb-6">lista de espera abierta</div>
              <p className="text-5xl font-bold text-graphite leading-tight">sé de los<br />primeros en<br /><span className="text-moss">llevarla.</span></p>
            </div>
            <div className="font-mono text-sm text-stone">auva.cat · link en bio</div>
          </div>
        </Card>

        {/* 08 BLEND */}
        <Card id="08" label="ig · por qué este blend · fondo bone">
          <div className="w-full aspect-square bg-[#f4f1ea] flex flex-col justify-between p-12">
            <div className="font-mono text-xs text-moss tracking-widest uppercase">por qué este blend</div>
            <div>
              <p className="text-5xl font-bold text-graphite leading-tight">merino zq<br />+ tencel.</p>
            </div>
            <div className="space-y-4 text-graphite/75 text-base font-light">
              <p>el merino es naturalmente antimicrobiano.<br />neutraliza las bacterias del olor.</p>
              <p>el tencel aporta frescor, caída y resistencia.</p>
              <p className="font-mono text-sm">cero tratamientos químicos.<br />cero microplásticos.</p>
            </div>
          </div>
        </Card>

        {/* 09 ORIGEN */}
        <Card id="09" label="ig · origen del nombre · fondo moss">
          <div className="w-full aspect-square bg-moss flex flex-col items-center justify-center p-12 text-center gap-8">
            <Logo className="w-1/2 text-bone" strokeWidth={10} />
            <div className="text-bone space-y-3">
              <p className="font-mono text-sm tracking-widest">auva</p>
              <p className="text-xl font-light">del catalán: alba, amanecer.</p>
              <p className="text-xl font-light">luz nueva sobre el mediterráneo.</p>
            </div>
            <div className="font-mono text-xs text-bone/50 tracking-widest uppercase">barcelona.</div>
          </div>
        </Card>

        {/* STORY 01 */}
        <Card id="S01" label="story · lista de espera · 9:16">
          <div className="w-full aspect-[9/16] bg-[#f4f1ea] flex flex-col items-center justify-between p-10 text-center">
            <Logo className="w-2/5 text-moss" strokeWidth={10} />
            <div>
              <div className="font-mono text-xs text-stone tracking-widest uppercase mb-8">lista de espera abierta</div>
              <p className="text-5xl font-bold text-graphite leading-tight">sé de los<br />primeros<br />en llevarla.</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-graphite/60 font-light">400 unidades. un solo correo.</p>
              <p className="font-mono text-xs text-stone tracking-widest">auva.cat · link en bio</p>
            </div>
          </div>
        </Card>

        {/* STORY 02 */}
        <Card id="S02" label="story · cita · 9:16">
          <div className="w-full aspect-[9/16] bg-graphite flex flex-col justify-between p-10">
            <Logo className="w-2/5 text-bone" strokeWidth={10} />
            <div className="space-y-6">
              <div className="w-8 h-0.5 bg-moss" />
              <p className="text-4xl font-bold text-bone leading-tight">no vendemos<br />un estilo<br />de vida.</p>
              <p className="text-4xl font-bold text-bone leading-tight">vendemos una<br />decisión<br />de compra.</p>
            </div>
            <div className="font-mono text-sm text-stone">auva · barcelona</div>
          </div>
        </Card>

        {/* STORY 03 */}
        <Card id="S03" label="story · countdown · 9:16">
          <div className="w-full aspect-[9/16] bg-moss flex flex-col justify-between p-10">
            <Logo className="w-2/5 text-bone" strokeWidth={10} />
            <div className="text-bone space-y-4">
              <div className="font-mono text-xs text-bone/50 tracking-widest uppercase">primera tirada</div>
              <p className="text-8xl font-bold leading-none">400</p>
              <p className="text-2xl font-light">unidades.</p>
              <p className="text-base text-bone/70 font-light mt-6">un solo correo cuando estén listas.</p>
            </div>
            <div className="font-mono text-xs text-bone/50 tracking-widest">auva.cat</div>
          </div>
        </Card>

      </div>
    </div>
  );
}

function Card({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-3">
        <span className="font-mono text-xs text-stone w-8">{id}</span>
        <span className="font-mono text-xs text-stone uppercase tracking-widest">{label}</span>
      </div>
      <div className="shadow-lg">{children}</div>
    </div>
  );
}
