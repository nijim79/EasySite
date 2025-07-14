'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'

export default function EditorPage() {
  const params = useParams()
  const { id } = params || {}

  const [siteData, setSiteData] = useState({
    title: 'Welcome to My Site',
    description: 'This is my awesome new website.',
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setSiteData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-indigo-700 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">EasySite Editor</h1>
          <button
            onClick={() => alert('Publishing coming soon!')}
            className="px-4 py-2 bg-white text-indigo-700 rounded-md font-medium hover:bg-indigo-50 transition"
          >
            Preview & Publish
          </button>
        </div>
      </header>

      {/* Editor + Preview */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left - Editor Form */}
        <div className="w-full md:w-1/3 p-6 bg-gray-50 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Customize Your Site</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Site Title
              </label>
              <input
                type="text"
                name="title"
                value={siteData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={siteData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Background Color
              </label>
              <select
                name="bgColor"
                value={siteData.bgColor}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="bg-white">White</option>
                <option value="bg-gray-100">Light Gray</option>
                <option value="bg-indigo-50">Light Blue</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Text Color
              </label>
              <select
                name="textColor"
                value={siteData.textColor}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="text-gray-900">Dark</option>
                <option value="text-gray-700">Gray</option>
                <option value="text-indigo-700">Indigo</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right - Live Preview */}
        <div className="hidden md:block w-2/3 bg-gray-100 p-8 overflow-y-auto">
          <div
            className={`max-w-md mx-auto p-8 rounded-lg shadow-lg ${siteData.bgColor} ${siteData.textColor}`}
          >
            <h1 className="text-3xl font-bold">{siteData.title}</h1>
            <p className="mt-2">{siteData.description}</p>
            <p className="mt-4 text-sm text-gray-500">
              Template: <strong>{id || 'default'}</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 px-6 text-center text-sm text-gray-500 border-t bg-white">
        © {new Date().getFullYear()} EasySite – Made for small businesses in Sweden
      </footer>
    </main>
  )
}