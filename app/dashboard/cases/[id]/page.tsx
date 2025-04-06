import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { CaseDetails } from "@/components/dashboard/case-details"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Case Details - AnimalPeers",
  description: "View and manage animal rescue case details",
}

export default function CaseDetailsPage({ params }: { params: { id: string } }) {
  return (
    <DashboardShell>
      <DashboardHeader heading={`Case ${params.id}`} text="View and manage animal rescue case details">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/cases">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cases
          </Link>
        </Button>
      </DashboardHeader>
      <CaseDetails id={params.id} />
    </DashboardShell>
  )
}

