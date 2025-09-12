"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Residential Areas in Faridabad for 2024",
    excerpt:
      "Discover the most promising residential sectors in Faridabad that offer great investment potential and quality living.",
    image: "/modern-residential-complex-in-faridabad.jpg",
    category: "Investment Tips",
    date: "Dec 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Commercial Property Investment Guide",
    excerpt:
      "Everything you need to know about investing in commercial properties in Faridabad's growing business districts.",
    image: "/commercial-building-office-complex.jpg",
    category: "Commercial",
    date: "Dec 10, 2024",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Understanding Property Documentation in Haryana",
    excerpt:
      "A comprehensive guide to property papers, legal requirements, and documentation process in Haryana state.",
    image: "/property-documents-legal-papers.jpg",
    category: "Legal Guide",
    date: "Dec 5, 2024",
    readTime: "6 min read",
  },
]

export function BlogsSection() {
  return (
    <section className="py-6 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Stay updated with the latest trends, tips, and insights from Faridabad's real estate market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-2 md:top-4 left-2 md:left-4 text-xs" variant="secondary">
                  {post.category}
                </Badge>
              </div>

              <CardHeader className="pb-3 p-4">
                <div className="flex items-center text-xs md:text-sm text-muted-foreground mb-2">
                  <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  {post.date} • {post.readTime}
                </div>
                <h3 className="font-semibold text-sm md:text-lg line-clamp-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
              </CardHeader>

              <CardContent className="p-4 pt-0">
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                <button className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-xs md:text-sm transition-colors">
                  Read More
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link
            href="/blogs"
            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm md:text-base"
          >
            View All Articles
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
