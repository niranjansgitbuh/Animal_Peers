"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, User, Clock, Camera, Upload } from "lucide-react"

interface CaseDetailsProps {
  id: string
}

export function CaseDetails({ id }: CaseDetailsProps) {
  const [status, setStatus] = useState("accepted")
  const [isUpdating, setIsUpdating] = useState(false)
  const [updateNote, setUpdateNote] = useState("")

  // This would be fetched from an API in a real application
  const caseData = {
    id,
    animalType: "Dog",
    breed: "Mixed breed",
    color: "Brown and white",
    condition: "Injured leg, appears to be in pain",
    features: "Medium-sized, has a blue collar",
    location: {
      address: "123 Main Street, Koramangala, Bangalore",
      lat: 12.9352,
      lng: 77.6245,
    },
    reportedBy: {
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
    },
    reportedAt: "2023-06-15T10:30:00Z",
    status: "accepted",
    updates: [
      {
        id: "update-1",
        status: "accepted",
        note: "Case accepted. Team dispatched for rescue.",
        timestamp: "2023-06-15T11:00:00Z",
        by: "Dr. Priya Patel",
      },
    ],
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  }

  const handleStatusUpdate = () => {
    setIsUpdating(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Status updated to:", status)
      console.log("Update note:", updateNote)
      setIsUpdating(false)
      setUpdateNote("")
    }, 2000)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge variant="destructive">New</Badge>
      case "accepted":
        return <Badge variant="outline">Accepted</Badge>
      case "in_progress":
        return <Badge variant="secondary">In Progress</Badge>
      case "rescued":
        return <Badge variant="default">Rescued</Badge>
      case "under_treatment":
        return <Badge className="bg-amber-500">Under Treatment</Badge>
      case "recovered":
        return <Badge className="bg-green-500">Recovered</Badge>
      case "released":
        return <Badge className="bg-blue-500">Released</Badge>
      default:
        return null
    }
  }

  return (
    <div className="grid gap-6">
      <Tabs defaultValue="details">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="updates">Updates</TabsTrigger>
          <TabsTrigger value="photos">Photos</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Animal Information</CardTitle>
                <CardDescription>Details about the reported animal</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Type</h4>
                    <p>{caseData.animalType}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Breed</h4>
                    <p>{caseData.breed}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Color</h4>
                  <p>{caseData.color}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Identifying Features</h4>
                  <p>{caseData.features}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Condition</h4>
                  <p>{caseData.condition}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
                <CardDescription>Where the animal was reported</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <p>{caseData.location.address}</p>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border">
                  {/* This would be replaced with an actual Google Map */}
                  <div className="flex h-full w-full items-center justify-center bg-muted">
                    <div className="text-center">
                      <MapPin className="mx-auto mb-2 h-8 w-8 text-primary" />
                      <p className="text-sm text-muted-foreground">Map showing the location of the animal</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Reporter Information</CardTitle>
                <CardDescription>Person who reported the case</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <p>{caseData.reportedBy.name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <p>{caseData.reportedBy.phone}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <p>Reported on {formatDate(caseData.reportedAt)}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Case Status</CardTitle>
                <CardDescription>Current status and updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <p className="font-medium">Current Status:</p>
                  {getStatusBadge(caseData.status)}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Update Status</Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="accepted">Accepted</SelectItem>
                      <SelectItem value="in_progress">In Progress</SelectItem>
                      <SelectItem value="rescued">Rescued</SelectItem>
                      <SelectItem value="under_treatment">Under Treatment</SelectItem>
                      <SelectItem value="recovered">Recovered</SelectItem>
                      <SelectItem value="released">Released</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="note">Update Note</Label>
                  <Textarea
                    id="note"
                    placeholder="Add details about the status update"
                    value={updateNote}
                    onChange={(e) => setUpdateNote(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleStatusUpdate} disabled={isUpdating} className="w-full">
                  {isUpdating ? "Updating..." : "Update Status"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="updates">
          <Card>
            <CardHeader>
              <CardTitle>Case Updates</CardTitle>
              <CardDescription>History of updates for this case</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {caseData.updates.map((update) => (
                  <div
                    key={update.id}
                    className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-border"
                  >
                    <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {getStatusBadge(update.status)}
                        <p className="text-sm text-muted-foreground">{formatDate(update.timestamp)}</p>
                      </div>
                      <p className="font-medium">{update.by}</p>
                      <p>{update.note}</p>
                    </div>
                  </div>
                ))}

                {/* Add update form */}
                <div className="space-y-4 rounded-lg border p-4">
                  <h3 className="font-medium">Add Update</h3>
                  <div className="space-y-2">
                    <Label htmlFor="update-note">Update Note</Label>
                    <Textarea
                      id="update-note"
                      placeholder="Add details about the case update"
                      value={updateNote}
                      onChange={(e) => setUpdateNote(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <Button onClick={handleStatusUpdate} disabled={isUpdating}>
                      {isUpdating ? "Adding..." : "Add Update"}
                    </Button>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon">
                        <Camera className="h-4 w-4" />
                      </Button>
                      <span className="text-sm text-muted-foreground">Add Photo</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="photos">
          <Card>
            <CardHeader>
              <CardTitle>Photos</CardTitle>
              <CardDescription>Photos of the animal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {caseData.images.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-md border">
                    <img
                      src={`/placeholder.svg?height=300&width=400&text=Animal+Photo+${index + 1}`}
                      alt={`Animal photo ${index + 1}`}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                ))}

                <label className="flex aspect-[4/3] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed text-sm text-muted-foreground hover:bg-muted/50">
                  <Upload className="h-8 w-8" />
                  <span>Upload New Photo</span>
                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

