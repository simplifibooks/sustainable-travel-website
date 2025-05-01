'use client'

import Link from 'next/link'

const blogPosts = [
  {
    title: 'Top 10 Eco-Friendly Cities in the World',
    slug: 'eco-friendly-cities',
    excerpt: 'Discover the top destinations leading the way in sustainability...',
  },
  {
    title: 'How to Travel Sustainably on a Budget',
    slug: 'budget-green-travel',
    excerpt: 'Affordable and responsible travel is possible with these tips...',
  },
  {
    title: 'Packing for a Green Adventure',
    slug: 'eco-travel-tips',
    excerpt: 'Use this checklist to pack light, reduce waste, and stay eco-friendly.',
  },
  {
    title: 'Example Post',
    slug: 'example-post',
    excerpt: 'This is a placeholder post for development purposes.',
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Our Sustainable Travel Blog</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Tips, guides, and stories to help you travel better — for the planet and yourself.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map(({ title, slug, excerpt }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="block bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition p-6"
          >
            <h2 className="text-xl font-semibold text-emerald-600">{title}</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}