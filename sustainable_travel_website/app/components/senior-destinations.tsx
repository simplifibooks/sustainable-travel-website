"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const destinations = [
  {
    title: "European Cultural Cities",
    description: "Explore sustainable urban destinations with excellent accessibility",
    image: "https://media.licdn.com/dms/image/C5612AQHyTG52tUYE_w/article-cover_image-shrink_720_1280/0/1520103834607?e=2147483647&v=beta&t=H3EGU_I7C9za-QdTAW9ax4EufDcu017ngpwTPow6jPI",
    features: ["Accessible public transit", "Cultural heritage", "Wellness centers"]
  },
  {
    title: "Costa Rica Wellness",
    description: "Eco-friendly wellness retreats in natural settings",
    image: "https://thumbs.dreamstime.com/b/adventurous-senior-enjoys-eco-tourism-engages-outdoor-fitness-health-independence-wellbeing-mature-asian-woman-hikes-317037781.jpg",
    features: ["Spa treatments", "Gentle hiking", "Organic cuisine"]
  },
  {
    title: "Japanese Traditions",
    description: "Experience traditional sustainable practices",
    image: "https://www.nationalchurchresidences.org/wp-content/uploads/2023/07/iStock-1453972025.jpg",
    features: ["Cultural immersion", "Hot springs", "Garden tours"]
  },
  {
    title: "Portugal's Rural Charm",
    description: "Authentic experiences in sustainable communities",
    image: "https://s3.amazonaws.com/iexplore_web/images/assets/000/006/603/original/ecotourism_Tourists_hiking_Gorilla_Trek_at_Volcanoes_National_Park_in_Rwanda.jpg?1443786105",
    features: ["Farm stays", "Wine tasting", "Local crafts"]
  }
]

export function SeniorDestinations() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Senior-Friendly Destinations</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover sustainable destinations perfect for mature travelers seeking authentic experiences.
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