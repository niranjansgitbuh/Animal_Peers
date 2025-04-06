"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Camera, AlertCircle, CheckCircle2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function AIImageAnalysis() {
  const [image, setImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const [results, setResults] = useState<any>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onload = (event) => {
        if (event.target) {
          setImage(event.target.result as string)
          setAnalysisComplete(false)
          setResults(null)
        }
      }

      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setAnalysisProgress(0)

    // Simulate analysis progress
    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 300)

    // Simulate analysis completion
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisComplete(true)

      // Mock results
      setResults({
        animalType: "Dog",
        breed: "Mixed breed",
        conditions: [
          { name: "Leg injury", confidence: 0.92, severity: "High" },
          { name: "Dehydration", confidence: 0.78, severity: "Medium" },
          { name: "Malnourishment", confidence: 0.85, severity: "Medium" },
        ],
        recommendations: [
          "Immediate veterinary care needed for the leg injury",
          "Provide clean water to address dehydration",
          "Keep the animal calm and minimize movement",
          "Contact the nearest animal hospital for proper treatment",
        ],
      })
    }, 3000)
  }

  const handleReset = () => {
    setImage(null)
    setAnalysisComplete(false)
    setResults(null)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Upload Animal Image</h3>
            <p className="text-sm text-muted-foreground">
              Upload a clear photo of the injured or sick animal. Our AI will analyze the image to identify potential
              injuries or health issues.
            </p>

            {!image ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-12">
                <div className="rounded-full bg-primary/10 p-4">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">Drag and drop an image or click to browse</p>
                  <p className="text-xs text-muted-foreground">Supports JPG, PNG, HEIC (max 10MB)</p>
                </div>
                <Button variant="outline" className="mt-2">
                  <label className="flex cursor-pointer items-center gap-2">
                    <Camera className="h-4 w-4" />
                    <span>Select Image</span>
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                  </label>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border">
                  <img src={image || "/placeholder.svg"} alt="Uploaded animal" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button onClick={handleAnalyze} disabled={isAnalyzing}>
                    {isAnalyzing ? "Analyzing..." : "Analyze Image"}
                  </Button>
                  <Button variant="outline" onClick={handleReset}>
                    Upload Different Image
                  </Button>
                </div>

                {isAnalyzing && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Analyzing image...</span>
                      <span>{analysisProgress}%</span>
                    </div>
                    <Progress value={analysisProgress} />
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Analysis Results</h3>

            {!image ? (
              <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-12 text-center">
                <AlertCircle className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Upload an image to see analysis results</p>
              </div>
            ) : !analysisComplete ? (
              <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-12 text-center">
                <AlertCircle className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  {isAnalyzing ? "Analyzing image..." : 'Click "Analyze Image" to start analysis'}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <p className="font-medium text-green-800 dark:text-green-300">Analysis Complete</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Animal Type</h4>
                    <p className="text-lg font-medium">{results.animalType}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Detected Conditions</h4>
                    <ul className="mt-2 space-y-2">
                      {results.conditions.map((condition: any, index: number) => (
                        <li key={index} className="rounded-md border p-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{condition.name}</span>
                            <span
                              className={`text-xs ${
                                condition.severity === "High"
                                  ? "text-red-500"
                                  : condition.severity === "Medium"
                                    ? "text-amber-500"
                                    : "text-green-500"
                              }`}
                            >
                              {condition.confidence * 100}% confidence
                            </span>
                          </div>
                          <div className="mt-1">
                            <Progress
                              value={condition.confidence * 100}
                              className={`h-1 ${
                                condition.severity === "High"
                                  ? "bg-red-100 [&>div]:bg-red-500"
                                  : condition.severity === "Medium"
                                    ? "bg-amber-100 [&>div]:bg-amber-500"
                                    : "bg-green-100 [&>div]:bg-green-500"
                              }`}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Recommendations</h4>
                    <ul className="mt-2 space-y-1 text-sm">
                      {results.recommendations.map((recommendation: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="select-none">•</span>
                          <span>{recommendation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

