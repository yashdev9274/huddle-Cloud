import { defineConfig } from "drizzle-kit";
import path from "path";


export default defineConfig({
    schema: path.resolve(__dirname, "../../packages/db/schema.ts"),
    dialect: "postgresql",
    out: path.resolve(__dirname, "./migrations"), // This will put migrations in apps/web/migrations
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
    },
    migrations: {
        table: "migrations",
        schema: "public"
    }
});
