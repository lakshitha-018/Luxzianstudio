import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  Sparkles,
  Check,
  Ruler,
  Palette,
  Tag,
} from 'lucide-react';
import {
  products,
  categoryLabels,
  occasionLabels,
  availabilityLabels,
} from '@/data/products';
import { formatPrice } from '@/data/customBuilderPricing';
import WhatsAppButton from '@/components/WhatsAppButton';

const availabilityStyles: Record<string, string> = {
  'in-stock': 'bg-sage-100 text-sage-700',
  'made-to-order': 'bg-cream-200 text-earth-600',
  limited: 'bg-rose-100 text-rose-600',
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customizations, setCustomizations] = useState<string[]>([]);

  if (!product) return <Navigate to="/shop" replace />;

  const toggleCustomization = (opt: string) => {
    setCustomizations((prev) =>
      prev.includes(opt) ? prev.filter((c) => c !== opt) : [...prev, opt],
    );
  };

  const enquiryMessage = `Hi ${'Luxzian Studio'}! I'd like to enquire about:

Product: ${product.name}
Category: ${categoryLabels[product.category]}
Size: ${product.sizes[selectedSize]}
Quantity: ${quantity}
Price: ${formatPrice(product.price)} (starting from)
${customizations.length > 0 ? `\nCustomisation requests:\n${customizations.map((c) => `  • ${c}`).join('\n')}` : ''}

Please let me know the final price, timeline, and shipping details.`;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-earth-500 hover:text-rose-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-cream-100 shadow-sm ring-1 ring-cream-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {product.isExample && (
              <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-cream-50/90 text-earth-500 backdrop-blur-sm shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Example Product
              </div>
            )}
            <div
              className={`absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-medium ${availabilityStyles[product.availability]}`}
            >
              {availabilityLabels[product.availability]}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-widest text-rose-400 mb-2">
              {categoryLabels[product.category]}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-earth-800 mb-4">
              {product.name}
            </h1>
            <p className="font-serif text-2xl font-semibold text-earth-800 mb-6">
              {formatPrice(product.price)}
              <span className="text-sm font-sans font-normal text-earth-400 ml-2">
                starting from
              </span>
            </p>

            <p className="text-earth-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Sizes */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Ruler className="w-4 h-4 text-rose-400" strokeWidth={1.5} />
                <h3 className="text-sm font-medium text-earth-700">Size</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, i) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(i)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedSize === i
                        ? 'bg-rose-400 text-white'
                        : 'bg-cream-100 ring-1 ring-cream-300 text-earth-600 hover:ring-rose-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Customisation options */}
            {product.customizationOptions.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Palette className="w-4 h-4 text-rose-400" strokeWidth={1.5} />
                  <h3 className="text-sm font-medium text-earth-700">
                    Customisation Options
                  </h3>
                </div>
                <div className="space-y-2">
                  {product.customizationOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => toggleCustomization(opt)}
                      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm text-left transition-all duration-200 ${
                        customizations.includes(opt)
                          ? 'bg-rose-50 ring-1 ring-rose-200 text-rose-600'
                          : 'bg-cream-100 ring-1 ring-cream-300 text-earth-600 hover:ring-rose-200'
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                          customizations.includes(opt)
                            ? 'bg-rose-400 text-white'
                            : 'bg-cream-50 ring-1 ring-cream-400'
                        }`}
                      >
                        {customizations.includes(opt) && (
                          <Check className="w-3 h-3" strokeWidth={3} />
                        )}
                      </div>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-rose-400" strokeWidth={1.5} />
                <h3 className="text-sm font-medium text-earth-700">Quantity</h3>
              </div>
              <div className="inline-flex items-center ring-1 ring-cream-300 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-earth-600 hover:bg-cream-100 transition-colors"
                >
                  −
                </button>
                <span className="w-12 text-center text-sm font-medium text-earth-700">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-earth-600 hover:bg-cream-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Occasions */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-earth-400 mb-2">
                Perfect for
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.occasions.map((occ) => (
                  <span
                    key={occ}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-cream-100 text-earth-500 ring-1 ring-cream-200"
                  >
                    {occasionLabels[occ]}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-auto pt-6 border-t border-cream-200">
              <WhatsAppButton
                message={enquiryMessage}
                label={`Enquire about ${product.name}`}
                className="w-full sm:w-auto"
              />
              <p className="text-xs text-earth-400 mt-3">
                This opens WhatsApp with a pre-filled message including the
                product details, size, quantity, and your customisations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
