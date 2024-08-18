import React from 'react';

export default function Careers(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <header className="text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-800">Discover your Career</h1>
      </header>

      <section className="mt-12 w-full max-w-lg px-4">
        <div className="flex items-center bg-gray-200 rounded-full p-2">
          <input
            type="text"
            placeholder="Search by Job ID, title, or keyword"
            className="flex-grow bg-transparent outline-none px-4 py-2 text-gray-700"
          />
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full">
          Search
        </button>
        </div>
      </section>

      <section className="my-16 w-full px-4">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
          Explore latest
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {latestItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden ">
              <div className="bg-gray-300 h-48 w-full bg-cover bg-center" style={{backgroundImage: `url(${item.img})`}}></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const latestItems = [
  {
    id: 1,
    title: 'Artificial Intelligence',
    img: 'jobs-ai.webp',
  },
  {
    id: 2,
    title: 'Web Development',
    img: 'jobs-webdev.jpg',
  },
  {
    id: 3,
    title: 'Software Testing',
    img: 'jobs-testing.webp',
  },
];
