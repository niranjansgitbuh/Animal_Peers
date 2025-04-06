import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { CaseOverview } from "@/components/dashboard/case-overview"
import { RecentCases } from "@/components/dashboard/recent-cases"
import { CaseMap } from "@/components/dashboard/case-map"

export const metadata: Metadata = {
  title: "Dashboard - AnimalPeers",
  description: "Manage animal rescue cases and view statistics",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Manage animal rescue cases and view statistics" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CaseOverview title="Total Cases" value="128" description="All time" trend="+12% from last month" />
        <CaseOverview title="Active Cases" value="24" description="Awaiting action" trend="+3 new today" />
        <CaseOverview title="Rescued" value="96" description="Successfully rescued" trend="75% success rate" />
        <CaseOverview title="In Treatment" value="18" description="Currently under care" trend="8 critical" />
      </div>
      <div className="grid gap-4 md:grid-cols-7">
        <CaseMap className="col-span-full md:col-span-4" />
        <RecentCases className="col-span-full md:col-span-3" />
      </div>
    </DashboardShell>
  )
}

