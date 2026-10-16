import { Shield } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { policySections } from '@/data/policies';

export default function Policies() {
  useReveal();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-cream-100/60 py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 mb-4">
            <Shield className="w-4 h-4 text-rose-400" />
            <span className="text-xs font-medium tracking-wide text-rose-500">
              Policies
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-earth-800 mb-3">
            Ordering, Shipping & Returns
          </h1>
          <p className="text-earth-500 max-w-lg mx-auto leading-relaxed">
            Everything you need to know before placing an order. These policies
            apply to all purchases made through Luxzian Studio.
          </p>
        </div>
      </section>

      {/* Policy sections */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-12">
        <div className="space-y-10">
          {policySections.map((section, i) => (
            <div
              key={section.heading}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-50 text-rose-400 text-sm font-medium">
                  {i + 1}
                </span>
                <h2 className="font-serif text-2xl font-medium text-earth-800">
                  {section.heading}
                </h2>
              </div>
              <div className="pl-11 space-y-3">
                {section.body.map((para, j) => (
                  <p key={j} className="text-earth-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-cream-100 ring-1 ring-cream-200 reveal">
          <p className="text-sm text-earth-500 leading-relaxed">
            Have a question about these policies? Reach out on WhatsApp or
            Instagram — I'm happy to clarify anything before you place an order.
          </p>
        </div>
      </section>
    </div>
  );
}
