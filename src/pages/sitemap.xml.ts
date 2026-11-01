import type { APIRoute } from "astro";
import { site, services } from "../config";
export const GET: APIRoute = () => {
  const paths = [
    "/",
    "/services/",
    "/who-we-help/",
    "/about/",
    "/contact/",
    "/privacy/",
    ...services.map((s) => `/services/${s.slug}/`),
  ];
  const escape = (s: string) =>
    s
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll('"', "&quot;");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${escape(new URL(path, site.origin).href)}</loc></url>`).join("")}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
