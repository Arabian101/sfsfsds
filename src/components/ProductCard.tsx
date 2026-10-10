import { Link } from '@tanstack/react-router'
import { formatEuro } from '@/lib/format'
import type { Product } from '@/data/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to="/producten/$slug" params={{ slug: product.slug }} className="group block">
      <div className="relative bg-coal aspect-[4/3] overflow-hidden flex items-center justify-center border hairline">
        <span className="font-display text-2xl text-ivory/30 group-hover:text-brass transition-colors">{product.name}</span>
      </div>
      <div className="mt-4 flex justify-between items-baseline">
        <h3 className="font-display text-xl group-hover:text-brass transition-colors">{product.name}</h3>
        <span className="font-mono text-sm">{formatEuro(product.price)}</span>
      </div>
      <p className="text-xs text-ivory/50 mt-1">{product.steel} · {product.size}</p>
    </Link>
  )
}