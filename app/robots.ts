import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://webclick.com.br" // Replace with your actual domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
