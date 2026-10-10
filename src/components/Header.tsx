import { Link } from '@tanstack/react-router'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart'

export function Header() {
  const { totalCount, open } = useCart()
  return (
    <header className="border-b hairline sticky top-0 bg-ink/90 backdrop-blur z-40">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-wider font-bold">JAEGER<span className="text-brass">.</span></Link>
        <nav className="hidden md:flex gap-8 text-xs font-semibold tracking-[0.2em] uppercase">
          <Link to="/winkel" className="hover:text-brass">Collectie</Link>
          <Link to="/vakmanschap" className="hover:text-brass">Vakmanschap</Link>
          <Link to="/contact" className="hover:text-brass">Contact</Link>
        </nav>
        <button onClick={open} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] border hairline px-4 py-2.5 hover:border-brass">
          <ShoppingBag size={16} /> Wagen ({totalCount})
        </button>
      </div>
    </header>
  )
}