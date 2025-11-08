export default function ArchitectureSchema() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">System Architecture & Database Schema</h2>
      <p className="mt-3 text-gray-600">A pragmatic, secure architecture that separates concerns and scales with your center.</p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-800">Architecture</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-700 list-disc pl-5">
            <li>Frontend (React) for admin, staff, and parent views</li>
            <li>Backend (FastAPI) for business logic and role-based access</li>
            <li>MongoDB for persistent storage with audit timestamps</li>
            <li>Background workers for reminders and notifications</li>
            <li>Integration layer for SMS, email, and payment gateways</li>
            <li>JWT authentication with role claims (admin, teacher, accountant, parent)</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-800">Core Collections</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li><span className="font-semibold">student</span>: name, age, grade, contacts, guardians[], enrollmentStatus</li>
            <li><span className="font-semibold">guardian</span>: name, relationship, phone, email, preferredChannel</li>
            <li><span className="font-semibold">payment</span>: studentId, amount, method, status, dueDate, paidAt, reference</li>
            <li><span className="font-semibold">communication</span>: guardianId, channel, message, direction, status, timestamp</li>
            <li><span className="font-semibold">staff</span>: name, role, phone, email, kpis{`{classes, feedback, tasks}`}</li>
            <li><span className="font-semibold">shift</span>: staffId, date, start, end</li>
            <li><span className="font-semibold">attendance</span>: staffId, date, arrival, departure, lateMinutes, penalty</li>
            <li><span className="font-semibold">notification</span>: recipientId, role, type, payload, scheduledAt, status</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-800">Security & Compliance</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-700 list-disc pl-5">
            <li>Hashed passwords, rotating refresh tokens</li>
            <li>Field-level encryption for PII (phone, email)</li>
            <li>Fine-grained RBAC: admin, teacher, accountant, parent</li>
            <li>Audit logs for every write operation</li>
            <li>Least-privilege API keys for integrations</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-gray-800">Automation Rules & Workflows</h3>
        <ol className="mt-4 space-y-3 text-sm text-gray-700 list-decimal pl-5">
          <li>Payment due in 7/3/1 days → schedule SMS/email to guardians; stop when paid.</li>
          <li>Missed shift start by 5+ minutes → notify staff and manager; increment penalty.</li>
          <li>Low feedback average in a week → prompt coaching session and learning resources.</li>
          <li>New enrollment → welcome series to parents; checklist for admin and teachers.</li>
          <li>Weekly digest → send KPIs to staff and summary to admins.</li>
        </ol>
      </div>
    </section>
  )
}
