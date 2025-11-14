import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-gradient-to-b from-white/5 to-transparent border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between h-[72px]">
        <NavLink to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="Yves Dev 237" className="w-10 h-10 rounded-full" loading="lazy" />
          <span className="font-bold text-accent hidden md:inline">Yves Dev 237</span>
        </NavLink>

        <nav className="flex gap-6" role="navigation" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'text-accent border-b-2 border-accent pb-1' : 'text-gray-300 hover:text-white transition-colors'}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'text-accent border-b-2 border-accent pb-1' : 'text-gray-300 hover:text-white transition-colors'}>
            Services
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-accent border-b-2 border-accent pb-1' : 'text-gray-300 hover:text-white transition-colors'}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-accent border-b-2 border-accent pb-1' : 'text-gray-300 hover:text-white transition-colors'}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-accent border-b-2 border-accent pb-1' : 'text-gray-300 hover:text-white transition-colors'}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
