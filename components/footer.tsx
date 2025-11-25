import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
             <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center">
              <Image src='/Logo.png' alt="Royal Green Property Logo" width={100} height={100} className="h-12 w-12 md:h-16 md:w-16 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">Royal Green Property</span>
                <span className="text-xs opacity-80">Since 2014</span>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Your trusted partner in Faridabad real estate with 20+ years of experience in residential and commercial
              properties.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Twitter className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Instagram className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Linkedin className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="opacity-80 hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#properties" className="opacity-80 hover:opacity-100">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="#builders" className="opacity-80 hover:opacity-100">
                  Builders
                </Link>
              </li>
              <li>
                <Link href="#about" className="opacity-80 hover:opacity-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="opacity-80 hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-80">Residential Properties</li>
              <li className="opacity-80">Commercial Properties</li>
              <li className="opacity-80">Property Investment</li>
              <li className="opacity-80">Real Estate Consultation</li>
              <li className="opacity-80">Property Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 opacity-80" />
                <span className="opacity-80">Flat 908, Tower B, Discovery Park Sector 80 Faridabad 121004</span>
              </div>
              <a
                href="tel:+918813887813"
                className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                <span>+91 88138 87813</span>
              </a>
              <a
                href="mailto:propertyroyalgreen@gmail.com"
                className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                <span>propertyroyalgreen@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Royal Green Property. All rights reserved. | Privacy Policy | Terms of Service</p>
          <p className="mt-2">
            Developed and maintained by{" "}
            <a
              href="https://www.linkedin.com/in/yogeshbuilds/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Yogesh
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
