import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Templates() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await fetch(`${API_BASE}/templates`)
        const data = await res.json()
        setItems(Array.isArray(data) ? data : [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    fetchTemplates()
  }, [])

  return (
    <section id="templates" className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Ready‑to‑use templates</h2>
            <p className="mt-3 text-gray-600">Start from a proven playbook and customize to your workflow.</p>
          </div>
        </div>

        {loading ? (
          <p className="mt-10 text-gray-600">Loading templates…</p>
        ) : items.length === 0 ? (
          <div className="mt-10 p-6 rounded-xl ring-1 ring-gray-200 bg-white">
            <p className="text-gray-700">No templates yet. We’ll add some automatically once you submit the form below.</p>
          </div>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((t) => (
              <div key={t.id} className="p-6 rounded-2xl ring-1 ring-gray-200 bg-white shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{t.title}</h3>
                <p className="mt-2 text-gray-600">{t.description}</p>
                {Array.isArray(t.capabilities) && t.capabilities.length > 0 && (
                  <ul className="mt-3 text-sm text-gray-700 list-disc pl-5">
                    {t.capabilities.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 font-semibold text-gray-900">${'{'}t.price_per_month{'}'} / mo</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
