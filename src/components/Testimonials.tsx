import { useState } from 'react'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      text: 'Yves delivered an exceptional website that exceeded our expectations. His attention to detail and modern design approach helped us increase conversions by 40%.',
      image: '👨‍💼'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      text: 'Professional, responsive, and innovative. Yves understood our vision and brought it to life beautifully. Highly recommended for any web project!',
      image: '👩‍💼'
    },
    {
      id: 3,
      name: 'Marcus Williams',
      role: 'Design Lead',
      company: 'CreativeStudio',
      text: 'Working with Yves was a pleasure. Great communication, clean code, and pixel-perfect implementations. Perfect partner for digital projects.',
      image: '👨‍🎨'
    }
  ]

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-purple-950/20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Client Testimonials</h2>
        <p className="text-center text-gray-400 mb-12">What my clients say about working with me</p>

        <div className="max-w-2xl mx-auto">
          <div className="glass p-8 md:p-12 min-h-80 flex flex-col justify-between relative">
            <div>
              <div className="text-4xl mb-6">{testimonials[current].image}</div>
              <p className="text-xl text-gray-200 mb-8 italic">"{testimonials[current].text}"</p>
            </div>
            <div>
              <div className="font-bold text-lg">{testimonials[current].name}</div>
              <div className="text-gray-400">{testimonials[current].role} at {testimonials[current].company}</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-accent text-accent hover:bg-accent/10 transition-all" aria-label="Previous">
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`transition-all ${idx === current ? 'w-8 h-3 bg-accent' : 'w-3 h-3 bg-gray-600'} rounded-full`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full border border-accent text-accent hover:bg-accent/10 transition-all" aria-label="Next">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
