import { SeniorHero } from "@/components/senior-hero"
import { SeniorDestinations } from "@/components/senior-destinations"
import { SeniorActivities } from "@/components/senior-activities"
import { AdPlacement } from "@/components/ad-placement"

export const metadata = {
  title: "Sustainable Senior Travel | Eco-Friendly Adventures for 55+ Travelers",
  description: "Discover sustainable travel experiences designed for senior travelers. Expert guides to accessible eco-tourism, wellness retreats, and cultural experiences.",
}

export default function SeniorsPage() {
  return (
    <div className="space-y-12">
      <SeniorHero />
      <AdPlacement position="banner" />
      <SeniorDestinations />
      <SeniorActivities />
      <AdPlacement position="in-content" />
    </div>
  )
}