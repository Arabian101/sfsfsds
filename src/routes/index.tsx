import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Award, RefreshCcw, ShieldCheck, Truck } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'
import products from '@/data/products'
import { formatEuro } from '@/lib/format'

export const Route = createFileRoute('/')({
  component: Home,
})

const featured = products.filter((p) =>
  ['kaiser-6-0', 'jaeger-7-0', 'wolf-effileer-6-0'].includes(p.slug),
)
const limited = products.find((p) => p.slug === 'damast-6-5')!

const usps = [
  { icon: Award, title: 'Japans staal', text: 'VG-10, ATS-314 en damast tot 62 HRC' },
  { icon: RefreshCcw, title: 'Levenslang slijpen', text: 'Eerste beurt gratis, daarna vaste prijs' },
  { icon: Truck, title: 'Gratis verzending', text: 'Verzekerd, binnen 1–2 werkdagen' },
  { icon: ShieldCheck, title: '5 jaar garantie', text: 'Op materiaal- en productiefouten' },
]

const reviews = [
  {
    quote: 'Na tien jaar knippen dacht ik dat een schaar een schaar was. De Kaiser bewees het tegendeel — geen trekken, geen pijn in mijn pols.',
    name: 'Mehmet K.',
    shop: 'Barbershop Oost, Amsterdam',
  },
  {
    quote: 'De Jäger 7.0 is gemaakt voor schaar-over-kam. Lange, rustige halen en het blad blijft ongelooflijk lang scherp.',
    name: 'Sanne de V.',
    shop: 'Kapsalon Nobel, Utrecht',
  },
  {
    quote: 'Mijn hele team werkt inmiddels met JAEGER. De slijpservice is snel en de scharen komen terug alsof ze nieuw zijn.',
    name: 'Rico B.',
    shop: 'The Gentleman’s Cut, Rotterdam',
  },
]

function Home() {
  return (
    <>
      <section className="relative overflow-hidden grain">
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 min-h-[78vh] flex items-center py-24">
          <div className="max-w-xl">
            <p className="eyebrow rise">Professionele barberscharen</p>
            <h1 className="rise font-display text-6xl md:text-8xl leading-[0.95] mt-6" style={{ animationDelay: '0.1s' }}>
              Precisie die je <em className="text-brass not-italic md:italic">voelt</em>.
            </h1>
            <p className="rise mt-8 text-lg text-ivory/70 leading-relaxed max-w-md" style={{ animationDelay: '0.2s' }}>
              Handgeslepen scharen van Japans kobaltstaal, ontworpen met en voor barbers. Voor elke fade, elke lijn, elke dag.
            </p>
            <div className="rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
              <Link to="/winkel" className="btn-brass">Shop de collectie <ArrowRight size={16} /></Link>
              <Link to="/vakmanschap" className="btn-ghost">Ons vakmanschap</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-coal">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 lg:grid-cols-4">
          {usps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 py-8 px-2 md:px-6 items-start">
              <Icon className="text-brass shrink-0 mt-0.5" size={22} strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-ivory/50 mt-1">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-28">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow">De collectie</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Gekozen door barbers</h2>
          </div>
          <Link to="/winkel" className="hidden md:inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-brass hover:text-brass-light">
            Alle scharen <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-32">
        <div className="grid lg:grid-cols-12 bg-coal border hairline">
          <div className="lg:col-span-12 p-10 md:p-14 flex flex-col justify-center">
            <p className="eyebrow">Limited edition · 250 stuks</p>
            <h2 className="font-display text-5xl mt-4">{limited.name}</h2>
            <p className="mt-5 text-ivory/65 max-w-2xl leading-relaxed">{limited.shortDescription}</p>
            <dl className="mt-8 grid grid-cols-2 gap-6 text-sm max-w-md">
              <div>
                <dt className="text-steel text-xs uppercase tracking-[0.2em]">Staal</dt>
                <dd className="mt-1">{limited.steel}</dd>
              </div>
              <div>
                <dt className="text-steel text-xs uppercase tracking-[0.2em]">Hardheid</dt>
                <dd className="mt-1">{limited.hardness}</dd>
              </div>
            </dl>
            <div className="mt-10 flex items-center gap-6">
              <Link to="/producten/$slug" params={{ slug: limited.slug }} className="btn-brass">Ontdek de Damast</Link>
              <span className="font-display text-2xl">{formatEuro(limited.price)}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-36">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Uit de barbershop</p>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Professionals over JAEGER</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="border hairline p-8 bg-coal/50">
              <div className="text-brass tracking-[0.3em] text-sm">★★★★★</div>
              <blockquote className="mt-5 font-display text-xl leading-snug text-ivory/90">“{r.quote}”</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{r.name}</span>
                <span className="block text-ivory/45 text-xs mt-1">{r.shop}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}