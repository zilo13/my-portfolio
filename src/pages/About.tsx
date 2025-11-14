import { useEffect, useState } from 'react'

export default function About() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'JavaScript', level: 93 },
    { name: 'Web Performance', level: 85 },
    { name: 'Figma & Design', level: 80 }
  ]

  const techStack = ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite', 'Git', 'REST APIs', 'Firebase', 'PostgreSQL', 'Node.js']

  return (
    <div className="pt-[72px]">
      <section className="py-20 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Hi! I'm Yves, a passionate frontend developer with 3+ years of experience crafting beautiful, high-performance web applications. I specialize in React and modern JavaScript, with a focus on creating exceptional user experiences.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My journey in web development started with a curiosity about how things work online, and it's evolved into a passion for building elegant solutions to complex problems. I love collaborating with teams and clients to bring their visions to life.
              </p>
              <p className="text-gray-400">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-accent">15+</div>
                <p className="text-gray-400">Successful Projects</p>
              </div>
              <div className="glass p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-accent">50+</div>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="glass p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-accent">3+</div>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-purple-950/20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>

          {/* Animated Progress Bars */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
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
            <h3 className="text-2xl font-bold mb-8">Tech Stack I Use</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div key={tech} className="px-4 py-2 bg-accent/20 border border-accent/40 rounded-lg text-accent-light font-medium">
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
