export default function ProjectsPage() {
  const projects = [
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative workspace with drag-and-drop and team features',
      tech: ['React', 'TypeScript', 'vercel' , 'tailwind'],
      year: 2025,
      image: '✓'
    },
    {
      id: 4,
      title: 'Corporate Website',
      description: 'Modern corporate site with CMS integration and SEO optimization',
      tech: ['Next.js', 'Tailwind', 'Vercel'],
      year: 2025,
      image: '🌐'
    }
  ]

  return (
    <div className="pt-[72px]">
      <section className="py-20 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-gray-400 mb-12">Featured work and case studies</p>

          {projects.length === 0 ? (
            <div className="glass border border-white/10 rounded-xl p-12 text-center">
              <p className="text-lg text-gray-400 mb-4">No projects yet</p>
              <p className="text-gray-500">Check back soon for showcased work and case studies</p>
            </div>
          ) : (
            <div className="grid gap-8">
              {projects.map((project) => (
                <div key={project.id} className="glass border border-white/10 rounded-xl overflow-hidden hover:border-accent/50 transition-all group">
                  <div className="grid md:grid-cols-3 gap-8 p-8">
                    <div className="flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                      {project.image}
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">{project.title}</h3>
                          <p className="text-gray-400 text-sm">{project.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-3 py-1 text-sm bg-accent/20 text-accent-light rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
