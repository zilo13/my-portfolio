import { useState } from 'react'

export default function Contact() {
  const [formData , setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/mjkjwekb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to send message. Please try again.'
      setError(errorMsg)
      console.error('Email error:', err)
    } finally {
      setLoading(false)
    }
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.015 12.015 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      url: 'https://github.com/zilo13'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: 'https://www.facebook.com/profile.php?id=61582765780557'
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      url: 'mailto:yvesmojavel13@gmail.com'
    }
  ]

  return (
    <div className="pt-[72px]">
      <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">Get In Touch</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl">
            Have a project in mind? Let's work together to bring your ideas to life. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm bg-white/5 border border-white/10 rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm bg-white/5 border border-white/10 rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm bg-white/5 border border-white/10 rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {error && (
                  <div className="p-3 sm:p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center text-xs sm:text-sm">
                    ✗ {error}
                  </div>
                )}

                {submitted && (
                  <div className="p-3 sm:p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center text-xs sm:text-sm">
                    ✓ Message sent successfully! I'll be in touch soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Contact Info</h3>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400">Email</p>
                    <a href="mailto:yves@dev237.com" className="text-accent hover:text-accent-light transition-colors">
                      yvesmojavel13@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400">Phone</p>
                    <a href="tel:+237699959447" className="text-accent hover:text-accent-light transition-colors">
                      +237 699-959-447 
                    </a>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400">Location</p>
                    <p className="text-white">mile 4 , Nkwen</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass p-3 sm:p-4 rounded-lg border border-white/10 hover:border-accent/50 transition-all text-center hover:shadow-lg hover:-translate-y-1 flex flex-col items-center justify-center"
                    >
                      <div className="text-gray-400 hover:text-accent transition-colors mb-1 sm:mb-2">
                        {link.icon}
                      </div>
                      <p className="font-semibold text-xs sm:text-sm">{link.name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
