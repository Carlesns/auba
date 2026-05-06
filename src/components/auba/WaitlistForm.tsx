import { useEffect, useState } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { joinWaitlist, getWaitlistCount } from '@/server/waitlist.functions';
import { useI18n } from '@/lib/i18n';

interface Props {
  source?: string;
  variant?: 'inline' | 'block';
  showCounter?: boolean;
}

export function WaitlistForm({ source = 'home', variant = 'inline', showCounter = true }: Props) {
  const { t, locale } = useI18n();
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'already' | 'error' | 'invalid'>('idle');
  const [count, setCount] = useState<number | null>(null);
  const join = useServerFn(joinWaitlist);
  const fetchCount = useServerFn(getWaitlistCount);

  useEffect(() => {
    if (!showCounter) return;
    fetchCount().then((r) => setCount(r.count)).catch(() => {});
  }, [fetchCount, showCounter, status]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmed)) {
      setStatus('invalid');
      return;
    }
    setStatus('loading');
    try {
      const r = await join({ data: { email: trimmed, locale, source, hp } });
      if (!r.ok) setStatus('error');
      else setStatus(r.already ? 'already' : 'success');
      if (r.ok) setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={variant === 'block' ? 'space-y-4' : 'space-y-3'}>
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:border-b sm:border-graphite">
        {/* honeypot */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          aria-hidden="true"
          className="hidden"
        />
        <label className="sr-only" htmlFor={`wl-${source}`}>{t.waitlist.label}</label>
        <input
          id={`wl-${source}`}
          type="email"
          required
          placeholder={t.waitlist.placeholder}
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status !== 'idle') setStatus('idle'); }}
          className="flex-1 bg-transparent border-b border-graphite sm:border-0 py-3 px-1 outline-none placeholder:text-stone font-mono text-sm focus:border-moss"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="label-tag bg-graphite text-bone px-5 py-3 sm:py-0 hover:bg-moss transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? t.waitlist.submitting : t.waitlist.submit}
        </button>
      </form>
      <div className="min-h-[1.25rem] label-tag">
        {status === 'success' && <span className="text-moss">{t.waitlist.success}</span>}
        {status === 'already' && <span>{t.waitlist.already}</span>}
        {status === 'error' && <span className="text-destructive">{t.waitlist.error}</span>}
        {status === 'invalid' && <span className="text-destructive">{t.waitlist.invalid}</span>}
        {showCounter && status === 'idle' && count !== null && (
          <span>{t.waitlist.counter(count)}</span>
        )}
      </div>
    </div>
  );
}
