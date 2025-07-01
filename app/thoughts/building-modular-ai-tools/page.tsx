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
        <div className="max-w-4xl mx-auto">
          <article className="space-y-8">
            <h1 className="text-5xl font-bold text-white mb-4">Building Modular AI Tools for Product Teams</h1>
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <time dateTime="2025-03-15">Mar 15, 2025</time>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed">The Problem That Won't Leave Me Alone</p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Picture this: You're a product manager at a growing company. You start your day checking Slack (17 unread
              channels), jump to Linear to see what shipped yesterday, hop over to Mixpanel to understand user behavior,
              then dive into Figma to review designs, followed by a quick check in Notion for the latest research
              findings.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Sound familiar? If you're keeping count, that's already 5 different tools before 10 AM. And we're just
              getting started.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Here's what really gets me: The average product team uses 15-20 different applications daily. That's not
              just inefficient—it's cognitively exhausting. Every time you switch tools, you're losing context,
              rebuilding mental models, and basically starting over.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I ran the numbers recently (because apparently that's what I do for fun now), and the cost is staggering.
              Context switching alone costs organizations roughly $50,000 per developer annually. For a 20-person
              product team? You're looking at over $1 million in lost productivity yearly.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              That's not just money—it's innovation potential. It's the breakthrough feature that never gets built
              because the team is too busy playing information archaeology across disconnected systems.
            </p>

            <h2 className="text-3xl font-bold text-white pt-8">What We're Building: AI That Actually Gets It</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              After months of research and way too much coffee, we've landed on something I'm genuinely excited about:
              modular AI tools that adapt to your workflow, not the other way around.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Think of it like this—instead of forcing teams to abandon their beloved tools and learn new systems, what
              if we created an intelligent nervous system that connects everything they already use? What if AI could
              maintain context across every handoff, learn from team patterns, and surface insights exactly when and
              where teams need them?
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">That's the vision we're chasing.</p>

            <h2 className="text-3xl font-bold text-white pt-8">How It Actually Works</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Let me give you a concrete example from our recent beta test with a Series B SaaS company:
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Before: Their product manager spent 4-5 hours every week manually gathering user feedback from Intercom
              tickets, Gong call recordings, and Mixpanel funnels, then another 2-3 hours synthesizing insights for the
              team.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              After: Our AI research module automatically ingests data from all these sources, identifies patterns, and
              generates weekly insight reports with confidence scores and recommended actions. What used to take 7 hours
              now takes 30 minutes of review time.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              But here's where it gets interesting—the insights don't just sit in another dashboard. They flow directly
              into the team's existing Linear workflow, automatically updating feature priorities based on user behavior
              patterns and business impact predictions.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              The result? This team shipped features 45% faster and saw a 40% increase in feature adoption rates because
              they were building the right things based on real data, not gut feelings.
            </p>

            <h2 className="text-3xl font-bold text-white pt-8">The Technical Architecture (For My Fellow Nerds)</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Building this required solving some genuinely hard problems. Traditional tools lose context at every
              handoff—when user research findings become product requirements, when requirements become designs, when
              designs become code.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">Our approach centers on three core innovations:</p>
            <h3 className="text-2xl font-bold text-white">1. Context Preservation Across Modules</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              Every interaction maintains a persistent understanding of user intent, business objectives, and technical
              constraints. When a user interview reveals a pain point, that context follows through to feature
              prioritization, design decisions, and development planning.
            </p>
            <h3 className="text-2xl font-bold text-white">2. Adaptive Learning Architecture</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              The AI doesn't just execute predefined workflows—it learns from each team's unique patterns. How does your
              team typically respond to certain types of user feedback? What features tend to succeed based on
              historical patterns? The system gets smarter with every decision.
            </p>
            <h3 className="text-2xl font-bold text-white">3. Explainable Intelligence</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              Every recommendation comes with clear reasoning and confidence intervals. Teams maintain full agency while
              gaining superhuman analytical capabilities. We're not building black boxes—we're building thinking
              partners.
            </p>

            <h2 className="text-3xl font-bold text-white pt-8">Early Results That Have Me Convinced</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We've been testing with eight different product teams over the past four months, and the results are
              honestly better than I dared hope:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-400 leading-relaxed space-y-2">
              <li>70% reduction in time spent on manual research synthesis</li>
              <li>50% fewer prioritization meetings (because the data speaks for itself)</li>
              <li>80% less context-switching between tools</li>
              <li>45% faster time-to-market for new features</li>
              <li>90% improvement in cross-team collaboration scores</li>
            </ul>
            <p className="text-lg text-gray-400 leading-relaxed">
              But beyond the metrics, what really excites me is watching teams rediscover the joy of building. When AI
              handles the mundane data synthesis, product managers can focus on strategy and creativity. When designers
              get real-time behavioral predictions, they're architecting experiences with scientific precision.
            </p>

            <h2 className="text-3xl font-bold text-white pt-8">The Bigger Picture: Why This Matters Now</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We're at an inflection point. The companies that figure out how to augment human intelligence with AI will
              have insurmountable advantages. While their competitors are stuck in endless alignment meetings and manual
              data gathering, AI-first teams will be shipping, learning, and iterating at machine speed with human
              wisdom.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I keep thinking about Cursor's incredible success—$200M ARR with zero marketing spend. How? They built
              something so useful that developers couldn't stop talking about it. Their product became their marketing
              engine.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              That's the future we're building toward. Not AI that replaces human creativity, but AI that amplifies it
              exponentially.
            </p>

            <h2 className="text-3xl font-bold text-white pt-8">What's Next</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We're still early days, but I'm convinced we're onto something significant. We're opening up our beta
              program to 10 more product teams next month. If you're interested in seeing this in action (or just want
              to geek out about modular AI architectures), hit me up.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Also, I'm curious—what's your biggest productivity killer as a product team? Where do you spend time that
              you wish you could get back? The insights always help us think about what to build next.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              As always, building in public and sharing what we learn along the way
            </p>
          </article>
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
