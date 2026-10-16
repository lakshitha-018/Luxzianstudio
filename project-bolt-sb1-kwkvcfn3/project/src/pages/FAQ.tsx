import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { faqItems } from '@/data/faq';

export default function FAQ() {
  useReveal();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-cream-100/60 py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 mb-4">
            <HelpCircle className="w-4 h-4 text-rose-400" />
            <span className="text-xs font-medium tracking-wide text-rose-500">
              FAQ
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-earth-800 mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-earth-500 max-w-lg mx-auto leading-relaxed">
            Everything you might want to know before ordering. Can't find your
            answer? Reach out on WhatsApp.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-12">
        <div className="space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="reveal rounded-2xl bg-cream-50 ring-1 ring-cream-200 overflow-hidden transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left"
                >
                  <span className="font-serif text-lg font-medium text-earth-800 pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-rose-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    isOpen ? 'max-h-60' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-earth-600 leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center reveal">
          <p className="text-earth-500 mb-4">Still have questions?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-400 text-white font-medium text-sm tracking-wide hover:bg-rose-500 transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
