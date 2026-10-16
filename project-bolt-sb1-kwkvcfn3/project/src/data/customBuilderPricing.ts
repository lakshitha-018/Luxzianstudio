export interface PriceOption {
  id: string;
  label: string;
  price: number;
  description?: string;
}

export interface BuilderStep {
  id: string;
  title: string;
  subtitle: string;
  options: PriceOption[];
  multiSelect?: boolean;
  minSelections?: number;
}

// Base price for assembly & handling
export const baseAssemblyPrice = 300;

export const builderSteps: BuilderStep[] = [
  {
    id: 'flowers',
    title: 'Choose Your Flowers',
    subtitle: 'Select one or more pipe-cleaner flower types',
    multiSelect: true,
    minSelections: 0,
    options: [
      { id: 'roses', label: 'Roses (per stem)', price: 150, description: 'Classic and romantic' },
      { id: 'tulips', label: 'Tulips (per stem)', price: 120, description: 'Soft and elegant' },
      { id: 'sunflowers', label: 'Sunflowers (per stem)', price: 130, description: 'Bright and cheerful' },
      { id: 'chrysanthemums', label: 'Chrysanthemums (per stem)', price: 110, description: 'Full and fluffy' },
    ],
  },
  {
    id: 'colours',
    title: 'Pick a Colour Palette',
    subtitle: 'Choose the colour theme for your gift',
    options: [
      { id: 'warm-romance', label: 'Warm Romance', price: 0, description: 'Reds, pinks, and deep roses' },
      { id: 'soft-pastel', label: 'Soft Pastel', price: 0, description: 'Blush, lavender, and cream' },
      { id: 'earthy-natural', label: 'Earthy & Natural', price: 0, description: 'Browns, greens, and warm neutrals' },
      { id: 'bright-celebration', label: 'Bright Celebration', price: 0, description: 'Yellow, orange, and coral' },
      { id: 'custom-mix', label: 'Custom Colour Mix', price: 100, description: 'Tell us your exact colours' },
    ],
  },
  {
    id: 'artwork',
    title: 'Add Artwork',
    subtitle: 'Include a painting or print (optional)',
    options: [
      { id: 'none', label: 'No artwork', price: 0 },
      { id: 'mini-watercolor', label: 'Mini Watercolour (A5)', price: 1200, description: 'Personalised floral study' },
      { id: 'watercolor-a4', label: 'Watercolour Painting (A4)', price: 2000, description: 'Larger custom piece' },
      { id: 'named-print', label: 'Personalised Name Print', price: 800, description: 'Name with floral accents' },
    ],
  },
  {
    id: 'packaging',
    title: 'Choose Packaging',
    subtitle: 'How should your gift be presented?',
    options: [
      { id: 'kraft-box', label: 'Kraft Gift Box', price: 200, description: 'Natural and rustic' },
      { id: 'premium-box', label: 'Premium Gift Box', price: 400, description: 'Satin-lined keepsake box' },
      { id: 'hamper-basket', label: 'Hamper Basket', price: 600, description: 'Reusable woven basket' },
      { id: 'simple-wrap', label: 'Simple Wrap', price: 100, description: 'Tissue and ribbon' },
    ],
  },
  {
    id: 'extras',
    title: 'Add Extras',
    subtitle: 'Little touches that make it special (optional)',
    multiSelect: true,
    minSelections: 0,
    options: [
      { id: 'handwritten-card', label: 'Handwritten Message Card', price: 80 },
      { id: 'wax-seal', label: 'Wax Seal Note', price: 120 },
      { id: 'fairy-lights', label: 'LED Fairy Lights', price: 250 },
      { id: 'satin-ribbon', label: 'Satin Ribbon Wrap', price: 100 },
      { id: 'gift-tag', label: 'Personalised Gift Tag', price: 60 },
    ],
  },
];

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}
