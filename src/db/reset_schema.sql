-- RUN THIS IN SUPABASE SQL EDITOR

-- 1. Reset the Table (Drop if exists)
drop table if exists vehicles cascade;

-- 2. Create Vehicles Table (Correct Schema)
create table vehicles (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  price text not null,
  "rawPrice" numeric not null,
  specs text not null,
  img text not null, 
  images text[] default array[]::text[],
  year numeric,
  mileage text,
  "engineSize" text,
  "fuelType" text,
  transmission text,
  drive text,
  "horsePower" text,
  torque text,
  aspiration text,
  acceleration text,
  description text,
  "conditionScore" numeric,
  location text,
  availability text default 'Available',
  "sellerType" text default 'Verified Dealer'
);

-- 3. Create Storage Bucket (If not exists)
insert into storage.buckets (id, name, public) 
values ('vehicles', 'vehicles', true)
on conflict do nothing;

-- 4. Storage Policies
drop policy if exists "Public Access to Vehicle Images" on storage.objects;
create policy "Public Access to Vehicle Images" 
  on storage.objects for select 
  using ( bucket_id = 'vehicles' );

drop policy if exists "Authenticated Users Can Upload Images" on storage.objects;
create policy "Authenticated Users Can Upload Images" 
  on storage.objects for insert 
  with check ( bucket_id = 'vehicles' AND auth.role() = 'authenticated' );

-- 5. Table Policies (Allow Public Read, Authenticated Write)
alter table vehicles enable row level security;

create policy "Enable read access for all users" 
  on vehicles for select 
  using ( true );

create policy "Enable all access for authenticated users" 
  on vehicles for all 
  using ( auth.role() = 'authenticated' );
