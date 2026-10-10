import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { CartDrawer } from '@/components/CartDrawer'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CartProvider } from '@/lib/cart'
import '../styles.css'

const siteName = 'JAEGERscissors.nl — Premium barberscharen'
const siteDescription = 'Professionele high-end barberscharen van Japans staal. Handgeslepen, levenslange slijpservice en gratis verzending in Nederland en België.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteName },
      { name: 'description', content: siteDescription },
      { name: 'theme-color', content: '#0b0b0c' },
      { property: 'og:title', content: siteName },
      { property: 'og:description', content: siteDescription },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600;700&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-5 py-40 text-center">
      <p className="eyebrow">404</p>
      <h1 className="font-display text-5xl mt-4">Deze pagina is weggeknipt</h1>
      <p className="mt-4 text-ivory/60">De pagina die je zoekt bestaat niet (meer).</p>
      <Link to="/winkel" className="btn-brass mt-10">Naar de collectie</Link>
    </div>
  )
}