import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/data/siteConfig';

interface WhatsAppButtonProps {
  message: string;
  label?: string;
  className?: string;
}

export default function WhatsAppButton({
  message,
  label = 'Enquire on WhatsApp',
  className = '',
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] bg-sage-500 text-white hover:bg-sage-600 ${className}`}
    >
      <MessageCircle className="w-4 h-4" strokeWidth={2} />
      {label}
    </a>
  );
}
