import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative w-full h-screen bg-white dark:bg-green-600">
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold mb-4">About Us</h1>
          <p className="text-white text-lg mb-2">
            At Triyas, our team of experts is dedicated to delivering
            uncompromising quality through timely design and engineering
            solutions. We employ an out-of-the-box approach combined with
            strategic thinking to help our clients create products that stand as
            radical breakthroughs. By leveraging the latest technology trends,
            we ensure excellence through streamlined in-house processes.
          </p>
          <h4 className="text-white text-2xl font-bold mb-4">Our Commitment</h4>
          <p className="text-white">
            We firmly believe in building meaningful relationships with our
            clients by consistently providing exceptional value. Our dedication
            to quality and innovation drives us to help organizations achieve
            their goals with superior products and services.
          </p>
        </div>
      </header>

      <section className="py-12 px-8 bg-white">
        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center">
            <Image
              src="/mission.png"
              alt=""
              width={300}
              height={200}
              className="object-cover"
            />
            <div>
              <h3 className="text-xl font-bold mt-4 text-center">Our Vision</h3>
              <p className="text-center mt-2">
                To be a leading provider of advanced technology solutions,
                fostering creativity and excellence to drive client success and
                build meaningful partnerships.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <h3 className="text-xl text-center font-bold mt-4">
                Our Mission
              </h3>
              <p className="text-center mt-2">
                To deliver innovative, high-quality design and engineering
                solutions with strategic thinking and timely execution, helping
                clients achieve radical breakthroughs
              </p>
            </div>
            <Image
              src="/vision.png"
              alt=""
              width={300}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
