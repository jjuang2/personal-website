"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Linkedin, Search, Calendar, Clock } from "lucide-react"
import Navigation from "@/components/navigation"
import { useState } from "react"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Climate Research", "Personal Reflections", "Taiwan Life", "Writing"]

  const blogPosts = [
    {
      id: 1,
      title: "Reflections on Climate Research in Taiwan",
      excerpt:
        "Exploring the unique challenges and opportunities of conducting environmental research in Taiwan's diverse ecosystems and rapidly changing climate landscape.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Climate Research",
      image: "/placeholder.svg?height=200&width=300",
      slug: "reflections-climate-research-taiwan",
    },
    {
      id: 2,
      title: "The Art of Scientific Storytelling",
      excerpt:
        "How creative writing techniques can make complex research more accessible and engaging for broader audiences beyond academia.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Writing",
      image: "/placeholder.svg?height=200&width=300",
      slug: "art-scientific-storytelling",
    },
    {
      id: 3,
      title: "Living as a Luce Scholar in Taipei",
      excerpt:
        "Personal insights from navigating professional research opportunities while immersing in Taiwanese culture and building meaningful connections.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Personal Reflections",
      image: "/placeholder.svg?height=200&width=300",
      slug: "luce-scholar-taipei-experience",
    },
    {
      id: 4,
      title: "Campus Electrification: Lessons from Georgia Tech",
      excerpt:
        "Key findings from our Nature Scientific Reports publication and what higher education institutions can learn about sustainable transportation.",
      date: "2023-12-20",
      readTime: "12 min read",
      category: "Climate Research",
      image: "/placeholder.svg?height=200&width=300",
      slug: "campus-electrification-lessons",
    },
    {
      id: 5,
      title: "Finding Creativity in Research",
      excerpt:
        "How incorporating creative practices into scientific work can lead to innovative approaches and fresh perspectives on complex problems.",
      date: "2023-12-15",
      readTime: "7 min read",
      category: "Writing",
      image: "/placeholder.svg?height=200&width=300",
      slug: "creativity-in-research",
    },
    {
      id: 6,
      title: "Night Markets and Environmental Consciousness",
      excerpt:
        "Observations on sustainability practices in Taiwan's vibrant night market culture and opportunities for environmental awareness.",
      date: "2023-12-10",
      readTime: "5 min read",
      category: "Taiwan Life",
      image: "/placeholder.svg?height=200&width=300",
      slug: "night-markets-environmental-consciousness",
    },
  ]

  const recentPosts = blogPosts.slice(0, 5)

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-off-white text-charcoal">
      <Navigation />

      <main className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-3xl mx-auto font-light">
              Thoughts on climate research, creative work, and life as a researcher exploring the intersection of
              science and storytelling.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Category Filters */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-sage text-off-white"
                          : "bg-oat-milk text-charcoal hover:bg-warm-oat"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-oat-milk rounded-2xl overflow-hidden shadow-lg border border-warm-oat hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={300}
                          height={200}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="bg-sage text-off-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-4 text-charcoal/60 text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                        <h2 className="text-xl md:text-2xl font-medium text-sage mb-3 hover:text-sage/80 transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p className="text-charcoal/80 mb-4 leading-relaxed">{post.excerpt}</p>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-sage font-medium hover:text-sage/80 transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-sage text-off-white rounded-lg font-medium">1</button>
                  <button className="px-4 py-2 bg-oat-milk text-charcoal rounded-lg font-medium hover:bg-warm-oat transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 bg-oat-milk text-charcoal rounded-lg font-medium hover:bg-warm-oat transition-colors">
                    3
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* Search */}
                <div className="bg-warm-oat rounded-2xl p-6">
                  <h3 className="text-xl font-medium text-sage mb-4">Search</h3>
                  <div className="relative">
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/60" />
                    <input
                      type="text"
                      placeholder="Search posts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-off-white border border-warm-oat rounded-lg focus:outline-none focus:border-sage transition-colors"
                    />
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-warm-oat rounded-2xl p-6">
                  <h3 className="text-xl font-medium text-sage mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="block hover:text-sage transition-colors"
                      >
                        <h4 className="font-medium text-charcoal mb-1">{post.title}</h4>
                        <p className="text-charcoal/60 text-sm">{new Date(post.date).toLocaleDateString()}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-warm-oat rounded-2xl p-6">
                  <h3 className="text-xl font-medium text-sage mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className="block w-full text-left text-charcoal hover:text-sage transition-colors py-1"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-warm-oat bg-oat-milk">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-charcoal/60">© {new Date().getFullYear()} Jason Juang. All rights reserved.</div>

            <div className="flex items-center space-x-6">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-charcoal/60 hover:text-sage transition-colors duration-300"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="text-charcoal/60 hover:text-sage transition-colors duration-300"
              >
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-charcoal/60 hover:text-sage transition-colors duration-300"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
