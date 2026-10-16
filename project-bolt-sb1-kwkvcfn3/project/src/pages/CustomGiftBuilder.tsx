import { useState, useMemo } from 'react';
import { Check, Gift, Sparkles, RotateCcw } from 'lucide-react';
import {
  builderSteps,
  baseAssemblyPrice,
  formatPrice,
} from '@/data/customBuilderPricing';
import { siteConfig, whatsappLink } from '@/data/siteConfig';
import { useReveal } from '@/hooks/useReveal';

interface Selections {
  [stepId: string]: string[];
}

interface Quantities {
  [optionId: string]: number;
}

export default function CustomGiftBuilder() {
  useReveal();
  const [selections, setSelections] = useState<Selections>({});
  const [quantities, setQuantities] = useState<Quantities>({});
  const [personalMessage, setPersonalMessage] = useState('');
  const [recipientName, setRecipientName] = useState('');

  const toggleOption = (stepId: string, optionId: string, multiSelect?: boolean) => {
    setSelections((prev) => {
      const current = prev[stepId] || [];
      if (multiSelect) {
        return {
          ...prev,
          [stepId]: current.includes(optionId)
            ? current.filter((id) => id !== optionId)
            : [...current, optionId],
        };
      }
      // single select: if clicking the same one, deselect
      return {
        ...prev,
        [stepId]: current[0] === optionId ? [] : [optionId],
      };
    });
  };

  const setQty = (optionId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[optionId] || 1;
      return { ...prev, [optionId]: Math.max(0, current + delta) };
    });
  };

  const { totalPrice, breakdown } = useMemo(() => {
    let total = baseAssemblyPrice;
    const items: { label: string; price: number; qty?: number }[] = [
      { label: 'Assembly & Handling', price: baseAssemblyPrice },
    ];

    builderSteps.forEach((step) => {
      const selected = selections[step.id] || [];
      selected.forEach((optId) => {
        const opt = step.options.find((o) => o.id === optId);
        if (!opt) return;

        if (step.id === 'flowers') {
          const qty = quantities[optId] || 1;
          if (qty > 0) {
            total += opt.price * qty;
            items.push({ label: `${opt.label} × ${qty}`, price: opt.price * qty });
          }
        } else if (step.id === 'extras') {
          total += opt.price;
          items.push({ label: opt.label, price: opt.price });
        } else {
          total += opt.price;
          items.push({ label: opt.label, price: opt.price });
        }
      });
    });

    return { totalPrice: total, breakdown: items };
  }, [selections, quantities]);

  const isReady = Object.values(selections).flat().length > 0;

  const enquiryMessage = useMemo(() => {
    const lines: string[] = [`Hi ${siteConfig.brand}! I'd like to build a custom gift.`];
    lines.push('');
    builderSteps.forEach((step) => {
      const selected = selections[step.id] || [];
      if (selected.length === 0) return;
      lines.push(`${step.title}:`);
      selected.forEach((optId) => {
        const opt = step.options.find((o) => o.id === optId);
        if (!opt) return;
        if (step.id === 'flowers') {
          const qty = quantities[optId] || 1;
          lines.push(`  • ${opt.label} — ${qty} stem(s) — ${formatPrice(opt.price * qty)}`);
        } else {
          lines.push(`  • ${opt.label} — ${formatPrice(opt.price)}`);
        }
      });
    });
    if (recipientName) lines.push(`\nRecipient: ${recipientName}`);
    if (personalMessage) lines.push(`Personal message: "${personalMessage}"`);
    lines.push(`\nEstimated total: ${formatPrice(totalPrice)}`);
    lines.push('(Final price confirmed over WhatsApp, including shipping.)');
    return lines.join('\n');
  }, [selections, quantities, recipientName, personalMessage, totalPrice]);

  const reset = () => {
    setSelections({});
    setQuantities({});
    setPersonalMessage('');
    setRecipientName('');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-cream-100/60 py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 mb-4">
            <Gift className="w-4 h-4 text-rose-400" />
            <span className="text-xs font-medium tracking-wide text-rose-500">
              Custom Gift Builder
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-earth-800 mb-3">
            Design your perfect gift
          </h1>
          <p className="text-earth-500 max-w-lg mx-auto leading-relaxed">
            Choose flowers, colours, artwork, packaging, and extras — and see an
            estimated price update as you build. Send your design via WhatsApp to
            place an enquiry.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Builder steps */}
          <div className="space-y-8">
            {builderSteps.map((step, stepIdx) => {
              const selected = selections[step.id] || [];
              return (
                <div
                  key={step.id}
                  className="reveal rounded-2xl bg-cream-50 ring-1 ring-cream-200 p-6"
                  style={{ transitionDelay: `${stepIdx * 80}ms` }}
                >
                  <div className="mb-1">
                    <span className="text-xs font-medium text-rose-400">
                      Step {stepIdx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-earth-800 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-earth-500 mb-5">{step.subtitle}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.options.map((opt) => {
                      const isSelected = selected.includes(opt.id);
                      return (
                        <div key={opt.id}>
                          <button
                            onClick={() =>
                              toggleOption(step.id, opt.id, step.multiSelect)
                            }
                            className={`flex items-start gap-3 w-full px-4 py-3.5 rounded-xl text-left transition-all duration-200 ${
                              isSelected
                                ? 'bg-rose-50 ring-1 ring-rose-200'
                                : 'bg-cream-100 ring-1 ring-cream-200 hover:ring-rose-200'
                            }`}
                          >
                            <div
                              className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                                isSelected
                                  ? 'bg-rose-400 text-white'
                                  : 'bg-cream-50 ring-1 ring-cream-400'
                              }`}
                            >
                              {isSelected && (
                                <Check className="w-3 h-3" strokeWidth={3} />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <span
                                  className={`text-sm font-medium ${
                                    isSelected ? 'text-rose-600' : 'text-earth-700'
                                  }`}
                                >
                                  {opt.label}
                                </span>
                                <span
                                  className={`text-xs font-medium whitespace-nowrap ${
                                    opt.price === 0
                                      ? 'text-sage-500'
                                      : 'text-earth-500'
                                  }`}
                                >
                                  {opt.price === 0 ? 'Included' : formatPrice(opt.price)}
                                </span>
                              </div>
                              {opt.description && (
                                <p className="text-xs text-earth-400 mt-0.5">
                                  {opt.description}
                                </p>
                              )}
                            </div>
                          </button>

                          {/* Quantity controls for flowers */}
                          {step.id === 'flowers' && isSelected && (
                            <div className="flex items-center justify-center gap-3 mt-2">
                              <button
                                onClick={() => setQty(opt.id, -1)}
                                className="w-8 h-8 rounded-lg bg-cream-200 text-earth-600 text-sm font-medium hover:bg-cream-300 transition-colors"
                              >
                                −
                              </button>
                              <span className="text-sm font-medium text-earth-700 w-8 text-center">
                                {quantities[opt.id] || 1}
                              </span>
                              <button
                                onClick={() => setQty(opt.id, 1)}
                                className="w-8 h-8 rounded-lg bg-cream-200 text-earth-600 text-sm font-medium hover:bg-cream-300 transition-colors"
                              >
                                +
                              </button>
                              <span className="text-xs text-earth-400 ml-1">
                                stem{quantities[opt.id] > 1 ? 's' : ''}
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Personal message */}
            <div className="rounded-2xl bg-cream-50 ring-1 ring-cream-200 p-6 reveal">
              <span className="text-xs font-medium text-rose-400">
                Step {builderSteps.length + 1}
              </span>
              <h3 className="font-serif text-xl font-medium text-earth-800 mb-1">
                Personal Message
              </h3>
              <p className="text-sm text-earth-500 mb-5">
                Add a recipient name and a handwritten message for the card.
              </p>

              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="Recipient's name"
                className="w-full px-4 py-3 rounded-xl bg-cream-100 ring-1 ring-cream-200 text-sm text-earth-700 placeholder:text-earth-400 focus:ring-rose-300 focus:outline-none transition-all mb-3"
              />
              <textarea
                value={personalMessage}
                onChange={(e) => setPersonalMessage(e.target.value)}
                placeholder="Your message (optional)..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-cream-100 ring-1 ring-cream-200 text-sm text-earth-700 placeholder:text-earth-400 focus:ring-rose-300 focus:outline-none transition-all resize-none"
              />
            </div>
          </div>

          {/* Summary sidebar */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl bg-earth-800 text-cream-100 p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-5 h-5 text-rose-300" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-medium">Your Gift Summary</h3>
              </div>

              {breakdown.length > 1 ? (
                <div className="space-y-2 mb-5">
                  {breakdown.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-cream-300">{item.label}</span>
                      <span className="text-cream-200 font-medium">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-cream-400 mb-5 leading-relaxed">
                  Start selecting options to build your custom gift and see the
                  estimated price here.
                </p>
              )}

              <div className="border-t border-earth-700 pt-4 mb-5">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg">Estimated total</span>
                  <span className="font-serif text-2xl font-semibold text-rose-300">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <p className="text-xs text-cream-400 mt-2 leading-relaxed">
                  Final price is confirmed over WhatsApp, including shipping.
                </p>
              </div>

              {isReady ? (
                <a
                  href={whatsappLink(enquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3.5 rounded-full bg-rose-400 text-white font-medium text-sm tracking-wide hover:bg-rose-500 transition-all duration-300 hover:shadow-lg active:scale-[0.98] mb-3"
                >
                  Send Enquiry on WhatsApp
                </a>
              ) : (
                <div className="block w-full text-center px-6 py-3.5 rounded-full bg-earth-700 text-cream-400 font-medium text-sm tracking-wide mb-3 cursor-not-allowed">
                  Select options to continue
                </div>
              )}

              <button
                onClick={reset}
                className="w-full flex items-center justify-center gap-2 text-xs text-cream-400 hover:text-rose-300 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset builder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
