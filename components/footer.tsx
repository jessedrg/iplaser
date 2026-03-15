import Link from "next/link"
import type { Locale } from "@/lib/i18n"
import type { Dictionary } from "@/lib/get-dictionary"

interface FooterProps {
  locale: Locale
  dict: Dictionary
}

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="font-serif text-2xl tracking-tight text-foreground">
              IPL Laser Store
            </Link>
            <p className="text-sm text-muted-foreground mt-4 max-w-sm leading-relaxed">
              {dict.footer.tagline}
            </p>
            <p className="text-xs text-muted-foreground mt-4">{dict.footer.shipping}</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-foreground mb-4">{dict.footer.products}</p>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/products/ipl-sapphire-ice-pro`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">IPL Sapphire Ice Pro</Link></li>
              <li><Link href={`/${locale}/products/ipl-pro-max`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">IPL Pro Max</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-foreground mb-4">{dict.footer.legal}</p>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/blog`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{dict.nav.blog}</Link></li>
              <li><span className="text-sm text-muted-foreground">{dict.footer.privacy}</span></li>
              <li><span className="text-sm text-muted-foreground">{dict.footer.terms}</span></li>
              <li><span className="text-sm text-muted-foreground">{dict.footer.returns}</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8">
          <p className="text-xs text-muted-foreground">{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
