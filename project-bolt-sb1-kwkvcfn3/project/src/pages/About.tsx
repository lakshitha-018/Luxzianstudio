import { Link } from 'react-router-dom';
import { ArrowRight, Flower2, Palette, Gift, Heart, HandHeart, Scissors } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { siteConfig } from '@/data/siteConfig';

const processImage1 =
  'https://images.pexels.com/photos/38363696/pexels-photo-38363696.jpeg?auto=compress&cs=tinysrgb&h=600&w=940';
const processImage2 =
  'https://images.pexels.com/photos/6925327/pexels-photo-6925327.jpeg?auto=compress&cs=tinysrgb&h=600&w=940';
const processImage3 =
  'https://images.pexels.com/photos/13975271/pexels-photo-13975271.jpeg?auto=compress&cs=tinysrgb&h=600&w=940';

const values = [
  {
    icon: HandHeart,
    title: 'Made by Hand',
    desc: 'Every flower, brushstroke, and gift box is crafted individually — never factory-produced.',
  },
  {
    icon: Heart,
    title: 'Personal',
    desc: 'Your colours, your message, your occasion. Each piece is tailored to the person receiving it.',
  },
  {
    icon: Scissors,
    title: 'Considered',
    desc: 'I take time with every detail, from petal shape to ribbon choice, so nothing feels rushed.',
  },
];

const process = [
  {
    image: processImage1,
    step: '01',
    title: 'Shaping the Flowers',
    desc: 'Pipe cleaners are bent, twisted, and wrapped petal by petal to build each bloom. Stems are shaped for natural movement and finished with leafy accents.',
  },
  {
    image: processImage2,
    step: '02',
    title: 'Painting with Intention',
    desc: 'Original artwork is painted by hand on archival paper or canvas. Custom pieces begin with a sketch or colour reference shared for your approval.',
  },
  {
    image: processImage3,
    step: '03',
    title: 'Assembling the Gift',
    desc: 'Flowers, artwork, and extras are arranged in your chosen packaging, finished with ribbon and a handwritten card — ready to be opened and treasured.',
  },
];

export default function About() {
  useReveal();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl reveal">
            <p className="text-xs uppercase tracking-widest text-rose-400 mb-3">
              About {siteConfig.brand}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-earth-800 leading-[1.1] text-balance mb-6">
              Small things made with great care
            </h1>
            <p className="text-lg text-earth-600 leading-relaxed">
              {siteConfig.brand} is a one-person studio creating handmade
              pipe-cleaner flowers, original paintings, and personalised gift
              combinations. Every piece is made to order — designed around the
              person who will receive it.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-100/60 py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div
                key={val.title}
                className="reveal text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-50 text-rose-400 mb-4">
                  <val.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium text-earth-800 mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-earth-500 leading-relaxed max-w-xs mx-auto">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="text-center mb-14 reveal">
          <p className="text-xs uppercase tracking-widest text-rose-400 mb-3">
            The Handmade Process
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-earth-800">
            How each piece is made
          </h2>
        </div>

        <div className="space-y-16">
          {process.map((item, i) => (
            <div
              key={item.step}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div
                className={`reveal ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="rounded-2xl overflow-hidden shadow-md ring-1 ring-cream-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-[340px] object-cover"
                  />
                </div>
              </div>
              <div className="reveal">
                <span className="font-serif text-5xl font-medium text-rose-200">
                  {item.step}
                </span>
                <h3 className="font-serif text-2xl font-medium text-earth-800 mt-2 mb-4">
                  {item.title}
                </h3>
                <p className="text-earth-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand pillars */}
      <section className="bg-cream-100/60 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            <div className="flex flex-col items-center text-center p-6">
              <Flower2 className="w-10 h-10 text-rose-400 mb-3" strokeWidth={1.2} />
              <h4 className="font-serif text-lg text-earth-800 mb-1">Pipe-Cleaner Flowers</h4>
              <p className="text-sm text-earth-500">Everlasting, never wilt, always personal</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Palette className="w-10 h-10 text-rose-400 mb-3" strokeWidth={1.2} />
              <h4 className="font-serif text-lg text-earth-800 mb-1">Original Paintings</h4>
              <p className="text-sm text-earth-500">One of a kind, painted by hand</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Gift className="w-10 h-10 text-rose-400 mb-3" strokeWidth={1.2} />
              <h4 className="font-serif text-lg text-earth-800 mb-1">Custom Gifts</h4>
              <p className="text-sm text-earth-500">Curated for the person and the moment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="text-center reveal">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-earth-800 mb-4">
            Ready to create something together?
          </h2>
          <p className="text-earth-500 max-w-md mx-auto mb-8 leading-relaxed">
            Browse the shop or build a custom gift — then send your enquiry on
            WhatsApp.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-400 text-white font-medium text-sm tracking-wide hover:bg-rose-500 transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/custom-gift-builder"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cream-50 text-earth-700 font-medium text-sm tracking-wide ring-1 ring-earth-200 hover:ring-rose-300 hover:text-rose-500 transition-all duration-300"
            >
              <Gift className="w-4 h-4" />
              Build a Custom Gift
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
