// The public address of the site, used for canonical links, the share image and the sitemap.
// Set NEXT_PUBLIC_SITE_URL when deploying (for example https://tranh-dong-ho.example); on Vercel the
// deployment address is used, and on a laptop it is localhost.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");
