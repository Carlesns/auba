
create table public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  locale text not null default 'es',
  source text,
  created_at timestamptz not null default now()
);

create unique index waitlist_email_unique on public.waitlist (lower(email));

alter table public.waitlist enable row level security;

-- Anyone (including anon) can insert their email
create policy "anyone can join waitlist"
  on public.waitlist for insert
  to anon, authenticated
  with check (
    email is not null
    and length(email) between 3 and 320
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    and locale in ('es','en')
  );

-- Read access denied to public; only service role (server) can read.
-- (no select policy = no rows visible to anon/authenticated)
