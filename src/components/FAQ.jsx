export default function FAQ() {
  const faqs = [
    {
      q: 'Can I try it free before buying?',
      a: 'Yes. Start a 14-day free trial with full access. No credit card required.'
    },
    { q: 'Do you support multiple branches?', a: 'Yes. Manage multiple locations with aggregated reporting and role-based access per branch.' },
    { q: 'How do payments work?', a: 'Connect your preferred gateway. Use reminders and dunning to reduce churn and late dues.' },
    { q: 'Is my data secure?', a: 'We use encryption at rest and in transit, audit logs, and least-privilege access. SSO available on Enterprise.' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Frequently asked questions</h2>
          <p className="mt-3 text-gray-600">Everything you need to know so you can buy with confidence.</p>
        </div>
        <dl className="space-y-5">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-gray-200 bg-white p-5">
              <dt className="font-semibold text-gray-900">{f.q}</dt>
              <dd className="mt-2 text-sm text-gray-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
