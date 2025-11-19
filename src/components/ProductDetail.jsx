import { useParams, useNavigate } from 'react-router-dom'
import { brand, findProductById } from '../lib/data'

export default function ProductDetail() {
  const params = useParams()
  const navigate = useNavigate()
  const product = findProductById(params?.productId)

  if (!product) {
    return (
      <div className="min-h-[60vh] grid place-items-center">
        <div className="text-center">
          <p className="text-sm text-black/60">Product not found</p>
          <button onClick={() => navigate(-1)} className="mt-4 underline">Go back</button>
        </div>
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div>
        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#F6F4FB]">
          <img src={product.img} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="mt-4 text-xs text-black/60">Engraved logo on sole and hardware • Dust bag included</div>
      </div>

      <div>
        <div className="text-xs uppercase tracking-[0.3em] text-black/60">Amore Milano</div>
        <h1 className="mt-2 text-4xl font-semibold text-black">{product.name}</h1>
        <div className="mt-2 text-lg text-black">€{product.price}</div>
        <p className="mt-4 text-black/70">{product.description}</p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-black/10">
            <div className="text-xs text-black/60">Material</div>
            <div className="font-medium">{product.material}</div>
          </div>
          <div className="p-4 rounded-xl border border-black/10">
            <div className="text-xs text-black/60">Heel</div>
            <div className="font-medium">{product.heel}</div>
          </div>
          <div className="p-4 rounded-xl border border-black/10">
            <div className="text-xs text-black/60">Color</div>
            <div className="font-medium">{product.color}</div>
          </div>
          <div className="p-4 rounded-xl border border-black/10">
            <div className="text-xs text-black/60">Size Guide</div>
            <div className="font-medium">EU 35–42</div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="rounded-full px-6 py-3 text-sm font-medium" style={{ background: brand.primary, color: 'white' }}>Add to Wishlist</button>
          <button className="rounded-full px-6 py-3 text-sm font-medium border" style={{ borderColor: brand.primary }}>Book a Fitting</button>
        </div>

        <div className="mt-8 p-4 rounded-xl border border-black/10 bg-white/70">
          <div className="text-xs uppercase tracking-[0.3em] text-black/60">Delivery & Returns</div>
          <ul className="mt-2 text-sm text-black/70 space-y-1">
            <li>• Complimentary express delivery</li>
            <li>• 30-day returns and exchanges</li>
            <li>• Worldwide shipping</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
