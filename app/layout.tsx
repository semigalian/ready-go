import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ready Go - Armwrestling Reaction Trainer",
  description: "A reaction training app for armwrestling athletes. Improve your start time with randomized audio signals and customizable intervals.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.ico",
        sizes: "any",
        type: "image/x-icon"
      },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  other: {
    'fc:miniapp': JSON.stringify({
      version: 'next',
      imageUrl: 'https://traingo.xyz/og-image.png',
      button: {
        title: 'Launch Ready Go',
        action: {
          type: 'launch_miniapp',
          name: 'Ready Go',
          url: 'https://traingo.xyz',
          splashImageUrl: 'https://traingo.xyz/splash-image.png',
          splashBackgroundColor: '#1a1a1a',
        },
      },
    }),
    'base:app_id': '693950fbe6be54f5ed71d4fe',
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
