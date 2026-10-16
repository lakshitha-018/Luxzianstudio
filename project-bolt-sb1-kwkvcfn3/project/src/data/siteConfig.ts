export const siteConfig = {
  brand: 'Luxzian Studio',
  tagline: 'Handmade with heart, gifted with love',
  // Replace these placeholders with your real details
  whatsappNumber: '919491212873',
  instagramHandle: 'luxzian.art',
  instagramUrl: 'https://www.instagram.com/luxzian.art/',
  email: 'luxzianstudio@gmail.com',
  location: 'Handmade to order — shipped worldwide',
  note: 'Product photos are placeholders. Replace them with your own photographs before going live.',
};

export function whatsappLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
