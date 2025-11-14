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
    }
  ]

  const projects = [
    { title: 'Mobile Web App', client: 'Fintech Startup', result: 'PWA with offline functionality and fast load times' }
  ]

  return (
    <div className="pt-[72px]">
      {/* Services Section */}
      <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">My Services</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl">
            I offer comprehensive web development and design services tailored to bring your vision to life with precision and creativity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {services.map((service) => (
              <div key={service.id} className="glass p-4 sm:p-6 md:p-8 rounded-xl border border-white/10 hover:border-accent/50 transition-all hover:shadow-lg">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Done Section */}
      <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-b from-transparent to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Projects Done For Clients</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-8 sm:mb-12">Real results from real projects</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="glass p-4 sm:p-6 md:p-8 rounded-xl border border-accent/20">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-accent mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">Client: {project.client}</p>
                <p className="text-sm sm:text-base text-gray-300">{project.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
