"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AlertTriangle, MapPin, Upload, Plus, Info } from "lucide-react"

export function DisasterReliefMode() {
  const [disasterType, setDisasterType] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [animalCount, setAnimalCount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const disasterImages = {
    flood: "/placeholder.svg?height=80&width=80&text=Flood",
    earthquake: "/placeholder.svg?height=80&width=80&text=Earthquake",
    fire: "/placeholder.svg?height=80&width=80&text=Fire",
    other: "/placeholder.svg?height=80&width=80&text=Other+Disaster",
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <Card className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
          <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-600 dark:text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold">Disease Relief Request Submitted</h2>
          <p className="text-muted-foreground">
            Your disease relief request has been submitted. Our emergency response team has been notified and will
            coordinate rescue efforts as soon as possible.
          </p>
          <p className="font-medium text-green-600 dark:text-green-400">
            Emergency Response ID: DR-{Math.floor(Math.random() * 10000)}
          </p>
          <Button onClick={() => setIsSuccess(false)}>Submit Another Report</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="bg-amber-50 dark:bg-amber-950">
        <CardHeader>
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-1 h-5 w-5 text-amber-600 dark:text-amber-400" />
            <div>
              <CardTitle className="text-amber-800 dark:text-amber-300">Disease Relief Mode</CardTitle>
              <CardDescription className="text-amber-700 dark:text-amber-400">
                For reporting multiple animals affected by natural diseases
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-amber-200 bg-white p-4 dark:border-amber-800 dark:bg-amber-900/30">
            <div className="flex items-start gap-4">
              <Info className="mt-0.5 h-4 w-4 text-amber-600 dark:text-amber-400" />
              <div className="text-sm">
                <p className="font-medium text-amber-800 dark:text-amber-300">About Disease Relief Mode</p>
                <p className="text-amber-700 dark:text-amber-400">
                  This special reporting mode is designed for natural diseases like Rabies, Upper Respiratory Infections, or Heartworm Disease where
                  multiple animals may be affected. Our team will coordinate with local authorities and rescue
                  organizations to mobilize resources quickly.
                </p>
              </div>
              <img
                src="/placeholder.svg?height=100&width=100&text=Disaster+Relief"
                alt="Disaster relief"
                className="hidden h-20 w-20 rounded-md object-cover md:block"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Report Animals Affected by Disease</CardTitle>
            <CardDescription>Provide details about the disease and affected animals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Type of Disease</Label>
              <RadioGroup
                value={disasterType}
                onValueChange={setDisasterType}
                className="grid grid-cols-2 gap-4 sm:grid-cols-4"
              >
                <Label
                  htmlFor="flood"
                  className={`flex cursor-pointer flex-col items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                    disasterType === "flood" ? "border-primary bg-primary/10" : ""
                  }`}
                >
                  <RadioGroupItem value="flood" id="flood" className="sr-only" />
                  <img
                    src={disasterImages.flood || "/placeholder.svg"}
                    alt="Flood"
                    className="mb-2 h-10 w-10 rounded-md object-cover"
                  />
                  <span className="text-sm font-medium">Flood</span>
                </Label>
                <Label
                  htmlFor="earthquake"
                  className={`flex cursor-pointer flex-col items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                    disasterType === "earthquake" ? "border-primary bg-primary/10" : ""
                  }`}
                >
                  <RadioGroupItem value="earthquake" id="earthquake" className="sr-only" />
                  <img
                    src={disasterImages.earthquake || "/placeholder.svg"}
                    alt="Earthquake"
                    className="mb-2 h-10 w-10 rounded-md object-cover"
                  />
                  <span className="text-sm font-medium">Earthquake</span>
                </Label>
                <Label
                  htmlFor="fire"
                  className={`flex cursor-pointer flex-col items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                    disasterType === "fire" ? "border-primary bg-primary/10" : ""
                  }`}
                >
                  <RadioGroupItem value="fire" id="fire" className="sr-only" />
                  <img
                    src={disasterImages.fire || "/placeholder.svg"}
                    alt="Fire"
                    className="mb-2 h-10 w-10 rounded-md object-cover"
                  />
                  <span className="text-sm font-medium">Fire</span>
                </Label>
                <Label
                  htmlFor="other"
                  className={`flex cursor-pointer flex-col items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                    disasterType === "other" ? "border-primary bg-primary/10" : ""
                  }`}
                >
                  <RadioGroupItem value="other" id="other" className="sr-only" />
                  <img
                    src={disasterImages.other || "/placeholder.svg"}
                    alt="Other disaster"
                    className="mb-2 h-10 w-10 rounded-md object-cover"
                  />
                  <span className="text-sm font-medium">Other</span>
                </Label>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Affected Area Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="location"
                  placeholder="Enter location details"
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="animal-count">Estimated Number of Animals Affected</Label>
              <Input
                id="animal-count"
                type="number"
                placeholder="Enter approximate number"
                value={animalCount}
                onChange={(e) => setAnimalCount(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Situation Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the situation, types of animals affected, and their condition"
                className="min-h-[100px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Upload Photos/Videos (Optional)</Label>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="relative aspect-square overflow-hidden rounded-md border">
                  <img
                    src="/placeholder.svg?height=100&width=100&text=Sample+Disaster+Photo"
                    alt="Sample disaster photo"
                    className="h-full w-full object-cover opacity-50"
                  />
                  <label className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-1 bg-black/30 text-sm text-white hover:bg-black/40">
                    <Upload className="h-6 w-6" />
                    <span>Upload</span>
                    <input type="file" accept="image/*,video/*" className="hidden" />
                  </label>
                </div>
                <label className="flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-dashed text-sm text-muted-foreground hover:bg-muted/50">
                  <Plus className="h-6 w-6" />
                  <span>Add More</span>
                  <input type="file" accept="image/*,video/*" className="hidden" />
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-800"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Disaster Relief Request"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

