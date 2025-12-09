'use client';
import Image from 'next/image';
import { 
  BuildingOffice2Icon, 
  CheckBadgeIcon, 
  GlobeAmericasIcon, 
  UsersIcon 
} from '@heroicons/react/24/outline'; // Outline icons



export function FactoryStrength() {
  const stats = [
    { label: "Years Experience", value: "10+", icon: <UsersIcon className="w-6 h-6" /> },
    { label: "Factory Size", value: "5000m²", icon: <BuildingOffice2Icon className="w-6 h-6" /> },
    { label: "Export Countries", value: "50+", icon: <GlobeAmericasIcon className="w-6 h-6" /> },
    { label: "Annual Capacity", value: "100k+", icon: <CheckBadgeIcon className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
              Factory & Manufacturing
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              World-Class <span className="text-blue-600">Manufacturing Capability</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are not just a design studio; we own our production lines. With over a decade of expertise, our 5,000m² facility combines advanced CNC technology with traditional craftsmanship to deliver superior neon signs globally.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                  <div className="flex items-center gap-3 mb-2 text-blue-600">
                    {stat.icon}
                    <span className="font-bold text-2xl text-gray-900">{stat.value}</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="border-t border-gray-100 pt-8">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Certifications & Standards</h4>
              <div className="flex flex-wrap gap-4">
                {['CE Certified', 'RoHS Compliant', 'UL Listed Components', 'ISO 9001'].map((cert) => (
                  <span key={cert} className="inline-flex items-center px-3 py-1 rounded-md bg-green-50 text-green-700 text-xs font-bold border border-green-100">
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          {/* Right Content - Image Grid */}
<div className="relative">
  <div className="grid grid-cols-2 gap-4">
    {/* Image 1: Factory Floor - Large */}
    <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden shadow-lg relative">
      <Image
        src="/images/factory/floor.webp"
        alt="Factory Floor"
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
      <span className="absolute bottom-4 left-4 text-white font-bold text-sm bg-black/50 px-2 py-1 rounded">
        Factory Floor
      </span>
    </div>

    {/* Image 2: CNC */}
    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg relative">
      <Image
        src="/images/factory/cnc.webp"
        alt="CNC Machine"
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
      <span className="absolute bottom-4 left-4 text-white font-bold text-sm bg-black/50 px-2 py-1 rounded">
        CNC Precision
      </span>
    </div>

    {/* Image 3: Crafting */}
    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg relative">
      <Image
        src="/images/factory/crafting.webp"
        alt="Hand Crafting"
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
      <span className="absolute bottom-4 left-4 text-white font-bold text-sm bg-black/50 px-2 py-1 rounded">
        Hand Crafting
      </span>
    </div>
  </div>

  {/* Soft ambient blob */}
  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-purple-100 
                  rounded-full blur-3xl opacity-50 pointer-events-none" 
  />
</div>

        </div>
      </div>
    </section>
  );
}
