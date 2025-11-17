import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Use Cases', href: '#usecases' },
    { label: 'Templates', href: '#templates' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
          <span className="font-semibold text-gray-900">Fluent AI Agents</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className="text-gray-700 hover:text-gray-900 transition-colors">
              {n.label}
            </a>
          ))}
          <a href="#demo" className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors">Book a demo</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu className="h-6 w-6 text-gray-800" />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/90">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className="block py-2 text-gray-800" onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="#demo" className="block py-2 text-gray-800" onClick={() => setOpen(false)}>Book a demo</a>
        </div>
      )}
    </header>
  )
}
