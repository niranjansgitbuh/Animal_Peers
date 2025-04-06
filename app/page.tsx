import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { HowItWorks } from "@/components/how-it-works"
import { SuccessStories } from "@/components/success-stories"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <FeatureSection />
      <HowItWorks />
      <SuccessStories />
      <div className="mx-auto my-16 flex w-full max-w-5xl flex-col items-center justify-center gap-6 px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to help a stray animal?</h2>
        <p className="max-w-2xl text-muted-foreground">
          Join our community of animal lovers and make a difference in the lives of stray animals across India.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/report">Report an Animal</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/register">Join as NGO/Hospital</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

