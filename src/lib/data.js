export const brand = {
  primary: '#6B5B95', // Amethyst
  ink: '#0B0B10',     // Deep Charcoal
  accent: '#D4AF37',  // Champagne Gold
  paper: '#EDEAF7',   // Soft Lilac
}

export const products = {
  winter: [
    { id: 'w1', name: 'Velluto Boot', price: 520, material: 'Italian Suede', color: 'Onyx', heel: '85mm', img: 'https://images.unsplash.com/photo-1605733512810-8f56469377b7?q=80&w=1200&auto=format&fit=crop', description: 'A sculpted suede boot with a velvet-touch finish and thermal lining for winter evenings.' },
    { id: 'w2', name: 'Neve Heel', price: 480, material: 'Patent Leather', color: 'Ivory', heel: '75mm', img: 'https://images.unsplash.com/photo-1603070603989-965f43cba4be?q=80&w=1200&auto=format&fit=crop', description: 'Gloss-patent slingback with anti-slip sole and cushioned footbed.' },
    { id: 'w3', name: 'Aurora Clutch', price: 390, material: 'Brushed Calfskin', color: 'Champagne', heel: '-', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop', description: 'A luminous evening clutch with gold hardware and engraved logo plate.' },
  ],
  special: [
    { id: 's1', name: 'Luce Stiletto', price: 620, material: 'Crushed Silk', color: 'Rose Dusk', heel: '95mm', img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1200&auto=format&fit=crop', description: 'Silk-wrapped stiletto with mirror-gold heel for gala nights.' },
    { id: 's2', name: 'Gala Sandal', price: 540, material: 'Metallic Nappa', color: 'Platinum', heel: '85mm', img: 'https://images.unsplash.com/photo-1537337055940-9424e37fbc56?q=80&w=1200&auto=format&fit=crop', description: 'Strappy sandal with iridescent finish and crystal buckle.' },
    { id: 's3', name: 'Serata Clutch', price: 420, material: 'Laminated Leather', color: 'Noir', heel: '-', img: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=1200&auto=format&fit=crop', description: 'Petite clutch with magnetic closure and satin lining.' },
  ],
  everyday: [
    { id: 'e1', name: 'Linea 65', price: 380, material: 'Smooth Calf', color: 'Nude', heel: '65mm', img: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f3b?q=80&w=1200&auto=format&fit=crop', description: 'Sculpted mid-heel pump engineered for day-long comfort.' },
    { id: 'e2', name: 'Città Mule', price: 360, material: 'Soft Nappa', color: 'Black', heel: '45mm', img: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=1200&auto=format&fit=crop', description: 'Slip-on mule with memory foam insole and flexible sole.' },
    { id: 'e3', name: 'Convertibile', price: 410, material: 'Convertible Strap', color: 'Taupe', heel: '55mm', img: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1200&auto=format&fit=crop', description: 'Ingenious strap converts from ankle-wrap to slingback in seconds.' },
  ],
}

export function findProductById(id) {
  for (const key of Object.keys(products)) {
    const item = products[key].find(p => p.id === id)
    if (item) return item
  }
  return null
}
