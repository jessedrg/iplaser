import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, Truck, Shield, Sparkles, RotateCcw } from "lucide-react"
import { type Locale, locales } from "@/lib/i18n"
import { getDictionary } from "@/lib/get-dictionary"
import { PRODUCTS, getProductBySlug, getAllProductSlugs } from "@/lib/products"
import ProductCheckout from "@/components/product-checkout"

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []
  for (const locale of locales) {
    for (const slug of getAllProductSlugs()) {
      params.push({ locale, slug })
    }
  }
  return params
}

const BASE_URL = "https://ipllaserstore.com"

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: "Not Found" }
  const lang = locale as Locale
  const title = `${product.name[lang]} — ${lang === "es" ? `Comprar por ${product.price}€ | Envío Gratis` : `Buy for €${product.price} | Free Shipping`}`
  return {
    title,
    description: product.description[lang],
    keywords: lang === "es"
      ? `${product.name.es}, comprar ${product.name.es}, depiladora IPL ${product.price}€, ${product.name.es} opiniones, depiladora laser`
      : `${product.name.en}, buy ${product.name.en}, IPL device €${product.price}, ${product.name.en} reviews, laser hair removal`,
    alternates: {
      canonical: `${BASE_URL}/${locale}/products/${slug}`,
      languages: {
        es: `${BASE_URL}/es/products/${slug}`,
        en: `${BASE_URL}/en/products/${slug}`,
      },
    },
    openGraph: {
      title,
      description: product.description[lang],
      url: `${BASE_URL}/${locale}/products/${slug}`,
      type: "website",
    },
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { locale, slug } = await params
  const lang = locale as Locale
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const dict = await getDictionary(lang)
  const otherProducts = PRODUCTS.filter((p) => p.slug !== slug)
  const hasMultipleImages = product.images.length > 1

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name[lang],
    description: product.description[lang],
    brand: { "@type": "Brand", name: "IPL Laser Store" },
    sku: product.slug,
    image: product.images.map((img) => `${BASE_URL}${img}`),
    url: `${BASE_URL}/${locale}/products/${product.slug}`,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      url: `${BASE_URL}/${locale}/products/${product.slug}`,
      seller: { "@type": "Organization", name: "IPL Laser Store" },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: 0, currency: "EUR" },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: ["ES", "DE", "FR", "IT", "NL", "PT", "GB"] },
        deliveryTime: { "@type": "ShippingDeliveryTime", handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2, unitCode: "d" }, transitTime: { "@type": "QuantitativeValue", minValue: 3, maxValue: 5, unitCode: "d" } },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.8,
      reviewCount: 347,
      bestRating: 5,
      worstRating: 1,
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: 5 },
        author: { "@type": "Person", name: lang === "es" ? "María G." : "Sarah M." },
        reviewBody: lang === "es" ? "Llevaba años gastando en depilación láser en clínica. Con este dispositivo he conseguido los mismos resultados en casa." : "I spent years paying for laser hair removal at clinics. This device gives the same results at home.",
      },
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: lang === "es" ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: lang === "es" ? "Productos" : "Products", item: `${BASE_URL}/${locale}/products` },
      { "@type": "ListItem", position: 3, name: product.name[lang] },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 lg:pt-32">
        <Link
          href={`/${locale}/products`}
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          {dict.products.tag}
        </Link>
      </div>

      {/* Product Detail */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Images */}
            <div className="space-y-4">
              <div className="bg-secondary flex items-center justify-center p-8 lg:p-12">
                <Image
                  src={product.images[0]}
                  alt={product.name[lang]}
                  width={600}
                  height={600}
                  className="w-full max-w-lg object-contain"
                  priority
                />
              </div>
              {hasMultipleImages && (
                <div className="bg-secondary flex items-center justify-center p-8 lg:p-12">
                  <Image
                    src={product.images[1]}
                    alt={`${product.name[lang]} — ${lang === "es" ? "vista detallada" : "detailed view"}`}
                    width={600}
                    height={600}
                    className="w-full max-w-lg object-contain"
                  />
                </div>
              )}
              {product.video && (
                <div className="bg-secondary overflow-hidden">
                  <video
                    src={product.video}
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
              )}
            </div>

            {/* Right: Info */}
            <div className="flex flex-col justify-center lg:sticky lg:top-32 lg:self-start">
              {product.badge && (
                <span className="inline-block w-fit px-3 py-1.5 bg-foreground text-background text-[9px] tracking-[0.15em] uppercase mb-4">
                  {product.badge[lang]}
                </span>
              )}
              <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">{product.tagline[lang]}</p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.1] mt-2">
                {product.name[lang]}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                {product.description[lang]}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-8">
                <span className="font-serif text-4xl text-foreground">{product.price}€</span>
                <span className="text-base text-muted-foreground line-through">{product.originalPrice}€</span>
                <span className="text-sm font-medium text-green-600">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              </div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-2">
                {lang === "es" ? "IVA incluido · Envío gratis a toda España" : "VAT included · Free shipping across Europe"}
              </p>

              {/* Checkout */}
              <ProductCheckout
                slug={product.slug}
                productName={product.name[lang]}
                price={product.price}
                originalPrice={product.originalPrice}
                lang={lang}
              />

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <Truck className="w-4 h-4 text-foreground" />
                  <span className="text-[10px] text-muted-foreground">{dict.products.freeShipping}</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <Shield className="w-4 h-4 text-foreground" />
                  <span className="text-[10px] text-muted-foreground">{dict.products.warranty}</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <RotateCcw className="w-4 h-4 text-foreground" />
                  <span className="text-[10px] text-muted-foreground">{lang === "es" ? "30 días devolución" : "30-day returns"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long Description */}
      <section className="border-t border-border py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-2xl text-foreground">
            {lang === "es" ? "Descripción completa" : "Full description"}
          </h2>
          <div className="mt-6 space-y-4">
            {product.longDescription[lang].split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-2xl text-foreground">{dict.products.features}</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {product.features[lang].map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-secondary">
                <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="border-t border-border py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-2xl text-foreground">{dict.products.specs}</h2>
          <div className="grid sm:grid-cols-2 gap-px bg-border mt-8">
            {product.specs.map((spec, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-background">
                <span className="text-xs text-muted-foreground">{spec.label[lang]}</span>
                <span className="text-sm text-foreground font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="border-t border-border bg-secondary py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-2xl text-foreground">{dict.products.includes}</h2>
          <ul className="grid sm:grid-cols-2 gap-3 mt-8">
            {product.includes[lang].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                <Sparkles className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="border-t border-border py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-2xl text-foreground">
            {lang === "es" ? "¿Quieres saber más sobre depilación IPL?" : "Want to learn more about IPL hair removal?"}
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            {lang === "es" ? "Lee nuestras guías y consejos para sacar el máximo partido a tu dispositivo." : "Read our guides and tips to get the most out of your device."}
          </p>
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-3 border border-border px-8 py-3 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-secondary transition-all text-foreground mt-6"
          >
            {lang === "es" ? "Ir al Blog" : "Go to Blog"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
