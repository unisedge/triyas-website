//not ready

export default function Services(){
    return (
      <section className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
          <img src="/placeholder.jpg" alt="Staffing" className="w-full h-48 object-cover rounded-md mb-4" />
          <h4 className="text-xl font-semibold mb-4">Staffing</h4>
          <label className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </label>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      View
                    </button>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
          <img src="/placeholder.jpg" alt="Computer Aided Engineering" className="w-full h-48 object-cover rounded-md mb-4" />
          <h4 className="text-xl font-semibold mb-4">Computer Aided Engineering</h4>
          <label className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </label>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      View
                    </button>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
          <img src="/placeholder.jpg" alt="Design and Development" className="w-full h-48 object-cover rounded-md mb-4" />
          <h4 className="text-xl font-semibold mb-4">Design and Development</h4>
          <label className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </label>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      View
                    </button>        </div>
      </div>
    </section>
   
    );
  }