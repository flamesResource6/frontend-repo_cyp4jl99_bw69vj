import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function CTA() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setDone(false)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email') || undefined,
      phone: form.get('phone') || undefined,
      company: form.get('company') || undefined,
      message: form.get('message') || undefined,
      interested_channels: Array.from(form.getAll('channels')),
    }

    try {
      const res = await fetch(`${API_BASE}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setDone(true)
      e.currentTarget.reset()
    } catch (e) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="demo" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Book a live demo</h2>
            <p className="mt-3 text-gray-600">Tell us about your business and we’ll show you a tailored agent that handles calls, email, and WhatsApp end‑to‑end.</p>
            <ul className="mt-6 space-y-2 text-gray-700 list-disc pl-5">
              <li>See agent voice quality and interruption handling</li>
              <li>Connect your CRM or calendar on the call</li>
              <li>Get pricing based on your volume and channels</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="p-6 rounded-2xl ring-1 ring-gray-200 bg-white shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input name="email" type="email" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Interested channels</label>
              <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                {['calls','email','whatsapp','sms','webchat'].map((c) => (
                  <label key={c} className="flex items-center gap-2">
                    <input type="checkbox" name="channels" value={c} />
                    <span className="capitalize">{c}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">What are you trying to achieve?</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <button disabled={loading} className="w-full px-6 py-3 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors disabled:opacity-60">
              {loading ? 'Submitting…' : 'Request demo'}
            </button>

            {done && <p className="text-green-700">Thanks! We’ll reach out shortly.</p>}
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
