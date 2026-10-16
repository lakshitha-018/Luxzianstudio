import { Link } from 'react-router-dom';
import { Flower2, Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-earth-800 text-cream-100 mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="w-6 h-6 text-rose-300" strokeWidth={1.5} />
              <span className="font-serif text-xl font-semibold">
                {siteConfig.brand}
              </span>
            </div>
            <p className="text-sm text-cream-300 leading-relaxed max-w-xs">
              {siteConfig.tagline}. Handmade pipe-cleaner flowers, original
              paintings, and personalised gifts.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-cream-200">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-cream-300 hover:text-rose-300 transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-cream-300 hover:text-rose-300 transition-colors">Shop</Link></li>
              <li><Link to="/custom-gift-builder" className="text-cream-300 hover:text-rose-300 transition-colors">Custom Gift Builder</Link></li>
              <li><Link to="/about" className="text-cream-300 hover:text-rose-300 transition-colors">About</Link></li>
              <li><Link to="/policies" className="text-cream-300 hover:text-rose-300 transition-colors">Policies</Link></li>
              <li><Link to="/faq" className="text-cream-300 hover:text-rose-300 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-cream-300 hover:text-rose-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-cream-200">Connect</h4>
            <div className="space-y-3 text-sm">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream-300 hover:text-rose-300 transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
                @{siteConfig.instagramHandle}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream-300 hover:text-rose-300 transition-colors"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                WhatsApp Enquiry
              </a>
              <div className="flex items-center gap-3 text-cream-300">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
                {siteConfig.email}
              </div>
              <div className="flex items-center gap-3 text-cream-300">
                <MapPin className="w-5 h-5" strokeWidth={1.5} />
                {siteConfig.location}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-earth-700">
          <p className="text-xs text-cream-400 text-center">
            © {new Date().getFullYear()} {siteConfig.brand}. All artwork and
            handmade items are original. Product photos are placeholders.
          </p>
        </div>
      </div>
    </footer>
  );
}
