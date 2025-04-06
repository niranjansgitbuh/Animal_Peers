import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AnimatedImage } from "@/components/ui/animated-image"

export function FeaturedCases() {
  // Sample data for featured cases
  const cases = [
    {
      id: "case-1",
      title: "Help Buddy Recover from Accident",
      description: "Buddy was hit by a car and needs surgery for his broken leg",
      image: "/placeholder.svg?height=300&width=400&text=Help+Buddy+Recover",
      location: "Mumbai, Maharashtra",
      target: 15000,
      raised: 8750,
      daysLeft: 5,
      urgent: true,
    },
    {
      id: "case-2",
      title: "Medical Treatment for Abandoned Kittens",
      description: "Four kittens found in a box need vaccinations and care",
      image: "/placeholder.svg?height=300&width=400&text=Abandoned+Kittens",
      location: "Bangalore, Karnataka",
      target: 8000,
      raised: 3200,
      daysLeft: 12,
      urgent: false,
    },
    {
      id: "case-3",
      title: "Help Raja the Cow with Infection Treatment",
      description: "Raja needs antibiotics and care for a severe infection",
      image: "/placeholder.svg?height=300&width=400&text=Raja+the+Cow",
      location: "Jaipur, Rajasthan",
      target: 12000,
      raised: 9600,
      daysLeft: 3,
      urgent: true,
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cases.map((case_) => (
        <Card key={case_.id} className="overflow-hidden">
          <div className="relative">
            <AnimatedImage src={case_.image} alt={case_.title} effect="3d-tilt" className="aspect-[4/3] w-full" />
            {case_.urgent && (
              <Badge variant="destructive" className="absolute right-2 top-2">
                Urgent
              </Badge>
            )}
          </div>
          <CardHeader>
            <CardTitle>{case_.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{case_.location}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{case_.description}</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>₹{case_.raised.toLocaleString()} raised</span>
                <span className="font-medium">₹{case_.target.toLocaleString()}</span>
              </div>
              <Progress value={(case_.raised / case_.target) * 100} />
              <p className="text-xs text-muted-foreground">{case_.daysLeft} days left to reach the goal</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href={`/donate/${case_.id}`}>Donate to This Case</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

