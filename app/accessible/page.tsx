import { AccessibleHero } from "@/components/accessible-hero"
import { AccessibleDestinations } from "@/components/accessible-destinations"
import { AccessibleActivities } from "@/components/accessible-activities"
import { AdPlacement } from "@/components/ad-placement"

export const metadata = {
  title: "Accessible Sustainable Travel | Eco-Friendly Adventures for All Abilities",
  description: "Discover wheelchair-friendly and accessible eco-tourism experiences. Expert guides to accessible accommodations, activities, and transportation options.",
}

export default function AccessiblePage() {
  return (
    <div className="space-y-12">
      <AccessibleHero />
      <AdPlacement position="banner" />
      <AccessibleDestinations />
      <AccessibleActivities />
      <AdPlacement position="in-content" />
    </div>
  )
}