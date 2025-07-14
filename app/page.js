import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Get Online in Minutes
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Create a professional website in seconds. Perfect for restaurants, freelancers, and local businesses.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
          >
            Try Free
          </a>
          <a
            href="#features"
            className="px-8 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-md hover:bg-indigo-50 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why EasySite?</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Fast & Simple</h3>
            <p className="text-gray-600">
              No coding skills needed. Just pick a template, add your info, and publish.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Custom Domain</h3>
            <p className="text-gray-600">
              Start with a free subdomain, then upgrade to your own .se domain.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Built for Sweden</h3>
            <p className="text-gray-600">
              Designed for small businesses in Sweden who want to get online fast.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Friendly interface anyone can use — no tech stress.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to launch your first site?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Join early access and be one of the first to try EasySite.
        </p>
        <a
          href="#"
          className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
        >
          Get Early Access
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} EasySite — Made for small businesses in Sweden
      </footer>
    </main>
  )
}