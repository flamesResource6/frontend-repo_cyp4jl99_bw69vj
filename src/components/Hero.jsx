import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pb-24 bg-gradient-to-b from-white via-purple-50/50 to-blue-50/60 overflow-hidden">
      <div className="absolute inset-0 opacity-70 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-300/40 via-blue-300/30 to-orange-200/20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              AI Agents that sell, support, and scale your business
            </motion.h1>
            <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.6}} className="mt-5 text-lg text-gray-700">
              Voice. Calls. Email. WhatsApp. Multichannel agents that answer, follow up, and close—24/7. Plug into any workflow in minutes.
            </motion.p>
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.6}} className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#demo" className="px-6 py-3 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors">Book a live demo</a>
              <a href="#templates" className="px-6 py-3 rounded-md bg-white ring-1 ring-gray-200 hover:bg-gray-50 transition-colors">Explore templates</a>
            </motion.div>
            <div className="mt-6 text-sm text-gray-500">
              Trusted for inbound, outbound, and support across SaaS, e‑commerce, healthcare, real estate, and more.
            </div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white/10 backdrop-blur">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
