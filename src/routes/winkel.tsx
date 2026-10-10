import { Link, createFileRoute } from '@tanstack/react-router'
import { ProductCard } from '@/components/ProductCard'
import products, { type Category, categoryLabels } from '@/data/products'

type Sort = 'aanbevolen' | 'prijs-laag' | 'prijs-hoog'

interface ShopSearch {
  categorie?: Category
  sorteer?: Sort
}

const sortLabels: Record<Sort, string> = {
  aanbevolen: 'Aanbevolen',
  'prijs-laag': 'Prijs: laag – hoog',
  'prijs-hoog': 'Prijs: hoog – laag',
}

export const Route = createFileRoute('/winkel')({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    categorie: typeof search.categorie === 'string' && search.categorie in categoryLabels ? (search.categorie as Category) : undefined,
    sorteer: typeof search.sorteer === 'string' && search.sorteer in sortLabels ? (search.sorteer as Sort) : undefined,
  }),
  head: () => ({
    meta: [{ title: 'Collectie — JAEGERscissors.nl' }],
  }),
  component: Shop,
})

function Shop() {
  const { categorie, sorteer = 'aanbevolen' } = Route.useSearch()

  const visible = products
    .filter((p) => !categorie || p.category === categorie)
    .sort((a, b) => (sorteer === 'prijs-laag' ? a.price - b.price : sorteer === 'prijs-hoog' ? b.price - a.price : 0))

  const filters: Array<{ value?: Category; label: string }> = [
    { value: undefined, label: 'Alles' },
    ...(Object.keys(categoryLabels) as Array<Category>).map((value) => ({ value, label: categoryLabels[value] })),
  ]

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16">
      <header className="max-w-2xl">
        <p className="eyebrow">Collectie</p>
        <h1 className="font-display text-5xl md:text-6xl mt-3">{categorie ? categoryLabels[categorie] : 'Alle barberscharen'}</h1>
        <p className="mt-5 text-ivory/60 leading-relaxed">
          Iedere schaar wordt met de hand geslepen en geleverd met lederen etui, onderhoudsset en levenslange slijpservice.
        </p>
      </header>

      <div className="mt-12 flex flex-wrap gap-2 border-y hairline py-5">
        {filters.map((f) => {
          const active = f.value === categorie
          return (
            <Link
              key={f.label}
              to="/winkel"
              search={(prev) => ({ ...prev, categorie: f.value })}
              className={`px-4 py-2 text-[0.7rem] font-bold tracking-[0.18em] uppercase border transition-colors ${
                active ? 'bg-ivory text-ink border-ivory' : 'border-ivory/20 text-ivory/70 hover:border-brass hover:text-ivory'
              }`}
            >
              {f.label}
            </Link>
          )
        })}
      </div>

      <div className="mt-8 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  )
}