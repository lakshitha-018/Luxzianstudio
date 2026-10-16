export interface PolicySection {
  heading: string;
  body: string[];
}

export const orderingPolicy: PolicySection = {
  heading: 'Ordering',
  body: [
    'All orders are placed through WhatsApp. Tap the enquiry button on any product to start a conversation — your message will include the product name, price, and any customisations you have selected.',
    'I will confirm availability, final pricing (including shipping), and an estimated timeline before requesting payment. No payment is collected through this website.',
    'For custom and made-to-order items, I may share a sketch, colour reference, or work-in-progress photo for your approval before proceeding.',
  ],
};

export const shippingPolicy: PolicySection = {
  heading: 'Shipping',
  body: [
    'Items are shipped via courier or postal service depending on your location and package size. Shipping costs are confirmed over WhatsApp before payment — they are not automatically added at checkout.',
    'Dispatch timelines depend on whether an item is in stock or made to order. Made-to-order pieces are dispatched after crafting is complete.',
    'I share tracking details once your package is dispatched. Delivery times vary by destination and are not guaranteed by me — they depend on the courier service.',
  ],
};

export const cancellationPolicy: PolicySection = {
  heading: 'Cancellations',
  body: [
    'Orders can be cancelled free of charge before crafting begins. Once work has started on a made-to-order or custom item, cancellation is no longer possible.',
    'To cancel, message me on WhatsApp as early as possible. If you have already paid and the order has not been started, a full refund will be arranged.',
  ],
};

export const refundPolicy: PolicySection = {
  heading: 'Refunds',
  body: [
    'Because every item is handmade, refunds are handled case by case. If your item arrives damaged or significantly different from what was agreed, contact me within 48 hours with a photo and I will work with you to make it right.',
    'Refunds, where applicable, are processed to your original payment method. The timeline depends on your bank or payment provider.',
  ],
};

export const damagePolicy: PolicySection = {
  heading: 'Damage During Shipping',
  body: [
    'Each piece is carefully packaged to protect it in transit. If your order arrives damaged, please send a photo of the item and the packaging within 48 hours of delivery.',
    'I will offer a repair, replacement, or refund depending on the situation. For custom paintings, a replacement may take additional time as each piece is created by hand.',
  ],
};

export const policySections: PolicySection[] = [
  orderingPolicy,
  shippingPolicy,
  cancellationPolicy,
  refundPolicy,
  damagePolicy,
];
