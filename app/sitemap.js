const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://anytechsolution.netlify.app";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
