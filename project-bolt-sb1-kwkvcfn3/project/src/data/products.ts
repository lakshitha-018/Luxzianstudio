export type Category = 'pipe-cleaner-flowers' | 'paintings' | 'customized-gifts';

export type Occasion =
  | 'birthdays'
  | 'anniversaries'
  | 'valentines-day'
  | 'mothers-day'
  | 'graduations'
  | 'weddings'
  | 'just-because';

export interface Product {
  id: string;
  name: string;
  category: Category;
  occasions: Occasion[];
  price: number;
  description: string;
  sizes: string[];
  customizationOptions: string[];
  image: string;
  availability: 'in-stock' | 'made-to-order' | 'limited';
  /** Marks items that are examples only — not confirmed in the catalogue */
  isExample: boolean;
}

export const categoryLabels: Record<Category, string> = {
  'pipe-cleaner-flowers': 'Pipe-Cleaner Flowers',
  paintings: 'Paintings',
  'customized-gifts': 'Customized Gifts',
};

export const categoryDescriptions: Record<Category, string> = {
  'pipe-cleaner-flowers':
    'Sculpted by hand from soft pipe cleaners — everlasting blooms that never wilt.',
  paintings:
    'Original watercolour and acrylic paintings, each one a one-of-a-kind piece of art.',
  'customized-gifts':
    'Thoughtfully curated gift combinations tailored to the person and the moment.',
};

export const occasionLabels: Record<Occasion, string> = {
  birthdays: 'Birthdays',
  anniversaries: 'Anniversaries',
  'valentines-day': "Valentine's Day",
  'mothers-day': "Mother's Day",
  graduations: 'Graduations',
  weddings: 'Weddings',
  'just-because': 'Just Because',
};

export const availabilityLabels: Record<string, string> = {
  'in-stock': 'In stock',
  'made-to-order': 'Made to order',
  limited: 'Limited',
};

