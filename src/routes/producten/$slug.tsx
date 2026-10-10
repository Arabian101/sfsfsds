import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ChevronLeft, Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { ProductCard } from '@/components/ProductCard'
import products, { categoryLabels, getProduct } from '@/data/products'
import { MAX_QUANTITY, useCart } from '@/lib/cart'
import { formatEuro } from '@/lib/format'

export const Route = createFileRoute('/producten/$slug')({
  loader: ({ params }) => {
    const product = getProduct(params.slug)
    if (!product) throw notFound()
    return product
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `JAEGER ${loaderData.name} — JAEGERscissors.nl` }] : [],
  }),
  component: ProductPage,
})

function ProductPage() {
  const product = Route.useLoaderData()
  const { add } = useCart()
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 pt-10">
      <nav className="text-xs text-ivory/50 flex items-center gap-2">
        <Link to="/winkel" className="inline-flex items-center gap-1 hover:text-ivory"><ChevronLeft size={14} /> Collectie</Link>
      </nav>
      <div className="mt-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <h1 className="font-display text-5xl md:text-6xl mt-3">{product.name}</h1>
          <p className="mt-4 text-ivory/70">{product.tagline}</p>
          <p className="mt-8 font-display text-4xl">{formatEuro(product.price)}</p>
          <div className="mt-10 flex gap-3">
            <div className="flex items-center border border-ivory/20">
              <button className="px-4 h-full hover:text-brass" onClick={() => setQuantity((q) => Math.max(1, q - 1))}><Minus size={16} /></button>
              <span className="w-8 text-center">{quantity}</span>
              <button className="px-4 h-full hover:text-brass" onClick={() => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))}><Plus size={16} /></button>
            </div>
            <button onClick={() => { add(product.slug, quantity); setQuantity(1); }} className="btn-brass flex-1">In winkelwagen</button>
          </div>
        </div>
      </div>
    </div>
  )
}