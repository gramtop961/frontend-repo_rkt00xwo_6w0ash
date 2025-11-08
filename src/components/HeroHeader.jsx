import { Users, Shield, Bell, LineChart } from 'lucide-react'

export default function HeroHeader() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 bg-indigo-100/70 rounded-full px-3 py-1">
              <Bell className="w-4 h-4" /> Smart Education Ops
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Automation System for Modern Education Centers
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              A unified platform for student CRM, parental engagement, team management, attendance tracking, and proactive notifications — designed with role-based security and future-ready integrations.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </header>
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
