import type { Metadata } from "next"
import { AIImageAnalysis } from "@/components/ai/image-analysis"
import { AIMatchingSystem } from "@/components/ai/matching-system"
import { AIFirstAidChatbot } from "@/components/ai/first-aid-chatbot"
import { Brain, Search, MessageSquare } from "lucide-react"
import { AnimatedImage } from "@/components/ui/animated-image"

export const metadata: Metadata = {
  title: "AI Tools - AnimalPeers",
  description: "AI-powered tools to help with animal rescue and care",
}

export default function AIToolsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">AI-Powered Tools</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Advanced technology to help identify injuries, find the right NGO, and provide immediate guidance
        </p>
      </div>

      <div className="grid gap-12">
        <section>
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">AI Image Analysis</h2>
            <AnimatedImage
              src="/placeholder.svg?height=100&width=200&text=AI+Image+Analysis"
              alt="AI analyzing animal images"
              effect="parallax"
              className="ml-auto h-16 rounded-md"
            />
          </div>
          <AIImageAnalysis />
        </section>

        <section>
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Smart NGO Matching</h2>
            <AnimatedImage
              src="/placeholder.svg?height=100&width=200&text=NGO+Matching"
              alt="AI matching system for NGOs"
              effect="3d-float"
              className="ml-auto h-16 rounded-md"
            />
          </div>
          <AIMatchingSystem />
        </section>

        <section>
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">First Aid Assistant</h2>
            <AnimatedImage
              src="/placeholder.svg?height=100&width=200&text=First+Aid+Chatbot"
              alt="AI first aid chatbot"
              effect="3d-tilt"
              className="ml-auto h-16 rounded-md"
            />
          </div>
          <AIFirstAidChatbot />
        </section>
      </div>
    </div>
  )
}

