'use client';

import { useState } from 'react';
import {
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  PaperAirplaneIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export function CustomProcess() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'info@bestneon199.com';

  const steps = [
    {
      id: 1,
      title: 'Send Your Idea',
      description:
        'Upload your logo, drawing, or simply describe what you have in mind. We accept all file formats.',
      icon: <PaperAirplaneIcon className="w-8 h-8" />,
      styles: {
        badgeBorder: 'border-blue-100',
        badgeText: 'text-blue-600',
        iconBg: 'bg-blue-50',
        iconText: 'text-blue-600',
      },
    },
    {
      id: 2,
      title: 'Get Free Mockup & Quote',
      description:
        'Within 24 hours, receive a professional design proof and a tailored price quote—completely free.',
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      styles: {
        badgeBorder: 'border-purple-100',
        badgeText: 'text-purple-600',
        iconBg: 'bg-purple-50',
        iconText: 'text-purple-600',
      },
    },
    {
      id: 3,
      title: 'Confirm Order',
      description: 'Review the design, approve the size and color, and secure your order with payment.',
      icon: <ClipboardDocumentCheckIcon className="w-8 h-8" />,
      styles: {
        badgeBorder: 'border-pink-100',
        badgeText: 'text-pink-600',
        iconBg: 'bg-pink-50',
        iconText: 'text-pink-600',
      },
    },
    {
      id: 4,
      title: 'Production',
      description:
        'Our craftsmen hand-make your sign using premium LED neon flex and durable acrylic. Takes 3–7 days.',
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      styles: {
        badgeBorder: 'border-orange-100',
        badgeText: 'text-orange-600',
        iconBg: 'bg-orange-50',
        iconText: 'text-orange-600',
      },
    },
    {
      id: 5,
      title: 'Quality Check',
      description:
        'Every sign undergoes rigorous testing for brightness, durability, and finish before packing.',
      icon: <CheckBadgeIcon className="w-8 h-8" />,
      styles: {
        badgeBorder: 'border-green-100',
        badgeText: 'text-green-600',
        iconBg: 'bg-green-50',
        iconText: 'text-green-600',
      },
    },
    {
      id: 6,
      title: 'Fast Global Shipping',
      description: 'Your sign is securely detailed and shipped express to your door, fully insured.',
      icon: <TruckIcon className="w-8 h-8" />,
      styles: {
        badgeBorder: 'border-cyan-100',
        badgeText: 'text-cyan-600',
        iconBg: 'bg-cyan-50',
        iconText: 'text-cyan-600',
      },
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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-sm font-semibold text-blue-600">Simple 6-Step Workflow</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            From Idea to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Glowing Reality
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;ve streamlined our process to be as smooth and transparent as possible. Here&apos;s how we
            create your masterpiece.
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {steps.map((step) => (
              <div key={step.id} className="relative group">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 h-full flex flex-col items-center text-center">
                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-white to-gray-50 border-2 ${step.styles.badgeBorder} flex items-center justify-center font-bold ${step.styles.badgeText} shadow-sm z-20`}
                  >
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${step.styles.iconBg} flex items-center justify-center ${step.styles.iconText} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Start Your Project Now
          </button>
          <p className="mt-4 text-sm text-gray-500">No commitment required. Get your free mockup today.</p>
        </div>
      </div>

      {/* Modal */}
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

            <h2 className="text-2xl font-bold text-white mb-2">Start Your Project</h2>
            <p className="text-sm text-slate-300 mb-4">
              Send us your idea (logo / text / reference image), preferred size, colors and usage details by
              email. Our designers will prepare a free mockup and quote for you.
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
