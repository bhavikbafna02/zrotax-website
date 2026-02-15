# Supabase Setup Instructions

To complete your authentication system, you need to configure your Supabase project.

## 1. Environment Variables
Add the following to your `.env.local` file (and Vercel environment variables):

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_ORIGIN=http://localhost:3000
```
*(On Vercel, set `NEXT_PUBLIC_ORIGIN` to your production URL, e.g., `https://zrotax-website.vercel.app`)*

## 2. Database Setup (SQL)
Go to the **SQL Editor** in your Supabase Dashboard and run the following script. This creates a `profiles` table that automatically syncs with `auth.users`, effectively giving you a public "users" table.

```sql
-- 1. Create profiles table
create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  email text,
  full_name text,
  role text default 'client',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  primary key (id)
);

-- 2. Enable RLS
alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- 3. Create Trigger to Sync Auth Users to Profiles
-- This function runs every time a user signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    coalesce(new.raw_user_meta_data->>'role', 'client')
  );
  return new;
end;
$$;

-- 4. Attach Trigger
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## 3. Auth Configuration
1. Go to **Authentication > URL Configuration**.
2. Add your **Site URL**: `http://localhost:3000` (and your Vercel URL).
3. Add **Redirect URLs**:
   - `http://localhost:3000/auth/callback`
   - `https://your-project.vercel.app/auth/callback`

## 4. Middleware
The `middleware.ts` file has been created to protect `/dashboard`. It redirects unauthenticated users to `/login`.

## 5. Deployment
When deploying to Vercel:
1. Push your code.
2. Go to Project Settings > Environment Variables.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Add `NEXT_PUBLIC_ORIGIN` (your production domain).

You are ready to go!
