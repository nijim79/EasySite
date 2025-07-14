import Link from 'next/link'

export default function Templates() {
  const templates = [
    {
      id: 'restaurant',
      name: 'Restaurant',
      description: 'Perfect for cafes, bars, and restaurants.',
      image: 'https://picsum.photos/seed/restaurant/400/300 ',
    },
    {
      id: 'freelancer',
      name: 'Freelancer',
      description: 'Great for consultants, designers, developers.',
      image: 'https://picsum.photos/seed/freelancer/400/300 ',
    },
    {
      id: 'shop',
      name: 'Shop',
      description: 'Ideal for small shops and boutiques.',
      image: 'https://picsum.photos/seed/shop/400/300 ',
    },
    {
      id: 'blog',
      name: 'Blog',
      description: 'Start your personal blog or portfolio.',
      image: 'https://picsum.photos/seed/blog/400/300 ',
    },
  ]

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-10 px-6 text-center border-b border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Choose Your Template</h1>
        <p className="mt-2 text-gray-600">Pick a starting point for your website</p>
      </section>

      {/* Template Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{template.name}</h3>
                <p className="text-gray-600 mt-1">{template.description}</p>
                <div className="mt-3 flex justify-between items-center">
                  <button className="text-indigo-600 font-medium group-hover:underline">
                    Preview
                  </button>
                  <Link
                    href={`/editor?template=${template.id}`}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition"
                  >
                    Choose Template
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-gray-500 text-sm mt-12 border-t border-gray-200">
        © {new Date().getFullYear()} EasySite – Made for small businesses in Sweden
      </footer>
    </main>
  )
}