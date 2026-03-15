import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Truck, Shield, RotateCcw } from "lucide-react"
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
  const title = lang === "es" ? "Comprar Depiladora IPL | Mejores Precios y Envío Gratis" : "Buy IPL Hair Removal Device | Best Prices & Free Shipping"
  const description = lang === "es"
    ? "Compra tu depiladora láser IPL online. Desde 89€, con envío gratis, garantía de 2 años y 30 días de devolución. Las depiladoras IPL más recomendadas de 2026."
    : "Buy your IPL laser hair removal device online. From €89, with free shipping, 2-year warranty and 30-day returns. The most recommended IPL devices of 2026."
  return {
    title,
    description,
    keywords: lang === "es"
      ? "comprar depiladora IPL, depiladora IPL precio, depiladora laser barata, depiladora IPL online, mejor depiladora IPL calidad precio"
      : "buy IPL device, IPL device price, cheap IPL device, IPL online, best value IPL device",
    alternates: {
      canonical: `${BASE_URL}/${locale}/products`,
      languages: {
        es: `${BASE_URL}/es/products`,
        en: `${BASE_URL}/en/products`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/products`,
      type: "website",
    },
  }
}

export default async function ProductsPage({ params }: PageProps) {
  const { locale } = await params
  const lang = locale as Locale
  const dict = await getDictionary(lang)

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: lang === "es" ? "Depiladoras IPL" : "IPL Devices",
          description: lang === "es" ? "Colección completa de dispositivos de depilación IPL" : "Complete collection of IPL hair removal devices",
          url: `${BASE_URL}/${locale}/products`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: PRODUCTS.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${BASE_URL}/${locale}/products/${p.slug}`,
              name: p.name[lang],
            })),
          },
        }),
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: lang === "es" ? "Inicio" : "Home", item: `${BASE_URL}/${locale}` },
            { "@type": "ListItem", position: 2, name: lang === "es" ? "Productos" : "Products" },
          ],
        }),
      }}
    />
    {PRODUCTS.map((product) => (
    <section key={product.slug} className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative bg-secondary flex items-center justify-center p-8 lg:p-16">
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1.5 bg-foreground text-background text-[9px] tracking-[0.15em] uppercase z-10">
                {product.badge[lang]}
              </span>
            )}
            <Image
              src={product.images[0]}
              alt={product.name[lang]}
              width={600}
              height={600}
              className="w-full max-w-md object-contain"
              priority
            />
          </div>

          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">{product.tagline[lang]}</span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.05] mt-4">
              {product.name[lang]}
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
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

            <Link
              href={`/${locale}/products/${product.slug}`}
              className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-foreground/90 transition-all mt-8 w-full sm:w-auto justify-center"
            >
              {dict.products.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>

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

            <ul className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-border">
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
    </>
  )
}
