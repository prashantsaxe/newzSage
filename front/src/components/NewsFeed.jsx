import React from 'react'

const newsItems = [
  { id: 1, title: "Global Economy Shows Signs of Recovery", content: "Experts are optimistic about the global economic outlook as key indicators point towards a robust recovery..." },
  { id: 2, title: "New Breakthrough in Renewable Energy", content: "Scientists have developed a new type of solar panel that's twice as efficient as current models..." },
  { id: 3, title: "Tech Giants Announce Collaboration on AI Ethics", content: "Leading technology companies have joined forces to establish guidelines for the ethical development of AI..." },
]

const NewsFeed = () => {
  return (
    <div className="space-y-4">
      {newsItems.map((item) => (
        <div key={item.id} className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsFeed
