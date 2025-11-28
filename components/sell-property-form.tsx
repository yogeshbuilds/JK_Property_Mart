"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Home } from "lucide-react"

const SELL_FORM_EVENT = "sell-property-dialog-change"

export function SellPropertyForm() {
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    propertytype: "",
    address: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Validate form
    if (!formData.name || !formData.mobile || !formData.propertytype || !formData.address) {
      alert("Please fill in all required fields.")
      return
    }
    
    setSubmitting(true)
    
    try {
      const response = await fetch("/api/sell-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        alert("Thank you! We'll contact you soon about your property.")
        // Reset form
        setFormData({ name: "", mobile: "", propertytype: "", address: "" })
      } else {
        alert(data.error || "Failed to submit form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to submit form. Please try again.")
    } finally {
      setSubmitting(false)
      setOpen(false)
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    const event = new CustomEvent(SELL_FORM_EVENT, { detail: { open } })
    window.dispatchEvent(event)
  }, [open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="mx-auto flex min-w-[200px] items-center justify-center gap-3 rounded-full bg-yellow-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-600 hover:shadow-xl"
        >
          <Home className="h-6 w-6" />
          Sell Your Property
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Sell Your Property
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Fill in your property details and we'll get back to you!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="sell-name">Name *</Label>
            <Input
              id="sell-name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sell-mobile">Mobile Number *</Label>
            <Input
              id="sell-mobile"
              type="tel"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="property-type">Property Type *</Label>
            <Select
              value={formData.propertytype}
              onValueChange={(value) =>
                setFormData({ ...formData, propertytype: value })
              }
            >
              <SelectTrigger id="property-type" className="w-full">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Commercial">Commercial Property</SelectItem>
                <SelectItem value="SEO">SEO</SelectItem>
                <SelectItem value="Plot">Plot</SelectItem>
                <SelectItem value="Flat">Flat</SelectItem>
                
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Property Address *</Label>
            <Input
              id="address"
              type="text"
              placeholder="Enter property address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

