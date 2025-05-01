import { FamilyHero } from "@/components/family-hero"
import { FamilyDestinations } from "@/components/family-destinations"
import { FamilyActivities } from "@/components/family-activities"
import { AdPlacement } from "@/components/ad-placement"

export const metadata = {
  title: "Sustainable Family Travel | Eco-Friendly Vacations with Children",
  description: "Plan memorable, eco-friendly family vacations with our comprehensive guide to sustainable travel with children. Discover family-friendly destinations, activities, and accommodations.",
}

export default function FamiliesPage() {
  return (
    <div className="space-y-12">
      <FamilyHero />
      <AdPlacement position="banner" />
      <FamilyDestinations />
      <FamilyActivities />
      <AdPlacement position="in-content" />
    </div>
  )
}