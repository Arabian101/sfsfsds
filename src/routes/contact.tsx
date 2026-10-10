import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: () => (
    <div className="max-w-xl mx-auto px-5 py-24">
      <p className="eyebrow">Contact</p>
      <h1 className="font-display text-4xl mt-3">Neem contact op</h1>
      <p className="mt-4 text-ivory/60">Heb je een vraag over een schaar of de slijpservice? We helpen je graag.</p>
    </div>
  ),
})