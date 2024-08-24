'use client';
import Image from "next/image";

export default function Main() {
      return (
        <div>

          <section className="bg-white dark:bg-green-600">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="hidden lg:flex lg:col-span-5">
                <img
                  src="/img7.png"
                  alt="mockup"
                  className="mx-auto"
                />
              </div>
              <div className="mr-auto place-self-center lg:col-span-7 lg:pl-4">
                <h1 className="max-w-2xl mb-6 text-3xl font-extrabold tracking-tight leading-tight md:text-4xl xl:text-5xl dark:text-white">
                  Innovative solutions for Advanced technology
                </h1>
                <div className=" p-6 rounded-lg">
                  <p className="max-w-5xl mb-6 font-normal text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white">
                    Triyas pioneers advanced technology solutions, specializing in CAD/ CAE 
                    technologies and turn-key solutions. Our expert team blends design 
                    innovation with strategic thinking to deliver high-quality products 
                    efficiently. With over 20 years of industry experience, we simplify 
                    complexity, foster innovation, and build lasting client partnerships for 
                    transformative business solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="my-5 p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <img src="/staffing.jpg" alt="Staffing" className="w-full h-48 object-cover rounded-md mb-4" />
                <h4 className="text-xl font-semibold mb-4">Staffing</h4>
                <p className="text-gray-700">
                Provide top-tier staffing solutions to ensure your team is equipped with 
                the best talent in the industry.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <img src="/cad.avif" alt="Computer Aided Engineering" className="w-full h-48 object-cover rounded-md mb-4" />
                <h4 className="text-xl font-semibold mb-4">Computer Aided Engineering</h4>
                <p className="text-gray-700">
                Offer cutting-edge computer-aided design and engineering services to 
                optimize your product development processes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <img src="/appdesign.png" alt="Design and Development" className="w-full h-48 object-cover rounded-md mb-4" />
                <h4 className="text-xl font-semibold mb-4">Application Design and Development</h4>
                <p className="text-gray-700">
                Specialize in innovative application design and development to bring your 
                digital ideas to life.
                </p>
              </div>
            </div>
          </section>

          <section className="my-5 relative w-full h-[1000px] p-14">
              <h1 className="text-4xl font-bold text-center mb-8">Products</h1>
                <div className="my-4 relative flex flex-col justify-between items-center w-full h-full">
                <div className="absolute top-0 left-0 w-1/2 h-1/2">
                  <img
                    src="/cad-2.jpg"
                    alt="CAD"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 overflow-hidden">
                  <img
                    src="/altair.jpg"
                    className="object-cover w-full h-full"
                  />
                </div>
                  <div className="bg-white rounded-lg p-6 text-center absolute top-0 right-0 w-1/2 h-1/2 overflow-hidden p-14">
                    <h2 className="text-2xl font-bold mb-4">CAD</h2>
                    <p className="text-gray-600">
                      As an Altair Channel Partner, we deliver leading-edge solutions designed to propel your organization towards unprecedented innovation, performance excellence, and enduring success. Our collaboration with Altair spans the gateway to a comprehensive suite of top-tier products and invaluable expertise, poised to redefine your industry's competitive landscape.
                    </p>
                    <div className="flex justify-center mt-6 ">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              View
                            </button>
                            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4">
                              Get In Touch
                            </button>
                          </div>
                  </div>

                  <div className="bg-white text-center absolute bottom-0 left-0 w-1/2 h-1/2  overflow-hidden p-14">
                    <h2 className="text-2xl font-bold">Altair</h2>
                    <p className="text-gray-600">
                      As an Altair Channel Partner, we deliver leading-edge solutions designed to propel your organization towards unprecedented innovation, performance excellence, and enduring success. Our collaboration with Altair spans the gateway to a comprehensive suite of top-tier products and invaluable expertise, poised to redefine your industry's competitive landscape.
                    </p>
                    <div className="flex justify-center mt-6 ">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              View
                            </button>
                            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4">
                              Get In Touch
                            </button>
                          </div>
                  </div>
                  
                </div>
          </section>

          <section className="my-5 p-8">
            <h1 className="text-4xl font-bold text-center ">About</h1>
            <div className="flex items-center justify-center p-6">

              <div className="w-1/2 flex justify-center">
                <Image
                  src="/about.jpg"
                  alt="image"
                  width={400}
                  height={250}
                  className="object-cover"
                />
              </div>

              <div className="w-1/2 flex justify-center p-5">
                <div>
                  <p className="mb-6">
                    At Triyas, we specialize in crafting bespoke solutions for advanced 
                    technology products with unparalleled technological prowess. Our mission is
                    to empower organizations to explore design innovation and develop 
                    game-changing products with superior quality and reduced time to market.
                  </p>

                  <p>
                    We are deeply committed to building meaningful client relationships by
                    consistently providing exceptional value. Comprising technology, design,
                    and business enthusiasts with over 20 years of combined industry 
                    experience, we have a proven track record of delivering remarkable tech 
                    solutions that ensure client satisfaction and provide exceptional 
                    business value.
                  </p>
                </div>
              </div>

            </div>
          </section>

        </div>
  );
}


const features = [
  {
    id: 1,
    imageSrc: '/placeholder.jpg',
    title: 'title',
    description: 'description',
  },
  {
    id: 2,
    imageSrc: '/placeholder.jpg',
    title: 'title',
    description: 'description',
  },
  {
    id: 3,
    imageSrc: '/placeholder.jpg',
    title: 'title',
    description: 'description',
  },
];


