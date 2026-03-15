import type { MetadataRoute } from "next"
import { locales } from "@/lib/i18n"
import { getAllProductSlugs } from "@/lib/products"
import { getAllBlogSlugs } from "@/lib/blog-data"

const BASE_URL = "https://ipllaserstore.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    // Homepage
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    })

    // Products index
    entries.push({
      url: `${BASE_URL}/${locale}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    })

    // Individual products
    for (const slug of getAllProductSlugs()) {
      entries.push({
        url: `${BASE_URL}/${locale}/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      })
    }

    // Blog index
    entries.push({
      url: `${BASE_URL}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })

    // Blog posts
    for (const slug of getAllBlogSlugs()) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    }
  }

  return entries
}
