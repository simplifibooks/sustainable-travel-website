import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sustainable Travel for All | Eco-Friendly Adventures",
  description:
    "Discover sustainable travel experiences designed for families, seniors, and travelers with mobility needs. Expert guides to eco-friendly accommodations and responsible tourism.",
  keywords: [
    "sustainable travel",
    "eco-friendly tourism",
    "accessible travel",
    "family travel",
    "senior travel",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Sustainable Travel for All",
              "description": "Discover sustainable travel experiences designed for families, seniors, and travelers with mobility needs.",
              "url": "https://your-domain.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://your-domain.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "EcoTravel",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://your-domain.com/logo.png"
                }
              }
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background">
            <div className="z-50 relative">
              <Navigation />
            </div>
            <main className="container mx-auto px-4 py-6">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
