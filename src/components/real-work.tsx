'use client';

import { Dialog } from '@headlessui/react';
import { ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import { NextLink } from '@site/utilities/deps';

interface Project {
  id: number;
  title: string;
  category: string;
  designImage: string;
  finalImage: string;
  description: string;
}

export function RealWork() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock data for initial display (3 main projects)
  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "The Coffee House",
      category: "Business Signage",
      designImage: "/images/portfolio/coffee-design.jpg",
      finalImage: "/images/portfolio/coffee-real.jpg",
      description: "Custom warm white LED neon on clear acrylic backing. Size: 120cm x 60cm."
    },
    {
      id: 2,
      title: "Cyberpunk Bar",
      category: "Commercial Decor",
      designImage: "/images/portfolio/bar-design.jpg",
      finalImage: "/images/portfolio/bar-real.jpg",
      description: "RGB changing neon system with remote control. Complex multilayer design."
    },
    {
      id: 3,
      title: "Wedding 'Better Together'",
      category: "Event Lighting",
      designImage: "/images/portfolio/wedding-design.jpg",
      finalImage: "/images/portfolio/wedding-real.jpg",
      description: "Elegant cursive font in soft pink. Perfect backdrop for photo opportunities."
    }
  ];

  // More projects for the modal gallery
  const galleryProjects: Project[] = [
    ...featuredProjects,
    {
      id: 4,
      title: "Tech Startup Logo",
      category: "Office Branding",
      designImage: "/images/portfolio/tech-design.jpg",
      finalImage: "/images/portfolio/tech-real.jpg",
      description: "Precise logo reproduction for reception area."
    },
    {
      id: 5,
      title: "Home Bar 'Cheers'",
      category: "Home Decor",
      designImage: "/images/portfolio/cheers-design.jpg",
      finalImage: "/images/portfolio/cheers-real.jpg",
      description: "Vibrant yellow neon comparison."
    },
    {
      id: 6,
      title: "Fitness Studio",
      category: "Commercial",
      designImage: "/images/portfolio/gym-design.jpg",
      finalImage: "/images/portfolio/gym-real.jpg",
      description: "High impact motivational signage."
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="text-sm font-semibold text-purple-300">Portfolio Gallery</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Design vs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Reality</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            See the precision of our craftsmanship. We turn your digital concepts into brilliant reality with 100% accuracy.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 shadow-2xl"
            >
              {/* Comparison Container - Aspect Ratio 4:3 */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                {/* Background Pattern Placeholder (Visible if no image) */}
                <div 
                  className="absolute inset-0 opacity-10" 
                  style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} 
                />
                
                {/* Design Image (Base Layer) */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-500">
                  <span className="text-xs uppercase tracking-widest">Design Concept</span>
                </div>

                {/* Real Image (Top Layer) */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-blue-900/50 transition-opacity duration-500 group-hover:opacity-0 z-10">
                   <div className="absolute inset-0 bg-gray-900/20" />
                   <div className="flex flex-col items-center justify-center p-4 text-center z-20">
                     <span className="text-xs font-bold px-2 py-1 bg-green-500/20 text-green-400 rounded mb-2 border border-green-500/20">FINAL PRODUCT</span>
                   </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                     <span className="text-xs font-bold px-2 py-1 bg-blue-500/20 text-blue-400 rounded mb-2 border border-blue-500/20">DESIGN PROOF</span>
                </div>

                {/* SVG Icon Placeholder for "Design" */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-16 h-16 text-blue-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>

                 {/* SVG Icon Placeholder for "Real" */}
                 <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
                  <svg className="w-16 h-16 text-green-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <div className="text-sm text-purple-400 mb-1 font-medium">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <button 
                   type="button"
                   onClick={() => setIsModalOpen(true)}
                   className="text-sm font-semibold text-white border-b border-white/30 pb-0.5 hover:text-purple-400 hover:border-purple-400 transition-colors"
                >
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery CTA */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 ease-out rounded-full overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105"
          >
            <span className="relative flex items-center gap-2">
              <ArrowsPointingOutIcon className="w-5 h-5" />
              View Full Gallery
            </span>
          </button>
        </div>
      </div>

      {/* Gallery Modal */}
      <Dialog 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-6xl rounded-2xl bg-gray-900 border border-white/10 p-6 sm:p-10 shadow-2xl relative">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <div className="text-center mb-10">
                <Dialog.Title className="text-3xl font-bold text-white mb-2">
                  Our Real Work Gallery
                </Dialog.Title>
                <Dialog.Description className="text-gray-400">
                  Browse our collection of custom neon signs delivered to happy customers.
                </Dialog.Description>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryProjects.map((project) => (
                  <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                    <div 
                      className="aspect-square bg-gray-900 relative group cursor-pointer"
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                         {/* Placeholder pattern */}
                         <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                         </svg>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-white font-bold">{project.title}</span>
                         <span className="text-gray-300 text-xs">{project.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <NextLink
                  href="/contact"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-1"
                >
                  Get Your Own Custom Sign
                </NextLink>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </section>
  );
}
