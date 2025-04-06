"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { Send, Bot, User, Info } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export function AIFirstAidChatbot() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your Animal First Aid Assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("dog") && (input.includes("hit") || input.includes("accident") || input.includes("car"))) {
      return `
        If a dog has been hit by a car:
        
        1. Approach the dog carefully as it may be in pain and scared.
        2. If possible, gently place it on a flat, firm surface like a board or blanket.
        3. Keep the dog warm and minimize movement.
        4. Do not give food or water.
        5. Contact the nearest veterinarian immediately.
        
        This is an emergency situation that requires professional medical attention as soon as possible.
      `
    } else if (input.includes("cat") && (input.includes("not eating") || input.includes("won't eat"))) {
      return `
        If a cat is not eating:
        
        1. Check for other symptoms like lethargy, vomiting, or diarrhea.
        2. Make sure fresh water is available.
        3. Try offering wet food with a strong smell.
        4. If the cat hasn't eaten for more than 24 hours, this could indicate a serious problem.
        
        A cat not eating for more than a day should be seen by a veterinarian as soon as possible.
      `
    } else if (
      (input.includes("dog") || input.includes("cat") || input.includes("animal")) &&
      input.includes("bleeding")
    ) {
      return `
        For bleeding:
        
        1. Apply direct pressure with a clean cloth or gauze.
        2. If blood soaks through, add another layer without removing the first.
        3. For limb wounds, elevate the limb if possible.
        4. Secure the bandage with tape or a light wrap.
        5. Seek veterinary care immediately.
        
        Significant bleeding is an emergency and requires professional care.
      `
    } else if (input.includes("dehydration") || (input.includes("water") && input.includes("drink"))) {
      return `
        Signs of dehydration include:
        
        1. Dry gums and nose
        2. Sunken eyes
        3. Skin that doesn't spring back when pinched
        4. Lethargy
        
        For mild dehydration:
        - Offer small amounts of water frequently
        - For severe cases, do not force water and seek veterinary care immediately
        
        Dehydration can be life-threatening, especially in small animals.
      `
    } else if (input.includes("fracture") || input.includes("broken") || input.includes("bone")) {
      return `
        If you suspect a fracture:
        
        1. Minimize movement of the animal
        2. Do not attempt to set the bone yourself
        3. If you need to move the animal, support the body including the area above and below the suspected fracture
        4. Use a makeshift stretcher (board, blanket, etc.) if available
        5. Seek veterinary care immediately
        
        Fractures are painful and require professional treatment.
      `
    } else {
      return `
        I'm here to help with animal first aid questions. Please provide more details about the animal's condition, such as:
        
        - What type of animal needs help?
        - What symptoms are you observing?
        - Is there any visible injury?
        - How long has the animal been in this condition?
        
        Remember, while I can provide basic first aid guidance, serious conditions require immediate veterinary attention.
      `
    }
  }

  return (
    <Card className="mx-auto max-w-3xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          First Aid Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border bg-muted/50 p-4">
          <div className="flex items-start gap-2 rounded-lg bg-primary/10 p-3 text-sm">
            <Info className="mt-0.5 h-4 w-4 text-primary" />
            <div>
              <p className="font-medium">Important Note</p>
              <p>
                This chatbot provides basic first aid guidance only. For emergencies, contact a veterinarian
                immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 h-[400px] overflow-y-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex max-w-[80%] items-start gap-3 rounded-lg p-3 ${
                  message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                {message.sender === "bot" && (
                  <Avatar className="h-8 w-8 bg-primary/10">
                    <Bot className="h-4 w-4 text-primary" />
                  </Avatar>
                )}
                <div className="space-y-1">
                  <div className="whitespace-pre-line text-sm">{message.content}</div>
                  <div className="text-right text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
                {message.sender === "user" && (
                  <Avatar className="h-8 w-8 bg-primary/50">
                    <User className="h-4 w-4 text-primary-foreground" />
                  </Avatar>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="mb-4 flex justify-start">
              <div className="flex max-w-[80%] items-start gap-3 rounded-lg bg-muted p-3">
                <Avatar className="h-8 w-8 bg-primary/10">
                  <Bot className="h-4 w-4 text-primary" />
                </Avatar>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary"></div>
                  <div
                    className="h-2 w-2 animate-bounce rounded-full bg-primary"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="h-2 w-2 animate-bounce rounded-full bg-primary"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter>
        <form
          className="flex w-full items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            handleSendMessage()
          }}
        >
          <Input
            placeholder="Ask about animal first aid..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
          />
          <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

