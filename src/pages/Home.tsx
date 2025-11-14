import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div className="pt-[72px]">
      <Hero />
      <FeaturedProjects />
      <Testimonials />
    </div>
  )
}
