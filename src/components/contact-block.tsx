'use client';

import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import Image from 'next/image';

export function ContactBlock() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const email = 'info@bestneon199.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-gray-950 text-white border-t border-gray-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          {/* Left: Logo, Company, Heading & Address */}
          <div className="max-w-xl">
            {/* Logo + Company Name */}
            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src="/logo.webp"
                  alt="Best Trading (Dongguan) Co., Ltd"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-[0.22em] text-blue-400 mb-1">
                  Manufacturer
                </div>
                <div className="text-sm sm:text-base font-semibold text-gray-100">
                  Best Trading (Dongguan) Co., Ltd
                </div>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to create something <span className="text-blue-400">brilliant?</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Factory direct customized neon signs. Unbeatable prices, premium quality, and fast global
              shipping.
            </p>

            <div className="space-y-4">
              {/* Address Item */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="shrink-0 p-3 bg-blue-500/10 text-blue-400 rounded-lg">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">
                    Factory Address
                  </div>
                  <div className="text-gray-200 leading-relaxed">
                    Room 1901, Building 3, No. 2, R&amp;D Fifth Road,
                    <br />
                    Songshan Lake Industrial Park, Dongguan City,
                    <br />
                    Guangdong Province
                  </div>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="shrink-0 p-3 bg-purple-500/10 text-purple-400 rounded-lg">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">
                    Quick Contact
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <a
                      href={`mailto:${email}`}
                      className="text-xl font-bold text-white hover:text-purple-300 transition-colors"
                    >
                      {email}
                    </a>

                    {/* Copy Button */}
                    <button
                      onClick={handleCopy}
                      className="group relative p-2 ml-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <ClipboardDocumentCheckIcon className="w-5 h-5 text-green-400" />
                      ) : (
                        <ClipboardDocumentIcon className="w-5 h-5" />
                      )}

                      {/* Tooltip */}
                      <span
                        className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-xs rounded text-white transition-opacity whitespace-nowrap ${
                          copied ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        Copied!
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Big CTA (modal instead of navigation) */}
          <div className="w-full max-w-sm lg:w-auto">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-3xl shadow-2xl shadow-blue-900/50">
              <div className="bg-gray-950 rounded-[22px] p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="text-white text-lg font-medium mb-2">Have a design in mind?</div>
                <h3 className="text-3xl font-bold text-white mb-8">Get Your Free Quote</h3>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1"
                >
                  Get Free Design &amp; Quote
                </button>

                <p className="mt-4 text-xs text-gray-500">Responds within 24 hours. No obligation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for CTA */}
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

            <h2 className="text-2xl font-bold text-white mb-2">Get Free Design &amp; Quote</h2>
            <p className="text-sm text-slate-300 mb-4">
              Send us your ideas, logo, preferred size, colors and usage details by email. Best Trading
              (Dongguan) Co., Ltd will reply with a free mockup and quotation as soon as possible.
            </p>

            <div className="flex items-center justify-between gap-2 bg-slate-800/80 border border-slate-600/60 rounded-2xl px-3 py-2">
              <span className="text-xs sm:text-sm text-slate-100 truncate">{email}</span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-400">
              Paste this email into Gmail, Outlook, or your preferred email client and send us your project
              details.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
