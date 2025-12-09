'use client';

import { useState } from 'react';
import Image from 'next/image';

type Category = {
  title: string;
  description: string;
  image: string;
  stats: string;
  gradient: string;
};

const categories: Category[] = [
  {
    title: 'Custom Text Signs',
    description:
      'Design your own neon text sign with any words, fonts, and colors. Perfect for rooms, studios, or personal branding.',
    image: '/images/categories/custom-text.webp',
    stats: 'Most Popular',
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    title: 'Logo & Brand Signs',
    description:
      'Turn your logo or brand identity into a high-impact neon sign for shops, studios, pop-ups, and events.',
    image: '/images/categories/logo-signs.webp',
    stats: 'Business Favorite',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Business & Storefront',
    description:
      'Attract more customers with vibrant storefront neon. Open signs, tagline signs, and custom window displays.',
    image: '/images/categories/business-signs.webp',
    stats: 'High ROI',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Wedding & Events',
    description:
      'Create unforgettable moments with custom neon for weddings, proposals, parties, and corporate events.',
    image: '/images/categories/wedding-event.webp',
    stats: 'Event Hit',
    gradient: 'from-rose-500 to-orange-500',
  },
  {
    title: 'Open & Ready-Made',
    description:
      'Classic “Open” and ready-made neon designs that are always in stock and ship fast for your business.',
    image: '/images/categories/open-signs.webp',
    stats: 'Fast Shipping',
    gradient: 'from-indigo-500 to-sky-500',
  },
];

export function ProductCategories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = 'info@bestneon199.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore copy failure
    }
  };

  return (
    <section className="relative py-20 sm:py-28 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200">
            <span className="text-sm font-semibold text-purple-700">Product Categories</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Explore Our Best-Selling
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              Neon Sign Collections
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From personal creations to large-scale business installations, we manufacture neon signs for
            every style, space, and occasion.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? 'scale-105' : 'scale-100'
                  }`}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-80' : 'opacity-60'
                  }`}
                />

                {/* Stats Badge */}
                <div className="absolute top-4 right-4">
                  <div
                    className={`px-3 py-1 text-xs font-bold rounded-full bg-white/90 backdrop-blur-sm bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                  >
                    {category.stats}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Request Custom Sign */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 shadow-2xl">
            <div className="text-white text-left sm:text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Need a Fully Custom Neon Sign?</h3>
              <p className="text-purple-100">
                Tell us your idea, and our team will help you bring it to life.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="whitespace-nowrap px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Request Custom Sign →
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Request Custom Sign */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md mx-4 rounded-2xl bg-slate-900/95 border border-white/15 p-6 sm:p-8 shadow-2xl">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-2">Request a Custom Neon Sign</h2>
            <p className="text-sm text-slate-300 mb-4">
              Please send us your idea, size, color, quantity and usage details by email. Our team will
              reply with a customized quotation as soon as possible.
            </p>

            <div className="flex items-center justify-between gap-2 bg-slate-800/80 border border-slate-600/60 rounded-2xl px-3 py-2">
              <span className="text-xs sm:text-sm text-slate-100 truncate">{email}</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600"
              >
                Copy
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-400">
              Paste this email into your mail client (Gmail, Outlook, etc.) and send us your project
              details.
            </p>
          </div>
        </div>
      )}

      {/* Copy toast */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-black/80 text-white text-xs sm:text-sm px-4 py-2 shadow-lg">
          Email copied to clipboard
        </div>
      )}
    </section>
  );
}
