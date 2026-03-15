import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { type Locale } from "@/lib/i18n"
import { getDictionary } from "@/lib/get-dictionary"
import { ALL_BLOG_POSTS } from "@/lib/blog-data"

interface PageProps {
  params: Promise<{ locale: string }>
}

const BASE_URL = "https://ipllaserstore.com"

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const lang = locale as Locale
  const dict = await getDictionary(lang)
  const title = lang === "es"
    ? "Blog de Depilación IPL: Guías, Comparativas y Consejos"
    : "IPL Hair Removal Blog: Guides, Comparisons and Tips"
  const description = dict.blog.subtitle
  return {
    title,
    description,
    keywords: lang === "es"
      ? "blog depilacion IPL, guia depiladora laser, comparativa IPL, consejos depilacion laser casa, IPL opiniones"
      : "IPL hair removal blog, laser hair removal guide, IPL comparison, at home laser tips, IPL reviews",
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog`,
      languages: {
        es: `${BASE_URL}/es/blog`,
        en: `${BASE_URL}/en/blog`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/blog`,
      type: "website",
    },
  }
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params
  const lang = locale as Locale
  const dict = await getDictionary(lang)

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">{dict.blog.tag}</span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.05] mt-4">
          {dict.blog.title}
        </h1>
        <p className="text-sm text-muted-foreground mt-4 max-w-lg">{dict.blog.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-px bg-border mt-14">
          {ALL_BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="group bg-background p-8 lg:p-10 flex flex-col"
            >
              <div className="flex items-center gap-3 text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                <span>{post.category[lang]}</span>
                <span className="w-1 h-1 bg-border rounded-full" />
                <span>{post.readTime} {dict.blog.readTime}</span>
              </div>
              <h2 className="font-serif text-xl lg:text-2xl text-foreground mt-3 leading-snug">
                {post.title[lang]}
              </h2>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed line-clamp-2">
                {post.description[lang]}
              </p>
              <div className="flex items-center gap-2 mt-6 text-[10px] tracking-[0.15em] uppercase text-foreground group-hover:gap-3 transition-all">
                {dict.blog.readMore}
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
