import type { Metadata } from "next"
import { DonationOptions } from "@/components/donation/donation-options"
import { FeaturedCases } from "@/components/donation/featured-cases"
import { SponsorshipPlans } from "@/components/donation/sponsorship-plans"

export const metadata: Metadata = {
  title: "Donate - AnimalPeers",
  description: "Support animal rescue efforts through donations and sponsorships",
}

export default function DonatePage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Support Our Mission</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Your contribution helps us rescue and treat injured stray animals across India
        </p>
      </div>

      <DonationOptions />

      <div className="my-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Featured Cases Needing Support</h2>
        <FeaturedCases />
      </div>

      <div className="my-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Become a Monthly Sponsor</h2>
        <SponsorshipPlans />
      </div>
    </div>
  )
}

