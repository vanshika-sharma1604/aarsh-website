import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function Thoughts() {
  const thoughts = [
    {
      id: 1,
      title: "Building Modular AI Tools for Product Teams",
      excerpt:
        "How we're rethinking the product development process with AI-first tooling that adapts to your workflow, not the other way around.",
      date: "2025-03-15",
      readTime: "8 min read",
      slug: "building-modular-ai-tools",
      category: "AI",
      image: "/images/modular-ai-tools.png",
    },
    {
      id: 2,
      title: "From McKinsey to Startup: Lessons in Systems Thinking",
      excerpt:
        "What I learned about building scalable processes during my transition from consulting to entrepreneurship.",
      date: "2025-03-08",
      readTime: "7 min read",
      slug: "mckinsey-to-startup-systems-thinking",
      category: "Business",
      image: "/images/systems-thinking.png",
    },
    {
      id: 3,
      title: "The Art of Positive Interference",
      excerpt:
        "Why the best innovations come from deliberately disrupting existing patterns and creating constructive friction.",
      date: "2025-02-28",
      readTime: "4 min read",
      slug: "art-of-positive-interference",
      category: "Philosophy",
      image: "/images/positive-interference.png",
    },
    {
      id: 4,
      title: "Bootstrapping in Europe: What I Wish I Knew",
      excerpt:
        "Hard-won lessons from building a profitable export business from scratch, including the mistakes that taught me the most.",
      date: "2025-02-20",
      readTime: "6 min read",
      slug: "bootstrapping-europe-lessons",
      category: "Entrepreneurship",
      image: "/images/bootstrapping-europe.png",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-['SF_Pro_Display','SF_Pro_Text','-apple-system','BlinkMacSystemFont','system-ui','sans-serif']">
      {/* Header with Navigation */}
      <header className="py-6 px-6 border-b border-gray-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </Link>
          <h1 className="text-2xl font-bold text-white">Aarsh Ashdhir</h1>
          <nav className="flex items-center space-x-6 text-sm text-gray-400">
            <Link href="/thoughts" className="text-white font-medium">
              Thoughts
            </Link>
            <Link href="/experience" className="hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Ideas on building products, systems thinking, and the intersection of AI and entrepreneurship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {thoughts.map((thought) => (
              <article
                key={thought.id}
                className="bg-gradient-to-br from-white to-gray-400 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="aspect-[4/3] bg-gray-900 rounded-xl mb-6 overflow-hidden">
                  <img
                    src={thought.image || "/placeholder.svg"}
                    alt={thought.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-4">
                  <span className="text-sm text-gray-900 font-medium">{thought.category}</span>

                  <h2 className="text-xl font-bold text-gray-900 leading-tight">
                    <Link href={`/thoughts/${thought.slug}`} className="hover:text-gray-600 transition-colors">
                      {thought.title}
                    </Link>
                  </h2>

                  <p className="text-gray-700 leading-relaxed">{thought.excerpt}</p>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={thought.date}>
                          {new Date(thought.date).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{thought.readTime}</span>
                      </div>
                    </div>

                    <Link
                      href={`/thoughts/${thought.slug}`}
                      className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2025 Aarsh Ashdhir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
