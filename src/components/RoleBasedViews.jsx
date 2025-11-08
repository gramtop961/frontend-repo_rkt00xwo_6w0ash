import { User, BadgeCheck, CalendarClock, CreditCard } from 'lucide-react'

export default function RoleBasedViews() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Suggested UI Layouts</h2>
      <p className="mt-2 text-gray-600">Clear, role-focused views keep everyone productive.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <RoleCard title="Admin" icon={<BadgeCheck className="w-5 h-5" />}
          items={[
            'Dashboard with enrollment, payments, attendance',
            'Role management & access controls',
            'Reports: weekly/monthly performance',
            'Automation rules configuration',
          ]}
        />
        <RoleCard title="Staff/Teacher" icon={<CalendarClock className="w-5 h-5" />}
          items={[
            'My schedule & shift alerts',
            'Attendance check-in/out',
            'KPI tracker and class feedback',
            'Announcements & resources',
          ]}
        />
        <RoleCard title="Parent" icon={<CreditCard className="w-5 h-5" />}
          items={[
            'Student profile & progress',
            'Payment status and quick pay link',
            'Message history and announcements',
            'Preferred channels & notification settings',
          ]}
        />
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-gray-800">Reporting Mechanisms</h3>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>Downloadable CSV/PDF for payments, attendance, penalties</li>
          <li>Scheduled digests via email to admins and team leads</li>
          <li>Trend charts for enrollment, lateness, satisfaction scores</li>
          <li>Drill-down views from summary to individual records</li>
        </ul>
      </div>
    </section>
  )
}

function RoleCard({ title, icon, items }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="flex items-center gap-2 text-gray-800">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc pl-5">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  )
}
