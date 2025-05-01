"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const destinations = [
  {
    title: "Costa Rica Family Adventures",
    description: "Explore rainforests and wildlife with eco-friendly family activities",
    image: "https://offmetro.com/world/wp-content/uploads/2023/10/Sustainable-Family-Vacation-.jpeg",
    features: ["Wildlife encounters", "Educational programs", "Eco-lodges"]
  },
  {
    title: "Iceland's Natural Wonders",
    description: "Discover renewable energy and pristine landscapes",
    image: "https://img.freepik.com/premium-photo/outdoor-adventure-family-vacation-camping-nature-travel-by-eco-friendly-car-sustainable-future-lovely-family-recharge-ev-car-with-ev-charging-station-campsite-perpetual_31965-268965.jpg",
    features: ["Geothermal sites", "Family hiking", "Green energy tours"]
  },
  {
    title: "New Zealand Eco-Tours",
    description: "Sustainable adventures in Middle Earth",
    image: "https://www.saltylama.com/cdn/shop/articles/sustainable_family_vacation.jpg?v=1685928769",
    features: ["Conservation activities", "Maori culture", "Nature trails"]
  },
  {
    title: "Portugal's Alentejo Region",
    description: "Rural tourism and sustainable agriculture experiences",
    image: "https://i.ytimg.com/vi/VhTxDv18S3k/maxresdefault.jpg",
    features: ["Farm stays", "Local crafts", "Organic food"]
  }
]

export function FamilyDestinations() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Family-Friendly Destinations</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover sustainable destinations perfect for families with young children.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {destinations.map((dest, index) => (
          <motion.div
            key={dest.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="relative h-64">
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{dest.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{dest.description}</p>
              <div className="flex flex-wrap gap-2">
                {dest.features.map(feature => (
                  <span
                    key={feature}
                    className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}