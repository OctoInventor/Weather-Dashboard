import React from 'react'

export const TopBottons = ({ setQuery }) => {

    const cities = [
        {
            id: 1,
            title: "London",
        },
        {
            id: 2,
            title: "Sydney",
        },
        {
            id: 3,
            title: "Tokyo",
        },
        {
            id: 4,
            title: "Paris",
        },
        {
            id: 5,
            title: "Rome",
        },
    ];

  return (
    <div className="flex itemss-center justify-around my-6">
        {
            cities.map((city) => (
                <button
                key={city.id}
                className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2
                rounded-md transition ease-in"
                onClick={() => setQuery({q: city.title})}
                >
                 {city.title}
                </button>
            ))
        }
    </div>
  )
}
