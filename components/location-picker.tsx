"use client"

import { useState } from "react"
import { MapPin, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Location {
  lat: number
  lng: number
  address: string
}

interface LocationPickerProps {
  value: Location
  onChange: (location: Location) => void
}

export function LocationPicker({ value, onChange }: LocationPickerProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // This is a placeholder for the actual Google Maps implementation
  // In a real application, you would use the Google Maps API
  const handleSearch = () => {
    // Simulate geocoding
    if (searchQuery) {
      // Generate random coordinates near India
      const lat = 20 + Math.random() * 10
      const lng = 75 + Math.random() * 10

      onChange({
        lat,
        lng,
        address: searchQuery,
      })
    }
  }

  const handleMapClick = () => {
    // In a real implementation, this would get coordinates from the map click
    // For now, we'll just generate random coordinates
    const lat = 20 + Math.random() * 10
    const lng = 75 + Math.random() * 10

    onChange({
      lat,
      lng,
      address: `Location at ${lat.toFixed(6)}, ${lng.toFixed(6)}`,
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for a location"
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleSearch())}
          />
        </div>
        <Button type="button" onClick={handleSearch}>
          Search
        </Button>
      </div>

      <div className="relative h-[300px] w-full rounded-md border bg-muted" onClick={handleMapClick}>
        {/* This would be replaced with an actual Google Map */}
        <div className="flex h-full items-center justify-center">
          <p className="text-center text-sm text-muted-foreground">
            {value.lat !== 0 && value.lng !== 0 ? (
              <>
                <MapPin className="mx-auto mb-2 h-8 w-8 text-primary" />
                Selected location: {value.address}
                <br />
                Coordinates: {value.lat.toFixed(6)}, {value.lng.toFixed(6)}
              </>
            ) : (
              <>
                <MapPin className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                Click on the map to select the animal's location
                <br />
                or search for an address above
              </>
            )}
          </p>
        </div>
      </div>

      {value.address && (
        <div className="rounded-md bg-muted p-3 text-sm">
          <p className="font-medium">Selected Location:</p>
          <p className="text-muted-foreground">{value.address}</p>
        </div>
      )}
    </div>
  )
}

