import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-[calc(100vh-72px)] flex items-center justify-center bg-gradient-to-b from-blue-950/20 via-purple-950/10 to-transparent overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-accent via-accent-light to-blue-400 bg-clip-text text-transparent leading-tight">
              Creative Frontend Developer
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              I craft beautiful, responsive web experiences with React and modern technologies. Specializing in performance optimization and user-centered design.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button onClick={() => navigate('/contact')} className="btn-primary text-center sm:text-left">
                Hire Me
              </button>
              <a href="#projects" className="px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium border border-accent text-accent hover:bg-accent/10 transition-all text-center">
                View Work
              </a>
            </div>
          </div>

          {/* Right animated element */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-light/20 rounded-2xl blur-xl"></div>
              <div className="absolute inset-0 border border-accent/30 rounded-2xl backdrop-blur-md bg-white/5 flex flex-col items-center justify-center p-6">
                <img src="/profile.png" alt="Yves Profile" className="w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 mb-4 sm:mb-6 opacity-90 rounded-full" />
                <div className="text-center px-4">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1 sm:mb-2">Yves</div>
                  <div className="text-base sm:text-lg md:text-xl text-accent-light">Dev 237</div>
                  <div className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-400">React | TypeScript | Modern Web</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 md:pt-20 border-t border-white/10">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent">2</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent">1</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent">2+</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Years Exp</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}
