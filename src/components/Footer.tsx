export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/zilo13',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.015 12.015 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61582765780557',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    }
  ]

  return (
    <footer className="border-t border-white/10 bg-gradient-to-t from-purple-950/20 to-transparent mt-12 sm:mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-accent text-base sm:text-lg mb-2">Yves Dev 237</h3>
            <p className="text-gray-400 text-sm sm:text-base">Creative frontend developer crafting beautiful web experiences</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="text-gray-400 hover:text-accent transition-colors text-sm sm:text-base block">Home</a>
              <a href="/services" className="text-gray-400 hover:text-accent transition-colors text-sm sm:text-base block">Services</a>
              <a href="/about" className="text-gray-400 hover:text-accent transition-colors text-sm sm:text-base block">About</a>
              <a href="/projects" className="text-gray-400 hover:text-accent transition-colors text-sm sm:text-base block">Projects</a>
              <a href="/shop" className="text-gray-400 hover:text-accent transition-colors text-sm sm:text-base block">Shop</a>
              <a href="/contact" className="text-gray-400 hover:text-accent transition-colors text-sm sm:text-base block">Contact</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors inline-flex items-center gap-2"
                  aria-label={link.name}
                >
                  {link.icon}
                  <span className="text-sm sm:text-base">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>© {currentYear} Yves Dev 237. All rights reserved.</p>
          <p className="mt-2">Built with React • TypeScript • Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
