import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp, ArrowDown, Activity, Clock, CheckCircle, Stethoscope } from "lucide-react"

interface CaseOverviewProps {
  title: string
  value: string
  description: string
  trend?: string
  className?: string
}

export function CaseOverview({ title, value, description, trend, className }: CaseOverviewProps) {
  // Determine which icon to use based on the title
  const getIcon = () => {
    switch (title) {
      case "Total Cases":
        return <Activity className="h-8 w-8 text-primary/70" />
      case "Active Cases":
        return <Clock className="h-8 w-8 text-amber-500" />
      case "Rescued":
        return <CheckCircle className="h-8 w-8 text-green-500" />
      case "In Treatment":
        return <Stethoscope className="h-8 w-8 text-blue-500" />
      default:
        return <Activity className="h-8 w-8 text-primary/70" />
    }
  }

  // Determine if trend is positive or negative
  const isTrendPositive = trend?.includes("+") || trend?.includes("success")

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">{description}</p>
            {trend && (
              <p className="mt-2 flex items-center text-xs font-medium">
                {isTrendPositive ? (
                  <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                )}
                <span className={isTrendPositive ? "text-green-500" : "text-red-500"}>{trend}</span>
              </p>
            )}
          </div>
          <div className="rounded-full bg-muted p-2">{getIcon()}</div>
        </div>
      </CardContent>
    </Card>
  )
}

