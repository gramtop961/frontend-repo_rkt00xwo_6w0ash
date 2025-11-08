import HeroHeader from './components/HeroHeader'
import ArchitectureSchema from './components/ArchitectureSchema'
import DashboardPreview from './components/DashboardPreview'
import RoleBasedViews from './components/RoleBasedViews'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <HeroHeader />
      <DashboardPreview />
      <ArchitectureSchema />
      <RoleBasedViews />
      <footer className="max-w-7xl mx-auto px-6 pb-16 pt-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-gray-900">Ready to streamline your education center?</p>
            <p className="text-sm text-gray-600">Launch in minutes. Scale with confidence. Transparent pricing, enterprise-grade security.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-semibold hover:bg-indigo-700 transition">Start free trial</a>
            <a href="#" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition">See pricing</a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} EduFlow, Inc. All rights reserved • Terms • Privacy • Security
        </div>
      </footer>
    </div>
  )
}

export default App
