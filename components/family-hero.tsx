"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FamilyHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
    >
      <Image
        src="https://touristmeetstraveler.com/wp-content/uploads/eco-friendly-family-vacation-1.jpg"
        alt="Family enjoying sustainable travel"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
        <div className="max-w-2xl px-8 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Sustainable Family Adventures
          </h1>
          <p className="text-xl text-white/90">
            Create lasting memories with eco-friendly travel experiences designed for families with young children.
          </p>
          <div className="flex gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Plan Your Trip
            </button>
            <button className="bg-white hover:bg-gray-100 text-emerald-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              View Activities
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}