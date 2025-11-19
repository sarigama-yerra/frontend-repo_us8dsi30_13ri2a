export default function Footer() {
  return (
    <footer className="bg-[#0B0B10] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/60">Amore Milano</div>
          <p className="mt-3 text-white/70">Timeless Italian craftsmanship reimagined for modern wardrobes.</p>
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/60">Collections</div>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><a href="/collections/winter">Winter</a></li>
            <li><a href="/collections/special">Special Occasion</a></li>
            <li><a href="/collections/everyday">Everyday</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/60">Support</div>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><a href="/contact">Contact</a></li>
            <li><a>Delivery</a></li>
            <li><a>Returns</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/60">Newsletter</div>
          <div className="mt-3 flex gap-2">
            <input placeholder="Your email" className="flex-1 rounded-md bg-white/10 border border-white/10 px-3 py-2 placeholder-white/50 focus:outline-none" />
            <button className="px-4 rounded-md bg-white text-[#0B0B10]">Join</button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Amore Milano</p>
          <p>Space for future e‑commerce integration</p>
        </div>
      </div>
    </footer>
  )
}
