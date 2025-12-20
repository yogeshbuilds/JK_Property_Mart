"use client"

import { Phone, MessageCircle } from "lucide-react"

export function CTASection() {
  const phoneNumber = "919871175107"
  
  const handleCallClick = () => {
    const callUrl = `tel:${phoneNumber}`
    window.location.href = callUrl
  }

  const handleWhatsAppClick = () => {
    const message =
      "Hi JK Property Mart! I'm interested in your property services in Faridabad. Can you help me find the right property?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="bg-gradient-to-r from-slate-700 to-slate-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Find Your Dream Property?
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            Don't wait! Our expert team is here to help you discover the perfect home or investment opportunity in Faridabad. 
            <span className="block mt-2 font-semibold text-yellow-300">
              Call or WhatsApp us now for instant assistance!
            </span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            {/* Call Button */}
            <button
              onClick={handleCallClick}
              className="bg-white text-slate-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 min-w-[200px]"
            >
              <Phone className="h-6 w-6" />
              Call Now
            </button>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 min-w-[200px]"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp Us
            </button>
          </div>

          {/* Additional Info */}
          <div className="text-sm opacity-80 space-y-1">
            <p>📞 <strong>+91 98711 75107</strong> | Available 9 AM - 8 PM</p>
            <p>🏠 20+ Years Experience | 1000+ Happy Customers</p>
            <p>⚡ Quick Response | Free Consultation</p>
          </div>
        </div>
      </div>
    </section>
  )
}
