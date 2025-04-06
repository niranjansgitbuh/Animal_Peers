"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IndianRupee } from "lucide-react"

export function DonationOptions() {
  const [donationAmount, setDonationAmount] = useState("500")
  const [customAmount, setCustomAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleDonate = () => {
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      alert("Thank you for your donation!")
    }, 2000)
  }

  return (
    <Card className="mx-auto max-w-3xl">
      <CardHeader>
        <CardTitle>Make a Donation</CardTitle>
        <CardDescription>Choose an amount and payment method to support our animal rescue efforts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Select Amount</Label>
          <RadioGroup value={donationAmount} onValueChange={setDonationAmount} className="grid grid-cols-3 gap-4">
            <Label
              htmlFor="amount-100"
              className={`flex cursor-pointer items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                donationAmount === "100" ? "border-primary bg-primary/10" : ""
              }`}
            >
              <RadioGroupItem value="100" id="amount-100" className="sr-only" />
              <span className="text-lg font-medium">₹100</span>
            </Label>
            <Label
              htmlFor="amount-500"
              className={`flex cursor-pointer items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                donationAmount === "500" ? "border-primary bg-primary/10" : ""
              }`}
            >
              <RadioGroupItem value="500" id="amount-500" className="sr-only" />
              <span className="text-lg font-medium">₹500</span>
            </Label>
            <Label
              htmlFor="amount-1000"
              className={`flex cursor-pointer items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                donationAmount === "1000" ? "border-primary bg-primary/10" : ""
              }`}
            >
              <RadioGroupItem value="1000" id="amount-1000" className="sr-only" />
              <span className="text-lg font-medium">₹1000</span>
            </Label>
            <Label
              htmlFor="amount-2000"
              className={`flex cursor-pointer items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                donationAmount === "2000" ? "border-primary bg-primary/10" : ""
              }`}
            >
              <RadioGroupItem value="2000" id="amount-2000" className="sr-only" />
              <span className="text-lg font-medium">₹2000</span>
            </Label>
            <Label
              htmlFor="amount-5000"
              className={`flex cursor-pointer items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                donationAmount === "5000" ? "border-primary bg-primary/10" : ""
              }`}
            >
              <RadioGroupItem value="5000" id="amount-5000" className="sr-only" />
              <span className="text-lg font-medium">₹5000</span>
            </Label>
            <Label
              htmlFor="amount-custom"
              className={`flex cursor-pointer items-center justify-center rounded-md border p-4 text-center hover:bg-muted ${
                donationAmount === "custom" ? "border-primary bg-primary/10" : ""
              }`}
            >
              <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
              <span className="text-lg font-medium">Custom</span>
            </Label>
          </RadioGroup>

          {donationAmount === "custom" && (
            <div className="mt-4">
              <Label htmlFor="custom-amount">Enter Amount (₹)</Label>
              <div className="relative mt-1">
                <IndianRupee className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="Enter amount"
                  className="pl-10"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        <Tabs defaultValue="card">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="card">Credit/Debit Card</TabsTrigger>
            <TabsTrigger value="upi">UPI</TabsTrigger>
            <TabsTrigger value="netbanking">Net Banking</TabsTrigger>
          </TabsList>

          <TabsContent value="card" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Name on Card</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="upi" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="upi-id">UPI ID</Label>
                <Input id="upi-id" placeholder="yourname@upi" />
              </div>
              <div className="flex items-center justify-center gap-4">
                <img src="/placeholder.svg?height=40&width=40&text=GPay" alt="Google Pay" className="h-10 w-10" />
                <img src="/placeholder.svg?height=40&width=40&text=PhonePe" alt="PhonePe" className="h-10 w-10" />
                <img src="/placeholder.svg?height=40&width=40&text=Paytm" alt="Paytm" className="h-10 w-10" />
                <img src="/placeholder.svg?height=40&width=40&text=BHIM" alt="BHIM" className="h-10 w-10" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="netbanking" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Select Bank</Label>
                <RadioGroup defaultValue="sbi">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <Label
                      htmlFor="sbi"
                      className="flex cursor-pointer flex-col items-center justify-between rounded-md border p-4 hover:bg-muted"
                    >
                      <RadioGroupItem value="sbi" id="sbi" className="sr-only" />
                      <img src="/placeholder.svg?height=40&width=40&text=SBI" alt="SBI" className="mb-3 h-10 w-10" />
                      <span className="text-xs">SBI</span>
                    </Label>
                    <Label
                      htmlFor="hdfc"
                      className="flex cursor-pointer flex-col items-center justify-between rounded-md border p-4 hover:bg-muted"
                    >
                      <RadioGroupItem value="hdfc" id="hdfc" className="sr-only" />
                      <img src="/placeholder.svg?height=40&width=40&text=HDFC" alt="HDFC" className="mb-3 h-10 w-10" />
                      <span className="text-xs">HDFC</span>
                    </Label>
                    <Label
                      htmlFor="icici"
                      className="flex cursor-pointer flex-col items-center justify-between rounded-md border p-4 hover:bg-muted"
                    >
                      <RadioGroupItem value="icici" id="icici" className="sr-only" />
                      <img
                        src="/placeholder.svg?height=40&width=40&text=ICICI"
                        alt="ICICI"
                        className="mb-3 h-10 w-10"
                      />
                      <span className="text-xs">ICICI</span>
                    </Label>
                    <Label
                      htmlFor="axis"
                      className="flex cursor-pointer flex-col items-center justify-between rounded-md border p-4 hover:bg-muted"
                    >
                      <RadioGroupItem value="axis" id="axis" className="sr-only" />
                      <img src="/placeholder.svg?height=40&width=40&text=Axis" alt="Axis" className="mb-3 h-10 w-10" />
                      <span className="text-xs">Axis</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          size="lg"
          onClick={handleDonate}
          disabled={isProcessing || (donationAmount === "custom" && !customAmount)}
        >
          {isProcessing ? "Processing..." : `Donate ₹${donationAmount === "custom" ? customAmount : donationAmount}`}
        </Button>
      </CardFooter>
    </Card>
  )
}

