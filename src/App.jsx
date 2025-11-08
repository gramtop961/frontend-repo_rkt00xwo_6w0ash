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
      <footer className="max-w-7xl mx-auto px-6 pb-12 text-center text-xs text-gray-500">
        Designed blueprint for an end-to-end automation system: student CRM, parental engagement, staff attendance, KPIs, notifications, and secure integrations.
      </footer>
    </div>
  )
}

export default App
