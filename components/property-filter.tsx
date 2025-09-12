"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Home, Building2 } from "lucide-react"

interface PropertyFilterProps {
  onFilterChange: (filters: {
    type: string
    location: string
  }) => void
}

export function PropertyFilter({ onFilterChange }: PropertyFilterProps) {
  const [propertyType, setPropertyType] = useState("all")
  const [location, setLocation] = useState("all")

  const handleTypeChange = (type: string) => {
    setPropertyType(type)
    onFilterChange({ type, location })
  }

  const handleLocationChange = (loc: string) => {
    setLocation(loc)
    onFilterChange({ type: propertyType, location: loc })
  }

  return (
    <div className="bg-card rounded-lg shadow-lg p-4 md:p-6 mb-6 md:mb-8">
      <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Filter Properties</h3>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <Button
            variant={propertyType === "all" ? "default" : "outline"}
            onClick={() => handleTypeChange("all")}
            className="flex items-center justify-center gap-2 text-xs md:text-sm h-9 md:h-10"
          >
            All Properties
          </Button>
          <Button
            variant={propertyType === "residential" ? "default" : "outline"}
            onClick={() => handleTypeChange("residential")}
            className="flex items-center justify-center gap-2 text-xs md:text-sm h-9 md:h-10"
          >
            <Home className="h-3 w-3 md:h-4 md:w-4" />
            Residential
          </Button>
          <Button
            variant={propertyType === "commercial" ? "default" : "outline"}
            onClick={() => handleTypeChange("commercial")}
            className="flex items-center justify-center gap-2 text-xs md:text-sm h-9 md:h-10"
          >
            <Building2 className="h-3 w-3 md:h-4 md:w-4" />
            Commercial
          </Button>
        </div>

        <div className="w-full">
          <Select value={location} onValueChange={handleLocationChange}>
            <SelectTrigger className="h-9 md:h-10 text-xs md:text-sm">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Anywhere in Faridabad</SelectItem>
              <SelectItem value="sector-43">Sector 43</SelectItem>
              <SelectItem value="sector-78">Sector 78</SelectItem>
              <SelectItem value="sector-79">Sector 79</SelectItem>
              <SelectItem value="sector-82">Sector 82</SelectItem>
              <SelectItem value="sector-86">Sector 86</SelectItem>
              <SelectItem value="sector-98">Sector 98</SelectItem>
              <SelectItem value="sector-110">Sector 110</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
