'use client';

import { useState } from 'react';
// 原来有：import { NextLink } from '@site/utilities/deps';
// 现在已经不用 NextLink 了，可以删掉这行

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // 控制弹窗：quote = Request a Quote, business = Start Business With Us
  const [activeModal, setActiveModal] = useState<null | 'quote' | 'business'>(null);
  const [copied, setCopied] = useState(false);

  const email = 'info@bestneon199.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 失败就不做额外提示了，避免干扰
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900" />

        {/* Video element - replace src with your actual video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/videos/neon-hero-bg.mp4" type="video/mp4" />
          <source src="/videos/neon-hero-bg.webm" type="video/webm" />
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-white">CE/FCC Certified</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold text-white">Top Manufacturer</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold text-white">6+ Years Experience</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.15] mb-6">
  <span className="block pt-3 lg:pt-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient">
    Leading Manufacturer
  </span>
  <span className="block text-white mt-2">of Custom Neon Signs</span>
</h1>





          {/* Subtitle */}
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-gray-200 font-semibold max-w-4xl mx-auto">
            High-Volume Production • Premium Quality • Global Delivery
          </p>

          {/* Description Paragraph */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            With over six years of expertise in neon sign manufacturing, we combine cutting-edge LED technology
            with traditional craftsmanship to deliver exceptional custom neon signs. Our state-of-the-art facility
            produces thousands of premium quality signs monthly, serving businesses and individuals worldwide.
          </p>

          {/* CTA Buttons：改成弹窗触发按钮 */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => setActiveModal('quote')}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 ease-out rounded-full overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Request a Quote
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveModal('business')}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 ease-out rounded-full border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white/50 hover:scale-105"
            >
              <span className="relative flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Start Business With Us
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">50K+</div>
              <div className="text-sm sm:text-base mt-1">Signs Produced</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">20+</div>
              <div className="text-sm sm:text-base mt-1">Countries Served</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">99.99%</div>
              <div className="text-sm sm:text-base mt-1">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* 弹窗 */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md mx-4 rounded-3xl bg-slate-900/90 border border-white/10 p-6 sm:p-8 shadow-2xl">
            {/* 关闭按钮 */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-2">
              {activeModal === 'quote' ? 'Request a Quote' : 'Start Business With Us'}
            </h2>
            <p className="text-sm text-slate-300 mb-4">
              {activeModal === 'quote'
                ? 'Please send us your idea, size, color, and usage details by email. Our team will reply with a quotation.'
                : 'Tell us about your business, expected order volume and requirements by email. Our team will contact you soon.'}
            </p>

            <div className="flex items-center justify-between gap-2 bg-slate-800/80 border border-slate-600/60 rounded-2xl px-3 py-2">
              <span className="text-xs sm:text-sm text-slate-200 truncate">{email}</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600"
              >
                Copy
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-400">
              You can paste this email into your mail client (Outlook, Gmail, etc.) and send us the details.
            </p>
          </div>
        </div>
      )}

      {/* 复制成功的小提示 */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-black/80 text-white text-xs sm:text-sm px-4 py-2 shadow-lg">
          Email copied to clipboard
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Custom CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
