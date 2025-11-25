"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import buildersData from "@/data/builders.json"

export function BuildersSection() {
  return (
    <section id="builders" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Builder Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with Faridabad's most trusted and established builders to bring you quality projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {buildersData.builders.map((builder) => (
            <Card key={builder.id} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src={builder.logo || "/placeholder.svg"}
                    alt={`${builder.name} logo`}
                    width={120}
                    height={80}
                    className="mx-auto h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{builder.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{builder.description}</p>
                <div className="flex justify-center gap-2 mb-3">
                  <Badge variant="outline">Est. {builder.established}</Badge>
                  <Badge variant="outline">{builder.projects} Projects</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{builder.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Info */}
        <div className="mt-16 bg-card rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">About Royal Green Property</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Year of Foundation</h4>
              <p className="text-muted-foreground">2014</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Experience in Real Estate</h4>
              <p className="text-muted-foreground">20 Years</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Core Strength</h4>
              <p className="text-muted-foreground">
                Residential Plots & Apartments, Commercial Built-up, Land deals/parcels
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
