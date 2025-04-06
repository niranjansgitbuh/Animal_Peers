import { CheckCircle2 } from "lucide-react"
import { AnimatedImage } from "@/components/ui/animated-image"

export function HowItWorks() {
  const steps = [
    {
      title: "Report an Animal",
      description:
        "Fill out a simple form with details about the animal in need, including location, condition, and photos.",
      image: "/placeholder.svg?height=150&width=150&text=Report+Form",
    },
    {
      title: "Alert Sent to Nearby NGOs",
      description: "Our system automatically notifies the nearest animal hospitals and NGOs about the case.",
      image: "/placeholder.svg?height=150&width=150&text=Alert+Notification",
    },
    {
      title: "NGO Accepts the Case",
      description: "Available organizations can accept the rescue request and coordinate the rescue operation.",
      image: "/placeholder.svg?height=150&width=150&text=Case+Acceptance",
    },
    {
      title: "Rescue Confirmation",
      description: "Once rescued, you receive updates about the animal's condition and treatment progress.",
      image: "/placeholder.svg?height=150&width=150&text=Rescue+Confirmation",
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-muted-foreground">A simple process to help stray animals get the care they need</p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-border md:left-12" />
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 md:gap-12">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground md:h-24 md:w-24">
                    <span className="text-xl font-bold md:text-3xl">{index + 1}</span>
                  </div>
                  <div className="pt-3 md:pt-6">
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="mb-2 text-xl font-medium md:text-2xl">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                      <AnimatedImage
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        effect="3d-float"
                        className="hidden h-20 w-20 rounded-md md:block"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center gap-2 rounded-lg border bg-card p-4 shadow-sm">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <p className="font-medium">You don't need to transport the animal yourself - just report it!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

