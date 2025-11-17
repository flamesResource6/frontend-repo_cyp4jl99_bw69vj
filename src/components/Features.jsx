import { Phone, Mail, MessageSquare, Bot, PlugZap, Gauge, CheckCircle2 } from 'lucide-react'

const features = [
  {
    icon: Phone,
    title: 'Answer & make calls',
    description: 'Natural, human‑like agents that handle inbound calls and perform outbound follow‑ups and qualification.',
  },
  {
    icon: Mail,
    title: 'Reply to email',
    description: 'Reads context, drafts or sends replies, books meetings, and loops in humans when needed.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp & SMS',
    description: 'Two‑way conversations that remember history across channels and devices.',
  },
  {
    icon: PlugZap,
    title: 'Integrates anywhere',
    description: 'Connect to CRMs, calendars, ticketing, and data sources with secure webhooks and APIs.',
  },
  {
    icon: Gauge,
    title: 'Fast and reliable',
    description: 'Low‑latency response, interruption handling, and configurable voice profiles.',
  },
  {
    icon: Bot,
    title: 'Train in minutes',
    description: 'Point at your docs/website. Define objectives and guardrails. Go live the same day.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Everything your AI agents need</h2>
          <p className="mt-3 text-gray-600">Purpose‑built for sales, support, and operations teams who want results, not busywork.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl ring-1 ring-gray-200 hover:ring-gray-300 transition shadow-sm bg-white">
              <f.icon className="h-6 w-6 text-gray-900" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>No code required</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
