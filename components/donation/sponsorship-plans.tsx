"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { AnimatedImage } from "@/components/ui/animated-image"

export function SponsorshipPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: "basic",
      name: "Basic Sponsor",
      price: "₹500",
      description: "Support basic care for stray animals",
      features: ["Feed 5 animals per month", "Monthly impact report", "Certificate of appreciation"],
      image: "/placeholder.svg?height=120&width=120&text=Basic+Sponsor",
    },
    {
      id: "premium",
      name: "Premium Sponsor",
      price: "₹1,000",
      description: "Provide medical care and food",
      features: [
        "Feed 10 animals per month",
        "Support vaccinations",
        "Quarterly newsletter",
        "Digital badge for social media",
        "Certificate of appreciation",
      ],
      popular: true,
      image: "/placeholder.svg?height=120&width=120&text=Premium+Sponsor",
    },
    {
      id: "guardian",
      name: "Guardian",
      price: "₹2,500",
      description: "Comprehensive support for animals in need",
      features: [
        "Feed 25 animals per month",
        "Support surgeries and treatments",
        "Name listed on our website",
        "Exclusive updates on animals you help",
        "Personalized thank you video",
        "Certificate of appreciation",
      ],
      image: "/placeholder.svg?height=120&width=120&text=Guardian+Sponsor",
    },
  ]

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId)

    // In a real app, this would redirect to a payment page
    setTimeout(() => {
      alert(`Thank you for choosing the ${planId} plan!`)
    }, 500)
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <Card key={plan.id} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
          {plan.popular && (
            <div className="rounded-t-lg bg-primary py-1 text-center text-sm font-medium text-primary-foreground">
              Most Popular
            </div>
          )}
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{plan.name}</CardTitle>
              <AnimatedImage
                src={plan.image || "/placeholder.svg"}
                alt={plan.name}
                effect="3d-float"
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="mb-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground"> / month</span>
            </div>
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              variant={plan.popular ? "default" : "outline"}
              onClick={() => handleSubscribe(plan.id)}
            >
              Subscribe
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

