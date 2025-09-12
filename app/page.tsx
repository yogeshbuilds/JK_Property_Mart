import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PropertyListings } from "@/components/property-listings"
import { BuildersSection } from "@/components/builders-section"
import { BlogsSection } from "@/components/blogs-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PropertyListings />
      <BuildersSection />
      <BlogsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
