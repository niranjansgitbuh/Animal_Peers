"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, MessageSquare, Clock, MapPin } from "lucide-react"

export function EmergencyHelpline() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false)

  // Sample data for emergency contacts
  const emergencyContacts = [
    {
      id: "contact-1",
      name: "Animal Rescue Hotline",
      phone: "+91 1800 123 4567",
      description: "National emergency helpline for animal rescue",
      hours: "24/7",
      responseTime: "Immediate",
      image: "/placeholder.svg?height=80&width=80&text=Animal+Rescue",
    },
    {
      id: "contact-2",
      name: "City Veterinary Hospital",
      phone: "+91 98765 43210",
      description: "Emergency veterinary services",
      hours: "24/7",
      responseTime: "15-30 minutes",
      image: "/placeholder.svg?height=80&width=80&text=Vet+Hospital",
    },
    {
      id: "contact-3",
      name: "Wildlife SOS",
      phone: "+91 98765 12345",
      description: "Specialized in wildlife rescue",
      hours: "8:00 AM - 8:00 PM",
      responseTime: "30-60 minutes",
      image: "/placeholder.svg?height=80&width=80&text=Wildlife+SOS",
    },
  ]

  // Sample data for regional helplines
  const regionalHelplines = [
    {
      region: "Delhi NCR",
      image: "/placeholder.svg?height=60&width=60&text=Delhi",
      contacts: [
        { name: "Delhi Animal Rescue", phone: "+91 98765 67890" },
        { name: "Friendicoes SECA", phone: "+91 98765 09876" },
      ],
    },
    {
      region: "Mumbai",
      image: "/placeholder.svg?height=60&width=60&text=Mumbai",
      contacts: [
        { name: "Mumbai Animal Rescue", phone: "+91 98765 54321" },
        { name: "The Welfare of Stray Dogs", phone: "+91 98765 12345" },
      ],
    },
    {
      region: "Bangalore",
      image: "/placeholder.svg?height=60&width=60&text=Bangalore",
      contacts: [
        { name: "CUPA Bangalore", phone: "+91 98765 23456" },
        { name: "Charlie's Animal Rescue Centre", phone: "+91 98765 34567" },
      ],
    },
    {
      region: "Chennai",
      image: "/placeholder.svg?height=60&width=60&text=Chennai",
      contacts: [
        { name: "Blue Cross of India", phone: "+91 98765 45678" },
        { name: "Chennai Animal Rescue", phone: "+91 98765 56789" },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="bg-red-50 dark:bg-red-950">
        <CardHeader>
          <CardTitle className="text-red-800 dark:text-red-300">Emergency Animal Helpline</CardTitle>
          <CardDescription className="text-red-700 dark:text-red-400">
            For immediate assistance with injured or distressed animals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-red-900">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-red-100 p-2 dark:bg-red-800">
                    <Phone className="h-6 w-6 text-red-600 dark:text-red-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-800 dark:text-red-300">Call Now</h3>
                    <p className="text-2xl font-bold text-red-600 dark:text-red-400">1800-123-4567</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button
                    className="flex-1 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800"
                    onClick={() => setIsCallModalOpen(true)}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Helpline
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Live Chat
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-red-900/50">
                <h3 className="mb-2 font-medium">When to call the emergency helpline:</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Animal hit by vehicle or severely injured</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Animal trapped or in immediate danger</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Animal showing signs of severe distress or pain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Animal with difficulty breathing or unconscious</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Poisoning or ingestion of toxic substances</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-red-900/50">
                <h3 className="mb-2 font-medium">What to do while waiting for help:</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="select-none">1.</span>
                    <span>Stay calm and approach the animal carefully</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">2.</span>
                    <span>Keep the animal warm and minimize movement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">3.</span>
                    <span>If safe, move the animal away from traffic or danger</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">4.</span>
                    <span>Do not give food or water to injured animals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">5.</span>
                    <span>For bleeding, apply gentle pressure with clean cloth</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-red-900/50">
                <h3 className="mb-2 font-medium">Response Information:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-red-600" />
                    <span>Average response time: 15-30 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-600" />
                    <span>Service available in major cities across India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="emergency">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="emergency">Emergency Contacts</TabsTrigger>
          <TabsTrigger value="regional">Regional Helplines</TabsTrigger>
        </TabsList>

        <TabsContent value="emergency" className="space-y-4">
          {emergencyContacts.map((contact) => (
            <Card key={contact.id}>
              <CardContent className="p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div className="flex items-center gap-4">
                    <img
                      src={contact.image || "/placeholder.svg"}
                      alt={contact.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-medium">{contact.name}</h3>
                      <p className="text-muted-foreground">{contact.description}</p>
                      <div className="mt-2 flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{contact.hours}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Response: {contact.responseTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800"
                    onClick={() => (window.location.href = `tel:${contact.phone}`)}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {contact.phone}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="regional" className="space-y-6">
          {regionalHelplines.map((region) => (
            <Card key={region.region}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img
                    src={region.image || "/placeholder.svg"}
                    alt={region.region}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <CardTitle>{region.region}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {region.contacts.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span>{contact.name}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => (window.location.href = `tel:${contact.phone}`)}
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        {contact.phone}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

