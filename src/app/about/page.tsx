import Image from 'next/image';

export default function About(){
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative w-full h-screen">
        <Image
          src="/placeholder.jpg"
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold mb-4">About Us</h1>
          <p className="text-white text-lg mb-2">At Triyas, our team of experts is 
            dedicated to delivering uncompromising quality through timely design and 
            engineering solutions. We employ an out-of-the-box approach combined with 
            strategic thinking to help our clients create products that stand as radical 
            breakthroughs. By leveraging the latest technology trends, we ensure excellence
            through streamlined in-house processes.
          </p>
          <h4 className="text-white text-2xl font-bold mb-4">Our Commitment</h4>
          <p className="text-white">We firmly believe in building meaningful 
            relationships with our clients by consistently providing exceptional value. 
            Our dedication to quality and innovation drives us to help organizations 
            achieve their goals with superior products and services.</p>
        </div>
      </header>

      <section className="py-12 px-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/vision.jpg"
                alt=""
                width={300}
                height={200}
                className="object-cover"
              />
              <h3 className="text-xl font-bold mt-4">Title</h3>
              <p className="text-center mt-2">Description</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/vision.jpg"
                alt=""
                width={300}
                height={200}
                className="object-cover"
              />
              <h3 className="text-xl font-bold mt-4">Title</h3>
              <p className="text-center mt-2">Description</p>
            </div>
        </div>
      </section>
    </div>
  );
};
