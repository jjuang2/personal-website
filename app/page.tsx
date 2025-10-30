import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Linkedin } from "lucide-react"
import Navigation from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-off-white text-charcoal">
      <Navigation />

      {/* Hero Section */}
      <main className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                  Hello! Welcome to my site.
                </h1>

                <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-lg">
                  Jason Juang is a Taiwanese American climate researcher, writer, and creative, currently based in
                  Taiwan
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="inline-block bg-sage text-off-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-sage/90 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Explore Projects
                </Link>
                <Link
                  href="/about"
                  className="inline-block bg-warm-oat text-charcoal px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-warm-oat/90 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Learn More About Me
                </Link>
              </div>
            </div>

            {/* Right Content - Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden bg-oat-milk shadow-[0_0_30px_rgba(156,175,136,0.4)]">
                  <Image src="/jason-photo.jpeg" alt="Jason Juang" fill className="object-cover rounded-2xl" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Spacer */}
      <div className="h-20 md:h-32"></div>

      {/* Footer */}
      <footer className="border-t border-warm-oat bg-oat-milk">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-charcoal/60">© {new Date().getFullYear()} Jason Juang. All rights reserved. Vibed coded by me!</div>

            <div className="flex items-center space-x-6">
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
