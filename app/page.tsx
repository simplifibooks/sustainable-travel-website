import { HeroSection } from "@/components/hero-section"
import { DemographicCards } from "@/components/demographic-cards"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { LatestBlogPosts } from "@/components/latest-blog-posts"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <DemographicCards />
      <FeaturedDestinations />
      <LatestBlogPosts />
      <Newsletter />
    </div>
  )
}