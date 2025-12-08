'use client';

import { useState } from 'react';

import { NextLink } from '@site/utilities/deps';

export function ProductCategories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = [
    {
      title: 'Custom Text Neon Signs',
      description: 'Transform your words into glowing art. Perfect for names, quotes, and personalized messages in any font and color.',
      image: '/images/categories/custom-text.jpg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      gradient: 'from-pink-500 to-rose-500',
      stats: '1000+ Designs',
    },
    {
      title: 'Logo Neon Signs',
      description: 'Bring your brand to life with illuminated logos. High-precision crafting ensures every detail of your brand identity shines.',
      image: '/images/categories/logo-signs.jpg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      stats: 'Brand Perfect',
    },
    {
      title: 'Business & Shop Signs',
      description: 'Make your storefront unforgettable. Eye-catching commercial signage that attracts customers and boosts visibility.',
      image: '/images/categories/business-signs.jpg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: 'from-purple-500 to-indigo-500',
      stats: 'Commercial Grade',
    },
    {
      title: 'Wedding & Event Neon',
      description: 'Create magical moments with custom event signage. From weddings to parties, add that perfect glowing touch.',
      image: '/images/categories/wedding-event.jpg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: 'from-pink-500 to-purple-500',
      stats: 'Event Ready',
    },
    {
      title: 'Open Signs & Standard Models',
      description: 'Ready-to-ship classic designs. Popular phrases and symbols available for immediate delivery to your business.',
      image: '/images/categories/open-signs.jpg',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-500',
      stats: 'Quick Ship',
    },
  ];

  return (
    <section className="relative py-20 sm:py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200">
            <span className="text-sm font-semibold text-blue-700">Our Product Range</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Neon Signs for
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Every Occasion
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From custom designs to ready-made classics, we craft premium LED neon signs 
            that illuminate your space and amplify your message.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                {/* Placeholder gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20`} />
                
                {/* Image placeholder with icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white transform transition-transform duration-500 ${hoveredIndex === index ? 'scale-110 rotate-6' : 'scale-100'}`}>
                    {category.icon}
                  </div>
                </div>

                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-60'}`} />
                
                {/* Stats Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold bg-gradient-to-r ${category.gradient} text-transparent bg-clip-text`}>
                    {category.stats}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {category.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-sm font-semibold">
                  <span className={`bg-gradient-to-r ${category.gradient} text-transparent bg-clip-text`}>
                    Learn More
                  </span>
                  <svg 
                    className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-2' : 'translate-x-0'}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${category.gradient} opacity-5 rounded-tr-full transition-all duration-300 ${hoveredIndex === index ? 'scale-150' : 'scale-100'}`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-purple-100">
            <div className="flex-1 text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-gray-600 text-lg">
                We specialize in custom designs. Share your vision and we'll bring it to life!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <NextLink
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Request Custom Design
              </NextLink>
              <NextLink
                href="/products"
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Browse Catalog
              </NextLink>
            </div>
          </div>
        </div>

        {/* Features Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '⚡', text: 'Fast Production' },
            { icon: '🎨', text: 'Any Color' },
            { icon: '📏', text: 'Any Size' },
            { icon: '✨', text: 'Premium Quality' },
          ].map((feature, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
              <div className="text-4xl mb-2">{feature.icon}</div>
              <div className="text-sm font-semibold text-gray-700">{feature.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
