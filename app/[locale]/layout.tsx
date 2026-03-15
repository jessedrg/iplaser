import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { locales, type Locale } from "@/lib/i18n"
import { getDictionary } from "@/lib/get-dictionary"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppBubble } from "@/components/whatsapp-bubble"

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const BASE_URL = "https://ipllaserstore.com"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale as Locale)
  return {
    title: {
      default: dict.meta.title,
      template: `%s | IPL Laser Store`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        es: `${BASE_URL}/es`,
        en: `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/es`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_ES",
      url: `${BASE_URL}/${locale}`,
      siteName: "IPL Laser Store",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const dict = await getDictionary(locale as Locale)

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IPL Laser Store",
              url: BASE_URL,
              logo: `${BASE_URL}/logo.png`,
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["Spanish", "English"],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "IPL Laser Store",
              url: BASE_URL,
              inLanguage: ["es", "en"],
              potentialAction: {
                "@type": "SearchAction",
                target: `${BASE_URL}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Navbar locale={locale as Locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
        <WhatsAppBubble />
      </body>
    </html>
  )
}
