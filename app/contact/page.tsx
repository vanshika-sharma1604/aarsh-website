import Link from "next/link"
import { ArrowLeft, Mail, Github, Linkedin } from "lucide-react"

export default function Contact() {
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
            <Link href="/experience" className="hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="text-white font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Let's Connect</h1>
            <p className="text-xl text-gray-500">
              If you want to get in touch, have questions, or just want to chat about building, strategy, or creative
              tools—feel free to reach out.
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg text-gray-500">
              Email me at{" "}
              <a href="mailto:aarsh@euruslabs.com" className="text-gray-300 hover:text-white underline">
                aarsh@euruslabs.com
              </a>{" "}
              or use the form below:
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-400 rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200">
            <form id="contact-form" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                  Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-2">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-transparent resize-vertical text-gray-900"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-100 to-amber-200 hover:from-amber-200 hover:to-amber-300 text-amber-900 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Send Email
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              No newsletters. No spam. Just direct conversations.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-8 mt-12">
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
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2025 Aarsh Ashdhir. All rights reserved.</p>
        </div>
      </footer>

      {/* JavaScript for form submission */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function sendMail(event) {
              event.preventDefault();
              const name = document.getElementById('name').value;
              const email = document.getElementById('email').value;
              const subject = document.getElementById('subject').value;
              const message = document.getElementById('message').value;
              const mailtoLink = \`mailto:aarsh@euruslabs.com?subject=\${encodeURIComponent(subject)}&body=\${encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\n\\n' + message)}\`;
              window.location.href = mailtoLink;
            }
            
            document.addEventListener('DOMContentLoaded', function() {
              const form = document.getElementById('contact-form');
              if (form) {
                form.addEventListener('submit', sendMail);
              }
            });
          `,
        }}
      />
    </div>
  )
}
