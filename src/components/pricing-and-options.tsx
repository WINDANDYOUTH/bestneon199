'use client';

import { useState } from 'react';
import {
  AdjustmentsHorizontalIcon,
  BoltIcon,
  BuildingStorefrontIcon,
  CubeTransparentIcon,
  PaintBrushIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

export function PricingAndOptions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'info@bestneon199.com';

  const options = [
    {
      title: 'Material & Tech',
      icon: <BoltIcon className="w-6 h-6" />,
      description:
        'Premium LED Neon Flex. Energy-efficient, durable (50,000+ hours), and kid-safe (no heat/glass).',
      color: 'blue',
    },
    {
      title: 'Backboard Options',
      icon: <CubeTransparentIcon className="w-6 h-6" />,
      description:
        'High-quality acrylic in Clear, Black, White, or Colored. Cut to shape, rectangle, or invisible.',
      color: 'purple',
    },
    {
      title: 'Color Palette',
      icon: <PaintBrushIcon className="w-6 h-6" />,
      description: '20+ vibrant colors including RGB color-changing options and dynamic effects.',
      color: 'pink',
    },
    {
      title: 'Dimmer & Remote',
      icon: <AdjustmentsHorizontalIcon className="w-6 h-6" />,
      description: 'Full control over brightness, modes (flash/pulse), and on/off scheduling included.',
      color: 'orange',
    },
    {
      title: 'Mounting Kits',
      icon: <SunIcon className="w-6 h-6" />,
      description:
        'Easy-install kits included: Wall mounting screws, hanging wires, or adhesive strips.',
      color: 'cyan',
    },
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pricing & <span className="text-purple-600">Customization</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent options with no hidden fees. We build exactly what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Options Grid (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {options.map((option) => (
              <div
                key={option.title}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* 注意：这里的 bg-${option.color}-50 / text-${option.color}-600 需要在 Tailwind safelist 中声明 */}
                <div
                  className={`w-12 h-12 rounded-lg bg-${option.color}-50 flex items-center justify-center text-${option.color}-600 mb-4`}
                >
                  {option.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>

          {/* Wholesale / Bulk Card */}
          <div className="lg:col-span-1">
            <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                  <BuildingStorefrontIcon className="w-8 h-8 text-yellow-400" />
                </div>

                <h3 className="text-2xl font-bold mb-2">Wholesale & Bulk</h3>
                <div className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-300 text-xs font-bold rounded-full mb-6">
                  BUSINESS PARTNERS
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Planning a large event, branding a franchise, or reselling? Unlock exclusive comprehensive
                  B2B pricing tiers.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-gray-300">
                    <svg
                      className="w-5 h-5 text-green-400 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Volume Discounts (Up to 30% off)
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg
                      className="w-5 h-5 text-green-400 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority Production Queue
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg
                      className="w-5 h-5 text-green-400 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dedicated Account Manager
                  </li>
                </ul>
              </div>

              {/* 原来的 NextLink 换成按钮 + 弹窗 */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="relative z-10 w-full py-4 bg-white text-gray-900 font-bold rounded-xl text-center hover:bg-gray-100 transition-colors"
              >
                Inquire for Business
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to light up your space?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Every sign is unique. Share your vision and we'll provide a precise quote including production
            and shipping to your specific location.
          </p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:scale-105 transition-all group"
          >
            Get Exact Quote
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal（显示邮箱 + Copy） */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md mx-4 rounded-2xl bg-slate-900/95 border border-white/15 p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-2">Request Pricing & Business Quote</h2>
            <p className="text-sm text-slate-300 mb-4">
              Please send us your requirements (size, quantity, design idea, usage, destination country) by
              email. Our team will reply with a tailored quotation as soon as possible.
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
              Paste this email into your mail client (Gmail, Outlook, etc.) and send us your project details.
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
