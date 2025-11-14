export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' }
  ]

  return (
    <footer className="border-t border-white/10 bg-gradient-to-t from-purple-950/20 to-transparent mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-accent text-lg mb-2">Yves Dev 237</h3>
            <p className="text-gray-400">Creative frontend developer crafting beautiful web experiences</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="text-gray-400 hover:text-accent transition-colors">Home</a>
              <a href="/services" className="text-gray-400 hover:text-accent transition-colors">Services</a>
              <a href="/about" className="text-gray-400 hover:text-accent transition-colors">About</a>
              <a href="/projects" className="text-gray-400 hover:text-accent transition-colors">Projects</a>
              <a href="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Yves Dev 237. All rights reserved.</p>
          <p className="mt-2">Built with React • TypeScript • Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
