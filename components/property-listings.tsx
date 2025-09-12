"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { PropertyFilter } from "@/components/property-filter"
import propertiesData from "@/data/properties.json"

export function PropertyListings() {
  const [filters, setFilters] = useState({ type: "all", location: "all" })
  const [showAll, setShowAll] = useState(false)

  // Flatten all properties from all builders
  const allProperties = [
    ...propertiesData.omaxe,
    ...propertiesData.bptp,
    ...propertiesData.capital,
    ...propertiesData.mansha,
  ]

  const filteredProperties = allProperties.filter((property) => {
    const typeMatch = filters.type === "all" || property.type.toLowerCase().includes(filters.type.toLowerCase())

    const locationMatch =
      filters.location === "all" ||
      property.location.toLowerCase().includes(filters.location.replace("sector-", "sector "))

    return typeMatch && locationMatch
  })

  const displayedProperties = showAll ? filteredProperties : filteredProperties.slice(0, 6)
  const hasMore = filteredProperties.length > 6

  return (
    <section id="properties" className="py-6 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Latest Properties</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover premium residential and commercial properties from our trusted builder partners
          </p>
        </div>

        <PropertyFilter onFilterChange={setFilters} />

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayedProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  width={400}
                  height={250}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <Badge
                  className="absolute top-2 md:top-4 left-2 md:left-4 text-xs"
                  variant={property.status === "Ready to Move" ? "default" : "secondary"}
                >
                  {property.status}
                </Badge>
              </div>

              <CardHeader className="pb-3 p-4">
                <h3 className="font-semibold text-base md:text-lg line-clamp-1">{property.name}</h3>
                <div className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  {property.location}
                </div>
              </CardHeader>

              <CardContent className="pb-4 p-4 pt-0">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {property.type}
                  </Badge>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-2">{property.description}</p>
                <div className="text-lg md:text-xl font-bold text-accent">{property.priceRange}</div>
                <div className="mt-2 space-y-1">
                  {property.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="text-xs text-muted-foreground">
                      • {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {hasMore && !showAll && (
          <div className="text-center mt-8">
            <Button className="cursor-pointer" onClick={() => setShowAll(true)} variant="outline" size="lg">
               Show More
            </Button>
          </div>
        )}

        {filteredProperties.length === 0 && (
          <div className="text-center py-6">
            <p className="text-muted-foreground">No properties found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
