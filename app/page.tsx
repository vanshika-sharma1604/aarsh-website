import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-['SF_Pro_Display','SF_Pro_Text','-apple-system','BlinkMacSystemFont','system-ui','sans-serif']">
      {/* Header */}
      <header className="py-6 px-6 border-b border-gray-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Aarsh Ashdhir</h1>
          <div className="flex items-center space-x-8 text-sm text-gray-400">
            <Link href="/thoughts" className="hover:text-white transition-colors">
              Thoughts
            </Link>
            <Link href="/experience" className="hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200 text-black px-6 ml-4">
              Connect
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Profile Image */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Small circular text badge */}
                <div className="absolute -top-4 -right-8 w-24 h-24 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-gray-600 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <path id="circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                      </defs>
                      <text className="text-[8px] fill-gray-400 font-medium tracking-wider">
                        <textPath href="#circle">PRODUCT • BUILDER • SYSTEMS</textPath>
                      </text>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Oval Profile Image */}
                <div className="w-80 h-96 rounded-[40px] overflow-hidden bg-gray-900 border-4 border-gray-800">
                  <img src="/images/profile-aarsh.png" alt="Aarsh Ashdhir" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight mb-4">
                  Aarsh
                  <br />
                  Ashdhir
                </h1>
                <h2 className="text-2xl text-gray-400 font-medium mb-8">Product Builder & Systems Thinker</h2>

                <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
                  I'm building Eurus Labs to rethink how teams turn ideas into finished products—faster, with less
                  friction, and with the help of modular AI tools. A lot of my approach comes from time spent working on
                  strategy at McKinsey, risk at Morgan Stanley, and launching early-stage products across two previous
                  startups. I'm especially interested in systems design, creative tooling, and taking messy, early ideas
                  from zero to something real.
                </p>

                <Button className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200 text-black px-8 py-3 text-lg font-medium rounded-full">
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Professional Experiences Section */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16">Professional experiences</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Eurus Labs */}
            <div className="bg-gradient-to-br from-white to-gray-400 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eurus Labs</h3>
                <p className="text-gray-600 font-medium">Founder & CEO</p>
                <p className="text-gray-500 text-sm mt-1">2025 - Present</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Building modular AI tools to help teams turn ideas into finished products faster and with less friction.
              </p>
            </div>

            {/* Eidos Press */}
            <div className="bg-gradient-to-br from-white to-gray-400 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eidos Press</h3>
                <p className="text-gray-600 font-medium">Co-Founder</p>
                <p className="text-gray-500 text-sm mt-1">Feb 25 - Jun 25</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Launched an audio-only platform for creators. Onboarded 54 creators with 7M+ reach, reached YC interview
                round.
              </p>
            </div>

            {/* McKinsey */}
            <div className="bg-gradient-to-br from-white to-gray-400 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">McKinsey & Company</h3>
                <p className="text-gray-600 font-medium">Business Analyst</p>
                <p className="text-gray-500 text-sm mt-1">Aug 24 - May 25</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Drove go-to-market strategy for cybersecurity firms and uncovered $1B AUM leakage for top insurers.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/experience" className="text-gray-500 hover:text-white transition-colors font-medium">
              View all experiences →
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Thoughts Section */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16">Recent thoughts</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-gradient-to-br from-white to-gray-400 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="aspect-[4/3] bg-gray-900 rounded-xl mb-6 overflow-hidden">
                <img
                  src="/images/modular-ai-tools.png"
                  alt="Building Modular AI Tools"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-900 font-medium">AI</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Building Modular AI Tools for Product Teams</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                How we're rethinking the product development process with AI-first tooling that adapts to your workflow.
              </p>
              <Link
                href="/thoughts/building-modular-ai-tools"
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
              >
                Read more →
              </Link>
            </article>

            <article className="bg-gradient-to-br from-white to-gray-400 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="aspect-[4/3] bg-gray-900 rounded-xl mb-6 overflow-hidden">
                <img
                  src="/images/bootstrapping-europe.png"
                  alt="Bootstrapping in Europe: What I Wish I Knew"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-900 font-medium">Entrepreneurship</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Bootstrapping in Europe: What I Wish I Knew</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hard-won lessons from building a profitable export business from scratch, including the mistakes that
                taught me the most.
              </p>
              <Link
                href="/thoughts/bootstrapping-europe-lessons"
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
              >
                Read more →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's connect</h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Always interested in connecting with like-minded people. Feel free to reach out if you'd like to chat about
            ideas, collaborate on projects, or just say hello.
          </p>

          <div className="flex items-center justify-center space-x-8 mb-8">
            <Link
              href="mailto:aarsh@euruslabs.com"
              className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>aarsh@euruslabs.com</span>
            </Link>
            <Link
              href="https://github.com"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          <Button className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200 text-black px-8 py-3 text-lg">
            <Link href="/contact">Connect</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2025 Aarsh Ashdhir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
