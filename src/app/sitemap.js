export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const routes = ["", "products", "blog", "about", "contact"].map((path) => ({
    url: `${baseUrl}/${path}`.replace(/\/$/, "/"),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  return routes;
}
