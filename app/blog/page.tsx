import { BlogList } from "@/components/blog-list"

export const metadata = {
  title: "Sustainable Travel Blog | Eco-Friendly Travel Tips and Guides",
  description: "Discover sustainable travel tips, guides, and stories for families, seniors, and travelers with mobility needs.",
}

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Sustainable Travel Blog</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Expert insights and guides for eco-conscious travelers of all abilities.
        </p>
      </div>
      <BlogList />
    </div>
  )
}