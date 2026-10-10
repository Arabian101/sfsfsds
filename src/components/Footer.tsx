import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="border-t hairline mt-32 bg-coal py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="font-display text-2xl font-bold">JAEGER<span className="text-brass">.</span></span>
          <p className="text-xs text-ivory/50 mt-2">Professionele barberscharen van Japans staal.</p>
        </div>
        <div className="flex gap-8 text-xs text-ivory/70">
          <Link to="/winkel" className="hover:text-brass">Collectie</Link>
          <Link to="/vakmanschap" className="hover:text-brass">Vakmanschap</Link>
          <Link to="/contact" className="hover:text-brass">Contact</Link>
        </div>
      </div>
    </footer>
  )
}