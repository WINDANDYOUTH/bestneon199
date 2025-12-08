'use client';

import { 
  CheckBadgeIcon, 
  CubeIcon, 
  GlobeAsiaAustraliaIcon, 
  HeartIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

export function ShippingWarranty() {
  const features = [
    {
      title: "Global Shipping",
      description: "Fast, tracked delivery worldwide. Production takes 3-7 days, followed by Express Shipping (3-5 days) to your door.",
      icon: <GlobeAsiaAustraliaIcon className="w-8 h-8" />,
      color: "blue"
    },
    {
      title: "Secure Packaging",
      description: "Zero-breakage guarantee. We use reinforced custom boxes and ample bubble wrap to ensure your sign arrives in perfect condition.",
      icon: <CubeIcon className="w-8 h-8" />,
      color: "orange"
    },
    {
      title: "12-Month Warranty",
      description: "Peace of mind included. All indoor signs come with a comprehensive 1-year manufacturer warranty covering electrical components.",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      color: "green"
    },
    {
      title: "Certified Quality",
      description: "Our signs meet global standards with CE, RoHS, and UL certification, ready for commercial and residential installation everywhere.",
      icon: <CheckBadgeIcon className="w-8 h-8" />,
      color: "purple"
    },
    {
      title: "Safe & Durable",
      description: "Kid-friendly and energy efficient. Powered by 12V low-voltage technology, our LED neon stays cool to the touch and won't shatter.",
      icon: <HeartIcon className="w-8 h-8" />,
      color: "pink"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Your Purchase, <span className="text-blue-600">Protected</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We prioritize safety, speed, and durability so you can enjoy your neon sign without worry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-full bg-${feature.color}-50 flex items-center justify-center text-${feature.color}-600 mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
          
          {/* Card 6: Contact for more */}
          <div className="bg-blue-600 p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center text-center text-white">
            <h3 className="text-xl font-bold mb-3">Have more questions?</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Our support team is online 24/7 to help with technical specs or custom requests.
            </p>
            <a 
              href="/contact" 
              className="px-6 py-2 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
