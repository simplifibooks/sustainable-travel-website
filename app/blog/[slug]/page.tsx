'use client'

import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blogData'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 text-emerald-700">{post.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{post.excerpt}</p>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          This is a sample body for the post: <strong>{post.title}</strong>. You can customize the full content
          inside <code>lib/blogData.ts</code> if you want to use markdown or HTML blocks later.
        </p>
      </div>
    </div>
  )
}