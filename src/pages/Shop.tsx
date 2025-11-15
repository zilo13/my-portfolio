import { useState } from 'react'

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const websites = [
    {
      id: 1,
      title: 'Modern SaaS Landing Page',
      description: 'Professional SaaS landing page with conversion-optimized design, pricing tables, and testimonials.',
      screenshot: '🚀',
      category: 'saas',
      features: ['Responsive Design', 'Dark Mode', 'Pricing Table', 'Testimonials', 'CTA Buttons', 'Contact Form'],
      priceRange: '$299 - $499',
      demoUrl: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Store Template',
      description: 'Complete e-commerce solution with product showcase, cart functionality, and payment integration ready.',
      screenshot: '🛒',
      category: 'ecommerce',
      features: ['Product Grid', 'Shopping Cart', 'Wishlist', 'Product Filter', 'Search', 'Checkout Flow'],
      priceRange: '$399 - $699',
      demoUrl: '#'
    },
    {
      id: 3,
      title: 'Agency Portfolio Website',
      description: 'Stunning portfolio site perfect for creative agencies with case studies, team section, and services showcase.',
      screenshot: '🎨',
      category: 'agency',
      features: ['Case Studies', 'Team Page', 'Services Showcase', 'Blog Ready', 'SEO Optimized', 'Mobile First'],
      priceRange: '$349 - $549',
      demoUrl: '#'
    },
    {
      id: 4,
      title: 'Tech Startup Hub',
      description: 'Modern startup website with metrics dashboard, team profiles, and investor relations sections.',
      screenshot: '⚡',
      category: 'saas',
      features: ['Dashboard', 'Team Profiles', 'Product Showcase', 'Blog Integration', 'Newsletter', 'Analytics Ready'],
      priceRange: '$449 - $799',
      demoUrl: '#'
    },
    {
      id: 5,
      title: 'Restaurant & Cafe Site',
      description: 'Beautiful restaurant website with menu display, reservation system, and location integration.',
      screenshot: '🍽️',
      category: 'business',
      features: ['Menu Display', 'Reservations', 'Location Map', 'Gallery', 'Reviews', 'Online Ordering Ready'],
      priceRange: '$279 - $479',
      demoUrl: '#'
    },
    {
      id: 6,
      title: 'Fitness & Wellness App Site',
      description: 'Health-focused website with class schedules, trainer profiles, and membership management integration.',
      screenshot: '💪',
      category: 'business',
      features: ['Class Schedule', 'Trainer Profiles', 'Pricing Plans', 'Testimonials', 'Blog', 'Booking System'],
      priceRange: '$329 - $529',
      demoUrl: '#'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Templates' },
    { id: 'saas', label: 'SaaS' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'agency', label: 'Agency' },
    { id: 'business', label: 'Business' }
  ]

  const filteredWebsites = selectedCategory === 'all' 
    ? websites 
    : websites.filter(site => site.category === selectedCategory)

  return (
    <div className="pt-[72px]">
      <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">Ready-Made Websites</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl">
              Beautiful, modern website templates ready to launch. Customize them to match your brand and go live in days, not months.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-sm sm:text-base font-semibold text-gray-300 mb-3 sm:mb-4">Filter by Category:</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all text-xs sm:text-sm ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-accent to-accent-light text-white shadow-lg'
                      : 'bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:border-accent/50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Websites Grid or Empty State */}
          {filteredWebsites.length === 0 ? (
            <div className="glass border border-white/10 rounded-xl p-12 sm:p-16 text-center">
              <div className="text-6xl sm:text-7xl mb-4 sm:mb-6 flex justify-center">📦</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-200 mb-2 sm:mb-4">
                No websites in this category yet
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                We're building amazing templates for this category. Check back soon!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="px-4 sm:px-6 py-2 sm:py-3 border border-accent text-accent hover:bg-accent/10 rounded-lg font-medium transition-all text-sm sm:text-base"
                >
                  View All Templates
                </button>
                <a
                  href="/contact"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-accent to-accent-light text-white rounded-lg font-medium hover:shadow-lg hover:shadow-accent/50 transition-all text-center text-sm sm:text-base"
                >
                  Request This Category
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredWebsites.map((website) => (
                <div
                  key={website.id}
                  className="glass group border border-white/10 rounded-xl overflow-hidden hover:border-accent/50 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
                >
                  {/* Screenshot/Preview */}
                  <div className="relative w-full h-40 sm:h-48 bg-gradient-to-br from-accent/10 to-accent-light/10 flex items-center justify-center overflow-hidden group-hover:from-accent/20 group-hover:to-accent-light/20 transition-colors">
                    <div className="text-6xl sm:text-7xl group-hover:scale-110 transition-transform">
                      {website.screenshot}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{website.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4 flex-grow">
                      {website.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-accent mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {website.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="px-2 sm:px-3 py-1 text-xs bg-accent/20 text-accent-light rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                        {website.features.length > 3 && (
                          <span className="px-2 sm:px-3 py-1 text-xs bg-accent/20 text-accent-light rounded-full">
                            +{website.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="border-t border-white/10 pt-4 mt-auto">
                      <div className="mb-3">
                        <p className="text-xs sm:text-sm text-gray-400 mb-1">Price Range</p>
                        <p className="text-lg sm:text-xl font-bold text-accent">{website.priceRange}</p>
                      </div>
                      <a
                        href={website.demoUrl}
                        className="w-full px-4 py-2 sm:py-3 bg-gradient-to-r from-accent to-accent-light text-white font-medium rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all text-center text-sm sm:text-base"
                      >
                        View Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-transparent to-purple-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">Need a Custom Website?</h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
            Can't find what you're looking for? Let's build something unique for your business.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent to-accent-light text-white font-medium rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all"
          >
            Request Custom Website
          </a>
        </div>
      </section>
    </div>
  )
}
