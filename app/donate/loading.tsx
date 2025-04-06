export default function Loading() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <span className="ml-2">Loading donation options...</span>
      </div>
    </div>
  )
}

