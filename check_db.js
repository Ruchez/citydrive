import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pilsfxmhgyliebcrmfgm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpbHNmeG1oZ3lsaWViY3JtZmdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0ODEzNjYsImV4cCI6MjA4NjA1NzM2Nn0.Tx2TvWuo2Eu-213SJEOKwGxw8iS1B6yd4gym33GCEFo'

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkVehicles() {
    console.log('Checking vehicles...');
    const { data, error } = await supabase
        .from('vehicles')
        .select('*');

    if (error) {
        console.error('Error:', error);
    } else {
        console.log(`Found ${data.length} vehicles.`);
        console.log(JSON.stringify(data, null, 2));
    }
}

checkVehicles();
