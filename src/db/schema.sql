-- Run this in Supabase SQL Editor

-- 1. Create Vehicles Table
create table if not exists vehicles (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  price text not null,
  "rawPrice" numeric not null,
  specs text not null,
  img text not null, -- Main image URL
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

-- 2. Create Storage Bucket
insert into storage.buckets (id, name, public) 
values ('vehicles', 'vehicles', true)
on conflict do nothing;

-- 3. Storage Policies (Allow Public Read, Authenticated Upload)
create policy "Public Access to Vehicle Images" 
  on storage.objects for select 
  using ( bucket_id = 'vehicles' );

create policy "Authenticated Users Can Upload Images" 
  on storage.objects for insert 
  with check ( bucket_id = 'vehicles' AND auth.role() = 'authenticated' );

-- 4. Table Policies (Allow Public Read, Authenticated Write)
alter table vehicles enable row level security;

create policy "Enable read access for all users" 
  on vehicles for select 
  using ( true );

create policy "Enable insert for authenticated users only" 
  on vehicles for insert 
  with check ( auth.role() = 'authenticated' );

create policy "Enable update for authenticated users only" 
  on vehicles for update 
  using ( auth.role() = 'authenticated' );

create policy "Enable delete for authenticated users only" 
  on vehicles for delete 
  using ( auth.role() = 'authenticated' );
