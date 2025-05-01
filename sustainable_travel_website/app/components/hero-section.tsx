"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
    >
      <Image
        src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
        alt="Sustainable travel landscape"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
        <div className="max-w-2xl px-8 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Sustainable Travel for Everyone
          </h1>
          <p className="text-xl text-white/90">
            Discover eco-friendly adventures designed for families, seniors, and travelers with mobility needs.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </motion.section>
  )
}