import type { Config } from "drizzle-kit";

export default {
    schema: "./backend/db/schema.ts",
    out: "./backend/drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://postgres.mrwigfjcofqtnrcvgaap:Password321invision@aws-1-eu-north-1.pooler.supabase.com:6543/postgres",
    },
} satisfies Config;
