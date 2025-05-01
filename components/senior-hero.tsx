"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function SeniorHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
    >
      <Image
        src="https://thumbs.dreamstime.com/b/mature-asian-woman-hikes-rocky-path-explores-sigiriya-rock-sunset-senior-hiker-enjoys-eco-travel-wellness-adventure-active-old-316787500.jpg"
        alt="Senior traveler enjoying sustainable adventure"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
        <div className="max-w-2xl px-8 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Sustainable Senior Travel
          </h1>
          <p className="text-xl text-white/90">
            Experience eco-friendly adventures designed for mature travelers seeking meaningful experiences.
          </p>
          <div className="flex gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Explore Destinations
            </button>
            <button className="bg-white hover:bg-gray-100 text-emerald-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              View Wellness Retreats
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}