import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {

  return (
    <section id="contact" className="py-6 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Get in touch with our property experts for personalized assistance
          </p>
        </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Faridabad Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">JK Property Mart, A-007A, Puri High Street, Sector 81, Faridabad</p>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>+91 98711 75107</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>llcvikash7@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose JK Property Mart?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    20+ years of experience in Faridabad real estate
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Trusted partnerships with leading builders
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Expert guidance for residential and commercial properties
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Transparent dealings and competitive pricing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    End-to-end property solutions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
    </section>
  )
}
