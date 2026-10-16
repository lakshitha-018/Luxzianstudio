import { useMemo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import {
  products,
  categoryLabels,
  occasionLabels,
} from '@/data/products';
import type { Category, Occasion } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const allCategories: Category[] = [
  'pipe-cleaner-flowers',
  'paintings',
  'customized-gifts',
];
const allOccasions: Occasion[] = [
  'birthdays',
  'anniversaries',
  'valentines-day',
  'mothers-day',
  'graduations',
  'weddings',
  'just-because',
];

export default function Shop() {
  useReveal();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const activeCategory = searchParams.get('category') as Category | null;
  const activeOccasion = searchParams.get('occasion') as Occasion | null;

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (activeCategory && p.category !== activeCategory) return false;
      if (activeOccasion && !p.occasions.includes(activeOccasion)) return false;
      return true;
    });
  }, [activeCategory, activeOccasion]);

  const updateFilter = (key: string, value: string | null) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  const clearFilters = () => setSearchParams(new URLSearchParams());

  const hasFilters = activeCategory || activeOccasion;

  useEffect(() => {
    setShowFilters(false);
  }, [searchParams]);

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="bg-cream-100/60 py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-rose-400 mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-earth-800 mb-3">
            Shop the Studio
          </h1>
          <p className="text-earth-500 max-w-lg mx-auto leading-relaxed">
            Browse handmade flowers, original paintings, and curated gift sets.
            Items marked "Example" are representative — each piece is made to
            order.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        {/* Filter bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            {hasFilters ? (
              <>
                <span className="text-sm text-earth-500">Showing:</span>
                {activeCategory && (
                  <button
                    onClick={() => updateFilter('category', null)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-rose-50 text-rose-500 hover:bg-rose-100 transition-colors"
                  >
                    {categoryLabels[activeCategory]}
                    <X className="w-3 h-3" />
                  </button>
                )}
                {activeOccasion && (
                  <button
                    onClick={() => updateFilter('occasion', null)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-rose-50 text-rose-500 hover:bg-rose-100 transition-colors"
                  >
                    {occasionLabels[activeOccasion]}
                    <X className="w-3 h-3" />
                  </button>
                )}
                <button
                  onClick={clearFilters}
                  className="text-xs text-earth-400 hover:text-rose-400 transition-colors underline"
                >
                  Clear all
                </button>
              </>
            ) : (
              <span className="text-sm text-earth-500">
                {filtered.length} pieces available
              </span>
            )}
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ring-1 ring-cream-300 text-earth-600 hover:ring-rose-300 hover:text-rose-500 transition-all lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* Desktop filters */}
        <div className="hidden lg:block mb-10">
          <FilterSection
            title="Category"
            options={allCategories.map((c) => ({ value: c, label: categoryLabels[c] }))}
            active={activeCategory}
            onSelect={(v) => updateFilter('category', v === activeCategory ? null : v)}
          />
          <FilterSection
            title="Occasion"
            options={allOccasions.map((o) => ({ value: o, label: occasionLabels[o] }))}
            active={activeOccasion}
            onSelect={(v) => updateFilter('occasion', v === activeOccasion ? null : v)}
          />
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="lg:hidden mb-8 p-5 rounded-2xl bg-cream-100 ring-1 ring-cream-200 space-y-5">
            <FilterSection
              title="Category"
              options={allCategories.map((c) => ({ value: c, label: categoryLabels[c] }))}
              active={activeCategory}
              onSelect={(v) => updateFilter('category', v === activeCategory ? null : v)}
            />
            <FilterSection
              title="Occasion"
              options={allOccasions.map((o) => ({ value: o, label: occasionLabels[o] }))}
              active={activeOccasion}
              onSelect={(v) => updateFilter('occasion', v === activeOccasion ? null : v)}
            />
          </div>
        )}

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-earth-500 mb-4">
              No products match these filters yet.
            </p>
            <button
              onClick={clearFilters}
              className="text-sm font-medium text-rose-400 hover:text-rose-500 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterSection({
  title,
  options,
  active,
  onSelect,
}: {
  title: string;
  options: { value: string; label: string }[];
  active: string | null;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="mb-4">
      <p className="text-xs uppercase tracking-widest text-earth-400 mb-2.5">
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              active === opt.value
                ? 'bg-rose-400 text-white'
                : 'bg-cream-50 ring-1 ring-cream-300 text-earth-600 hover:ring-rose-300 hover:text-rose-500'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
