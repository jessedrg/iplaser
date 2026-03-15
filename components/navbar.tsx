"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import type { Dictionary } from "@/lib/get-dictionary"

interface NavbarProps {
  locale: Locale
  dict: Dictionary
}

export function Navbar({ locale, dict }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const otherLocale = locale === "es" ? "en" : "es"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-serif text-xl tracking-tight text-foreground">
          IPL Laser Store
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href={`/${locale}`} className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            {dict.nav.home}
          </Link>
          <Link href={`/${locale}/products`} className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            {dict.nav.products}
          </Link>
          <Link href={`/${locale}/blog`} className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            {dict.nav.blog}
          </Link>
          <Link href={`/${otherLocale}`} className="text-[11px] tracking-[0.15em] uppercase text-foreground border border-border px-3 py-1.5 hover:bg-secondary transition-colors">
            {dict.nav.language}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link href={`/${locale}`} onClick={() => setOpen(false)} className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
              {dict.nav.home}
            </Link>
            <Link href={`/${locale}/products`} onClick={() => setOpen(false)} className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
              {dict.nav.products}
            </Link>
            <Link href={`/${locale}/blog`} onClick={() => setOpen(false)} className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
              {dict.nav.blog}
            </Link>
            <Link href={`/${otherLocale}`} onClick={() => setOpen(false)} className="text-[11px] tracking-[0.15em] uppercase text-foreground border border-border px-3 py-1.5 w-fit">
              {dict.nav.language}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
