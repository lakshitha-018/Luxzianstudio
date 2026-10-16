import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import type { Product } from '@/data/products';
import {
  categoryLabels,
  availabilityLabels,
} from '@/data/products';
import { formatPrice } from '@/data/customBuilderPricing';

const availabilityStyles: Record<string, string> = {
  'in-stock': 'bg-sage-100 text-sage-700',
  'made-to-order': 'bg-cream-200 text-earth-600',
  limited: 'bg-rose-100 text-rose-600',
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block animate-fade-up"
    >
      <div className="relative overflow-hidden rounded-2xl bg-cream-100 shadow-sm ring-1 ring-cream-200 transition-all duration-500 hover:shadow-xl hover:ring-rose-200">
        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden bg-cream-200">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Example badge */}
        {product.isExample && (
          <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-medium tracking-wide bg-cream-50/90 text-earth-500 backdrop-blur-sm">
            <Sparkles className="w-3 h-3" />
            Example
          </div>
        )}

        {/* Availability badge */}
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-medium tracking-wide ${availabilityStyles[product.availability]}`}
        >
          {availabilityLabels[product.availability]}
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-[11px] uppercase tracking-widest text-rose-400 mb-1.5">
            {categoryLabels[product.category]}
          </p>
          <h3 className="font-serif text-lg font-medium text-earth-800 leading-snug mb-2 group-hover:text-rose-500 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-earth-500 line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg font-semibold text-earth-800">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs font-medium text-rose-400 group-hover:translate-x-1 transition-transform">
              View details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
