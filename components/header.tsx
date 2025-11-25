"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Properties", href: "#properties" },
    { name: "Builders", href: "#builders" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="container mx-auto px-4">
            <div className="flex h-16 md:h-20 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                 <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center">
                   <Image src='/Logo.png' alt="Royal Green Property Logo" width={100} height={100} className="h-12 w-12 md:h-16 md:w-16 object-contain" />
                 </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg md:text-xl leading-none text-black">Royal Green Property</span>
                  <span className="text-xs text-black/80 hidden sm:block">Since 2014</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-black/90 hover:text-black transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Contact Info & Mobile Menu */}
              <div className="flex items-center space-x-2 md:space-x-4">
                <div className="hidden lg:flex items-center space-x-6 text-sm">
                  <a
                    href="tel:+918813887813"
                    className="flex items-center space-x-2 text-black/90 hover:text-black transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+91 88138 87813</span>
                  </a>
                  <a
                    href="mailto:propertyroyalgreen@gmail.com"
                    className="flex items-center space-x-2 text-black/90 hover:text-black transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>propertyroyalgreen@gmail.com</span>
                  </a>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon" className="h-10 w-10 text-black hover:bg-white/10">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                    <nav className="flex flex-col space-y-1 mt-8 px-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-lg font-medium transition-colors hover:text-accent py-3 px-4 rounded-md hover:bg-accent/10"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                      <div className="pt-6 mt-6 border-t">
                        <div className="flex flex-col space-y-4 px-4">
                          <a href="tel:+918813887813" className="flex items-center space-x-3 text-sm py-2">
                            <Phone className="h-4 w-4" />
                            <span>+91 88138 87813</span>
                          </a>
                          <a href="mailto:propertyroyalgreen@gmail.com" className="flex items-center space-x-3 text-sm py-2">
                            <Mail className="h-4 w-4" />
                            <span>propertyroyalgreen@gmail.com</span>
                          </a>
                          <div className="text-xs text-muted-foreground mt-4 py-2 leading-relaxed">
                            Flat 908, Tower B, Discovery Park Sector 80 Faridabad 121004
                          </div>
                        </div>
                      </div>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>)
}
