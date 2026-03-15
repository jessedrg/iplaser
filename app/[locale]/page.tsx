import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Star, Zap, Shield, Sparkles, BadgeEuro, ChevronDown } from "lucide-react"
import { type Locale } from "@/lib/i18n"
import { getDictionary } from "@/lib/get-dictionary"
import { PRODUCTS } from "@/lib/products"

const BASE_URL = "https://ipllaserstore.com"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const lang = locale as Locale
  const dict = await getDictionary(lang)
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        es: `${BASE_URL}/es`,
        en: `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/es`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${BASE_URL}/${locale}`,
      type: "website",
    },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  const lang = locale as Locale
  const dict = await getDictionary(lang)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 lg:left-1/2 z-0">
          <Image
            src="/hero.jpg"
            alt={lang === "es" ? "Mujer usando depiladora IPL en casa" : "Woman using IPL hair removal device at home"}
            fill
            className="object-cover object-center opacity-20 lg:opacity-100"
            priority
          />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans">
              {dict.hero.tag}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl tracking-tight text-foreground leading-[1.05] mt-6">
              {dict.hero.title}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed mt-6 max-w-xl">
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href={`/${locale}/products`}
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-foreground/90 transition-all"
              >
                {dict.hero.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-3 border border-border px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-secondary transition-all text-foreground"
              >
                {dict.hero.ctaSecondary}
              </a>
            </div>
            <div className="flex gap-12 mt-14 pt-8 border-t border-border">
              {dict.hero.stats.map((stat, i) => (
                <div key={i}>
                  <p className="font-serif text-2xl lg:text-3xl text-foreground">{stat.value}</p>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Video */}
      {PRODUCTS.find((p) => p.video) && (
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
            <div className="text-center mb-10">
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans">
                {lang === "es" ? "Vélo en acción" : "See it in action"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.1] mt-4">
                {lang === "es" ? "Tecnología IPL profesional, en tus manos" : "Professional IPL technology, in your hands"}
              </h2>
            </div>
            <div className="overflow-hidden bg-secondary">
              <video
                src={PRODUCTS.find((p) => p.video)!.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full"
              >
                <track kind="captions" />
              </video>
            </div>
          </div>
        </section>
      )}

      {/* Product Hero */}
      {PRODUCTS.map((product) => (
      <section key={product.slug} className="border-t border-border py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative bg-secondary flex items-center justify-center p-8 lg:p-12">
              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-foreground text-background text-[9px] tracking-[0.15em] uppercase z-10">
                  {product.badge[lang]}
                </span>
              )}
              <Image
                src={product.images[0]}
                alt={product.name[lang]}
                width={500}
                height={500}
                className="w-full max-w-md object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans">
                {product.tagline[lang]}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.1] mt-4">
                {product.name[lang]}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-lg">
                {product.description[lang]}
              </p>
              <div className="flex items-baseline gap-3 mt-8">
                <span className="font-serif text-4xl lg:text-5xl text-foreground">{product.price}€</span>
                <span className="text-base text-muted-foreground line-through">{product.originalPrice}€</span>
                <span className="text-sm font-medium text-green-600">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              </div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-2">
                {lang === "es" ? "IVA incluido · Envío gratis a toda España" : "VAT included · Free shipping across Europe"}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href={`/${locale}/products/${product.slug}`}
                  className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-foreground/90 transition-all"
                >
                  {dict.products.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <ul className="grid grid-cols-2 gap-3 mt-8 pt-8 border-t border-border">
                {product.features[lang].slice(0, 6).map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-foreground flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      ))}

      {/* Features */}
      <section className="border-t border-border bg-secondary py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans">
            {dict.features.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-foreground leading-[1.1] mt-4">
            {dict.features.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-12">
            {dict.features.items.map((item, i) => {
              const icons = [Zap, Sparkles, Shield, BadgeEuro]
              const Icon = icons[i]
              return (
                <div key={i} className="bg-secondary p-8">
                  <Icon className="w-5 h-5 text-foreground" />
                  <h3 className="font-serif text-lg text-foreground mt-4">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="border-t border-border py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans">
            {dict.howItWorks.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-foreground leading-[1.1] mt-4">
            {dict.howItWorks.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {dict.howItWorks.steps.map((step, i) => (
              <div key={i} className="relative">
                <span className="font-serif text-5xl text-border">{step.number}</span>
                <h3 className="font-serif text-xl text-foreground mt-4">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-t border-border bg-secondary py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans">
            {dict.reviews.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-foreground leading-[1.1] mt-4">
            {dict.reviews.title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-px bg-border mt-12">
            {dict.reviews.items.map((review, i) => (
              <div key={i} className="bg-secondary p-8 lg:p-10">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mt-4 italic font-serif">"{review.text}"</p>
                <div className="mt-4">
                  <p className="text-xs text-foreground font-medium">{review.name}</p>
                  <p className="text-[10px] text-muted-foreground">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans">
            {dict.faq.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-foreground leading-[1.1] mt-4">
            {dict.faq.title}
          </h2>
          <div className="mt-12 divide-y divide-border">
            {dict.faq.items.map((item, i) => (
              <details key={i} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-serif text-lg text-foreground pr-4">{item.question}</h3>
                  <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight leading-[1.1]">
            {dict.cta.title}
          </h2>
          <p className="text-sm opacity-70 mt-4">{dict.cta.subtitle}</p>
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-background/90 transition-all mt-8"
          >
            {dict.cta.button}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: dict.faq.items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
    </>
  )
}
