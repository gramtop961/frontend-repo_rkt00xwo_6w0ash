import { Rocket, Shield, Star } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-12">
      <div className="rounded-3xl border border-gray-200 bg-gradient-to-tr from-indigo-600 via-indigo-500 to-indigo-400 text-white p-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
              <Shield className="w-4 h-4" /> Enterprise-grade security
            </div>
            <h3 className="mt-2 text-2xl md:text-3xl font-extrabold leading-tight">Ready to sell? Launch your center in days, not months.</h3>
            <p className="mt-3 text-white/90">Transparent pricing, role-based access, and built-in automations so you can onboard customers with confidence.</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold shadow-sm hover:bg-white/90 transition">
                <Rocket className="w-4 h-4" /> Start free
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-900/40 text-white px-5 py-3 font-semibold hover:bg-indigo-900/50 transition">
                <Star className="w-4 h-4" /> Book a live demo
              </a>
            </div>
          </div>
          <ul className="flex-1 grid grid-cols-2 gap-4 text-sm">
            <li className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/20">No-code automations</li>
            <li className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/20">One-click reports</li>
            <li className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/20">SMS & email suite</li>
            <li className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/20">GDPR-ready by default</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
