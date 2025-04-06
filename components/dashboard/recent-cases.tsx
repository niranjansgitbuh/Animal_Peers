import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface RecentCasesProps {
  className?: string
}

export function RecentCases({ className }: RecentCasesProps) {
  // Sample data
  const cases = [
    {
      id: "CASE-1234",
      animalType: "Dog",
      condition: "Injured leg",
      location: "Koramangala, Bangalore",
      status: "new",
      reportedAt: "10 minutes ago",
    },
    {
      id: "CASE-1233",
      animalType: "Cat",
      condition: "Malnourished",
      location: "Indiranagar, Bangalore",
      status: "accepted",
      reportedAt: "1 hour ago",
    },
    {
      id: "CASE-1232",
      animalType: "Cow",
      condition: "Sick",
      location: "Jayanagar, Bangalore",
      status: "in_progress",
      reportedAt: "3 hours ago",
    },
    {
      id: "CASE-1231",
      animalType: "Bird",
      condition: "Broken wing",
      location: "HSR Layout, Bangalore",
      status: "completed",
      reportedAt: "1 day ago",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge variant="destructive">New</Badge>
      case "accepted":
        return <Badge variant="outline">Accepted</Badge>
      case "in_progress":
        return <Badge variant="secondary">In Progress</Badge>
      case "completed":
        return <Badge variant="default">Completed</Badge>
      default:
        return null
    }
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle>Recent Cases</CardTitle>
        <CardDescription>Latest animal rescue cases reported in your area</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {cases.map((case_) => (
            <div key={case_.id} className="flex items-center justify-between space-x-4">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {case_.animalType} - {case_.condition}
                </p>
                <p className="text-sm text-muted-foreground">{case_.location}</p>
                <div className="flex items-center gap-2 pt-1">
                  {getStatusBadge(case_.status)}
                  <span className="text-xs text-muted-foreground">{case_.reportedAt}</span>
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/dashboard/cases/${case_.id}`}>View</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/cases">View All Cases</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

