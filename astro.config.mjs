import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
const env = loadEnv(process.env.NODE_ENV || "production", process.cwd(), "");
export default defineConfig({
  site: env.SITE_ORIGIN || "https://moxinadvisory.com",
  output: "static",
  trailingSlash: "always",
});
