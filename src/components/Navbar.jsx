import { Link, NavLink } from 'react-router-dom'

const brandColors = {
  primary: '#6B5B95', // Amethyst
  ink: '#0B0B10',     // Deep Charcoal
  accent: '#D4AF37',  // Champagne Gold
}

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 text-sm tracking-wide transition-colors ${
    isActive ? 'text-white' : 'text-white/70 hover:text-white'
  }`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0B10]/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded-full" style={{ background: brandColors.accent }} />
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-white/80">Amore</div>
              <div className="-mt-1 text-lg font-semibold text-white">Milano</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <div className="h-4 w-px bg-white/20" />
            <NavLink to="/collections/winter" className={navLinkClass}>Winter</NavLink>
            <NavLink to="/collections/special" className={navLinkClass}>Special</NavLink>
            <NavLink to="/collections/everyday" className={navLinkClass}>Everyday</NavLink>
            <div className="h-4 w-px bg-white/20" />
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium"
            style={{
              background: brandColors.accent,
              color: brandColors.ink,
            }}
          >
            Book a Styling Call
          </Link>
        </div>
      </div>
    </header>
  )
}
