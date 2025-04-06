import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedImage } from "@/components/ui/animated-image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      <div className="container flex flex-col items-center justify-center gap-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Help Rescue Stray Animals <span className="text-primary">in Need</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Connect with animal hospitals and NGOs to rescue injured or sick stray animals across India.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/report">Report an Animal</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/register">Register as NGO/Hospital</Link>
          </Button>
        </div>
        <div className="relative mt-8 w-full max-w-5xl overflow-hidden rounded-xl border shadow-xl">
          <AnimatedImage
            src="/placeholder.svg?height=600&width=1200&text=Animal+Rescue+Volunteers+Helping+Stray+Dog"
            alt="Volunteers helping an injured stray dog"
            effect="3d-tilt"
            intensity="medium"
            className="aspect-[16/9] w-full"
          />
        </div>
      </div>
    </section>
  )
}

