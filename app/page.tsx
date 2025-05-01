'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-emerald-50 dark:bg-gray-800">
        <h1 className="text-4xl font-bold text-emerald-700 dark:text-white">
          Welcome to Green Travel for All
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Sustainable travel made accessible for families, seniors, and everyone in between.
        </p>
        <Link href="/blog">
          <button className="mt-6 px-6 py-3 bg-emerald-600 text-white rounded shadow hover:bg-emerald-700 transition">
            Start Your Journey
          </button>
        </Link>
      </section>

      {/* Demographic Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
        {[
          { title: 'Families', href: '/families' },
          { title: 'Seniors', href: '/seniors' },
          { title: 'Accessible Travel', href: '/accessible' },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="block p-6 bg-white shadow hover:shadow-lg rounded-lg dark:bg-gray-900 dark:hover:bg-gray-800 transition"
          >
            <h2 className="text-xl font-semibold text-emerald-600">{card.title}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Explore top destinations and tips for {card.title.toLowerCase()}.
            </p>
          </Link>
        ))}
      </section>

      {/* Featured Destinations */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Featured Sustainable Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['bali', 'costa-rica', 'switzerland'].map((slug) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:shadow transition"
            >
              <h3 className="text-lg font-semibold capitalize">{slug.replace('-', ' ')}</h3>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                Discover what makes {slug.replace('-', ' ')} an eco-friendly gem.
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['example-post', 'eco-travel-tips', 'budget-green-travel'].map((slug) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="block bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold capitalize">{slug.replace('-', ' ')}</h3>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                A quick look into {slug.replace('-', ' ')}.
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 dark:bg-gray-800 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold">Stay Updated</h2>
          <form
            action="https://greentravelforall.beehiiv.com/subscribe"
            method="POST"
            target="_blank"
            className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 border rounded w-full max-w-xs"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}