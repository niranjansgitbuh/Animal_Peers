import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

interface CaseMapProps {
  className?: string
}

export function CaseMap({ className }: CaseMapProps) {
  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle>Case Map</CardTitle>
        <CardDescription>Geographic distribution of active animal rescue cases</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border">
          {/* This would be replaced with an actual Google Map */}
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <div className="text-center">
              <MapPin className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="text-sm text-muted-foreground">Map showing active animal rescue cases in your area</p>
            </div>
          </div>

          {/* Sample markers that would be on the map */}
          <div className="absolute left-[20%] top-[30%] h-4 w-4 rounded-full bg-red-500 ring-4 ring-red-500/20"></div>
          <div className="absolute left-[40%] top-[50%] h-4 w-4 rounded-full bg-red-500 ring-4 ring-red-500/20"></div>
          <div className="absolute left-[70%] top-[40%] h-4 w-4 rounded-full bg-amber-500 ring-4 ring-amber-500/20"></div>
          <div className="absolute left-[60%] top-[20%] h-4 w-4 rounded-full bg-green-500 ring-4 ring-green-500/20"></div>
          <div className="absolute left-[30%] top-[60%] h-4 w-4 rounded-full bg-amber-500 ring-4 ring-amber-500/20"></div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <span className="text-xs">Critical</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-amber-500"></div>
            <span className="text-xs">Urgent</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-xs">Stable</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

