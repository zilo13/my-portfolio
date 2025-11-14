import { useEffect, useState } from 'react'

export default function About() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const skills = [
    { name: 'React', level: 40 },
    { name: 'TypeScript', level: 50 },
    { name: 'Tailwind CSS', level: 50 },
    { name: 'JavaScript', level: 80 },
    { name: 'Web Performance', level: 65 },
    { name: 'Figma & Design', level: 30 }
  ]

  const techStack = ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite', 'Git', 'REST APIs', 'Firebase', 'Node.js']

  return (
    <div className="pt-[72px]">
      <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Content */}
            <div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Hi! I'm Yves, a passionate frontend developer with 2+ years of experience crafting beautiful, high-performance web applications. I specialize in React and modern JavaScript, with a focus on creating exceptional user experiences.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-8 leading-relaxed">
                My journey in web development started with a curiosity about how things work online, and it's evolved into a passion for building elegant solutions to complex problems. I love collaborating with teams and clients to bring their visions to life.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-3 sm:gap-4 md:gap-6">
              <div className="glass p-4 sm:p-6 rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-accent">2</div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-1">Successful Projects</p>
              </div>
              <div className="glass p-4 sm:p-6 rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-accent">2</div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-1">Happy Clients</p>
              </div>
              <div className="glass p-4 sm:p-6 rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-accent">2+</div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-1">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-b from-transparent to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-12">Skills & Expertise</h2>

          {/* Animated Progress Bars */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8">Technical Skills</h3>
            <div className="space-y-4 sm:space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1 sm:mb-2 text-xs sm:text-base">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 sm:h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent-light transition-all duration-1000 ease-out"
                      style={{
                        width: animate ? `${skill.level}%` : '0%'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-8">Tech Stack I Use</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {techStack.map((tech) => (
                <div key={tech} className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-accent/20 border border-accent/40 rounded-lg text-accent-light font-medium">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
