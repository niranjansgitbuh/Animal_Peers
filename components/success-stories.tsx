import { Card, CardContent } from "@/components/ui/card"
import { AnimatedImage } from "@/components/ui/animated-image"

export function SuccessStories() {
  const stories = [
    {
      title: "Max the Street Dog",
      description:
        "Max was found with a broken leg after being hit by a car. Thanks to a quick report, he was rescued within an hour and is now fully recovered.",
      image: "/placeholder.svg?height=300&width=400&text=Max+the+Street+Dog",
      location: "Mumbai, Maharashtra",
    },
    {
      title: "Mittens the Kitten",
      description:
        "Abandoned and malnourished, Mittens was spotted by a college student who reported her. Now she's healthy and has been adopted into a loving home.",
      image: "/placeholder.svg?height=300&width=400&text=Mittens+the+Kitten",
      location: "Bangalore, Karnataka",
    },
    {
      title: "Raja the Cow",
      description:
        "Raja was suffering from a severe infection. After treatment at a local gaushala, he made a full recovery and now lives peacefully at a sanctuary.",
      image: "/placeholder.svg?height=300&width=400&text=Raja+the+Cow",
      location: "Jaipur, Rajasthan",
    },
  ]

  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Success Stories</h2>
          <p className="mt-4 text-muted-foreground">Real animals helped through our platform</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-[4/3] w-full">
                <AnimatedImage src={story.image} alt={story.title} effect="parallax" className="h-full w-full" />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-medium">{story.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{story.location}</p>
                <p className="text-muted-foreground">{story.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

