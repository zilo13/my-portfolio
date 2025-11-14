export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with real-time inventory and secure checkout',
      tech: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
      image: '🛒',
      link: '#'
    },
    {
      id: 2,
      title: 'SaaS Analytics Dashboard',
      description: 'Real-time data visualization and analytics with interactive charts',
      tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      image: '📊',
      link: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative workspace with drag-and-drop and team features',
      tech: ['React', 'TypeScript', 'MongoDB', 'Express'],
      image: '✓',
      link: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern developer portfolio with smooth animations and interactions',
      tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      image: '🎨',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400 mb-12">A selection of recent work that showcases my skills</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="glass group p-8 rounded-xl border border-white/10 hover:border-accent/50 transition-all hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{project.image}</div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-sm bg-accent/20 text-accent-light rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
