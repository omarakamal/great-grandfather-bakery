export default function sitemap() {
  const baseUrl = "https://great-grandfather-bakery.netlify.app/";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority:1
    },
  ];
}
