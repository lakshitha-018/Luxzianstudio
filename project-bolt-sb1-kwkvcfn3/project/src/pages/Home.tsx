import { Link } from 'react-router-dom';
import {
  Flower2,
  Palette,
  Gift,
  ArrowRight,
  Sparkles,
  Heart,
  HandHeart,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { products, categoryLabels, occasionLabels } from '@/data/products';
import type { Category, Occasion } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { siteConfig } from '@/data/siteConfig';

const heroImage =
  'https://images.pexels.com/photos/35468616/pexels-photo-35468616.jpeg?auto=compress&cs=tinysrgb&h=1200&w=940';
const aboutImage =
  'https://images.pexels.com/photos/34398720/pexels-photo-34398720.jpeg?auto=compress&cs=tinysrgb&h=800&w=940';

const categories: {
  id: Category;
  icon: typeof Flower2;
  desc: string;
  image: string;
}[] = [
  {
    id: 'pipe-cleaner-flowers',
    icon: Flower2,
    desc: 'Everlasting blooms sculpted by hand',
    image:
      'https://images.pexels.com/photos/38363696/pexels-photo-38363696.jpeg?auto=compress&cs=tinysrgb&h=600&w=940',
  },
  {
    id: 'paintings',
    icon: Palette,
    desc: 'One-of-a-kind original artwork',
    image:
      'https://images.pexels.com/photos/6925162/pexels-photo-6925162.jpeg?auto=compress&cs=tinysrgb&h=600&w=940',
  },
  {
    id: 'customized-gifts',
    icon: Gift,
    desc: 'Curated combinations, beautifully wrapped',
    image:
      'https://images.pexels.com/photos/13975271/pexels-photo-13975271.jpeg?auto=compress&cs=tinysrgb&h=600&w=940',
  },
];

const occasions: Occasion[] = [
  'birthdays',
  'anniversaries',
  'valentines-day',
  'mothers-day',
  'graduations',
  'weddings',
  'just-because',
];

const occasionIcons: Record<Occasion, string> = {
  birthdays: '🎂',
  anniversaries: '💍',
  'valentines-day': '❤️',
  'mothers-day': '🌷',
  graduations: '🎓',
  weddings: '💐',
  'just-because': '✨',
};

export default function Home() {
  useReveal();
  const featured = products.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Handmade pipe-cleaner flowers in a decorative box"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream-50/95 via-cream-50/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream-50/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
          <div className="max-w-xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50/80 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-medium tracking-wide text-rose-500">
                Handmade with love
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-earth-800 leading-[1.1] text-balance mb-6">
              Gifts that stay in bloom forever
            </h1>
            <p className="text-lg text-earth-600 leading-relaxed mb-8 max-w-md">
              Handmade pipe-cleaner flowers, original paintings, and
              personalised gift combinations — crafted with care for every
              occasion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-400 text-white font-medium text-sm tracking-wide hover:bg-rose-500 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore the Shop
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/custom-gift-builder"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cream-50/80 backdrop-blur-sm text-earth-700 font-medium text-sm tracking-wide ring-1 ring-earth-200 hover:ring-rose-300 hover:text-rose-500 transition-all duration-300"
              >
                <Gift className="w-4 h-4" />
                Build a Custom Gift
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="text-center mb-12 reveal">
          <p className="text-xs uppercase tracking-widest text-rose-400 mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-earth-800 mb-4">
            Something for every celebration
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group reveal block overflow-hidden rounded-2xl bg-cream-100 shadow-sm ring-1 ring-cream-200 transition-all duration-500 hover:shadow-xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={categoryLabels[cat.id]}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <cat.icon className="w-5 h-5 text-rose-400" strokeWidth={1.5} />
                    <h3 className="font-serif text-xl font-medium text-earth-800">
                      {categoryLabels[cat.id]}
                    </h3>
                  </div>
                  <p className="text-sm text-earth-500">{cat.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-rose-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Shop by Occasion */}
      <section className="bg-cream-100/60 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-xs uppercase tracking-widest text-rose-400 mb-3">
              Shop by Occasion
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-earth-800">
              For the moments that matter
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 reveal">
            {occasions.map((occasion) => (
              <Link
                key={occasion}
                to={`/shop?occasion=${occasion}`}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream-50 ring-1 ring-cream-300 text-earth-600 text-sm font-medium hover:ring-rose-300 hover:text-rose-500 hover:bg-rose-50/50 transition-all duration-300"
              >
                <span className="text-base">{occasionIcons[occasion]}</span>
                {occasionLabels[occasion]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="flex items-end justify-between mb-12 reveal">
          <div>
            <p className="text-xs uppercase tracking-widest text-rose-400 mb-3">
              Featured Pieces
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-earth-800">
              From the studio
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-rose-400 hover:text-rose-500 transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10 sm:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium text-rose-400"
          >
            View all products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-cream-100/60 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={aboutImage}
                    alt="Artisan workspace"
                    loading="lazy"
                    className="w-full h-[420px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-rose-400 text-white px-6 py-4 rounded-2xl shadow-lg hidden sm:block">
                  <HandHeart className="w-6 h-6 mb-1" strokeWidth={1.5} />
                  <p className="text-xs font-medium">Made by hand</p>
                </div>
              </div>
            </div>

            <div className="reveal">
              <p className="text-xs uppercase tracking-widest text-rose-400 mb-3">
                About {siteConfig.brand}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-earth-800 mb-6 leading-tight">
                Every piece tells a story
              </h2>
              <p className="text-earth-600 leading-relaxed mb-4">
                {siteConfig.brand} began with a simple idea: that a gift should
                feel as special as the person receiving it. Each pipe-cleaner
                flower is shaped petal by petal, each painting is brushed by
                hand, and every gift box is assembled with intention.
              </p>
              <p className="text-earth-600 leading-relaxed mb-8">
                Nothing is mass-produced. Nothing is rushed. Everything is
                made to be kept.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-rose-400 hover:text-rose-500 transition-colors"
              >
                Read our story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-earth-800 px-8 sm:px-16 py-16 text-center reveal">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage-400/10 rounded-full blur-3xl" />
          <div className="relative">
            <Heart className="w-10 h-10 text-rose-300 mx-auto mb-4" strokeWidth={1} />
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-cream-100 mb-4">
              Have something special in mind?
            </h2>
            <p className="text-cream-300 max-w-md mx-auto mb-8 leading-relaxed">
              Use the Custom Gift Builder to mix flowers, artwork, packaging,
              and a personal message — and see an estimated price instantly.
            </p>
            <Link
              to="/custom-gift-builder"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-400 text-white font-medium text-sm tracking-wide hover:bg-rose-500 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <Gift className="w-4 h-4" />
              Start Building
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
