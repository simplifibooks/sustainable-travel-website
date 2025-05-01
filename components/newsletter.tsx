"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-emerald-600 rounded-2xl p-8 md:p-12 text-white text-center"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">Stay Updated on Sustainable Travel</h2>
        <p className="text-white/90">
          Get the latest eco-friendly travel tips, destination guides, and exclusive offers delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-sm text-white/80">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
        </p>
      </div>
    </motion.section>
  )
}