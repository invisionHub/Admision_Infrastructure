import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";


const pool = new Pool({
    connectionString: "postgresql://postgres.mrwigfjcofqtnrcvgaap:Password321invision@aws-1-eu-north-1.pooler.supabase.com:6543/postgres",
});


export const database = drizzle(pool);
