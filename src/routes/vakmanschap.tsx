import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/vakmanschap')({
  head: () => ({
    meta: [{ title: 'Vakmanschap & slijpservice — JAEGERscissors.nl' }],
  }),
  component: Craft,
})

function Craft() {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-24">
      <p className="eyebrow">Vakmanschap</p>
      <h1 className="font-display text-5xl md:text-6xl mt-3">48 handelingen. Eén perfecte snede.</h1>
      <p className="mt-6 text-ivory/70 max-w-2xl leading-relaxed">
        Elke JAEGER-schaar wordt met de hand geslepen op Japanse wetstenen en getest op nat en droog haar.
      </p>
    </div>
  )
}