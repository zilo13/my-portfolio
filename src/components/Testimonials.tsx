import { useState } from 'react'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Jean Mark',
      role: 'CEO',
      company: 'fintech startup',
      text: 'Yves delivered an exceptional website that exceeded our expectations. His attention to detail and modern design approach helped us increase conversions by 40%.',
      image: '👨‍💼'
    },
  ]

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-b from-transparent to-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">Client Testimonials</h2>
        <p className="text-center text-xs sm:text-sm md:text-base text-gray-400 mb-8 sm:mb-12">What my clients and collaborators say about working with me</p>

        <div className="max-w-2xl mx-auto">
          {testimonials.length === 0 ? (
            <div className="glass p-8 sm:p-12 md:p-16 min-h-64 sm:min-h-80 flex flex-col items-center justify-center relative">
              {/* Animated icons */}
              <style>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                }
                .animate-float {
                  animation: float 3s ease-in-out infinite;
                }
                .animate-float-delay-1 {
                  animation-delay: 0.2s;
                }
                .animate-float-delay-2 {
                  animation-delay: 0.4s;
                }
              `}</style>
              
              <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-8 justify-center">
                <div className="text-4xl sm:text-5xl animate-float">⭐</div>
                <div className="text-4xl sm:text-5xl animate-float animate-float-delay-1">💬</div>
                <div className="text-4xl sm:text-5xl animate-float animate-float-delay-2">✨</div>
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-200 mb-2 sm:mb-4">
                Testimonials Coming Soon
              </h3>
              <p className="text-sm sm:text-base text-gray-400 text-center">
                People are still sending their testimonials. Check back soon to see what amazing clients have to say!
              </p>
            </div>
          ) : (
            <>
              <div className="glass p-4 sm:p-8 md:p-12 min-h-64 sm:min-h-80 flex flex-col justify-between relative">
                <div>
                  <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">{testimonials[current].image}</div>
                  <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-4 sm:mb-8 italic">"{testimonials[current].text}"</p>
                </div>
                <div>
                  <div className="font-bold text-base sm:text-lg">{testimonials[current].name}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{testimonials[current].role} at {testimonials[current].company}</div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <button onClick={prev} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-accent text-accent hover:bg-accent/10 transition-all text-sm sm:text-base flex items-center justify-center" aria-label="Previous">
                  ←
                </button>
                <div className="flex gap-1 sm:gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`transition-all ${idx === current ? 'w-6 sm:w-8 h-2 sm:h-3 bg-accent' : 'w-2 sm:w-3 h-2 sm:h-3 bg-gray-600'} rounded-full`}
                      aria-label={`Testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
                <button onClick={next} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-accent text-accent hover:bg-accent/10 transition-all text-sm sm:text-base flex items-center justify-center" aria-label="Next">
                  →
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
