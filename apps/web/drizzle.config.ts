import { type Config } from "drizzle-kit"

export default {
    schema: "../../packages/db/schema.ts",
    // dialect:""
    out: "migrations",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL as String,
    },


}