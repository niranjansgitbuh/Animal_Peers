import type { Metadata } from "next"
import { EmergencyHelpline } from "@/components/emergency/helpline"
import { DisasterReliefMode } from "@/components/emergency/disaster-relief"
import { Phone, AlertTriangle } from "lucide-react"
import { AnimatedImage } from "@/components/ui/animated-image"

export const metadata: Metadata = {
  title: "Emergency Assistance - AnimalPeers",
  description: "24/7 emergency animal helpline and disaster relief services",
}

export default function EmergencyPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Emergency Assistance</h1>
        <p className="mt-4 text-xl text-muted-foreground">Immediate help for animals in critical situations</p>
      </div>

      <div className="grid gap-12">
        <section>
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-full bg-red-100 p-3">
              <Phone className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold">24/7 Emergency Helpline</h2>
            <AnimatedImage
              src="/placeholder.svg?height=100&width=200&text=Emergency+Helpline"
              alt="Emergency animal helpline"
              effect="3d-tilt"
              className="ml-auto h-16 rounded-md"
            />
          </div>
          <EmergencyHelpline />
        </section>

        <section>
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-full bg-amber-100 p-3">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold">Disaster Relief Mode</h2>
            <AnimatedImage
              src="/placeholder.svg?height=100&width=200&text=Disaster+Relief"
              alt="Animal disaster relief"
              effect="parallax"
              className="ml-auto h-16 rounded-md"
            />
          </div>
          <DisasterReliefMode />
        </section>
      </div>
    </div>
  )
}

