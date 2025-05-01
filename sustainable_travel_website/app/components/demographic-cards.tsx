"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const demographics = [
  {
    title: "Family Travel",
    description: "Eco-friendly adventures for families with young children",
    image: "https://touristmeetstraveler.com/wp-content/uploads/eco-friendly-family-vacation-1.jpg",
    href: "/families"
  },
  {
    title: "Senior Travel",
    description: "Sustainable experiences designed for mature travelers",
    image: "https://thumbs.dreamstime.com/b/mature-asian-woman-hikes-rocky-path-explores-sigiriya-rock-sunset-senior-hiker-enjoys-eco-travel-wellness-adventure-active-old-316787500.jpg",
    href: "/seniors"
  },
  {
    title: "Accessible Travel",
    description: "Inclusive eco-tourism for travelers with mobility needs",
    image: "https://www.anywhere.com/blog/images/accessible-travel-jungle-path.png",
    href: "/accessible"
  }
]

export function DemographicCards() {
  return (
    <section className="grid md:grid-cols-3 gap-8">
      {demographics.map((demo, index) => (
        <motion.div
          key={demo.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
        >
          <Link href={demo.href}>
            <div className="relative h-[400px]">
              <Image
                src={demo.image}
                alt={demo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 p-6 space-y-2">
                  <h3 className="text-2xl font-bold text-white">{demo.title}</h3>
                  <p className="text-white/90">{demo.description}</p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  )
}