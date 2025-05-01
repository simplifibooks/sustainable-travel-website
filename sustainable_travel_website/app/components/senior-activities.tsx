"use client"

import { motion } from "framer-motion"
import { Heart, Book, Utensils, Flower } from "lucide-react"

const activities = [
  {
    title: "Wellness Activities",
    description: "Eco-friendly spa treatments and gentle exercise programs in natural settings.",
    icon: Heart,
    color: "text-rose-600"
  },
  {
    title: "Cultural Learning",
    description: "Immersive experiences in local traditions and sustainable practices.",
    icon: Book,
    color: "text-blue-600"
  },
  {
    title: "Culinary Experiences",
    description: "Farm-to-table dining and traditional cooking workshops.",
    icon: Utensils,
    color: "text-amber-600"
  },
  {
    title: "Garden Tours",
    description: "Explore sustainable gardens and participate in gentle nature activities.",
    icon: Flower,
    color: "text-emerald-600"
  }
]

export function SeniorActivities() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Senior-Friendly Activities</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Engage in sustainable activities designed for mature travelers.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className={`mx-auto w-12 h-12 ${activity.color} mb-4`}>
              <activity.icon size={48} />
            </div>
            <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{activity.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}