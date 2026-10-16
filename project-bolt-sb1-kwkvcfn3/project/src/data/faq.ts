export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'How do I place an order?',
    answer:
      'Every product has a WhatsApp enquiry button. Tap it and a message is pre-filled with the product name, price, and any customisations you have selected. Send the message and I will reply to confirm details, timeline, and payment before you pay anything.',
  },
  {
    question: 'How long does an order take?',
    answer:
      'Made-to-order items typically take 5–10 days to craft, plus shipping time. Custom paintings and large hampers may take up to 2 weeks. I will give you an estimated timeline when you enquire.',
  },
  {
    question: 'Are the product photos real?',
    answer:
      'The photos on the site are placeholders. Each item is handmade, so your piece will have its own unique character. I can share photos of completed past work on WhatsApp before you commit.',
  },
  {
    question: 'Can I customise colours, sizes, or messages?',
    answer:
      'Absolutely — every item lists its customisation options on the product page. You can also use the Custom Gift Builder to mix flowers, artwork, packaging, and a personal message into one gift.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'I ship within India and to most international destinations. Shipping costs are calculated based on your location and package size, and are confirmed over WhatsApp before payment.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'Payment details are shared over WhatsApp once your order is confirmed. This keeps things personal and flexible — I do not collect card details through the website.',
  },
  {
    question: 'Can I see a proof before you make it?',
    answer:
      'For custom paintings and personalised items, I share a sketch or colour reference for your approval before starting. Pipe-cleaner flower colours are confirmed over chat before crafting begins.',
  },
];
