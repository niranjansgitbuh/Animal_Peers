"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AnimatedImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  width?: number
  height?: number
  effect?: "3d-tilt" | "3d-float" | "3d-flip" | "parallax"
  intensity?: "light" | "medium" | "strong"
}

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  effect = "3d-tilt",
  intensity = "medium",
  className,
  ...props
}: AnimatedImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Intensity multipliers
  const intensityMap = {
    light: 1,
    medium: 2,
    strong: 3,
  }

  const intensityFactor = intensityMap[intensity]

  // Handle mouse movement for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || effect !== "3d-tilt") return

    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate rotation based on mouse position relative to center
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10 * intensityFactor
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 10 * intensityFactor

    setRotation({ x: rotateX, y: rotateY })
  }

  // Handle parallax effect
  const handleParallaxMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || effect !== "parallax") return

    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate position offset based on mouse position
    const moveX = ((e.clientX - centerX) / (rect.width / 2)) * 15 * intensityFactor
    const moveY = ((e.clientY - centerY) / (rect.height / 2)) * 15 * intensityFactor

    setPosition({ x: moveX, y: moveY })
  }

  // Handle floating animation
  useEffect(() => {
    if (effect !== "3d-float") return

    let animationFrameId: number
    let angle = 0

    const animate = () => {
      // Create a gentle floating motion
      const y = Math.sin(angle) * 10 * intensityFactor
      const x = Math.cos(angle / 2) * 5 * intensityFactor

      setPosition({ x, y })
      angle += 0.02

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [effect, intensityFactor])

  // Get the appropriate style based on the selected effect
  const getEffectStyle = () => {
    switch (effect) {
      case "3d-tilt":
        return {
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`
            : "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
          transition: isHovered ? "transform 0.1s ease" : "transform 0.3s ease",
        }
      case "3d-float":
        return {
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.1s ease",
        }
      case "3d-flip":
        return {
          transform: isHovered ? "perspective(1000px) rotateY(180deg)" : "perspective(1000px) rotateY(0)",
          transition: "transform 0.6s ease",
        }
      case "parallax":
        return {
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.1s ease",
        }
      default:
        return {}
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-lg",
        {
          "cursor-pointer": effect === "3d-tilt" || effect === "3d-flip" || effect === "parallax",
        },
        className,
      )}
      onMouseMove={(e) => {
        if (effect === "3d-tilt") handleMouseMove(e)
        if (effect === "parallax") handleParallaxMove(e)
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setRotation({ x: 0, y: 0 })
        if (effect === "parallax") setPosition({ x: 0, y: 0 })
      }}
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "auto",
      }}
      {...props}
    >
      <div
        className={cn("h-full w-full backface-hidden", {
          "transition-opacity duration-300": !isLoaded,
          "opacity-0": !isLoaded,
          "opacity-100": isLoaded,
        })}
        style={getEffectStyle()}
      >
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={cn("h-full w-full object-cover", effect === "3d-flip" && isHovered && "opacity-0")}
          onLoad={() => setIsLoaded(true)}
        />

        {/* Back side for flip effect */}
        {effect === "3d-flip" && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-primary/10 p-4 text-center backface-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="font-medium">{alt}</p>
          </div>
        )}
      </div>

      {/* Shadow effect for 3D tilt */}
      {effect === "3d-tilt" && (
        <div
          className="absolute inset-0 rounded-lg bg-black/50 opacity-0 transition-opacity"
          style={{
            opacity: isHovered ? 0.2 : 0,
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        />
      )}
    </div>
  )
}

