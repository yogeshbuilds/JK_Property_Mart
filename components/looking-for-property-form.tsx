"use client"

import { useState, useEffect } from "react"
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
import { Search } from "lucide-react"

interface LookingForPropertyFormProps {
  showTrigger?: boolean
  autoOpen?: boolean
  autoOpenDelayMs?: number
}

const SELL_FORM_EVENT = "sell-property-dialog-change"

export function LookingForPropertyForm({
  showTrigger = false,
  autoOpen = true,
  autoOpenDelayMs = 2500,
}: LookingForPropertyFormProps) {
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [sellFormOpen, setSellFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    lookingfor: "",
    budget: "",
  })

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleSellFormChange = (event: Event) => {
      const detail = (event as CustomEvent<{ open: boolean }>).detail
      setSellFormOpen(Boolean(detail?.open))
    }

    window.addEventListener(SELL_FORM_EVENT, handleSellFormChange as EventListener)
    return () => window.removeEventListener(SELL_FORM_EVENT, handleSellFormChange as EventListener)
  }, [])

  useEffect(() => {
    if (!autoOpen || sellFormOpen) return

    // Auto-open after the configured delay (default: 3.5 seconds)
    const timer = setTimeout(() => setOpen(true), autoOpenDelayMs)

    return () => clearTimeout(timer)
  }, [autoOpen, autoOpenDelayMs, sellFormOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.lookingfor || !formData.budget) {
      alert("Please fill in all required fields.")
      return
    }
    
    setSubmitting(true)
    
    try {
      const response = await fetch("/api/buy-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        alert("Thank you! We'll contact you soon.")
        // Reset form
        setFormData({ name: "", phone: "", lookingfor: "", budget: "" })
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {showTrigger && (
        <DialogTrigger asChild>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 min-w-[200px] justify-center"
          >
            <Search className="h-6 w-6" />
            Find Property
          </button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Looking for an Affordable Property?
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Fill in your details and we'll help you find the perfect property!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
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
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lookingfor">Looking For *</Label>
            <Select
              value={formData.lookingfor}
              onValueChange={(value) =>
                setFormData({ ...formData, lookingfor: value })
              }
            >
              <SelectTrigger id="lookingfor" className="w-full">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="SEO">SEO</SelectItem>
                <SelectItem value="plots">Plots</SelectItem>
                <SelectItem value="flats">Flats</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget">Budget *</Label>
            <Select
              value={formData.budget}
              onValueChange={(value) => setFormData({ ...formData, budget: value })}
            >
              <SelectTrigger id="budget" className="w-full">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="20-lakhs-to-50-lakhs">20 lacs to 50 lacs</SelectItem>
                <SelectItem value="50-lakhs-to-2-crore">50 lacs to 2 crore</SelectItem>
                <SelectItem value="2-crore-to-5-crore">2 - 5 crore</SelectItem>
                <SelectItem value="5-crore-plus">5 crore +</SelectItem>
              </SelectContent>
            </Select>
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

