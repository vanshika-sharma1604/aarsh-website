import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function BuildingModularAITools() {
  return (
    <div className="min-h-screen bg-black text-white font-['SF_Pro_Display','SF_Pro_Text','-apple-system','BlinkMacSystemFont','system-ui','sans-serif']">
      {/* Header with Navigation */}
      <header className="py-6 px-6 border-b border-gray-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/thoughts"
            className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to thoughts</span>
          </Link>
          <h1 className="text-2xl font-bold text-white">Aarsh Ashdhir</h1>
          <nav className="flex items-center space-x-6 text-sm text-gray-400">
            <Link href="/thoughts" className="hover:text-white transition-colors">
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

      {/* Article Content */}
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-12">
            <div className="aspect-[4/3] bg-gray-900 rounded-xl mb-8 overflow-hidden">
              <img
                src="/images/modular-ai-tools.png"
                alt="Building Modular AI Tools"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <span className="text-sm text-white font-medium bg-gray-800 px-3 py-1 rounded-full">AI</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Building Modular AI Tools for Product Teams
              </h1>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime="2025-03-15">Mar 15, 2025</time>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">The Problem That Won't Leave Me Alone</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Picture this: You're a product manager at a growing company. You start your day checking Slack (17 unread
              channels), jump to Linear to see what shipped yesterday, hop over to Mixpanel to understand user behavior,
              then dive into Figma to review designs, followed by a quick check in Notion for the latest research
              findings.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Sound familiar? If you're keeping count, that's already 5 different tools before 10 AM. And we're just
              getting started.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Here's what really gets me: The average product team uses 15-20 different applications daily. That's not
              just inefficient—it's cognitively exhausting. Every time you switch tools, you're losing context,
              rebuilding mental models, and basically starting over.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              I ran the numbers recently (because apparently that's what I do for fun now), and the cost is staggering.
              Context switching alone costs organizations roughly $50,000 per developer annually. For a 20-person
              product team? You're looking at over $1 million in lost productivity yearly.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              That's not just money—it's innovation potential. It's the breakthrough feature that never gets built
              because the team is too busy playing information archaeology across disconnected systems.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12">What We're Building: AI That Actually Gets It</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              After months of research and way too much coffee, we've landed on something I'm genuinely excited about:
              modular AI tools that adapt to your workflow, not the other way around.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              Think of it like this—instead of forcing teams to abandon their beloved tools and learn new systems, what
              if we created an intelligent nervous system that connects everything they already use? What if AI could
              maintain context across every handoff, learn from team patterns, and surface insights exactly when and
              where teams need them?
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">That's the vision we're chasing.</p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12">How It Actually Works</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Let me give you a concrete example from our recent beta test with a Series B SaaS company:
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">Before:</strong> Their product manager spent 4-5 hours every week manually
              gathering user feedback from Intercom tickets, Gong call recordings, and Mixpanel funnels, then another
              2-3 hours synthesizing insights for the team.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">After:</strong> Our AI research module automatically ingests data from all
              these sources, identifies patterns, and generates weekly insight reports with confidence scores and
              recommended actions. What used to take 7 hours now takes 30 minutes of review time.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              But here's where it gets interesting—the insights don't just sit in another dashboard. They flow directly
              into the team's existing Linear workflow, automatically updating feature priorities based on user behavior
              patterns and business impact predictions.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              The result? This team shipped features 45% faster and saw a 40% increase in feature adoption rates because
              they were building the right things based on real data, not gut feelings.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12">
              The Technical Architecture (For My Fellow Nerds)
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Building this required solving some genuinely hard problems. Traditional tools lose context at every
              handoff—when user research findings become product requirements, when requirements become designs, when
              designs become code.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">Our approach centers on three core innovations:</p>

            <h3 className="text-2xl font-bold text-white mb-4 mt-8">1. Context Preservation Across Modules</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Every interaction maintains a persistent understanding of user intent, business objectives, and technical
              constraints. When a user interview reveals a pain point, that context follows through to feature
              prioritization, design decisions, and development planning.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4 mt-8">2. Adaptive Learning Architecture</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              The AI doesn't just execute predefined workflows—it learns from each team's unique patterns. How does your
              team typically respond to certain types of user feedback? What features tend to succeed based on
              historical patterns? The system gets smarter with every decision.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4 mt-8">3. Explainable Intelligence</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Every recommendation comes with clear reasoning and confidence intervals. Teams maintain full agency while
              gaining superhuman analytical capabilities. We're not building black boxes—we're building thinking
              partners.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12">Early Results That Have Me Convinced</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              We've been testing with eight different product teams over the past four months, and the results are
              honestly better than I dared hope:
            </p>

            <ul className="text-gray-300 leading-relaxed mb-8 space-y-2">
              <li>• 70% reduction in time spent on manual research synthesis</li>
              <li>• 50% fewer prioritization meetings (because the data speaks for itself)</li>
              <li>• 80% less context-switching between tools</li>
              <li>• 45% faster time-to-market for new features</li>
              <li>• 90% improvement in cross-team collaboration scores</li>
            </ul>

            <p className="text-gray-300 leading-relaxed mb-8">
              But beyond the metrics, what really excites me is watching teams rediscover the joy of building. When AI
              handles the mundane data synthesis, product managers can focus on strategy and creativity. When designers
              get real-time behavioral predictions, they're architecting experiences with scientific precision.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12">The Bigger Picture: Why This Matters Now</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              We're at an inflection point. The companies that figure out how to augment human intelligence with AI will
              have insurmountable advantages. While their competitors are stuck in endless alignment meetings and manual
              data gathering, AI-first teams will be shipping, learning, and iterating at machine speed with human
              wisdom.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              I keep thinking about Cursor's incredible success—$200M ARR with zero marketing spend. How? They built
              something so useful that developers couldn't stop talking about it. Their product became their marketing
              engine.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              That's the future we're building toward. Not AI that replaces human creativity, but AI that amplifies it
              exponentially.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12">What's Next</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              We're still early days, but I'm convinced we're onto something significant. We're opening up our beta
              program to 10 more product teams next month. If you're interested in seeing this in action (or just want
              to geek out about modular AI architectures), hit me up.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              Also, I'm curious—what's your biggest productivity killer as a product team? Where do you spend time that
              you wish you could get back? The insights always help us think about what to build next.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              As always, building in public and sharing what we learn along the way.
            </p>
          </div>

          {/* Author Section */}
          <div className="border-t border-gray-800 pt-8 mt-12">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src="/images/profile-aarsh.png" alt="Aarsh Ashdhir" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Aarsh Ashdhir</h3>
                <p className="text-gray-400">Product Builder & Systems Thinker</p>
              </div>
            </div>
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
