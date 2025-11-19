export default function Section({ id, eyebrow, title, children, tint = 'light' }) {
  const isDark = tint === 'dark'
  return (
    <section id={id} className={`${isDark ? 'bg-[#0B0B10] text-white' : 'bg-white text-[#0B0B10]'} py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          {eyebrow && (
            <div className={`${isDark ? 'text-white/60' : 'text-[#0B0B10]/60'} text-xs uppercase tracking-[0.3em]`}>{eyebrow}</div>
          )}
          {title && (
            <h2 className={`mt-2 text-3xl md:text-5xl font-semibold ${isDark ? 'text-white' : 'text-[#0B0B10]'}`}>{title}</h2>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
