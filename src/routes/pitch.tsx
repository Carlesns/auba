import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/pitch')({
  head: () => ({
    meta: [
      { title: 'AUVA — Reimagine Textile · Mayo 2026' },
      { name: 'robots', content: 'noindex' },
    ],
  }),
  component: Pitch,
});

const PITCH_SCRIPT = `(function(){
  var TOTAL=12, cur=0;
  function show(n){
    n=Math.max(0,Math.min(TOTAL-1,n));
    document.querySelectorAll('.p-stage .slide').forEach(function(s,i){
      s.classList.toggle('active',i===n);
    });
    cur=n;
    var el=document.getElementById('deck-cur');
    if(el)el.textContent=String(n+1).padStart(2,'0');
  }
  function init(){
    var stage=document.getElementById('p-stage');
    var vp=document.getElementById('p-vp');
    if(!stage||!vp)return;
    function scale(){
      var s=Math.min(window.innerWidth/1920,window.innerHeight/1080);
      stage.style.transform='scale('+s+')';
    }
    scale();
    window.addEventListener('resize',scale);
    show(0);
    vp.addEventListener('click',function(e){
      e.clientX/window.innerWidth>0.5?show(cur+1):show(cur-1);
    });
    window.addEventListener('keydown',function(e){
      if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' '){show(cur+1);e.preventDefault();}
      else if(e.key==='ArrowLeft'||e.key==='PageUp'){show(cur-1);e.preventDefault();}
      else if(e.key==='Home')show(0);
      else if(e.key==='End')show(TOTAL-1);
    });
  }
  document.readyState==='loading'
    ?document.addEventListener('DOMContentLoaded',init)
    :init();
})();`;

