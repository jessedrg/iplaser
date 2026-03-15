import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "IPL LASER",
  description: "Professional IPL hair removal devices",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
