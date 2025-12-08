import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

export function FAQSection() {
  const faqs = [
    {
      question: "How long is production time?",
      answer: "Standard production time is 3–7 business days after you approve the design. Once shipped, delivery typically takes another 3–5 business days via express courier (DHL/FedEx/UPS).",
    },
    {
      question: "Do you provide a free design mockup?",
      answer: "Yes! We offer completely free design proofs and price quotes. Just send us your logo, text, or idea, and our design team will send you a professional mockup within 24 hours.",
    },
    {
      question: "Can you make any logo into a neon sign?",
      answer: "Almost certainly. Our precision CNC technology allows us to replicate complex logos, fonts, and shapes with high accuracy. If a design is too intricate for neon flex, we can combine it with UV printing for a perfect result.",
    },
    {
      question: "What is the lifespan of the neon signs?",
      answer: "Our LED neon signs are built to last over 50,000 hours of continuous use. That's roughly 5-6 years if you leave it on 24/7, or over a decade with normal daily use.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and Shop Pay. For large wholesale orders, we also accept bank wire transfers.",
    },
    {
      question: "Do you support wholesale or OEM orders?",
      answer: "Absolutely. We are a factory-direct manufacturer. We offer tiered pricing for bulk orders, white-label shipping for resellers, and dedicated account management for business partners.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about ordering your custom neon sign.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <Disclosure key={faq.question} as="div" className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none">
                    <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform text-blue-600' : 'text-gray-400'
                      } h-5 w-5 transition-transform duration-200`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed bg-white">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>

      </div>
    </section>
  );
}
