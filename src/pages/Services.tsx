export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Beautiful, responsive UI designs that engage users and drive results'
    },
    {
      id: 2,
      title: 'Frontend Development',
      description: 'High-performance React applications with modern best practices'
    },
    {
      id: 3,
      title: 'Performance Optimization',
      description: 'Fast-loading sites that rank better and convert more visitors'
    },
    {
      id: 4,
      title: 'Technical Consultation',
      description: 'Expert guidance on architecture, tooling, and best practices'
    }
  ]

  const projects = [
    { title: 'E-Commerce Store', client: 'Fashion Retailer', result: 'Built full-featured store increasing sales by 35%' },
    { title: 'SaaS Platform', client: 'Analytics Company', result: 'Scalable dashboard handling 10k+ daily users' },
    { title: 'Mobile Web App', client: 'Fintech Startup', result: 'PWA with offline functionality and fast load times' },
    { title: 'Corporate Website', client: 'Tech Consulting', result: 'Redesigned site improving conversion by 42%' }
  ]

  return (
    <div className="pt-[72px]">
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">My Services</h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl">
            I offer comprehensive web development and design services tailored to bring your vision to life with precision and creativity.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="glass p-8 rounded-xl border border-white/10 hover:border-accent/50 transition-all hover:shadow-lg">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Done Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-purple-950/20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Projects Done For Clients</h2>
          <p className="text-gray-400 mb-12">Real results from real projects</p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="glass p-8 rounded-xl border border-accent/20">
                <h3 className="text-xl font-bold text-accent mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-3">Client: {project.client}</p>
                <p className="text-gray-300">{project.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
