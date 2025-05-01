"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const destinations = [
  {
    title: "Costa Rica Eco-Adventures",
    description: "Family-friendly sustainable rainforest experiences",
    image: "https://offmetro.com/world/wp-content/uploads/2023/10/Sustainable-Family-Vacation-.jpeg",
    category: "Family"
  },
  {
    title: "Swiss Alps Accessible Tours",
    description: "Wheelchair-friendly mountain experiences",
    image: "https://www.visitpenticton.com/wp-content/uploads/2022/09/Accessible-Tourism_2021_Nathan-Penner-4-large-1024x683.jpg",
    category: "Accessible"
  },
  {
    title: "Japanese Cultural Tours",
    description: "Senior-friendly sustainable cultural experiences",
    image: "https://thumbs.dreamstime.com/b/adventurous-senior-enjoys-eco-tourism-engages-outdoor-fitness-health-independence-wellbeing-mature-asian-woman-hikes-317037781.jpg",
    category: "Senior"
  }
]

export function FeaturedDestinations() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Sustainable Destinations</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover our handpicked eco-friendly destinations that cater to all travelers.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {destinations.map((dest, index) => (
          <motion.div
            key={dest.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
                {dest.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{dest.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{dest.description}</p>
              <button className="mt-4 text-emerald-600 hover:text-emerald-700 font-semibold">
                Learn More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}