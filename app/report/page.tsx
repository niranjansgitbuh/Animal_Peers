import { ReportForm } from "@/components/report-form"

export default function ReportPage() {
  return (
    <div className="container mx-auto my-12 max-w-3xl px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Report an Animal in Need</h1>
        <p className="mt-4 text-muted-foreground">
          Fill out the form below with details about the animal. Your report will be sent to the nearest animal
          hospitals and NGOs.
        </p>
      </div>
      <ReportForm />
    </div>
  )
}

