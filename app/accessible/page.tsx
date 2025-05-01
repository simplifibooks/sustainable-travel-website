'use client'

import Link from 'next/link'

export default function AccessiblePage() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Accessible & Inclusive Destinations</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Explore destinations and travel tips for those with mobility or accessibility needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Amsterdam', slug: 'amsterdam' },
          { name: 'Tokyo', slug: 'tokyo' },
          { name: 'Washington DC', slug: 'washington-dc' },
        ].map(({ name, slug }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="block bg-white dark:bg-gray-900 shadow rounded-lg p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-emerald-600">{name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Discover accessible options in {name}.
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}