import type { APIRoute } from "astro";
import { site } from "../config";
export const GET: APIRoute = () =>
  new Response(
    site.indexing
      ? `User-agent: *\nAllow: /\nSitemap: ${new URL("/sitemap.xml", site.origin).href}\n`
      : "User-agent: *\nDisallow: /\n",
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
