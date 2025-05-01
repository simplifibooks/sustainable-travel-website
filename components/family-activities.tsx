"use client"

import { motion } from "framer-motion"
import { Leaf, Mountain, Fish, Palmtree } from "lucide-react"

const activities = [
  {
    title: "Wildlife Conservation",
    description: "Participate in ethical wildlife viewing and conservation education programs.",
    icon: Leaf,
    color: "text-emerald-600"
  },
  {
    title: "Nature Education",
    description: "Guided nature walks and hands-on learning about ecosystems.",
    icon: Mountain,
    color: "text-blue-600"
  },
  {
    title: "Marine Adventures",
    description: "Sustainable water activities and ocean conservation programs.",
    icon: Fish,
    color: "text-cyan-600"
  },
  {
    title: "Forest Exploration",
    description: "Tree planting activities and forest conservation projects.",
    icon: Palmtree,
    color: "text-green-600"
  }
]

export function FamilyActivities() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Family-Friendly Activities</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Engage in sustainable activities that educate and inspire the whole family.
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