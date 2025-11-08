import { CheckCircle2 } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    cadence: 'month',
    highlight: false,
    description: 'Everything you need to launch and manage a small center.',
    features: [
      'Up to 100 students',
      'Parent messaging (email)',
      'Basic payment tracking',
      'Attendance & shift logs',
      'Standard reports',
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Growth',
    price: '$99',
    cadence: 'month',
    highlight: true,
    description: 'Automations and integrations to scale operations.',
    features: [
      'Up to 1,000 students',
      'Multi-channel messaging (SMS + email)',
      'Payment reminders & dunning',
      'Automation rules & workflows',
      'Advanced KPIs & exports',
      'Priority support',
    ],
    cta: 'Choose Growth',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    highlight: false,
    description: 'Security, SSO, and success services for large networks.',
    features: [
      'Unlimited students & staff',
      'SSO (Okta, Azure AD)',
      'Field-level encryption (PII)',
      'Audit logs & RBAC',
      'Dedicated onboarding',
    ],
    cta: 'Talk to sales',
  },
]

export default function PricingPlans() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
        <p className="mt-3 text-gray-600">Start free. Upgrade when you’re ready. Cancel anytime.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-2xl border ${
              t.highlight ? 'border-indigo-300 bg-indigo-50/50' : 'border-gray-200 bg-white'
            } p-6 flex flex-col`}
          >
            {t.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
                Most popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
            <p className="mt-1 text-sm text-gray-600">{t.description}</p>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-3xl font-extrabold text-gray-900">{t.price}</span>
              {t.cadence && <span className="text-sm text-gray-500">/ {t.cadence}</span>}
            </div>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2 className={`w-4 h-4 ${t.highlight ? 'text-indigo-600' : 'text-emerald-600'}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                href="#"
                className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition shadow-sm ${
                  t.highlight
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-900 text-white hover:bg-black/90'
                }`}
              >
                {t.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
        <p className="text-sm text-gray-600 text-center">
          All plans include secure hosting, regular updates, and GDPR-ready data practices. Need a custom SLA or procurement docs? Contact sales.
        </p>
      </div>
    </section>
  )
}
