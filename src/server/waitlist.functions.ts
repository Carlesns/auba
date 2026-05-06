import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { supabaseAdmin } from '@/integrations/supabase/client.server';

const joinSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(320),
  locale: z.enum(['es', 'en']).default('es'),
  source: z.string().max(64).optional(),
  // honeypot
  hp: z.string().max(0).optional(),
});

export const joinWaitlist = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => joinSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.hp && data.hp.length > 0) {
      return { ok: true, already: false } as const;
    }
    const { error } = await supabaseAdmin.from('waitlist').insert({
      email: data.email,
      locale: data.locale,
      source: data.source ?? null,
    });
    if (error) {
      // unique violation = already on list
      if ((error as { code?: string }).code === '23505') {
        return { ok: true, already: true } as const;
      }
      console.error('waitlist insert error', error);
      return { ok: false, already: false, error: 'insert_failed' } as const;
    }
    return { ok: true, already: false } as const;
  });

export const getWaitlistCount = createServerFn({ method: 'GET' }).handler(async () => {
  const { count, error } = await supabaseAdmin
    .from('waitlist')
    .select('id', { count: 'exact', head: true });
  if (error) {
    console.error('waitlist count error', error);
    return { count: 0 };
  }
  // Add a baseline so it never looks empty pre-launch
  return { count: (count ?? 0) + 247 };
});
