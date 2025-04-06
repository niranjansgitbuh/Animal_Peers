"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Building, Phone, Clock, Star } from "lucide-react"

export function AIMatchingSystem() {
  const [location, setLocation] = useState("")
  const [animalType, setAnimalType] = useState("")
  const [condition, setCondition] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<any[] | null>(null)

  const handleSearch = () => {
    setIsSearching(true)

    // Simulate API call
    setTimeout(() => {
      setIsSearching(false)

      // Mock results
      setResults([
        {
          id: "ngo-1",
          name: "Animal Care Trust",
          type: "NGO",
          distance: "1.2 km",
          address: "123 Park Street, Koramangala, Bangalore",
          phone: "+91 98765 43210",
          availability: "Available Now",
          rating: 4.8,
          reviews: 124,
          specialties: ["Dogs", "Cats", "Birds"],
          responseTime: "~15 minutes",
          match: 98,
        },
        {
          id: "hospital-1",
          name: "City Veterinary Hospital",
          type: "Hospital",
          distance: "2.5 km",
          address: "456 Main Road, Indiranagar, Bangalore",
          phone: "+91 98765 12345",
          availability: "Available Now",
          rating: 4.6,
          reviews: 89,
          specialties: ["All Animals", "Surgery", "Emergency Care"],
          responseTime: "~20 minutes",
          match: 92,
        },
        {
          id: "ngo-2",
          name: "Paws & Claws Rescue",
          type: "NGO",
          distance: "3.8 km",
          address: "789 Lake View Road, HSR Layout, Bangalore",
          phone: "+91 98765 67890",
          availability: "Available in 1 hour",
          rating: 4.5,
          reviews: 76,
          specialties: ["Dogs", "Cats", "Large Animals"],
          responseTime: "~30 minutes",
          match: 85,
        },
      ])
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="location">Your Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="location"
                  placeholder="Enter your location"
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="animal-type">Animal Type</Label>
              <Select value={animalType} onValueChange={setAnimalType}>
                <SelectTrigger id="animal-type">
                  <SelectValue placeholder="Select animal type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dog">Dog</SelectItem>
                  <SelectItem value="cat">Cat</SelectItem>
                  <SelectItem value="bird">Bird</SelectItem>
                  <SelectItem value="cow">Cow</SelectItem>
                  <SelectItem value="buffalo">Buffalo</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="condition">Condition</Label>
              <Select value={condition} onValueChange={setCondition}>
                <SelectTrigger id="condition">
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="injured">Injured</SelectItem>
                  <SelectItem value="sick">Sick</SelectItem>
                  <SelectItem value="malnourished">Malnourished</SelectItem>
                  <SelectItem value="abandoned">Abandoned</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button className="w-full" onClick={handleSearch} disabled={isSearching || !location}>
                {isSearching ? "Searching..." : "Find Best Match"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {results && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Best Matches for Your Animal</h3>

          <div className="space-y-4">
            {results.map((result) => (
              <Card key={result.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/4">
                      <div className="absolute left-4 top-4 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                        {result.match}% Match
                      </div>
                      <img
                        src={`/placeholder.svg?height=200&width=200&text=${encodeURIComponent(result.name)}`}
                        alt={`${result.name} - ${result.type}`}
                        className="h-full w-full object-cover md:h-full"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <h4 className="text-xl font-medium">{result.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {result.type} • {result.distance}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          <span className="font-medium">{result.rating}</span>
                          <span className="text-sm text-muted-foreground">({result.reviews})</span>
                        </div>
                      </div>

                      <div className="mb-4 grid gap-2 text-sm md:grid-cols-2">
                        <div className="flex items-start gap-2">
                          <Building className="mt-0.5 h-4 w-4 text-muted-foreground" />
                          <span>{result.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>{result.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Response time: {result.responseTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              result.availability.includes("Now") ? "bg-green-500" : "bg-amber-500"
                            }`}
                          />
                          <span>{result.availability}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium">Specialties:</p>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {result.specialties.map((specialty: string, index: number) => (
                            <span key={index} className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto flex flex-wrap gap-2">
                        <Button>Contact Now</Button>
                        <Button variant="outline">View Details</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

