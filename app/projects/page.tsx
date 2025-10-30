import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Linkedin, ExternalLink, Download } from "lucide-react"
import Navigation from "@/components/navigation"

export default function ProjectsPage() {
  const featuredResearch = [
    {
      id: 1,
      title: "A multi-scale lifecycle and technoeconomic framework for higher education fleet electrification",
      publication: "Nature Scientific Reports, Vol. 14, 2024",
      description:
        "Leading research on how higher education institutions can role model vehicle electrification, providing actionable insights for sustainable campus transportation policies. Published with ElectrifyGT and SEEEL",
      link: "https://www.nature.com/articles/s41598-024-54752-z",
      image: "/scientific-thumbnail.jpg.png",
    },
    {
      id: 2,
      title: "Campus Sustainability Through ElectrifyGT Initiative",
      publication: "Georgia Tech Undergraduate Research Journal, 2023",
      description:
        "Comprehensive study on 100% campus electrification advocacy, demonstrating student-led research impact on institutional sustainability policies.",
      link: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const professionalWriting = [
    {
      id: 1,
      title: "Climate Solutions Through Innovation: A Taiwan Perspective",
      platform: "Delta Electronics Foundation Blog",
      description:
        "Exploring how Taiwan's technology sector is contributing to global climate solutions through innovative clean energy technologies and sustainable business practices.",
      link: "#",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 2,
      title: "The Future of Sustainable Transportation in Asia",
      platform: "Environmental Research Quarterly",
      description:
        "Analysis of emerging transportation trends across Asian markets and their implications for regional climate policy and urban planning strategies.",
      link: "#",
      image: "/placeholder.svg?height=150&width=250",
    },
  ]

  const competitionProjects = [
    {
      id: 1,
      title: "Provost's Academic Excellence Award - Georgia Tech",
      description:
        "Recognized for outstanding academic achievement and research contributions in sustainable business and environmental policy.",
      link: "https://www.scheller.gatech.edu/news/2024/jason-juang-bsba24-awarded-2024-provosts-academic-excellence-award.html",
      type: "recognition",
    },
    {
      id: 2,
      title: "Luce Scholarship Program - Henry Luce Foundation",
      description:
        "Selected as a Luce Scholar for research work in Taiwan, focusing on climate technology and environmental policy innovation.",
      link: "https://oue.gatech.edu/node/3055",
      type: "recognition",
    },
    {
      id: 3,
      title: "Sustainable Campus Transportation Analysis",
      description:
        "Comprehensive report analyzing electrification potential across university campuses, providing methodology for institutional sustainability assessment.",
      link: "#",
      type: "report",
    },
    {
      id: 4,
      title: "Climate Technology Innovation Framework",
      description:
        "Research framework for evaluating emerging climate technologies and their scalability potential in developing markets.",
      link: "#",
      type: "report",
    },
  ]

  return (
    <div className="min-h-screen bg-off-white text-charcoal">
      <Navigation />

      <main className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-4xl mx-auto font-light">
              A portfolio of my research contributions, professional writing, and recognized projects in climate science
              and environmental policy.
            </p>
          </div>

          {/* Featured Research & Publications */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-sage mb-4">Featured Research & Publications</h2>
              <p className="text-charcoal/80 max-w-3xl mx-auto">
                Peer-reviewed and academic contributions to climate science research
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredResearch.map((project) => (
                <div
                  key={project.id}
                  className="bg-oat-milk rounded-2xl overflow-hidden shadow-lg border border-warm-oat hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-48 bg-gray-100">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sage font-medium text-sm mb-2">{project.publication}</p>
                    <h3 className="text-xl font-medium text-charcoal mb-3">{project.title}</h3>
                    <p className="text-charcoal/80 mb-4 leading-relaxed">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-sage text-off-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-sage/90 hover:shadow-lg"
                    >
                      <ExternalLink size={16} />
                      View Full Paper
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Writing & Commentary */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-sage mb-4">Professional Writing & Commentary</h2>
              <p className="text-charcoal/80 max-w-3xl mx-auto">
                Translating research insights for broader audiences and professional communities
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {professionalWriting.map((project) => (
                <div
                  key={project.id}
                  className="bg-oat-milk rounded-2xl overflow-hidden shadow-lg border border-warm-oat hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={250}
                    height={150}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-sage font-medium text-sm mb-2">{project.platform}</p>
                    <h3 className="text-xl font-medium text-charcoal mb-3">{project.title}</h3>
                    <p className="text-charcoal/80 mb-4 leading-relaxed">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-sage text-off-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-sage/90 hover:shadow-lg"
                    >
                      <ExternalLink size={16} />
                      Read Article
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Competition Projects & Recognition */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-sage mb-4">Competition Projects & Recognition</h2>
              <p className="text-charcoal/80 max-w-3xl mx-auto">
                Award-winning work demonstrating problem-solving and innovation in environmental research
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {competitionProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-oat-milk rounded-2xl p-6 shadow-lg border border-warm-oat hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-medium text-charcoal mb-3">{project.title}</h3>
                  <p className="text-charcoal/80 mb-4 leading-relaxed">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sage text-off-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-sage/90 hover:shadow-lg"
                  >
                    {project.type === "report" ? (
                      <>
                        <Download size={16} />
                        Download Report
                      </>
                    ) : (
                      <>
                        <ExternalLink size={16} />
                        View Project Details
                      </>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-warm-oat bg-oat-milk">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-charcoal/60">© {new Date().getFullYear()} Jason Juang. All rights reserved. Vibed coded by me!</div>

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