function Pitch() {
  // All navigation handled by PITCH_SCRIPT — no React state needed
  const num = (n: number) => String(n).padStart(2, '0');

  return (
    <>
      <style>{css}</style>
      <div id="p-vp" className="p-vp">
        <div id="p-stage" className="p-stage">

          {/* 01 — COVER — starts active, script takes over after load */}
          <section className="slide cover active">
            <div className="chrome-top">
              <span className="left">AUVA · Ropa técnica honesta</span>
              <span className="center">Reimagine Textile · Mayo 2026</span>
              <span className="right">01 / 12</span>
            </div>
            <div className="slide-body" style={{justifyContent:'center',gap:0}}>
              <div className="hero-wordmark">
                <span className="glyph">A</span>
                <span className="glyph">U</span>
                <span className="glyph">V</span>
                <span className="glyph">A</span>
              </div>
              <div className="tagline">ropa técnica honesta</div>
              <div className="manifesto-line">La prenda más sostenible es la que no necesitas reemplazar.</div>
            </div>
            <div className="chrome-bot">
              <span>Pitch · Documento de trabajo</span>
              <span>Confidencial</span>
              <span className="right">Mayo 2026</span>
            </div>
          </section>

          {/* 02 — EL NOMBRE */}
          <section className="slide nombre">
            <div className="chrome-top">
              <span className="left">AUVA</span><span className="center">El nombre</span><span className="right">02 / 12</span>
            </div>
            <div className="slide-body">
              <div className="slide-header" style={{marginBottom:32}}>
                <div className="eyebrow"><span className="num">02</span> &nbsp;·&nbsp; cómo se construye el logotipo</div>
                <h1 className="title-md">el nombre</h1>
              </div>
              <div className="wordmark-row">
                <div className="wordmark-big">A&nbsp;U&nbsp;V&nbsp;A</div>
                <div className="arrows">
                  <span>← &nbsp; A · U · V · A &nbsp; →</span>
                  <span style={{color:'var(--soft)'}}>palindrómico</span>
                </div>
              </div>
              <div className="grid-3" style={{marginTop:8}}>
                <div className="num-card">
                  <span className="n">— Auba</span>
                  <span className="h" style={{fontSize:36}}>alba en catalán</span>
                  <span className="p" style={{fontSize:20}}>Inicio, frescor, claridad. Raíz mediterránea con pronunciación universal en cualquier idioma.</span>
                </div>
                <div className="num-card">
                  <span className="n">— AUVA</span>
                  <span className="h" style={{fontSize:36}}>la <span className="lit">B</span> se vuelve <span className="lit">V</span></span>
                  <span className="p" style={{fontSize:20}}>Decisión gráfica deliberada: el logotipo es visualmente palindrómico, se lee igual en ambas direcciones.</span>
                </div>
                <div className="num-card">
                  <span className="n">— Lettering propio</span>
                  <span className="h" style={{fontSize:36}}>un único ángulo</span>
                  <span className="p" style={{fontSize:20}}>Todas las letras comparten el mismo ángulo diagonal. Un único elemento geométrico construye el nombre entero.</span>
                </div>
              </div>
            </div>
            <div className="chrome-bot"><span>Identidad · Naming</span><span>auva — A · U · V · A</span><span className="right">02 / 12</span></div>
          </section>

          {/* 03 — EL PROBLEMA */}
          <section className="slide problema">
            <div className="chrome-top"><span className="left">AUVA</span><span className="center">El problema</span><span className="right">03 / 12</span></div>
            <div className="slide-body">
              <div className="slide-header">
                <div className="eyebrow"><span className="num">03</span> &nbsp;·&nbsp; lo que hoy falla</div>
                <h1 className="title-lg">el problema</h1>
                <p className="body body--soft" style={{marginTop:28}}>La ropa técnica que existe hoy resuelve mal tres cosas básicas. AUVA empieza ahí.</p>
              </div>
              <div className="grid-3" style={{marginTop:48}}>
                <div className="num-card"><span className="n">01</span><span className="h">huele</span><span className="p">La ropa técnica retiene bacterias. Puedes lavarla — seguirá oliendo después de dos usos.</span></div>
                <div className="num-card"><span className="n">02</span><span className="h">no dura</span><span className="p">Las marcas de gran consumo optimizan para el precio, no para la durabilidad. Fabrican para que vuelvas a comprar.</span></div>
                <div className="num-card"><span className="n">03</span><span className="h">nadie sabe quién la hizo</span><span className="p">Cadenas de suministro opacas. Sin trazabilidad de materiales ni condiciones laborales conocidas.</span></div>
              </div>
            </div>
            <div className="chrome-bot"><span>Diagnóstico</span><span>tres fallos de la ropa técnica actual</span><span className="right">03 / 12</span></div>
          </section>

          {/* 04 — LA SOLUCIÓN */}
          <section className="slide solucion">
            <div className="chrome-top"><span className="left">AUVA</span><span className="center">La solución</span><span className="right">04 / 12</span></div>
            <div className="slide-body">
              <div className="slide-header">
                <div className="eyebrow"><span className="num">04</span> &nbsp;·&nbsp; cómo lo resolvemos</div>
                <h1 className="title-lg">la solución</h1>
              </div>
              <div className="grid-2" style={{marginTop:32,rowGap:56}}>
                <div className="num-card"><span className="n">01 · anti-olor</span><span className="h">sudas. la prenda no lo recuerda.</span><span className="p">Lana merino: nació en España, recorrió el mundo, volvió para quedarse. La más fina, la que no huele. Sin química.</span></div>
                <div className="num-card"><span className="n">02 · diseño que no caduca</span><span className="h">el buen diseño no caduca.</span><span className="p">Prendas que son bonitas porque están bien hechas, no porque estén de moda.</span></div>
                <div className="num-card"><span className="n">03 · sostenibilidad estructural</span><span className="h">la prenda más sostenible es la que no reemplazas.</span><span className="p">Fibras certificadas, origen trazable, fabricación honesta. La sostenibilidad como construcción, no como mensaje.</span></div>
                <div className="num-card"><span className="n">04 · honestidad de precio</span><span className="h">nada que esconder.</span><span className="p">El precio no es un secreto. Lo que pagas, adónde va: tejido, confección, logística, margen. Publicado, siempre.</span></div>
              </div>
            </div>
            <div className="chrome-bot"><span>Propuesta de valor</span><span>cuatro decisiones de marca</span><span className="right">04 / 12</span></div>
          </section>

          {/* 05 — EL PRODUCTO */}
          <section className="slide producto">
            <div className="chrome-top"><span className="left">AUVA</span><span className="center">El producto</span><span className="right">05 / 12</span></div>
            <div className="slide-body">
              <div className="slide-header" style={{marginBottom:24}}>
                <div className="eyebrow"><span className="num">05</span> &nbsp;·&nbsp; la primera prenda</div>
                <h1 className="title-md">camiseta técnica</h1>
              </div>
              <div className="prod-layout">
                <div className="tee-spec">
                  <div className="tee-img">
                    <svg viewBox="0 0 600 720" preserveAspectRatio="xMidYMid meet" style={{width:'70%',height:'90%'}}>
                      <path d="M 120 90 L 220 50 C 240 40 260 35 300 35 C 340 35 360 40 380 50 L 480 90 L 580 180 L 520 240 L 470 200 L 470 660 C 470 680 460 690 440 690 L 160 690 C 140 690 130 680 130 660 L 130 200 L 80 240 L 20 180 Z" fill="#dcd5c4"/>
                      <path d="M 230 50 C 250 90 350 90 370 50" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="2.5"/>
                      <line x1="160" y1="240" x2="160" y2="680" stroke="rgba(0,0,0,0.07)" strokeWidth="1.5"/>
                      <line x1="440" y1="240" x2="440" y2="680" stroke="rgba(0,0,0,0.07)" strokeWidth="1.5"/>
                      <text x="180" y="220" fontFamily="Inter Tight, sans-serif" fontWeight="300" fontSize="28" letterSpacing="6" fill="#c4bca6">A U V A</text>
                    </svg>
                  </div>
                  <div className="spec-rows">
                    {[['Tipo','Camiseta · manga corta · unisex'],['Tejido','50% Merino · 50% Tencel'],['Gramaje','150–170 g/m²'],['Construcción','Costura flatlock'],['Certificados','ZQ Merino · OEKO-TEX']].map(([k,v])=>(
                      <div key={k} className="spec-row"><span className="k">{k}</span><span className="v">{v}</span></div>
                    ))}
                  </div>
                </div>
                <div className="why-list">
                  {[['por qué este blend','Termorregulación natural. El merino calienta en invierno y el Tencel refresca en verano. La mezcla elimina el picor de la lana y gestiona la humedad un 50% mejor que el algodón.'],['por qué estas certificaciones','ZQ Merino garantiza bienestar animal y pago justo al productor. OEKO-TEX certifica ausencia de más de 300 sustancias nocivas. Publicamos ambos certificados en la web.'],['por qué flatlock','Costuras planas en toda la prenda. Sin rozaduras en movimiento. La prenda se lleva pegada al cuerpo y la comodidad no puede ser un detalle secundario.']].map(([h,p])=>(
                    <div key={h} className="why"><div className="h">{h}</div><p className="p">{p}</p></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="chrome-bot"><span>Producto · Pieza inaugural</span><span>style 001 · tee</span><span className="right">05 / 12</span></div>
          </section>

          {/* 06 — EL MERCADO */}
          <section className="slide mercado">
            <div className="chrome-top"><span className="left">AUVA</span><span className="center">El mercado</span><span className="right">06 / 12</span></div>
            <div className="slide-body" style={{paddingBottom:80}}>
              <div className="slide-header" style={{marginBottom:0}}>
                <div className="eyebrow"><span className="num">06</span> &nbsp;·&nbsp; mapa de la competencia</div>
                <h1 className="title-lg">precio vs. propósito</h1>
                <p className="body body--soft" style={{marginTop:20}}>Camiseta técnica de referencia. Posición relativa por percepción, no datos cerrados.</p>
              </div>
              <div className="chart">
                <div className="axis-y"><span className="arrow">propósito ↑</span></div>
                <div className="chart-frame">
                  <div className="quad tl"><span className="qlab">nicho sin explotar</span></div>
                  <div className="quad tr"><span className="qlab">aquí está AUVA</span></div>
                  <div className="quad bl"><span className="qlab">commodity</span></div>
                  <div className="quad br"><span className="qlab">pagas la marca</span></div>
                  <div className="dot label-above" style={{left:'30%',top:'32%'}}><span>Ecoalf</span><div className="pt"></div></div>
                  <div className="dot label-above" style={{left:'78%',top:'38%'}}><span>Normal</span><div className="pt"></div></div>
                  <div className="dot label-above" style={{left:'70%',top:'45%'}}><span>Icebreaker</span><div className="pt"></div></div>
                  <div className="dot label-below" style={{left:'56%',top:'48%'}}><div className="pt"></div><span>The North Face</span></div>
                  <div className="dot label-above" style={{left:'17%',top:'78%'}}><span>Decathlon</span><div className="pt"></div></div>
                  <div className="dot label-above" style={{left:'35%',top:'70%'}}><span>Reebok</span><div className="pt"></div></div>
                  <div className="dot label-above" style={{left:'41%',top:'72%'}}><span>Adidas / Nike</span><div className="pt"></div></div>
                  <div className="dot label-above" style={{left:'47%',top:'65%'}}><span>Under Armour</span><div className="pt"></div></div>
                  <div className="dot auva label-above" style={{left:'64%',top:'22%'}}><span>AUVA</span><div className="pt"></div></div>
                </div>
                <div className="axis-x"><span>bajo</span><span className="right">precio →</span></div>
              </div>
            </div>
            <div className="chrome-bot"><span>Posicionamiento</span><span>precio alto · propósito alto</span><span className="right">06 / 12</span></div>
          </section>

          {/* 07 — MODELO DE NEGOCIO */}
          <section className="slide modelo">
            <div className="chrome-top"><span className="left">AUVA</span><span className="center">Modelo de negocio</span><span className="right">07 / 12</span></div>
            <div className="slide-body">
              <div className="slide-header">
                <div className="eyebrow"><span className="num">07</span> &nbsp;·&nbsp; una decisión abierta</div>
                <h1 className="title-lg">modelo de negocio</h1>
                <p className="body body--soft" style={{marginTop:20}}>Queremos escuchar vuestra perspectiva antes de cerrar el modelo.</p>
              </div>
              <div className="mod-cards" style={{marginTop:40}}>
                <div className="opt a">
                  <span className="tag">Opción A</span><h3>solo online</h3>
                  <ul>
                    {['+Control total del mensaje','+Sin intermediarios','+Datos propios del cliente','+Menor inversión inicial','+Escalable sin estructura física'].map(l=><li key={l}><span className="mk">+</span>{l.slice(1)}</li>)}
                    {['−Sin prueba física previa a la compra','−Alta dependencia del marketing digital','−Más difícil generar confianza inicial'].map(l=><li key={l} className="con"><span className="mk">−</span>{l.slice(1)}</li>)}
                  </ul>
                </div>
                <div className="opt b">
                  <span className="tag">Opción B</span><h3>online + distribución selectiva</h3>
                  <ul>
                    {['+El cliente puede ver y tocar el producto','+Genera confianza y credibilidad','+Pop-ups, mercados o multimarca afín','+Refuerza la narrativa sostenible local'].map(l=><li key={l}><span className="mk">+</span>{l.slice(1)}</li>)}
                    {['−Mayor complejidad operativa','−Requiere selección muy cuidada','−Inversión en presencia física'].map(l=><li key={l} className="con"><span className="mk">−</span>{l.slice(1)}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className="chrome-bot"><span>Modelo</span><span>abierto a debate</span><span className="right">07 / 12</span></div>
          </section>

          {/* 08 — FABRICACIÓN */}
          <section className="slide fab">
            <div className="chrome-top"><span className="left">AUVA</span><span className="center">Fabricación honesta</span><span className="right">08 / 12</span></div>
            <div className="slide-body">
              <div className="slide-header">
                <div className="eyebrow"><span className="num">08</span> &nbsp;·&nbsp; criterios de fabricante</div>
                <h1 className="title-lg">fabricación honesta</h1>
                <p className="body body--soft" style={{marginTop:20}}>Buscamos el fabricante correcto. No el más barato.</p>
              </div>
              <div className="fab-cards" style={{marginTop:56}}>
                {[['01','ubicación','Catalunya preferiblemente. Proximidad, control de calidad, relación directa. Portugal como alternativa de alta calidad textil.'],
                  ['02','certificaciones','Exigimos ZQ Merino o RWS para la lana. OEKO-TEX para el Tencel. Documentación publicada en la web.'],
                  ['03','condiciones laborales','Publicamos el nombre del fabricante. La transparencia laboral es parte del producto, no un extra.'],
                  ['04','sin sobreproducción','400 unidades en primera tirada. Solo producimos lo que podemos vender. Sin stock muerto.']
                ].map(([n,h,p])=>(
                  <div key={n} className="crit"><span className="lab">— {n} —</span><span className="h">{h}</span><span className="p">{p}</span></div>
                ))}
              </div>
            </div>
            <div className="chrome-bot"><span>Cadena de suministro</span><span>fabricante correcto, no el más barato</span><span className="right">08 / 12</span></div>
          </section>

          {/* 09 — DÓNDE ESTAMOS */}
          <section className="slide estado">
            <div className="chrome-top"><span className="left">AUVA</span><span className="center">Dónde estamos hoy</span><span className="right">09 / 12</span></div>
            <div className="slide-body">
              <div className="slide-header">
                <div className="eyebrow"><span className="num">09</span> &nbsp;·&nbsp; estado actual del proyecto</div>
                <h1 className="title-lg">dónde estamos hoy</h1>
              </div>
              <div className="estado-list" style={{marginTop:32}}>
                {[
                  [true,'Manual de negocio','Modelo, P&L y hoja de ruta definidos.'],
                  [true,'Brand book v1','Identidad visual, paleta, tipografía, tono.'],
                  [true,'Logo AUVA','Concepto palindrómico en custom lettering.'],
                  [true,'Web en desarrollo','React · copies cerrados · bilingüe ES/EN.'],
                  [true,'Brief de fabricante','Especificaciones técnicas completas.'],
                  [true,'Contacto iniciado','Onatex (Sabadell) en conversación.'],
                  [false,'Muestra física','Pendiente de confirmar fabricante.'],
                  [false,'Fotografía de producto','Pendiente de muestra validada.'],
                ].map(([done,name,desc])=>(
                  <div key={name as string} className={`row ${done?'done':'todo'}`}>
                    <span className="mark">{done?'✓':'○'}</span>
                    <span className="name">{name as string}</span>
                    <span className="desc">{desc as string}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="chrome-bot"><span>Estado</span><span>6 hechos · 2 pendientes</span><span className="right">09 / 12</span></div>
          </section>

          {/* 10 — MANIFIESTO */}
          <section className="slide manifest">
            <div className="chrome-top"><span className="left">AUVA</span><span className="center">Manifiesto</span><span className="right">10 / 12</span></div>
            <div className="slide-body">
              <div className="body-wrap">
                <div className="mtext">
                  <span className="stanza">
                    <span className="line">Hacemos <span className="maccent">ropa técnica honesta</span>.</span>
                    <span className="line">Honesta con tu cuerpo.</span>
                    <span className="line">Honesta con quien la cose.</span>
                    <span className="line">Honesta con la tierra de donde vienen los hilos.</span>
                  </span>
                  <span className="stanza">
                    <span className="line">Sabemos el nombre del taller.</span>
                    <span className="line">Sabemos lo que cobra.</span>
                    <span className="line">Sabemos de qué campo viene la lana.</span>
                    <span className="line">Y lo publicamos todo.</span>
                  </span>
                  <span className="stanza">
                    <span className="line">No te vendemos un sueño.</span>
                    <span className="line">Te vendemos una prenda.</span>
                    <span className="line"><span className="maccent">Bien hecha, bien pagada, bien contada.</span></span>
                  </span>
                </div>
                <div className="sig">— AUVA · Manifiesto v1</div>
              </div>
            </div>
            <div className="chrome-bot"><span>Manifiesto</span><span>la marca, en voz alta</span><span className="right">10 / 12</span></div>
          </section>

          {/* 11 — LA WEB */}
          <section className="slide web">
            <div className="chrome-top"><span className="left">AUVA</span><span className="center">La web</span><span className="right">11 / 12</span></div>
            <div className="slide-body">
              <div className="slide-header">
                <div className="eyebrow"><span className="num">11</span> &nbsp;·&nbsp; en directo, ahora mismo</div>
                <h1 className="title-lg">la web</h1>
                <p className="body body--soft" style={{marginTop:20}}>Escanea para verla en directo. Aún en desarrollo — copies cerrados, bilingüe.</p>
              </div>
              <div className="web-layout">
                <div className="qr-frame">
                  <QRDecor />
                </div>
                <div className="web-info">
                  <span className="mono-label">— url</span>
                  <code className="url">auba-actldztl8-auva-projects1.vercel.app</code>
                  <div className="body">Web pública de validación. Contiene la propuesta de marca, ficha del primer producto y el desglose de precio honesto. Cualquier persona del jurado puede entrar y ver el mismo material que nosotros.</div>
                </div>
              </div>
            </div>
            <div className="chrome-bot"><span>Web</span><span>auba-actldztl8-auva-projects1.vercel.app</span><span className="right">11 / 12</span></div>
          </section>

          {/* 12 — QUÉ NECESITAMOS */}
          <section className="slide ask">
            <div className="chrome-top"><span className="left">AUVA</span><span className="center">Qué necesitamos de Reimagine</span><span className="right">12 / 12</span></div>
            <div className="slide-body">
              <div className="slide-header">
                <div className="eyebrow"><span className="num">12</span> &nbsp;·&nbsp; cómo Reimagine nos puede ayudar</div>
                <h1 className="title-lg">qué necesitamos</h1>
              </div>
              <div className="ask-cards" style={{marginTop:56}}>
                {[['01','Red de fabricantes','Fabricantes en Catalunya con experiencia en tejidos técnicos naturales y condiciones laborales certificadas.'],
                  ['02','Sourcing de tejido','Proveedores de blend merino / Tencel 50/50, certificados ZQ y OEKO-TEX, con mínimos viables para primera tirada.'],
                  ['03','Validación técnica','Feedback sectorial sobre el producto, el posicionamiento y la viabilidad desde la experiencia de Reimagine.'],
                  ['04','Ecosistema y recursos','Acceso a programas, ayudas o red de contactos del sector textil sostenible en Catalunya.'],
                ].map(([n,h,p])=>(
                  <div key={n} className="ask-card">
                    <div className="ask-num">{n}</div>
                    <div className="ask-body"><h3>{h}</h3><p>{p}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="chrome-bot"><span>Cierre</span><span>gracias</span><span className="right">12 / 12</span></div>
          </section>

        </div>
      </div>
      <div className="deck-count">
        <span id="deck-cur" className="cur">01</span> / {num(12)}
      </div>
      <a href="/" className="deck-back">← inicio</a>
      <script dangerouslySetInnerHTML={{ __html: PITCH_SCRIPT }} />
    </>
  );
}

function QRDecor() {
  const cells: boolean[] = [];
  let s = 7;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  for (let r = 0; r < 21; r++) {
    for (let c = 0; c < 21; c++) {
      const corner = (r < 7 && c < 7) || (r < 7 && c >= 14) || (r >= 14 && c < 7);
      cells.push(corner ? false : rnd() < 0.46);
    }
  }
  return (
    <div style={{width:'100%',height:'100%',position:'relative'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(21,1fr)',gridTemplateRows:'repeat(21,1fr)',width:'100%',height:'100%'}}>
        {cells.map((on, i) => <div key={i} style={{background: on ? 'var(--ink)' : 'transparent'}} />)}
      </div>
      {(['tl','tr','bl'] as const).map(pos => (
        <div key={pos} style={{
          position:'absolute',
          width:'33.33%',height:'33.33%',
          background:'var(--paper)',
          border:'8px solid var(--ink)',
          boxSizing:'border-box',
          ...(pos==='tl'?{top:0,left:0}:pos==='tr'?{top:0,right:0}:{bottom:0,left:0}),
        }}>
          <div style={{position:'absolute',inset:'20%',background:'var(--ink)'}} />
        </div>
      ))}
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@200;300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --paper:   #f4f1ea;
  --paper-2: #ebe7dd;
  --ink:     #1c1d1a;
  --ink-2:   #2a2a26;
  --soft:    #6b6c64;
  --rule:    #d8d4c8;
  --accent:  #c2683a;
  --accent-soft: #e2b48a;
  --ok:      #4a5c3a;
}

.p-vp {
  position: fixed; inset: 0;
  display: flex; align-items: center; justify-content: center;
  background: #0a0a0a;
  cursor: pointer;
  user-select: none;
}
.p-stage {
  width: 1920px; height: 1080px;
  transform-origin: center center;
  position: relative;
  background: var(--paper);
}
.slide {
  position: absolute; inset: 0;
  width: 1920px; height: 1080px;
  padding: 80px 96px;
  display: flex; flex-direction: column;
  background: var(--paper);
  color: var(--ink);
  opacity: 0; pointer-events: none;
  transition: opacity 220ms ease;
}
.slide.active { opacity: 1; pointer-events: auto; }

.chrome-top {
  display: grid; grid-template-columns: minmax(0,1fr) auto minmax(0,1fr);
  align-items: baseline; gap: 32px;
  font-family: 'JetBrains Mono', monospace; font-size: 13px;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--soft);
  padding-bottom: 28px; border-bottom: 1px solid var(--rule); white-space: nowrap;
}
.chrome-top .left { text-align: left; overflow: hidden; text-overflow: ellipsis; }
.chrome-top .center { text-align: center; color: var(--ink); white-space: nowrap; }
.chrome-top .right { text-align: right; }
.chrome-bot {
  margin-top: auto; padding-top: 28px; border-top: 1px solid var(--rule);
  display: grid; grid-template-columns: minmax(0,1fr) auto minmax(0,1fr);
  gap: 32px; font-family: 'JetBrains Mono', monospace; font-size: 12px;
  letter-spacing: 0.12em; text-transform: uppercase; color: var(--soft); white-space: nowrap;
}
.chrome-bot .right { text-align: right; }

.eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 14px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--soft); margin-bottom: 24px; }
.eyebrow .num { color: var(--ink); font-weight: 500; }
.title-xl { font-family: 'Inter Tight', sans-serif; font-weight: 200; font-size: 160px; line-height: 0.92; letter-spacing: -0.04em; color: var(--ink); margin: 0; }
.title-lg { font-family: 'Inter Tight', sans-serif; font-weight: 200; font-size: 110px; line-height: 0.95; letter-spacing: -0.035em; color: var(--ink); margin: 0; }
.title-md { font-family: 'Inter Tight', sans-serif; font-weight: 300; font-size: 72px; line-height: 1.0; letter-spacing: -0.025em; color: var(--ink); margin: 0; }
.body { font-family: 'Inter', sans-serif; font-weight: 400; font-size: 26px; line-height: 1.45; color: var(--ink-2); max-width: 980px; }
.body--soft { color: var(--soft); }
.mono-label { font-family: 'JetBrains Mono', monospace; font-size: 14px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--soft); }
.accent { color: var(--accent); }

.slide-body { flex: 1; display: flex; flex-direction: column; padding-top: 72px; padding-bottom: 40px; min-height: 0; }
.slide-header { margin-bottom: 48px; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; }

.num-card { display: flex; flex-direction: column; gap: 20px; padding-top: 28px; border-top: 1px solid var(--rule); }
.num-card .n { font-family: 'JetBrains Mono', monospace; font-size: 14px; letter-spacing: 0.16em; color: var(--soft); }
.num-card .h { font-family: 'Inter Tight', sans-serif; font-weight: 400; font-size: 44px; line-height: 1.05; letter-spacing: -0.02em; color: var(--ink); }
.num-card .lit { color: var(--accent); }
.num-card .p { font-family: 'Inter', sans-serif; font-size: 22px; line-height: 1.5; color: var(--ink-2); }
.problema .num-card .n, .solucion .num-card .n { color: var(--accent); }

/* COVER */
.cover .hero-wordmark {
  font-family: 'Inter Tight', sans-serif; font-weight: 200;
  font-size: 360px; line-height: 1; letter-spacing: 0.18em; color: var(--ink);
  display: flex; align-items: baseline; gap: 0.16em; transform: translateY(-20px);
}
.cover .glyph { display: inline-block; }
.cover .tagline { font-family: 'Inter Tight', sans-serif; font-weight: 300; font-size: 38px; letter-spacing: 0.06em; text-transform: lowercase; color: var(--soft); margin-top: 28px; }
.cover .manifesto-line { margin-top: 96px; font-family: 'Inter Tight', sans-serif; font-weight: 300; font-size: 42px; line-height: 1.3; letter-spacing: -0.01em; color: var(--ink); max-width: 900px; }
.cover .manifesto-line::before { content: ''; display: block; width: 64px; height: 1px; background: var(--accent); margin-bottom: 28px; }

/* NOMBRE */
.nombre .wordmark-row { display: flex; align-items: center; gap: 64px; margin-bottom: 40px; padding: 24px 0; border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule); }
.nombre .wordmark-big { font-family: 'Inter Tight', sans-serif; font-weight: 200; font-size: 140px; letter-spacing: 0.18em; line-height: 1; color: var(--ink); }
.nombre .arrows { font-family: 'JetBrains Mono', monospace; font-size: 18px; color: var(--soft); letter-spacing: 0.2em; display: flex; flex-direction: column; gap: 8px; }

/* PRODUCTO */
.prod-layout { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; flex: 1; min-height: 0; }
.tee-spec { background: var(--paper-2); padding: 36px; display: flex; flex-direction: column; gap: 24px; min-height: 0; }
.tee-img { width: 100%; aspect-ratio: 4/3.2; background: #dcd5c4; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.spec-rows { display: flex; flex-direction: column; }
.spec-row { display: flex; justify-content: space-between; align-items: baseline; padding: 10px 0; border-bottom: 1px solid var(--rule); font-family: 'JetBrains Mono', monospace; font-size: 15px; gap: 12px; }
.spec-row .k { color: var(--soft); text-transform: uppercase; letter-spacing: 0.14em; font-size: 12px; white-space: nowrap; }
.spec-row .v { color: var(--ink); font-weight: 500; text-align: right; }
.why-list { display: flex; flex-direction: column; gap: 28px; }
.why { padding-top: 20px; border-top: 1px solid var(--rule); }
.why .h { font-family: 'Inter Tight', sans-serif; font-weight: 400; font-size: 30px; letter-spacing: -0.02em; line-height: 1.1; color: var(--ink); margin-bottom: 10px; }
.why .p { font-family: 'Inter', sans-serif; font-size: 19px; line-height: 1.5; color: var(--ink-2); }

/* MERCADO */
.chart { flex: 1; position: relative; margin-top: 24px; padding: 24px 24px 64px 130px; min-height: 0; }
.chart-frame { position: relative; width: 100%; height: 100%; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 1px; background: var(--rule); border: 1px solid var(--ink); }
.quad { position: relative; background: var(--paper-2); padding: 20px 24px; }
.quad.tl { background: #e6e1d2; }
.quad.tr { background: #d6e6dc; }
.quad.bl { background: #ece7d8; }
.quad.br { background: #e8e3d4; }
.qlab { font-family: 'Inter Tight', sans-serif; font-style: italic; font-weight: 300; font-size: 20px; letter-spacing: -0.01em; color: var(--soft); position: absolute; top: 16px; left: 20px; }
.quad.tr .qlab { color: var(--accent); font-weight: 500; }
.axis-x { position: absolute; bottom: -40px; left: 130px; right: 24px; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 14px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--soft); }
.axis-x .right { color: var(--ink); }
.axis-y { position: absolute; left: 36px; top: 24px; bottom: 64px; display: flex; flex-direction: column; justify-content: flex-end; font-family: 'JetBrains Mono', monospace; font-size: 14px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink); white-space: nowrap; }
.dot { position: absolute; display: flex; align-items: center; gap: 10px; font-family: 'Inter', sans-serif; font-size: 17px; color: var(--ink-2); white-space: nowrap; transform: translate(-50%,-50%); z-index: 2; }
.dot.label-above { flex-direction: column-reverse; gap: 6px; align-items: center; }
.dot.label-below { flex-direction: column; gap: 6px; align-items: center; }
.dot .pt { width: 14px; height: 14px; border-radius: 50%; background: var(--ink); flex-shrink: 0; }
.dot.auva { font-family: 'Inter Tight', sans-serif; font-weight: 500; font-size: 30px; letter-spacing: 0.08em; color: var(--accent); gap: 12px; }
.dot.auva .pt { width: 28px; height: 28px; background: var(--accent); }

/* MODELO */
.mod-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; flex: 1; }
.opt { display: flex; flex-direction: column; padding: 40px; background: var(--paper-2); }
.opt.b { background: var(--ink); color: var(--paper); }
.opt h3 { font-family: 'Inter Tight', sans-serif; font-weight: 400; font-size: 40px; letter-spacing: -0.02em; margin: 0 0 28px; }
.opt .tag { font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--soft); margin-bottom: 12px; }
.opt.b .tag { color: var(--accent-soft); }
.opt ul { list-style: none; padding: 0; margin: 0 0 24px; display: flex; flex-direction: column; gap: 10px; }
.opt li { font-family: 'Inter', sans-serif; font-size: 20px; line-height: 1.4; display: flex; gap: 14px; align-items: baseline; }
.opt .mk { font-family: 'JetBrains Mono', monospace; font-size: 16px; width: 22px; flex-shrink: 0; color: var(--accent); }
.opt.b .mk { color: var(--accent-soft); }
.opt li.con .mk { color: var(--soft); }
.opt.b li.con .mk { color: #8a8a82; }
.opt li.con { color: var(--soft); }
.opt.b li.con { color: #a8a89e; }

/* FABRICACIÓN */
.fab-cards { display: grid; grid-template-columns: repeat(4,1fr); gap: 36px; flex: 1; align-items: stretch; }
.crit { display: flex; flex-direction: column; padding-top: 32px; border-top: 2px solid var(--ink); gap: 18px; }
.crit .lab { font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--soft); }
.crit .h { font-family: 'Inter Tight', sans-serif; font-weight: 400; font-size: 36px; letter-spacing: -0.02em; line-height: 1.05; color: var(--ink); }
.crit .p { font-family: 'Inter', sans-serif; font-size: 20px; line-height: 1.5; color: var(--ink-2); }

/* ESTADO */
.estado-list { display: grid; grid-template-columns: 1fr 1fr; column-gap: 80px; flex: 1; align-content: start; }
.row { display: grid; grid-template-columns: 56px 280px 1fr; align-items: baseline; padding: 24px 0; border-top: 1px solid var(--rule); }
.row:last-child { border-bottom: 1px solid var(--rule); }
.row .mark { font-family: 'JetBrains Mono', monospace; font-size: 22px; font-weight: 500; }
.row.done .mark { color: var(--accent); }
.row.todo .mark { color: var(--soft); }
.row .name { font-family: 'Inter Tight', sans-serif; font-weight: 400; font-size: 26px; letter-spacing: -0.01em; color: var(--ink); }
.row .desc { font-family: 'Inter', sans-serif; font-size: 19px; color: var(--ink-2); line-height: 1.4; }
.row.todo .name { color: var(--soft); }

/* MANIFIESTO */
.body-wrap { flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 16px 0; min-height: 0; }
.mtext { font-family: 'Inter Tight', sans-serif; font-weight: 300; font-size: 46px; line-height: 1.22; letter-spacing: -0.02em; color: var(--ink); text-align: left; max-width: 1400px; }
.maccent { color: var(--accent); font-weight: 400; }
.line { display: block; }
.stanza { display: block; margin-top: 28px; }
.stanza:first-child { margin-top: 0; }
.sig { font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--soft); margin-top: 36px; align-self: flex-end; }

/* WEB */
.web-layout { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.qr-frame { width: 460px; height: 460px; background: var(--paper); border: 1px solid var(--ink); padding: 28px; display: flex; align-items: center; justify-content: center; justify-self: end; }
.web-info { display: flex; flex-direction: column; gap: 32px; }
.url { font-family: 'JetBrains Mono', monospace; font-size: 28px; letter-spacing: -0.01em; color: var(--ink); padding: 18px 24px; border: 1px solid var(--ink); display: inline-block; align-self: flex-start; }

/* ASK */
.ask-cards { display: grid; grid-template-columns: repeat(2,1fr); gap: 48px 80px; flex: 1; }
.ask-card { display: flex; gap: 36px; padding: 32px 0; border-top: 1px solid var(--rule); }
.ask-num { font-family: 'Inter Tight', sans-serif; font-weight: 200; font-size: 96px; line-height: 0.85; color: var(--accent); letter-spacing: -0.03em; flex-shrink: 0; width: 100px; }
.ask-body { display: flex; flex-direction: column; gap: 12px; }
.ask-body h3 { font-family: 'Inter Tight', sans-serif; font-weight: 400; font-size: 36px; letter-spacing: -0.02em; margin: 0; color: var(--ink); line-height: 1.05; }
.ask-body p { font-family: 'Inter', sans-serif; font-size: 20px; line-height: 1.5; color: var(--ink-2); margin: 0; }

/* COUNTER */
.deck-count { position: fixed; bottom: 16px; left: 50%; transform: translateX(-50%); font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.2em; color: rgba(244,241,234,0.55); background: rgba(0,0,0,0.2); padding: 6px 14px; border-radius: 2px; pointer-events: none; user-select: none; white-space: nowrap; }
.deck-count .cur { color: var(--paper); }
.deck-back { position: fixed; top: 16px; left: 20px; font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(244,241,234,0.5); text-decoration: none; padding: 6px 10px; z-index: 10; transition: color 0.15s; }
.deck-back:hover { color: rgba(244,241,234,0.9); }
`;
