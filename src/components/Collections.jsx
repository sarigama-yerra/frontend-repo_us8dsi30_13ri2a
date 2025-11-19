const products = {
  winter: [
    { id: 'w1', name: 'Velluto Boot', price: 520, material: 'Italian Suede', img: 'https://images.unsplash.com/photo-1605733512810-8f56469377b7?q=80&w=1200&auto=format&fit=crop' },
    { id: 'w2', name: 'Neve Heel', price: 480, material: 'Patent Leather', img: 'https://images.unsplash.com/photo-1603070603989-965f43cba4be?q=80&w=1200&auto=format&fit=crop' },
    { id: 'w3', name: 'Aurora Clutch', price: 390, material: 'Brushed Calfskin', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop' },
  ],
  special: [
    { id: 's1', name: 'Luce Stiletto', price: 620, material: 'Crushed Silk', img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1200&auto=format&fit=crop' },
    { id: 's2', name: 'Gala Sandal', price: 540, material: 'Metallic Nappa', img: 'https://images.unsplash.com/photo-1537337055940-9424e37fbc56?q=80&w=1200&auto=format&fit=crop' },
    { id: 's3', name: 'Serata Clutch', price: 420, material: 'Laminated Leather', img: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=1200&auto=format&fit=crop' },
  ],
  everyday: [
    { id: 'e1', name: 'Linea 65', price: 380, material: 'Smooth Calf', img: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f3b?q=80&w=1200&auto=format&fit=crop' },
    { id: 'e2', name: 'Città Mule', price: 360, material: 'Soft Nappa', img: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=1200&auto=format&fit=crop' },
    { id: 'e3', name: 'Convertibile', price: 410, material: 'Convertible Strap', img: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1200&auto=format&fit=crop' },
  ],
}

function Card({ item }) {
  return (
    <a href={`/product/${item.id}`} className="group block">
      <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#F6F4FB] relative">
        <img src={item.img} alt={item.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="text-sm text-[#0B0B10]/60">{item.material}</div>
          <div className="font-medium text-[#0B0B10]">{item.name}</div>
        </div>
        <div className="text-[#0B0B10]">€{item.price}</div>
      </div>
    </a>
  )
}

export default function Collections() {
  return (
    <div id="collections" className="space-y-20">
      <div>
        <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#0B0B10]/60">Winter Collection</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.winter.map((p) => <Card key={p.id} item={p} />)}
        </div>
      </div>

      <div>
        <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#0B0B10]/60">Special Occasion</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.special.map((p) => <Card key={p.id} item={p} />)}
        </div>
      </div>

      <div>
        <div className="mb-6 text-xs uppercase tracking-[0.3em] text-[#0B0B10]/60">Everyday Collection</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.everyday.map((p) => <Card key={p.id} item={p} />)}
        </div>
      </div>
    </div>
  )
}
