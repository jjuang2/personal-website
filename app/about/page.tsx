import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Linkedin, ExternalLink } from "lucide-react"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  const accolades = [
    {
      title: "Provost Excellence Award",
      url: "https://www.scheller.gatech.edu/news/2024/jason-juang-bsba24-awarded-2024-provosts-academic-excellence-award.html",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Luce Scholarship Award",
      url: "https://oue.gatech.edu/node/3055?utm_source=newsletter&utm_medium=email&utm_content=Full%20Story%0A&utm_campaign=Daily%20Digest%20-%20March%2022%2C%202024",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "USG Academic Recognition",
      url: "https://oue.gatech.edu/USG-academic-recognition-day",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Ray C Anderson Center Scholarship",
      url: "https://www.scheller.gatech.edu/news/ray-c-anderson-center-for-sustainable-business/insights/juang-vnl-scholarship.html",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="min-h-screen bg-off-white text-charcoal">
      <Navigation />

      {/* Hero Section */}
      <main className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-3xl mx-auto font-light">
              Jason Juang is a Taiwanese American climate researcher, writer, and creative. He is currently a Luce
              Scholar working at the Delta Electronics Foundation in Taipei, Taiwan.
            </p>
          </div>

          {/* Bio Section */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mb-20">
            {/* Bio Text */}
            <div className="flex-1">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-charcoal leading-relaxed">
                  Jason received his BS in Business Administration from Georgia Tech, where he researched and advocated
                  for 100% campus electrification with{" "}
                  <a
                    href="https://sites.gatech.edu/electrifygt/about-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage underline decoration-sage decoration-2 underline-offset-2 hover:decoration-4 transition-all duration-300"
                  >
                    ElectrifyGT
                  </a>
                  . Through this work, he would lead a team to publish their findings in{" "}
                  <a
                    href="https://www.nature.com/articles/s41598-024-54752-z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage underline decoration-sage decoration-2 underline-offset-2 hover:decoration-4 transition-all duration-300"
                  >
                    Nature Scientific Reports
                  </a>{" "}
                  on how higher education institutions can role model vehicle electrification.
                </p>

                <p className="text-lg md:text-xl text-charcoal leading-relaxed">
                  He is currently project managing, creating, and researching in his role as a Project Officer at the
                  Delta Electronics Foundation.
                </p>

                <p className="text-lg md:text-xl text-charcoal leading-relaxed">
                  He welcomes all attempts to connect and collaborate on climate research and environmental policy initiatives.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="flex-shrink-0 lg:order-last">
              <div className="relative">
                <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden bg-oat-milk shadow-lg">
                  <Image src="/jason-photo.jpeg" alt="Jason Juang" fill className="object-cover rounded-2xl" priority />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-warm-oat mx-auto rounded-full mb-16"></div>

          {/* Accolades Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-charcoal text-center mb-12">Accolades & Recognition</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {accolades.map((accolade, index) => (
                <a
                  key={index}
                  href={accolade.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg group bg-oat-milk border border-warm-oat"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-warm-oat flex-shrink-0">
                      <Image
                        src={accolade.image || "/placeholder.svg"}
                        alt={accolade.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-charcoal group-hover:text-sage transition-colors duration-300">
                        {accolade.title}
                      </h3>
                    </div>
                    <ExternalLink
                      size={20}
                      className="text-charcoal/60 group-hover:text-sage transition-colors duration-300"
                    />
                  </div>
                </a>
              ))}
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
