import Spline from '@splinetool/react-spline'

const brand = {
  primary: '#6B5B95', // amethyst
  ink: '#0B0B10',
  accent: '#D4AF37', // champagne gold
}

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#EDEAF7]">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil for readability (doesn't block scene interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B10]/70 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-10 items-end">
        <div>
          <p className="uppercase tracking-[0.35em] text-sm text-[#0B0B10]/70">Amore Milano</p>
          <h1 className="mt-4 text-4xl md:text-6xl leading-tight font-semibold text-[#0B0B10]">
            The Fragrance of Crafted Elegance
          </h1>
          <p className="mt-6 text-[#0B0B10]/70 max-w-xl">
            Discover a curated world of Italian craftsmanship. Sculptural heels, luminous materials and timeless silhouettes that whisper luxury.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collections" className="rounded-full px-6 py-3 text-sm font-medium" style={{ background: brand.primary, color: 'white' }}>
              Explore Collections
            </a>
            <a href="#about" className="rounded-full px-6 py-3 text-sm font-medium border" style={{ borderColor: brand.primary, color: brand.ink }}>
              About the Brand
            </a>
          </div>
        </div>

        <div className="hidden md:block justify-self-end text-right">
          <div className="inline-flex items-center gap-6 p-6 rounded-2xl backdrop-blur-md bg-white/40 border border-white/60">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#0B0B10]/60">Signature Palette</div>
              <div className="mt-2 flex items-center gap-3">
                <span className="h-5 w-5 rounded-full border" style={{ background: brand.primary, borderColor: '#00000010' }} />
                <span className="h-5 w-5 rounded-full border" style={{ background: brand.accent, borderColor: '#00000010' }} />
                <span className="h-5 w-5 rounded-full border" style={{ background: '#EDEAF7', borderColor: '#00000010' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
