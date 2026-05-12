// ComparisonSection.tsx
// Coloca este componente en src/components/auba/ComparisonSection.tsx
// Usa las variables CSS y tipografías ya definidas en el proyecto (Outfit + DM Mono)

import { useEffect, useRef, useState } from "react";

type Row = {
  label: string;
  antiOlor: boolean | "partial";
  purpose: boolean | "partial";
  traceable: boolean | "partial";
  fairPrice: boolean | "partial";
  isAuba?: boolean;
};

const rows: Row[] = [
  {
    label: "low cost",
    antiOlor: false,
    purpose: false,
    traceable: false,
    fairPrice: true,
  },
  {
    label: "grandes marcas",
    antiOlor: false,
    purpose: false,
    traceable: false,
    fairPrice: false,
  },
  {
    label: "técnico premium",
    antiOlor: true,
    purpose: "partial",
    traceable: "partial",
    fairPrice: false,
  },
  {
    label: "auva",
    antiOlor: true,
    purpose: true,
    traceable: true,
    fairPrice: true,
    isAuba: true,
  },
];

const attrs = [
  { key: "antiOlor", label: "anti-olor" },
  { key: "purpose", label: "propósito" },
  { key: "traceable", label: "trazable" },
  { key: "fairPrice", label: "precio justo" },
] as const;

function Dot({
  value,
  isAuba,
  visible,
}: {
  value: boolean | "partial";
  isAuba?: boolean;
  visible: boolean;
}) {
  const filled = value === true;
  const partial = value === "partial";

  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        border: `1.5px solid ${
          isAuba
            ? "#00B5A0"
            : filled
            ? "#2C3E50"
            : partial
            ? "#7F8C8D"
            : "#D5D0C8"
        }`,
        background: filled
          ? isAuba
            ? "#00B5A0"
            : "#2C3E50"
          : partial
          ? "transparent"
          : "transparent",
        position: "relative",
        transition: "all 0.4s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.5)",
        flexShrink: 0,
      }}
    >
      {partial && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#7F8C8D",
          }}
        />
      )}
    </div>
  );
}

export function ComparisonSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        padding: "96px 0",
        background: "#F2F0EB",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Título */}
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#7F8C8D",
            marginBottom: 48,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          dónde está auva
        </p>

        {/* Header de columnas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "160px repeat(4, 1fr)",
            gap: 0,
            marginBottom: 8,
            paddingBottom: 16,
            borderBottom: "1px solid #D5D0C8",
          }}
        >
          <div />
          {attrs.map((a, i) => (
            <div
              key={a.key}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7F8C8D",
                textAlign: "center",
                opacity: visible ? 1 : 0,
                transition: `opacity 0.5s ease ${i * 0.08}s`,
              }}
            >
              {a.label}
            </div>
          ))}
        </div>

        {/* Filas */}
        {rows.map((row, rowIndex) => (
          <div
            key={row.label}
            style={{
              display: "grid",
              gridTemplateColumns: "160px repeat(4, 1fr)",
              gap: 0,
              padding: "20px 0",
              borderBottom: row.isAuba ? "none" : "1px solid #E8E4DC",
              background: row.isAuba ? "transparent" : "transparent",
              alignItems: "center",
              opacity: visible ? 1 : 0,
              transition: `opacity 0.5s ease ${0.2 + rowIndex * 0.1}s`,
            }}
          >
            {/* Label */}
            <div
              style={{
                fontFamily: row.isAuba ? "'Outfit', sans-serif" : "'DM Mono', monospace",
                fontSize: row.isAuba ? 18 : 12,
                fontWeight: row.isAuba ? 500 : 400,
                color: row.isAuba ? "#00B5A0" : "#7F8C8D",
                letterSpacing: row.isAuba ? "0.05em" : "0.08em",
                textTransform: row.isAuba ? "none" : "lowercase",
              }}
            >
              {row.label}
            </div>

            {/* Dots */}
            {attrs.map((a, colIndex) => (
              <div
                key={a.key}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Dot
                  value={row[a.key]}
                  isAuba={row.isAuba}
                  visible={visible}
                />
              </div>
            ))}
          </div>
        ))}

        {/* Nota al pie */}
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 10,
            color: "#A0998E",
            marginTop: 32,
            letterSpacing: "0.08em",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.6s",
          }}
        >
          círculo lleno: sí · círculo vacío: no · punto interior: parcial
        </p>
      </div>
    </section>
  );
}
