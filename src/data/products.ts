export type Category = 'knipschaar' | 'effileerschaar' | 'set';

export const categoryLabels: Record<Category, string> = {
  knipschaar: 'Knipscharen',
  effileerschaar: 'Effileerscharen',
  set: 'Sets',
};

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  price: number;
  size: string;
  steel: string;
  hardness: string;
  handle: string;
  edge: string;
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
  badge?: string;
}

const products: Product[] = [
  {
    slug: 'kaiser-6-0',
    name: 'Kaiser 6.0"',
    tagline: 'Het vlaggeschip voor allround precisie.',
    category: 'knipschaar',
    price: 249,
    size: '6.0 inch',
    steel: 'Japans VG-10 kobaltstaal',
    hardness: '61 HRC',
    handle: 'Ergonomische offset',
    edge: 'Convex handgeslepen',
    image: '/img/kaiser.png',
    shortDescription: 'Onze best verkopende knipschaar met extreme scherpte voor slices en blunt cuts.',
    description: 'De Kaiser 6.0 is gebouwd voor de barber die geen compromissen sluit.',
    features: ['VG-10 Japans staal', 'Ergonomische offset greep', 'Kogellager schroef'],
    badge: 'Bestseller',
  },
  {
    slug: 'jaeger-7-0',
    name: 'Jäger 7.0"',
    tagline: 'Gemaakt voor schaar-over-kam.',
    category: 'knipschaar',
    price: 279,
    size: '7.0 inch',
    steel: 'ATS-314 staal',
    hardness: '62 HRC',
    handle: 'Straight / Classic',
    edge: 'Convex',
    image: '/img/jaeger-7.png',
    shortDescription: 'Lange bladen voor snelle, strakke fades en schaar-over-kam technieken.',
    description: 'De grotere broer van de Kaiser, speciaal geoptimaliseerd voor barbers.',
    features: ['7.0 inch lang blad', 'ATS-314 staal', 'Perfecte balans'],
  },
  {
    slug: 'wolf-effileer-6-0',
    name: 'Wolf Effileer 6.0"',
    tagline: 'Voor naadloze textuur en blending.',
    category: 'effileerschaar',
    price: 229,
    size: '6.0 inch (30 tanden)',
    steel: 'VG-10 staal',
    hardness: '60 HRC',
    handle: 'Offset',
    edge: 'V-tanden',
    image: '/img/wolf.png',
    shortDescription: 'Effileerschaar met 30 tanden voor subtiele textuur zonder happen.',
    description: 'De Wolf verwijdert 20-25% haar per haal en laat geen zichtbare lijnen achter.',
    features: ['30 V-vormige tanden', 'Zachte knipweerstand'],
  },
  {
    slug: 'damast-6-5',
    name: 'Damast 6.5"',
    tagline: 'Uniek handgesmeed damastpatroon.',
    category: 'knipschaar',
    price: 389,
    size: '6.5 inch',
    steel: '67-laags damaststaal',
    hardness: '62 HRC',
    handle: 'Ergonomisch',
    edge: 'Handgezoet convex',
    image: '/img/damast.png',
    shortDescription: 'Exclusieve limited edition schaar met een prachtig damastpatroon.',
    description: 'Elk exemplaar is uniek door de handgesmede damastlagen.',
    features: ['67 lagen damast', 'Limited edition (250 stuks)'],
    badge: 'Limited',
  },
];

export default products;

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}