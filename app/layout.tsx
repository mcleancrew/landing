import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "McLean Million Meters - New Website Coming Soon",
  description:
    "McLean Million Meters is moving to a new and improved website. Visit our new site for the latest updates on rowing programs and events.",
  keywords: "McLean Million Meters, rowing, new website, McLean rowing club",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
