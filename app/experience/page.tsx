import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Experience() {
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
            <Link href="/thoughts" className="hover:text-white transition-colors">
              Thoughts
            </Link>
            <Link href="/experience" className="text-white font-medium">
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
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Professional Experience</h1>
            <p className="text-xl text-gray-500">My journey across startups, consulting, finance, and social impact.</p>
          </div>

          <div className="space-y-8">
            {/* Eidos Press */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Eidos Press</h3>
                  <p className="text-gray-600 font-medium text-lg">Co-Founder</p>
                </div>
                <p className="text-gray-500 md:text-right">Feb 25 - Jun 25</p>
              </div>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  • Launched the Eidos iOS app — an audio-only Patreon for creators to monetize verifiably human
                  conversations
                </p>
                <p>• Onboarded 54 creators with a combined reach of 7M+, driving organic marketing with $0 CAC</p>
                <p>• Reached Y Combinator interview round as a first-time applicants building a consumer social app</p>
              </div>
            </div>

            {/* McKinsey */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">McKinsey & Company, New York</h3>
                  <p className="text-gray-600 font-medium text-lg">Business Analyst</p>
                </div>
                <p className="text-gray-500 md:text-right">Aug 24 - May 25</p>
              </div>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  • Drove the go-to-market strategy for a leading cybersecurity firm: identified whitespace
                  opportunities, modeled pricing tiers, and developed sales incentive structures to drive growth
                </p>
                <p>• Uncovered ~$1B AUM leakage in post-employment plan transitions for a top North American insurer</p>
                <p>
                  • Served as project manager for an internal AI initiative, coordinating across functions to launch a
                  client-facing prototype
                </p>
              </div>
            </div>

            {/* Morgan Stanley */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Morgan Stanley, New York</h3>
                  <p className="text-gray-600 font-medium text-lg">Summer Risk Analyst</p>
                </div>
                <p className="text-gray-500 md:text-right">Jun 23 - Aug 23</p>
              </div>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  • Analyzed the credit risk exposure of a 'BBB' and a 'C' credit-rated company through financial
                  modeling and industry research
                </p>
                <p>
                  • Researched the likelihood of a recession in the US economy and its impact on Morgan Stanley's
                  investment portfolio
                </p>
              </div>
            </div>

            {/* Skilled Hands Foundation */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Skilled Hands Foundation</h3>
                  <p className="text-gray-600 font-medium text-lg">Founder and President</p>
                </div>
                <p className="text-gray-500 md:text-right">Aug 21 - Jan 24</p>
              </div>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  • Provided nationally recognized vocational training certifications to over five hundred unemployed
                  tribal youth through partnerships with 11 vocational training institutes in West Bengal
                </p>
                <p>
                  • Received recognition by the State of West Bengal as an official educational partner under the PMKY
                  initiative
                </p>
              </div>
            </div>

            {/* Rock & Monk */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Rock & Monk</h3>
                  <p className="text-gray-600 font-medium text-lg">CEO</p>
                </div>
                <p className="text-gray-500 md:text-right">Apr 20 - Sep 22</p>
              </div>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  • Sourcing scrap leather wallets on credit and solds them door-to-door to retail leather shops in
                  France
                </p>
                <p>
                  • Generated $130K in sales with a 21% EBITDA margin, and funded my college tuition through business
                  profits
                </p>
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
