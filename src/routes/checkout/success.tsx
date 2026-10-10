import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/success')({
  component: () => (
    <div className="max-w-xl mx-auto px-5 py-32 text-center">
      <p className="eyebrow">Bestelling gelukt</p>
      <h1 className="font-display text-4xl mt-3">Bedankt voor je bestelling!</h1>
      <p className="mt-4 text-ivory/60">Je ontvangt een bevestiging per e-mail.</p>
      <Link to="/winkel" className="btn-brass mt-8">Verder winkelen</Link>
    </div>
  ),
})