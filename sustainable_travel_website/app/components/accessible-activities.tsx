"use client"

import { motion } from "framer-motion"
import { Waves, Camera, Trees, MapPin } from "lucide-react"

const activities = [
  {
    title: "Accessible Beaches",
    description: "Enjoy beach activities with specialized equipment and support.",
    icon: Waves,
    color: "text-blue-600"
  },
  {
    title: "Adapted Photography",
    description: "Guided photography tours with accessible viewpoints.",
    icon: Camera,
    color: "text-purple-600"
  },
  {
    title: "Nature Trails",
    description: "Wheelchair-friendly trails through natural environments.",
    icon: Trees,
    color: "text-emerald-600"
  },
  {
    title: "City Tours",
    description: "Accessible guided tours of sustainable urban initiatives.",
    icon: MapPin,
    color: "text-red-600"
  }
]

export function AccessibleActivities() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Accessible Activities</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Experience sustainable activities adapted for all abilities.
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