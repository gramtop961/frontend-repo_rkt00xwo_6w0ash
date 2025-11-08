import { Users, Shield, Bell, LineChart } from 'lucide-react'

export default function HeroHeader() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
      <div className="relative max-w-7xl mx-auto px-6 pt-6 pb-14">
        <TopNav />
        <div className="mt-10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 bg-indigo-100/70 rounded-full px-3 py-1">
              <Bell className="w-4 h-4" /> SaaS for Education Ops
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Run your education center on autopilot
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              EduFlow centralizes your student CRM, parent communications, payments, and staff attendance with role-based security and automation — so your team can focus on learning outcomes.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-indigo-700 transition">
                Start free trial
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-900 px-5 py-3 font-semibold hover:bg-gray-50 transition">
                Book a live demo
              </a>
            </div>
            <p className="mt-2 text-xs text-gray-500">No credit card required • Cancel anytime • GDPR-ready</p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <FeaturePill icon={<Users className="w-4 h-4" />} label="Student CRM" />
              <FeaturePill icon={<LineChart className="w-4 h-4" />} label="KPIs & Reports" />
              <FeaturePill icon={<Bell className="w-4 h-4" />} label="Auto Reminders" />
              <FeaturePill icon={<Shield className="w-4 h-4" />} label="RBAC Security" />
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-700">At-a-glance Metrics</h3>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Metric label="Enrolled" value="482" trend="▲ 3.2%" trendColor="text-emerald-600" />
                <Metric label="Active Parents" value="419" trend="▲ 1.1%" trendColor="text-emerald-600" />
                <Metric label="On-time Shifts" value="92%" trend="▼ 2%" trendColor="text-rose-600" />
                <Metric label="Dues Pending" value="$8.4k" trend="—" trendColor="text-gray-500" />
              </div>
              <TrustBar />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function TopNav() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-xl bg-indigo-600" />
        <span className="text-base font-bold text-gray-900">EduFlow</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
        <a href="#" className="hover:text-gray-900">Product</a>
        <a href="#" className="hover:text-gray-900">Solutions</a>
        <a href="#" className="hover:text-gray-900">Pricing</a>
        <a href="#" className="hover:text-gray-900">Resources</a>
      </nav>
      <div className="flex items-center gap-3">
        <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Sign in</a>
        <a href="#" className="hidden sm:inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-black/90 transition">Get started</a>
      </div>
    </div>
  )
}

function FeaturePill({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm">
      {icon}
      <span>{label}</span>
    </div>
  )
}

function Metric({ label, value, trend, trendColor }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1 text-xl font-bold text-gray-900">{value}</p>
      <p className={`text-xs ${trendColor}`}>{trend}</p>
    </div>
  )
}

function TrustBar() {
  return (
    <div className="mt-6 border-t border-gray-200 pt-5">
      <p className="text-xs font-medium text-gray-500">Trusted by growing academies and learning centers</p>
      <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-4 opacity-70">
        <div className="h-6 bg-gray-100 rounded" />
        <div className="h-6 bg-gray-100 rounded" />
        <div className="h-6 bg-gray-100 rounded" />
        <div className="h-6 bg-gray-100 rounded" />
        <div className="h-6 bg-gray-100 rounded" />
        <div className="h-6 bg-gray-100 rounded" />
      </div>
    </div>
  )
}
