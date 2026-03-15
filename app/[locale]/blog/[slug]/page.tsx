import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { type Locale, locales } from "@/lib/i18n"
import { getDictionary } from "@/lib/get-dictionary"
import { ALL_BLOG_POSTS, getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog-data"
import { PRODUCTS } from "@/lib/products"

const BASE_URL = "https://ipllaserstore.com"

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []
  for (const locale of locales) {
    for (const slug of getAllBlogSlugs()) {
      params.push({ locale, slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: "Not Found" }
  const lang = locale as Locale
  return {
    title: post.title[lang],
    description: post.description[lang],
    keywords: post.keywords[lang],
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog/${slug}`,
      languages: {
        es: `${BASE_URL}/es/blog/${slug}`,
        en: `${BASE_URL}/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title[lang],
      description: post.description[lang],
      url: `${BASE_URL}/${locale}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["IPL LASER"],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params
  const lang = locale as Locale
  const post = getBlogPostBySlug(slug)
  const dict = await getDictionary(lang)

  if (!post) {
    return <div className="pt-32 text-center">Post not found</div>
  }

  const faqItems = post.sections.filter((s) => s.heading[lang].includes("?"))
  const sameCategoryPosts = ALL_BLOG_POSTS.filter((p) => p.slug !== slug && p.category.es === post.category.es)
  const otherPosts = ALL_BLOG_POSTS.filter((p) => p.slug !== slug && p.category.es !== post.category.es)
  const relatedPosts = [...sameCategoryPosts, ...otherPosts].slice(0, 3)

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: lang === "es" ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/${locale}/blog` },
      { "@type": "ListItem", position: 3, name: post.title[lang] },
    ],
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[lang],
    description: post.description[lang],
    datePublished: post.date,
    author: { "@type": "Organization", name: "IPL Laser Store" },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.heading[lang],
                acceptedAnswer: { "@type": "Answer", text: item.content[lang] },
              })),
            }),
          }}
        />
      )}

      <article className="pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-8">
            <Link href={`/${locale}/blog`} className="hover:text-foreground transition-colors">
              {dict.blog.backToBlog}
            </Link>
            <span>/</span>
            <span className="text-foreground">{post.category[lang]}</span>
          </div>

          {/* Header */}
          <div className="flex items-center gap-3 text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-border rounded-full" />
            <span>{post.readTime} {dict.blog.readTime}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.1] mt-4">
            {post.title[lang]}
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4">
            {post.description[lang]}
          </p>

          {/* Content */}
          <div className="mt-12 space-y-10">
            {post.sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-serif text-xl lg:text-2xl text-foreground leading-snug">
                  {section.heading[lang]}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                  {section.content[lang]}
                </p>
              </div>
            ))}
          </div>

          {/* Recommended Products */}
          <div className="mt-16 p-8 border border-border">
            <h3 className="font-serif text-xl text-foreground">
              {lang === "es" ? "Dispositivos IPL Recomendados" : "Recommended IPL Devices"}
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {PRODUCTS.map((p) => (
                <Link key={p.slug} href={`/${locale}/products/${p.slug}`} className="group p-4 bg-secondary hover:bg-secondary/70 transition-colors">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">{p.tagline[lang]}</p>
                  <p className="font-serif text-base text-foreground mt-1">{p.name[lang]}</p>
                  <p className="text-xs text-muted-foreground mt-1">{lang === "es" ? "Desde" : "From"} {p.price}€</p>
                  <span className="flex items-center gap-1 mt-2 text-[9px] tracking-[0.15em] uppercase text-foreground group-hover:gap-2 transition-all">
                    {dict.products.viewProduct} <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-10 p-8 bg-foreground text-background">
            <h3 className="font-serif text-xl">{dict.cta.title}</h3>
            <p className="text-sm opacity-70 mt-2">{dict.cta.subtitle}</p>
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-3 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-background/90 transition-all mt-4"
            >
              {dict.cta.button}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="font-serif text-xl text-foreground">{dict.blog.relatedPosts}</h3>
              <div className="grid sm:grid-cols-3 gap-px bg-border mt-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/${locale}/blog/${rp.slug}`}
                    className="group bg-background p-6"
                  >
                    <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">{rp.category[lang]}</p>
                    <h4 className="font-serif text-lg text-foreground mt-1 leading-snug">{rp.title[lang]}</h4>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{rp.description[lang]}</p>
                    <span className="flex items-center gap-2 mt-3 text-[10px] tracking-[0.15em] uppercase text-foreground group-hover:gap-3 transition-all">
                      {dict.blog.readMore}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  )
}
