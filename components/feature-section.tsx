import { Heart, MapPin, Bell, BarChart4, Users, FileText } from "lucide-react"
import { AnimatedImage } from "@/components/ui/animated-image"

export function FeatureSection() {
  const features = [
    {
      icon: MapPin,
      title: "Easy Location Reporting",
      description: "Quickly mark the exact location of animals in need using Google Maps integration.",
      image: "/placeholder.svg?height=120&width=120&text=Location+Reporting",
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Nearby NGOs and animal hospitals receive instant notifications about animals in need.",
      image: "/placeholder.svg?height=120&width=120&text=Real-time+Alerts",
    },
    {
      icon: Heart,
      title: "Rescue Confirmation",
      description: "Get updates when animals are rescued and receive information about their condition.",
      image: "/placeholder.svg?height=120&width=120&text=Rescue+Updates",
    },
    {
      icon: BarChart4,
      title: "NGO Dashboard",
      description: "Organizations can manage cases, update statuses, and coordinate rescues efficiently.",
      image: "/placeholder.svg?height=120&width=120&text=NGO+Dashboard",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a network of animal lovers working together to help stray animals.",
      image: "/placeholder.svg?height=120&width=120&text=Community+Network",
    },
    {
      icon: FileText,
      title: "Educational Resources",
      description: "Access blogs and guides about animal care and first aid for strays.",
      image: "/placeholder.svg?height=120&width=120&text=Educational+Resources",
    },
  ]

  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Features</h2>
          <p className="mt-4 text-muted-foreground">Everything you need to help stray animals in your community</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <AnimatedImage
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  effect="3d-flip"
                  className="h-12 w-12 rounded-md"
                />
              </div>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

