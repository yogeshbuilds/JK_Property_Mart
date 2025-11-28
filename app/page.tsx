import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PropertyListings } from "@/components/property-listings"
import { BuildersSection } from "@/components/builders-section"
import { BlogsSection } from "@/components/blogs-section"
import { ContactSection } from "@/components/contact-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { LookingForPropertyForm } from "@/components/looking-for-property-form"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PropertyListings />
      <BuildersSection />
      <BlogsSection />
      <ContactSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
      <LookingForPropertyForm />
    </main>
  )
}
