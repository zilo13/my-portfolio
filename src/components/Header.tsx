import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-gradient-to-b from-white/5 to-transparent border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
          <img src="/logo.png" alt="Yves Dev 237 Logo" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full"/>
          <span className="font-bold text-accent hidden sm:inline text-sm sm:text-base">Yves Dev 237</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1" role="navigation" aria-label="Main navigation">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => 
                isActive 
                  ? 'text-accent border-b-2 border-accent pb-1 px-3 py-2 text-sm font-medium transition-colors' 
                  : 'text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors'
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  isActive 
                    ? 'block text-accent border-l-2 border-accent pl-3 py-2 text-sm font-medium transition-colors' 
                    : 'block text-gray-300 hover:text-white pl-3 py-2 text-sm font-medium transition-colors'
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
