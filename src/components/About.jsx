export default function About() {
  return (
    <div id="about" className="grid md:grid-cols-2 gap-10 items-center">
      <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#F6F4FB]"></div>
      <div>
        <div className="text-xs uppercase tracking-[0.3em] text-[#0B0B10]/60">About the Brand</div>
        <h3 className="mt-3 text-3xl font-semibold text-[#0B0B10]">Amore Milano</h3>
        <p className="mt-4 text-[#0B0B10]/70">
          Founded in the heart of Italy, Amore Milano celebrates the artistry of hand-finished footwear. Each silhouette balances architectural lines with the softness of premium leathers, crafted by artisans with decades of expertise.
        </p>
        <ul className="mt-6 space-y-2 text-[#0B0B10]/80">
          <li>• Responsible sourcing and limited production runs</li>
          <li>• Engraved logos and signature gold hardware</li>
          <li>• A promise of comfort without compromise</li>
        </ul>
      </div>
    </div>
  )
}
