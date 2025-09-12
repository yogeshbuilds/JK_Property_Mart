"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react"

const allBlogs = [
  {
    id: 1,
    title: "Faridabad: The IT Hub of NCR",
    excerpt:
      "Discover how Faridabad has emerged as a major IT destination in the National Capital Region with world-class infrastructure and connectivity.",
    image: "/faridabad-city-skyline-with-modern-buildings-and-g.jpg",
    category: "City Development",
    date: "Dec 20, 2024",
    readTime: "6 min read",
    content: "Faridabad has transformed into one of the most promising IT hubs in the NCR region...",
  },
  {
    id: 2,
    title: "Top Investment Sectors in Faridabad",
    excerpt:
      "Explore the most lucrative sectors in Faridabad for property investment with high growth potential and excellent returns.",
    image: "/modern-residential-complex-in-faridabad.jpg",
    category: "Investment",
    date: "Dec 18, 2024",
    readTime: "8 min read",
    content: "Sector 81, 82, and 85 have emerged as the top investment destinations...",
  },
  {
    id: 3,
    title: "Growth of Modern Faridabad",
    excerpt:
      "Learn about the rapid development and modernization of Faridabad, making it one of Haryana's most progressive cities.",
    image: "/commercial-building-office-complex.jpg",
    category: "Development",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    content: "The transformation of Faridabad from an industrial town to a modern city...",
  },
  {
    id: 4,
    title: "New Sectors Development in Faridabad",
    excerpt:
      "Comprehensive overview of newly developed sectors 92 and 93, offering premium residential and commercial opportunities.",
    image: "/property-documents-legal-papers.jpg",
    category: "New Projects",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    content: "Sectors 92 and 93 represent the future of Faridabad's urban planning...",
  },
  {
    id: 5,
    title: "Infrastructure Development in Faridabad",
    excerpt:
      "Major infrastructure projects transforming connectivity and lifestyle in Faridabad, including metro and highway expansions.",
    image: "/faridabad-city-skyline-with-modern-buildings-and-g.jpg",
    category: "Infrastructure",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    content: "The Delhi Metro extension and highway improvements are revolutionizing...",
  },
  {
    id: 6,
    title: "Luxury Residential Projects in Faridabad",
    excerpt:
      "Explore the top 3 luxury residential developments offering world-class amenities and premium living experiences.",
    image: "/modern-residential-complex-in-faridabad.jpg",
    category: "Luxury Housing",
    date: "Dec 8, 2024",
    readTime: "9 min read",
    content: "Premium residential projects by leading developers are setting new standards...",
  },
  {
    id: 7,
    title: "Industrial Growth in Faridabad",
    excerpt:
      "Understanding Faridabad's position as an industrial powerhouse and its impact on real estate development.",
    image: "/commercial-building-office-complex.jpg",
    category: "Industrial",
    date: "Dec 5, 2024",
    readTime: "5 min read",
    content: "The industrial corridor of Faridabad continues to attract major investments...",
  },
  {
    id: 8,
    title: "Affordable Housing Schemes in Faridabad",
    excerpt:
      "Government and private sector initiatives making homeownership accessible for middle-class families in Faridabad.",
    image: "/property-documents-legal-papers.jpg",
    category: "Affordable Housing",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    content: "Various affordable housing projects are making the dream of homeownership...",
  },
  {
    id: 9,
    title: "Commercial Real Estate Opportunities",
    excerpt:
      "Prime commercial spaces and office complexes offering excellent investment potential in Faridabad's business districts.",
    image: "/commercial-building-office-complex.jpg",
    category: "Commercial",
    date: "Nov 30, 2024",
    readTime: "7 min read",
    content: "The commercial real estate sector in Faridabad is witnessing unprecedented growth...",
  },
  {
    id: 10,
    title: "Property Investment Guide for Beginners",
    excerpt:
      "Essential tips and strategies for first-time property investors looking to enter Faridabad's real estate market.",
    image: "/modern-residential-complex-in-faridabad.jpg",
    category: "Investment Guide",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    content: "Starting your property investment journey in Faridabad requires careful planning...",
  },
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with back navigation */}
      <div className="bg-primary text-primary-foreground py-8 md:py-6">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-sm mb-4 hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Real Estate Insights</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Stay informed with the latest trends, market analysis, and expert advice on Faridabad's real estate market.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-6 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {allBlogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 text-xs" variant="secondary">
                  {blog.category}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {blog.date} • {blog.readTime}
                </div>
                <h3 className="font-semibold text-lg md:text-xl line-clamp-2 group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground line-clamp-3 mb-4">{blog.excerpt}</p>
                <Button variant="ghost" className="p-0 h-auto font-medium text-accent hover:text-accent/80">
                  Read Full Article
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Showing {allBlogs.length} articles</p>
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  )
}
