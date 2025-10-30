import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Linkedin, Calendar, Clock, ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"
import { notFound } from "next/navigation"

// This would typically come from a CMS or markdown files
const blogPosts = {
  "reflections-climate-research-taiwan": {
    title: "Reflections on Climate Research in Taiwan",
    content: `
      <p>Exploring the unique challenges and opportunities of conducting environmental research in Taiwan's diverse ecosystems and rapidly changing climate landscape has been both rewarding and eye-opening.</p>
      
      <p>Taiwan's position as an island nation in the Pacific makes it particularly vulnerable to climate change impacts, yet it also provides a unique laboratory for studying adaptation strategies. The diverse topography, from coastal plains to mountain ranges, creates microclimates that offer rich opportunities for comparative research.</p>
      
      <h2>Research Opportunities</h2>
      <p>One of the most fascinating aspects of working here is the intersection of traditional knowledge and modern science. Local communities have developed sophisticated understanding of weather patterns and ecosystem responses over centuries, providing valuable insights for contemporary climate research.</p>
      
      <p>The government's commitment to renewable energy and sustainability initiatives has created a supportive environment for research. Taiwan's ambitious goal of achieving net-zero emissions by 2050 has opened numerous opportunities for studying the implementation of clean energy technologies and their environmental impacts.</p>
      
      <h2>Challenges and Learning</h2>
      <p>Language barriers and cultural differences have presented both challenges and opportunities for growth. Learning to communicate research findings effectively across cultural boundaries has enhanced my ability to make science accessible to diverse audiences.</p>
      
      <p>The collaborative nature of research here has taught me the importance of building relationships and understanding local contexts. Success in environmental research often depends as much on community engagement as on scientific rigor.</p>
    `,
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Climate Research",
    image: "/placeholder.svg?height=400&width=800",
    excerpt: "Exploring the unique challenges and opportunities of conducting environmental research in Taiwan's diverse ecosystems and rapidly changing climate landscape."
  },
  "art-scientific-storytelling": {
    title: "The Art of Scientific Storytelling",
    content: `
      <p>How creative writing techniques can make complex research more accessible and engaging for broader audiences beyond academia.</p>
      
      <p>Scientific communication has traditionally been confined to academic journals and conferences, limiting the reach of important research findings. However, the urgency of climate change demands that we find new ways to share scientific knowledge with the public.</p>
      
      <h2>Bridging the Gap</h2>
      <p>Storytelling techniques from creative writing can help scientists connect with audiences on an emotional level, making abstract concepts more tangible and memorable. By framing research within narratives that people can relate to, we can increase understanding and engagement.</p>
      
      <p>This approach doesn't mean dumbing down the science, but rather finding creative ways to present complex information. Visual metaphors, personal anecdotes, and compelling characters can help illustrate scientific concepts without sacrificing accuracy.</p>
      
      <h2>Practical Applications</h2>
      <p>In my own work, I've found that incorporating storytelling elements into research presentations significantly increases audience engagement. People remember stories much better than they remember statistics, and stories can inspire action in ways that data alone cannot.</p>
    `,
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Writing",
    image: "/placeholder.svg?height=400&width=800",
    excerpt: "How creative writing techniques can make complex research more accessible and engaging for broader audiences beyond academia."
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-off-white text-charcoal">
      <Navigation />

      <main className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sage hover:text-sage/80 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
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
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-6">
              {post.title}
            </h1>
            
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-oat-milk shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div 
              className="text-charcoal leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-warm-oat">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-xl font-medium text-charcoal mb-2">About the Author</h3>
                <p className="text-charcoal/80 leading-relaxed">
                  Jason Juang is a Taiwanese American climate researcher, writer, and creative currently working as a Luce Scholar at the Delta Electronics Foundation in Taipei, Taiwan.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-charcoal/60">Share this post:</span>
                <div className="flex items-center space-x-3">
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="w-10 h-10 bg-oat-milk rounded-lg flex items-center justify-center hover:bg-sage hover:text-off-white transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    className="w-10 h-10 bg-oat-milk rounded-lg flex items-center justify-center hover:bg-sage hover:text-off-white transition-all duration-300"
                  >
                    <Youtube size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </footer>
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


