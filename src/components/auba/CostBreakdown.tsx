import { useI18n } from '@/lib/i18n';

export function CostBreakdown() {
  const { t } = useI18n();
  // bar widths roughly proportional to value; cap at 100%
  const max = 47;
  return (
    <div className="border border-graphite">
      <div className="bg-graphite text-bone px-6 py-4 flex items-baseline justify-between">
        <div>
          <div className="label-tag !text-bone/60">{t.product.title}</div>
          <div className="text-lg font-light lowercase mt-0.5">camiseta merino / tencel</div>
        </div>
        <div className="font-mono text-2xl">{t.product.price}</div>
      </div>
      <ul className="divide-y divide-bone-deep">
        {t.transparency.rows.map(([label, val]) => {
          const num = parseInt(String(val).replace(/[^\d]/g, ''), 10) || 0;
          const pct = Math.max(6, Math.round((num / max) * 100));
          return (
            <li key={label} className="px-6 py-4 grid grid-cols-[1fr_auto] gap-x-6 items-center">
              <div>
                <div className="text-sm">{label}</div>
                <div className="mt-2 h-1 bg-bone-deep relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-moss" style={{ width: `${pct}%` }} />
                </div>
              </div>
              <div className="font-mono text-sm">{val}</div>
            </li>
          );
        })}
      </ul>
      <div className="bg-moss text-bone px-6 py-4 flex items-baseline justify-between">
        <div className="label-tag !text-bone/70">{t.transparency.total.split('·')[0].trim()}</div>
        <div className="font-mono text-xl">{t.product.price}</div>
      </div>
    </div>
  );
}
