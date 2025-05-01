"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "Zero-Waste Family Travel: A Complete Guide",
    excerpt: "Discover practical tips for sustainable family adventures with minimal environmental impact.",
    image: "https://tripjive.com/wp-content/uploads/2024/02/eco-friendly-family-travel-options.jpg",
    category: "Family Travel",
    date: "March 15, 2024"
  },
  {
    title: "Accessible Nature Trails Around the World",
    excerpt: "Exploring the most wheelchair-friendly hiking trails in sustainable destinations.",
    image: "https://www.anywhere.com/blog/images/accessible-travel-jungle-path.png",
    category: "Accessible Travel",
    date: "March 12, 2024"
  },
  {
    title: "Senior's Guide to Eco-Friendly Wellness Retreats",
    excerpt: "The best sustainable wellness destinations for mature travelers.",
    image: "https://media.licdn.com/dms/image/C5612AQHyTG52tUYE_w/article-cover_image-shrink_720_1280/0/1520103834607?e=2147483647&v=beta&t=H3EGU_I7C9za-QdTAW9ax4EufDcu017ngpwTPow6jPI",
    category: "Senior Travel",
    date: "March 10, 2024"
  }
]

export function LatestBlogPosts() {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Latest from Our Blog</h2>
        <Link 
          href="/blog"
          className="text-emerald-600 hover:text-emerald-700 font-semibold"
        >
          View All Posts →
        </Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="relative h-48">
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
              <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
                className="text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                Read More →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}