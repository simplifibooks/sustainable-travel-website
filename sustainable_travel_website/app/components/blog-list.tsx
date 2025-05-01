"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "Introducing Our Sustainable Travel Platform: Travel for All, Impact for Good",
    excerpt: "Discover how our platform makes sustainable travel accessible for everyone, from families to seniors and mobility-limited travelers.",
    image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
    category: "Announcements",
    date: "March 20, 2024",
    slug: "introducing-sustainable-travel-platform"
  },
  {
    title: "Zero-Waste Family Travel: Practical Tips for Eco-Friendly Vacations with Kids",
    excerpt: "Learn how to minimize waste while traveling with children through practical, easy-to-implement strategies.",
    image: "https://touristmeetstraveler.com/wp-content/uploads/eco-friendly-family-vacation-1.jpg",
    category: "Family Travel",
    date: "March 18, 2024",
    slug: "zero-waste-family-travel-tips"
  },
  {
    title: "Slow Travel for Seniors: Embracing Sustainable Tourism at a Gentle Pace",
    excerpt: "Discover the benefits of slow travel for senior travelers and how it contributes to sustainable tourism.",
    image: "https://thumbs.dreamstime.com/b/mature-asian-woman-hikes-rocky-path-explores-sigiriya-rock-sunset-senior-hiker-enjoys-eco-travel-wellness-adventure-active-old-316787500.jpg",
    category: "Senior Travel",
    date: "March 15, 2024",
    slug: "slow-travel-seniors-guide"
  },
  {
    title: "Accessible Nature Experiences: Finding Wheelchair-Friendly Trails and Parks",
    excerpt: "A comprehensive guide to accessible nature trails and parks around the world for mobility-limited travelers.",
    image: "https://www.anywhere.com/blog/images/accessible-travel-jungle-path.png",
    category: "Accessible Travel",
    date: "March 12, 2024",
    slug: "accessible-nature-experiences"
  },
  {
    title: "Sustainable Summer Destinations: Beat the Crowds with Eco-Friendly Alternatives",
    excerpt: "Explore lesser-known sustainable destinations perfect for summer travel without the crowds.",
    image: "https://offmetro.com/world/wp-content/uploads/2023/10/Sustainable-Family-Vacation-.jpeg",
    category: "Destinations",
    date: "March 10, 2024",
    slug: "sustainable-summer-destinations"
  },
  {
    title: "The Future of Sustainable Travel: Green Transportation Innovations",
    excerpt: "Explore the latest innovations in sustainable transportation and how they're shaping the future of travel.",
    image: "https://www.transport.gov.scot/media/48002/prioritising-sustainable-transport.jpg",
    category: "Transportation",
    date: "March 8, 2024",
    slug: "future-sustainable-travel-transportation"
  }
]

export function BlogList() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {blogPosts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
        >
          <Link href={`/blog/${post.slug}`}>
            <div className="relative h-64">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <time className="text-sm text-gray-500 dark:text-gray-400">{post.date}</time>
              <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
              <span className="text-emerald-600 hover:text-emerald-700 font-semibold">
                Read More →
              </span>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  )
}