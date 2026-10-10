import { useCart } from '@/lib/cart'
import { formatEuro } from '@/lib/format'
import { X } from 'lucide-react'

export function CartDrawer() {
  const { isOpen, close, items, subtotal } = useCart()
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-ink/70" onClick={close} />
      <div className="relative w-full max-w-md bg-coal h-full flex flex-col p-6 slide-in">
        <div className="flex justify-between items-center border-b hairline pb-4">
          <h2 className="font-display text-2xl">Winkelwagen</h2>
          <button onClick={close}><X size={20} /></button>
        </div>
        <div className="flex-1 overflow-y-auto py-6 space-y-4">
          {items.length === 0 ? (
            <p className="text-ivory/50 text-sm">Je winkelwagen is leeg.</p>
          ) : (
            items.map((i) => (
              <div key={i.product.slug} className="flex justify-between text-sm">
                <div>
                  <p className="font-semibold">{i.product.name}</p>
                  <p className="text-xs text-ivory/50">Aantal: {i.quantity}</p>
                </div>
                <span>{formatEuro(i.product.price * i.quantity)}</span>
              </div>
            ))
          )}
        </div>
        <div className="border-t hairline pt-4">
          <div className="flex justify-between text-base font-semibold">
            <span>Subtotaal</span>
            <span>{formatEuro(subtotal)}</span>
          </div>
          <button className="btn-brass w-full mt-6">Naar kassa</button>
        </div>
      </div>
    </div>
  )
}