export const products: Product[] = [
  // ---------- Pipe-Cleaner Flowers ----------
  {
    id: 'pc-rose-bouquet',
    name: 'Pipe-Cleaner Rose Bouquet',
    category: 'pipe-cleaner-flowers',
    occasions: ['valentines-day', 'anniversaries', 'weddings', 'mothers-day'],
    price: 1200,
    description:
      'A hand-sculpted bunch of six pipe-cleaner roses in your chosen palette. Each petal is shaped individually and wrapped around a flexible stem, creating a keepsake bouquet that lasts forever.',
    sizes: ['Small (6 stems)', 'Medium (12 stems)', 'Large (18 stems)'],
    customizationOptions: [
      'Choose rose colours (up to 3)',
      'Add a satin ribbon wrap',
      'Include a handwritten note card',
    ],
    image:
      'https://images.pexels.com/photos/38363696/pexels-photo-38363696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    availability: 'made-to-order',
    isExample: true,
  },
  {
    id: 'pc-sunflower-posy',
    name: 'Pipe-Cleaner Sunflower Posy',
    category: 'pipe-cleaner-flowers',
    occasions: ['birthdays', 'graduations', 'just-because'],
    price: 800,
    description:
      'Three cheerful sunflowers hand-crafted from golden and brown pipe cleaners, finished with leafy green stems. A bright pick-me-up for any occasion.',
    sizes: ['Small (3 stems)', 'Medium (6 stems)'],
    customizationOptions: [
      'Choose pot or bouquet wrap',
      'Add a personalised tag',
    ],
    image:
      'https://images.pexels.com/photos/8754861/pexels-photo-8754861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    availability: 'made-to-order',
    isExample: true,
  },
  {
    id: 'pc-tulip-trio',
    name: 'Pipe-Cleaner Tulip Trio',
    category: 'pipe-cleaner-flowers',
    occasions: ['birthdays', 'mothers-day', 'just-because'],
    price: 650,
    description:
      'Three elegant tulips in soft pastel shades, each stem wrapped in green. Presented as a loose bunch ready for your own vase.',
    sizes: ['Trio (3 stems)', 'Half-dozen (6 stems)', 'Dozen (12 stems)'],
    customizationOptions: ['Choose colour palette', 'Add a glass vase'],
    image:
      'https://images.pexels.com/photos/879198/pexels-photo-879198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    availability: 'in-stock',
    isExample: true,
  },
  {
    id: 'pc-floral-box',
    name: 'Pipe-Cleaner Floral Gift Box',
    category: 'pipe-cleaner-flowers',
    occasions: ['birthdays', 'valentines-day', 'mothers-day', 'just-because'],
    price: 1500,
    description:
      'An arrangement of mixed pipe-cleaner blooms nestled in a keepsake box with greenery accents. A complete gift that needs no vase.',
    sizes: ['Small box (6–8 blooms)', 'Large box (12–15 blooms)'],
    customizationOptions: [
      'Choose flower mix and colours',
      'Add a personalised message card',
      'Choose box colour',
    ],
    image:
      'https://images.pexels.com/photos/35468616/pexels-photo-35468616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    availability: 'made-to-order',
    isExample: true,
  },
  {
    id: 'pc-heart-wreath',
    name: 'Pipe-Cleaner Heart Wreath',
    category: 'pipe-cleaner-flowers',
    occasions: ['valentines-day', 'anniversaries', 'weddings'],
    price: 1800,
    description:
      'A heart-shaped wreath frame filled with miniature pipe-cleaner flowers in romantic tones. Perfect for anniversaries, weddings, or wall décor.',
    sizes: ['20 cm', '30 cm'],
    customizationOptions: [
      'Choose colour theme',
      'Add couple initials',
      'Add LED fairy lights',
    ],
    image:
      'https://images.pexels.com/photos/32257698/pexels-photo-32257698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    availability: 'limited',
    isExample: true,
  },
  {
    id: 'pc-potted-chrysanthemum',
    name: 'Pipe-Cleaner Potted Chrysanthemum',
    category: 'pipe-cleaner-flowers',
    occasions: ['birthdays', 'mothers-day', 'just-because'],
    price: 950,
    description:
      'A cluster of fluffy chrysanthemums in a small ceramic pot. A charming desk or shelf companion that blooms all year round.',
    sizes: ['Single pot', 'Set of 2 pots'],
    customizationOptions: ['Choose bloom colours', 'Choose pot style'],
    image:
      'https://images.pexels.com/photos/35468608/pexels-photo-35468608.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    availability: 'made-to-order',
    isExample: true,
  },

  // ---------- Paintings ----------
  {
    id: 'pt-watercolor-floral',
    name: 'Watercolour Floral Study',
    category: 'paintings',
    occasions: ['birthdays', 'anniversaries', 'weddings', 'just-because'],
    price: 2200,
    description:
      'An original watercolour painting of a floral arrangement on archival paper. Each piece is painted by hand — no prints, no duplicates.',
    sizes: ['A5 (14×21 cm)', 'A4 (21×30 cm)', 'A3 (30×42 cm)'],
    customizationOptions: [
      'Choose colour palette',
      'Personalise with a name or date',
      'Choose framed or unframed',
    ],
    image:
      'https://images.pexels.com/photos/6925162/pexels-photo-6925162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    availability: 'made-to-order',
    isExample: true,
  },
  {
    id: 'pt-botanical-dandelion',
    name: 'Botanical Dandelion Painting',
    category: 'paintings',
    occasions: ['graduations', 'just-because', 'birthdays'],
    price: 1800,
    description:
      'A delicate watercolour study of dandelion seeds drifting on the breeze. Soft, airy, and full of quiet symbolism — a lovely graduation or new-beginning gift.',
    sizes: ['A5 (14×21 cm)', 'A4 (21×30 cm)'],
    customizationOptions: [
      'Add a short quote or message',
      'Choose background tone',
    ],
    image:
      'https://images.pexels.com/photos/37375153/pexels-photo-37375153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    availability: 'in-stock',
    isExample: true,
  },
  {
    id: 'pt-acrylic-canvas',
    name: 'Acrylic Canvas Commission',
    category: 'paintings',
    occasions: ['anniversaries', 'weddings', 'just-because', 'birthdays'],
    price: 3500,
    description:
      'A custom acrylic painting on stretched canvas. Share your idea, a photo, or a mood and I will create an original artwork just for you.',
    sizes: ['30×40 cm', '40×50 cm', '50×70 cm'],
    customizationOptions: [
      'Share your reference image or idea',
      'Choose colour scheme',
      'Add a hidden message or date',
    ],
    image:
      'https://images.pexels.com/photos/6925327/pexels-photo-6925327.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    availability: 'made-to-order',
    isExample: true,
  },
  {
    id: 'pt-floral-wreath-art',
    name: 'Watercolour Wreath Art',
    category: 'paintings',
    occasions: ['weddings', 'anniversaries', 'mothers-day'],
    price: 2000,
    description:
      'A circular floral wreath painted in watercolour with space in the centre for a name, date, or short phrase — ideal for weddings and anniversaries.',
    sizes: ['A4 (21×30 cm)', 'A3 (30×42 cm)'],
    customizationOptions: [
      'Personalise centre text',
      'Choose flower types',
      'Choose colour palette',
    ],
    image:
      'https://images.pexels.com/photos/5152829/pexels-photo-5152829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    availability: 'made-to-order',
    isExample: true,
  },

  // ---------- Customized Gifts ----------
  {
    id: 'cg-curated-gift-box',
    name: 'Curated Gift Box',
    category: 'customized-gifts',
    occasions: ['birthdays', 'anniversaries', 'valentines-day', 'just-because'],
    price: 2500,
    description:
      'A fully personalised gift box combining pipe-cleaner flowers, a mini painting or print, and extras of your choice — beautifully packaged and tied with ribbon.',
    sizes: ['Compact (2–3 items)', 'Standard (4–5 items)', 'Deluxe (6+ items)'],
    customizationOptions: [
      'Choose a theme or colour palette',
      'Select items to include',
      'Add a handwritten message card',
      'Choose packaging style',
    ],
    image:
      'https://images.pexels.com/photos/13975271/pexels-photo-13975271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    availability: 'made-to-order',
    isExample: true,
  },
  {
    id: 'cg-personalized-hamper',
    name: 'Personalised Celebration Hamper',
    category: 'customized-gifts',
    occasions: ['birthdays', 'weddings', 'anniversaries', 'mothers-day'],
    price: 3200,
    description:
      'A larger gift hamper for milestones — flowers, artwork, and thoughtful extras arranged in a keepsake basket with a personalised tag.',
    sizes: ['Medium', 'Large'],
    customizationOptions: [
      'Choose occasion theme',
      'Select flower colours',
      'Add recipient name on tag',
      'Include a custom painting',
    ],
    image:
      'https://images.pexels.com/photos/5872362/pexels-photo-5872362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    availability: 'made-to-order',
    isExample: true,
  },
  {
    id: 'cg-named-gift-set',
    name: 'Named Gift Set',
    category: 'customized-gifts',
    occasions: ['graduations', 'birthdays', 'just-because'],
    price: 1800,
    description:
      'A compact gift set featuring a small pipe-cleaner bloom and a personalised name card in a kraft box — perfect for friends, colleagues, or graduations.',
    sizes: ['Single set', 'Set of 3'],
    customizationOptions: [
      'Add recipient name',
      'Choose bloom colour',
      'Add a short message',
    ],
    image:
      'https://images.pexels.com/photos/38457828/pexels-photo-38457828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    availability: 'in-stock',
    isExample: true,
  },
  {
    id: 'cg-elegant-wrapped-set',
    name: 'Elegantly Wrapped Gift Set',
    category: 'customized-gifts',
    occasions: ['valentines-day', 'anniversaries', 'weddings', 'mothers-day'],
    price: 2100,
    description:
      'A refined gift set with floral accents, premium wrapping, and a ribbon bow. Great for romantic occasions and heartfelt thank-yous.',
    sizes: ['Standard', 'Premium'],
    customizationOptions: [
      'Choose wrapping paper and ribbon',
      'Add a wax-seal note',
      'Select flower type',
    ],
    image:
      'https://images.pexels.com/photos/29873585/pexels-photo-29873585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    availability: 'made-to-order',
    isExample: true,
  },
];
