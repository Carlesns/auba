type Row = {
  label: string;
  antiOlor: boolean | "partial";
  purpose: boolean | "partial";
  traceable: boolean | "partial";
  fairPrice: boolean | "partial";
  isAuba?: boolean;
};

const rows: Row[] = [
  { label: "low cost",        antiOlor: false, purpose: false,     traceable: false,     fairPrice: true  },
  { label: "grandes marcas",  antiOlor: false, purpose: false,     traceable: false,     fairPrice: false },
  { label: "técnico premium", antiOlor: true,  purpose: "partial", traceable: "partial", fairPrice: false },
  { label: "auva",            antiOlor: true,  purpose: true,      traceable: true,      fairPrice: true, isAuba: true },
];

const attrs = [
  { key: "antiOlor"  as const, label: "anti-olor"    },
  { key: "purpose"   as const, label: "propósito"    },
  { key: "traceable" as const, label: "trazable"     },
  { key: "fairPrice" as const, label: "precio justo" },
];

function Dot({ value, isAuba }: { value: boolean | "partial"; isAuba?: boolean }) {
  const filled  = value === true;
  const partial = value === "partial";
  return (
    <div style={{
      width: 20, height: 20, borderRadius: "50%", flexShrink: 0, position: "relative",
      border: `1.5px solid ${isAuba ? "#00B5A0" : filled ? "#2C3E50" : partial ? "#7F8C8D" : "#D5D0C8"}`,
      background: filled ? (isAuba ? "#00B5A0" : "#2C3E50") : "transparent",
    }}>
      {partial && (
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 8, height: 8, borderRadius: "50%", background: "#7F8C8D",
        }} />
      )}
    </div>
  );
}

export function ComparisonSection() {
  return (
    <section style={{ padding: "96px 0", background: "#F2F0EB" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>

        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: 11,
          letterSpacing: "0.15em", textTransform: "uppercase",
          color: "#7F8C8D", marginBottom: 48,
        }}>
          dónde está auva
        </p>

        {/* Cabecera */}
        <div style={{
          display: "grid", gridTemplateColumns: "160px repeat(4, 1fr)",
          paddingBottom: 16, borderBottom: "1px solid #D5D0C8", marginBottom: 8,
        }}>
          <div />
          {attrs.map((a) => (
            <div key={a.key} style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#7F8C8D", textAlign: "center",
            }}>
              {a.label}
            </div>
          ))}
        </div>

        {/* Filas */}
        {rows.map((row) => (
          <div key={row.label} style={{
            display: "grid", gridTemplateColumns: "160px repeat(4, 1fr)",
            padding: "20px 0", alignItems: "center",
            borderBottom: row.isAuba ? "none" : "1px solid #E8E4DC",
          }}>
            <div style={{
              fontFamily: row.isAuba ? "'Outfit', sans-serif" : "'DM Mono', monospace",
              fontSize: row.isAuba ? 18 : 12,
              fontWeight: row.isAuba ? 500 : 400,
              color: row.isAuba ? "#00B5A0" : "#7F8C8D",
              letterSpacing: row.isAuba ? "0.05em" : "0.08em",
            }}>
              {row.label}
            </div>
            {attrs.map((a) => (
              <div key={a.key} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Dot value={row[a.key]} isAuba={row.isAuba} />
              </div>
            ))}
          </div>
        ))}

        {/* Nota */}
        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          color: "#A0998E", marginTop: 32, letterSpacing: "0.08em",
        }}>
          círculo lleno: sí · círculo vacío: no · punto interior: parcial
        </p>
      </div>
    </section>
  );
}
