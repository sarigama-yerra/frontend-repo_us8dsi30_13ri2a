export default function Contact() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 p-6 rounded-2xl border border-black/10 bg-white">
        <form className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-1">
            <label className="text-sm text-black/60">Name</label>
            <input className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20" placeholder="Your name" />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm text-black/60">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20" placeholder="you@example.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-black/60">Message</label>
            <textarea className="mt-1 w-full h-32 rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20" placeholder="Tell us more..." />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-sm text-black/60">We reply within 24 hours. By sending, you agree to our privacy policy.</p>
            <button type="button" className="rounded-full px-6 py-2 text-sm font-medium bg-black text-white">Send</button>
          </div>
        </form>
      </div>
      <div className="p-6 rounded-2xl border border-black/10 bg-white space-y-4">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-black/60">WhatsApp</div>
          <a className="block mt-1 text-black hover:underline" href="https://wa.me/0000000000" target="_blank">+39 000 000 000</a>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-black/60">Email</div>
          <a className="block mt-1 text-black hover:underline" href="mailto:support@amoremilano.com">support@amoremilano.com</a>
        </div>
        <div>
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
