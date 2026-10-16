import { Instagram, MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { siteConfig, whatsappLink } from '@/data/siteConfig';

export default function Contact() {
  useReveal();

  const generalEnquiry = `Hi ${siteConfig.brand}! I'd like to ask about your products and placing an order.`;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-cream-100/60 py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-rose-400 mb-3">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-earth-800 mb-3">
            Let's create something beautiful
          </h1>
          <p className="text-earth-500 max-w-lg mx-auto leading-relaxed">
            The quickest way to reach me is WhatsApp. I respond to all enquiries
            personally — usually within a day.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* WhatsApp */}
          <a
            href={whatsappLink(generalEnquiry)}
            target="_blank"
            rel="noopener noreferrer"
            className="group reveal block p-8 rounded-2xl bg-sage-500 text-white hover:bg-sage-600 transition-all duration-300 hover:shadow-xl"
          >
            <MessageCircle className="w-8 h-8 mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-xl font-medium mb-2">WhatsApp</h3>
            <p className="text-sm text-cream-100 leading-relaxed mb-4">
              Tap to start a chat. Your message will be pre-filled — just hit
              send.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-cream-100 group-hover:gap-3 transition-all">
              Open WhatsApp
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          {/* Instagram */}
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group reveal block p-8 rounded-2xl bg-cream-50 ring-1 ring-cream-200 hover:ring-rose-200 transition-all duration-300 hover:shadow-xl"
            style={{ transitionDelay: '100ms' }}
          >
            <Instagram className="w-8 h-8 text-rose-400 mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-xl font-medium text-earth-800 mb-2">Instagram</h3>
            <p className="text-sm text-earth-500 leading-relaxed mb-4">
              Follow along for new pieces, work-in-progress, and behind-the-scenes.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-rose-400 group-hover:gap-3 transition-all">
              @{siteConfig.instagramHandle}
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Other details */}
        <div className="mt-6 p-8 rounded-2xl bg-cream-100 ring-1 ring-cream-200 reveal">
          <h3 className="font-serif text-lg font-medium text-earth-800 mb-5">
            Other Ways to Reach Me
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-xs uppercase tracking-widest text-earth-400 mb-1">Email</p>
                <p className="text-sm text-earth-600">{siteConfig.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-xs uppercase tracking-widest text-earth-400 mb-1">Location</p>
                <p className="text-sm text-earth-600">{siteConfig.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 p-6 rounded-2xl bg-rose-50/50 ring-1 ring-rose-100 reveal">
          <p className="text-sm text-earth-500 leading-relaxed">
            <strong className="text-earth-700">A note:</strong> The WhatsApp
            number, Instagram handle, and email shown above are placeholders.
            Replace them in the site settings before going live.
          </p>
        </div>
      </section>
    </div>
  );
}
