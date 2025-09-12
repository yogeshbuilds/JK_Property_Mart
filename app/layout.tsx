import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "JK Property Mart - Premium Real Estate in Faridabad",
  description:
    "Your trusted partner in Faridabad real estate with 20+ years of experience. Residential & Commercial properties from top builders like Omaxe, BPTP, Capital Group & Mansha Group.",
  keywords:
    "Faridabad real estate, property dealer, residential properties, commercial properties, Omaxe, BPTP, Mansha Group, Capital Group",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
