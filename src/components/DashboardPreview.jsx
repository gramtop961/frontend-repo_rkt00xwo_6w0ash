import { DollarSign, CheckCircle2, Clock3, Users, BarChart3 } from 'lucide-react'

export default function DashboardPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon={<Users className="w-5 h-5 text-indigo-600" />} label="Students" value="482" delta="8 new" />
            <StatCard icon={<DollarSign className="w-5 h-5 text-emerald-600" />} label="Collected" value="$24,120" delta="+$1,240" />
            <StatCard icon={<Clock3 className="w-5 h-5 text-amber-600" />} label="Late Arrivals" value="14" delta="-3" />
            <StatCard icon={<CheckCircle2 className="w-5 h-5 text-cyan-600" />} label="On-time Shifts" value="92%" delta="-2%" />
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Payment Pipeline</h3>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Pill label="Due in 7 days" value="34" color="bg-amber-50 text-amber-700 border-amber-200" />
              <Pill label="Due in 3 days" value="19" color="bg-orange-50 text-orange-700 border-orange-200" />
              <Pill label="Overdue" value="11" color="bg-rose-50 text-rose-700 border-rose-200" />
              <Pill label="Paid" value="418" color="bg-emerald-50 text-emerald-700 border-emerald-200" />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-800">Attendance & Penalties</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <KPI label="Avg late minutes" value="6.4" />
              <KPI label="Penalties this week" value="9" />
              <KPI label="Shifts covered" value="126" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-800">Upcoming Notifications</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li className="flex items-center justify-between"><span>Payment reminder • 7d</span><span className="text-gray-500">34 parents</span></li>
              <li className="flex items-center justify-between"><span>Shift alerts • Tomorrow</span><span className="text-gray-500">22 staff</span></li>
              <li className="flex items-center justify-between"><span>Event announcement</span><span className="text-gray-500">All parents</span></li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-800">Workflow Examples</h3>
            <ol className="mt-3 space-y-2 text-sm text-gray-700 list-decimal pl-5">
              <li>Auto-calc lateness from scheduled vs actual times.</li>
              <li>Increment penalties after 3 late arrivals/week.</li>
              <li>Send digest to admins every Monday 8:00 AM.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon, label, value, delta }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="text-xs text-gray-500">{label}</p>
          <p className="text-lg font-bold text-gray-900">{value} <span className="ml-1 text-xs text-gray-500">{delta}</span></p>
        </div>
      </div>
    </div>
  )
}

function Pill({ label, value, color }) {
  return (
    <div className={`rounded-xl border ${color} px-4 py-3 flex items-center justify-between`}>
      <span className="text-sm">{label}</span>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  )
}

function KPI({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1 text-xl font-bold text-gray-900">{value}</p>
    </div>
  )
}
