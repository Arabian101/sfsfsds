import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/cancel')({
  component: () => (
    <div className="max-w-xl mx-auto px-5 py-32 text-center">
      <p className="eyebrow">Geannuleerd</p>
      <h1 className="font-display text-4xl mt-3">Bestelling geannuleerd</h1>
      <p className="mt-4 text-ivory/60">Er is geen betaling in rekening gebracht.</p>
      <Link to="/winkel" className="btn-brass mt-8">Terug naar winkel</Link>
    </div>
  ),
})