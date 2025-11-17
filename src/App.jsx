import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Templates from './components/Templates'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Templates />
      <CTA />
      <footer className="py-10 border-t border-gray-200 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Fluent AI Agents. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
