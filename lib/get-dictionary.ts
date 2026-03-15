import type { Locale } from "./i18n"
import es from "./dictionaries/es"
import en from "./dictionaries/en"

const dictionaries = { es, en }

export async function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries.es
}

export type Dictionary = typeof es
