import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";
import path from "path";

// Explicitly load the root .env file
dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

console.log("DATABASE_URL:", process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set");
}

export default defineConfig({
  schema: "./src/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});