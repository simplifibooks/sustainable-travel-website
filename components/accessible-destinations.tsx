"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const destinations = [
  {
    title: "Barcelona's Accessible Beaches",
    description: "Fully accessible beach facilities with sustainable practices",
    image: "https://wheelchairtraveling.com/wp-content/uploads/2019/11/file-OM0sL7UoZdh8fzNw9zff5IDz-jpg.webp",
    features: ["Beach wheelchairs", "Accessible bathrooms", "Trained staff"]
  },
  {
    title: "Singapore Universal Design",
    description: "City-wide accessibility with green initiatives",
    image: "https://www.visitpenticton.com/wp-content/uploads/2022/09/Accessible-Tourism_2021_Nathan-Penner-4-large-1024x683.jpg",
    features: ["Accessible transit", "Green spaces", "Smart technology"]
  },
  {
    title: "Costa Rica Eco-Lodges",
    description: "Accessible rainforest experiences",
    image: "https://www.travoh.com/wp-content/uploads/2023/08/Eco-Friendly-Itineraries-Crafting-Sustainable-Travel-Experiences-1.jpg",
    features: ["Adapted trails", "Wildlife viewing", "Accessible rooms"]
  },
  {
    title: "US National Parks",
    description: "Accessible nature experiences in preserved environments",
    image: "https://d3d5bpai12ti8.cloudfront.net/wp-content/uploads/20191122115531/iStock-148160283-696x463.jpg",
    features: ["Accessible trails", "Visitor centers", "Adaptive equipment"]
  }
]

export function AccessibleDestinations() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Accessible Destinations</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover sustainable destinations with comprehensive accessibility features.
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