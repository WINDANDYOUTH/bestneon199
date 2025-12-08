'use client';

import { StarIcon } from '@heroicons/react/24/solid';

export function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Owner, The Daily Grind",
      content: "Absolutely blown away by the quality! The custom logo sign for my coffee shop is the first thing customers notice. The dimmer remote is a game changer for setting the evening mood.",
      rating: 5,
      date: "2 weeks ago",
      image: "SJ" // Placeholder initials
    },
    {
      id: 2,
      name: "Mike & Rachel",
      role: "Wedding, June 2024",
      content: "We ordered a 'Better Together' sign for our wedding reception. It arrived in 4 days (super fast!) and was packaged perfectly. Our photos looked magical with the neon glow.",
      rating: 5,
      date: "1 month ago",
      image: "MR"
    },
    {
      id: 3,
      name: "TechStart Inc.",
      role: "Office Branding",
      content: "Ordered 5 signs for our new HQ. The wholesale team was incredibly helpful with the technical specs. Installation was simple with the included kits. will definitely order again.",
      rating: 5,
      date: "3 weeks ago",
      image: "TS"
    }
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4" />
              ))}
            </div>
            <span className="text-sm font-medium text-white">Rated 4.9/5 by 500+ Clients</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Businesses & Creators</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Read what our customers have to say about their custom neon experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors group">
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-300 leading-relaxed mb-8">
                "{review.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {review.image}
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-purple-400 transition-colors">
                    {review.name}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    {review.role}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Badges / Google Reviews Placeholder */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-white font-bold text-xl">
             <span className="text-2xl">G</span> Google Reviews
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-xl">
             <span className="text-base">★</span> Trustpilot
          </div>
        </div>

      </div>
    </section>
  );
}
