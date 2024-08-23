"use client"

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
const Herosection = () => {
  return (
    <section className="w-screen h-screen p-10 gap-0 bg-[url('https://www.arenasolutions.com/wp-content/uploads/Engineers-Using-CAD-and-PLM-768x496.jpg')] bg-cover bg-center ">
    <div className="col-span-7 items-center p-8">
        <h1 className="text-3xl font-extrabold tracking-tight leading-tight md:text-4xl xl:text-5xl text-white mt-20">
          CAD (Computer Aided Design)
        </h1>
        <div className="rounded-lg w-1/2 mt-7">
          <p className="max-w-5xl mb-6 font-normal text-white md:text-lg lg:text-xl">
          At Triyas, we excel in Computer-Aided Design (CAD), delivering precise and innovative solutions for complex engineering projects. Our expertise in advanced CAD technology enhances productivity, reduces errors, and brings creative concepts to life efficiently.</p>        </div>
      </div>
  </section>
  );
};
const Creosection = () => {
  return (
    <section className="w-screen h-64 p-10 gap-0 bg-[url('https://yt3.googleusercontent.com/AfixTxIIWuwBrPk4jTxZyhdscsMKO1BTL-WGxvs0bUn5ErsUCNnbO1gajfIeuJgUzqDks7jHKHw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj')] bg-cover bg-center ">
    <div className="items-center p-8">
        <h1 className="text-xl font-extrabold tracking-tight leading-tight md:text-xl xl:text-xl text-white">
          Creo Parametric 3D Modelling Software
        </h1>
        <div className="rounded-lg w-3/4 mt-7 pl-80">
          <p className="mb-6 font-normal text-white ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
      </div>
  </section>
  );
};

const Benifits= () => {
  return (
    <section className="p-8">
        <h1 className="text-4xl font-bold mb-8">Benefits</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-300 p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
  <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
  <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
  <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
</svg>
</div>
                <h4 className="text-xl font-semibold mb-4 text-center">Minimal Cost</h4>
                <p className="text-gray-800">Creo streamlines the design process, reducing the need for physical prototypes and minimizing costly design errors.
                Minimal Cost.</p>
            </div>
            <div className="bg-gray-300 p-6 justify-center shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M17 8l4 4l-4 4"></path></svg>
                </div>
                <h4 className="text-xl font-semibold mb-4 text-center">Performance</h4>
                <p className="text-gray-800">Creo offers robust simulation and analysis capabilities, ensuring high-performance designs that meet exacting standards and improve overall product quality.</p>
            </div>
            <div className="bg-gray-300 p-6  shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                <div className="flex justify-center mb-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
</svg>
 </div>
                <h4 className="text-xl font-semibold mb-4 text-center">Support</h4>
                <p className="text-gray-800">Regular updates with new features and improvements, backed by strong customer support and extensive learning resources.</p>
            </div>
        </div>
    </section>
  );
}
const Functionality= () => {
  return (
    <div>
        
<h1 className="text-3xl font-bold mb-4 text-center">Creo New Features and Functionality</h1>
<section className="container mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between">
<div className="md:w-1/2 flex justify-center">
              <img
                src="/3dmodel.png"
                alt="Engineering Prototype Image"
                className="rounded-lg shadow-md w-2/3"
              />
            </div>
            <div className="md:w-1/2 ">
              <h2 className="text-3xl font-bold">Generative design</h2>
              <ul className="list-disc text-left ml-5">
        <li>Improved Usability: Refined UI with more intuitive controls and workflows.
        </li><li>Customization Options: Enhanced options for personalizing the interface to suit user preferences.</li>
      </ul>

            </div>
           
          </section>

          <section className="container mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between">

            <div className="md:w-1/2 p-16">
              <h2 className="text-3xl font-bold">Real time simulation</h2>
              <ul className="list-disc text-left ml-5">
        <li>Live Simulation Tools: Enables real-time simulation and analysis, providing immediate feedback on design changes.
       </li><li> Enhanced Accuracy: Improved simulation algorithms for more precise results.</li>
      </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/3dmodel.png"
                alt="Engineering Prototype Image"
                className="rounded-lg shadow-md w-2/3"
              />
            </div>
          </section>

          </div>
  );
}; 
const Onshape = () => {
  return (
    <div className="bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-center">Onshape</h1>
      <section className="container py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:w-1/5">
          <h2 className="text-3xl font-bold mb-4">
            Online CAD and PDM Platforms Powering Today’s Innovators
          </h2>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/legacy.png"
            alt="Concept Ideation Image"
            className="rounded-lg shadow-md w-2/3"
          />
        </div>
      </section>
    </div>
  );
};

const Altair=()=>
{
  return(
    <div>
       <h1 className="text-4xl font-bold text-center ">ALTAIR</h1>
  <section className="container mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between">
    <div className="md:w-1/2 flex justify-center">
      <img
        src="/manufacturingdrawings.png"
        alt="Detailed Design Image"
        className="rounded-lg shadow-md w-2/3"
      />
    </div>
    <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
      <h2 className="text-3xl mb-4">
        DESIGN & SIMULATE WITHOUT BOUNDARIES
      </h2>
      <p className="text-lg w-96">
      Altair’s software products represent a comprehensive, open-architecture solution for data analytics, simulation, and high-performance computing.
      </p>
    </div>
  </section>
    </div>
   
);
};
const Altairproducts1= () => {
  return (
    <section className="p-8">
    <h1 className="text-4xl font-bold text-center mb-8">Altair Products</h1>
    <div className="flex gap-8">
      <div className="bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg w">
        <img src="/transient.png" alt="Staffing" className="w-full h-48 object-cover rounded-md mb-4" />
        <h4 className="text-xl font-semibold mb-4 text-center">SimSolid</h4>
        <p className="text-gray-700">
        Revolutionizing structural simulation by eliminating geometry preparation and meshing, saving time and reducing errors for designers, engineers, and analysts.
        </p>
      </div>

      <div className="bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg w">
        <img src="/transient.png" alt="Staffing" className="w-full h-48 object-cover rounded-md mb-4" />
        <h4 className="text-xl font-semibold mb-4 text-center">SimLab</h4>
        <p className="text-gray-700">
        A versatile, process-driven simulation environment that streamlines complex assembly analysis, simplifying the setup of multiple physics simulations and reducing finite element model creation time.
        SimLab        </p>
      </div>
      <div className="bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg w">
        <img src="/thermalflow.png" alt="Staffing" className="w-full h-48 object-cover rounded-md mb-4" />
        <h4 className="text-xl font-semibold mb-4 text-center">Inspire Form</h4>
        <p className="text-gray-700">
        Inspire Form streamlines the stamping simulation process, aiding product designers and engineers in enhancing designs, ensuring robust manufacturing, and achieving cost-efficiency.
        Inspire Form
                </p>
      </div>    
    </div>

  </section>
  
  );
};

const Altairproducts2= () => {
  return (
    <section className="p-8">
    <h1 className="text-4xl font-bold text-center mb-8">Altair Products</h1>
    <div className="flex gap-8">
      <div className="bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg w">
        <img src="/transient.png" alt="Staffing" className="w-full h-48 object-cover rounded-md mb-4" />
        <h4 className="text-xl font-semibold mb-4 text-center">RapidMiner</h4>
        <p className="text-gray-700">
        RapidMiner's integration includes seamless collaboration with Altair Knowledge Studio, Altair SmartWorks, and Altair SLC for enhanced data analytics and insights.
        </p>
      </div>

      <div className="bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg w">
        <img src="/transient.png" alt="Staffing" className="w-full h-48 object-cover rounded-md mb-4" />
        <h4 className="text-xl font-semibold mb-4 text-center">Pollex</h4>
        <p className="text-gray-700">
        PollEx applies Altair's simulation-driven design philosophy to electronics, enabling physics-based analysis and cross-discipline collaboration. It ensures innovation, performance, reliability, and compliance.
        POLLEX
                </p>
      </div>
      <div className="bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg w">
        <img src="/thermalflow.png" alt="Staffing" className="w-full h-48 object-cover rounded-md mb-4" />
        <h4 className="text-xl font-semibold mb-4 text-center">Panopticon</h4>
        <p className="text-gray-700">
        Panopticon empowers business users, analysts, and engineers, providing real-time insights to those deeply involved in operations and decision-making processes.
        Panopticon        </p>
      </div>    
    </div>

  </section>
  
  );
};
const Plmsoftware= () => {
  return (
    <section className="w-screen h-64 p-10 gap-0 bg-[url('/vision.png')] bg-cover bg-center ">
    <div className="items-center p-8">
        <h1 className="text-xl font-extrabold tracking-tight leading-tight md:text-xl xl:text-xl text-white">
          Windchill PLM Software
        </h1>
        <div className="rounded-lg w-3/4 mt-7 pl-10">
          <p className="mb-6 font-normal text-white w-1/2">
          Realize value quickly with standardized, out-of-the-box functionality across a comprehensive portfolio of core PDM and advanced PLM applications </p>
        </div>
      </div>
  </section>
  );
};

const WindchillPlmsoftware= () => {
  return (
    <section className="w-screen h-64 p-10 gap-0 bg-[url('/vision.png')] bg-cover bg-center ">
    <div className="items-center p-8">
        <h1 className="text-xl font-extrabold tracking-tight leading-tight md:text-xl xl:text-xl text-black">
          Windchill PLM Software
        </h1>
        <div className="rounded-lg w-screen mt-7">
          <p className="mb-6 font-normal text-black">
          Realize value quickly with standardized, out-of-the-box functionality across a comprehensive portfolio of core PDM and advanced PLM applications.            </p>
        </div>
      </div>
  </section>
  );
};
const Plmsystem= () => {
  return (
    <section className="w-screen h-80 p-10">
    <div className="flex p-6">
  <Image
    src="/contact2.jpg"
    alt="image"
    width={500}
    height={300}
    className="object-cover"
  />
<div className="pl-10">
<h3 className="text-xl font-bold">Benifits of Implementing PLM System</h3>
  <p className="mb-2 ml-5">
  Using Windchill in product development offers many advantages, such as lowering costs, speeding up the time to market, improving product quality, and boosting teamwork. By streamlining processes and managing data effectively, it optimizes resources and increases efficiency. This results in higher customer satisfaction and cost savings through less prototyping and better data reuse.
  </p>
</div>


</div>
</section>
  );
};
const Vuforiastudio= () => {
  return (
    <section className="w-screen h-auto ">
        <h1 className="text-4xl font-bold text-center ">AR & VR</h1>

    <div className="col-span-7 items-center p-8 bg-[url('https://www.arenasolutions.com/wp-content/uploads/Engineers-Using-CAD-and-PLM-768x496.jpg')] bg-cover bg-center ">
    <h1 className="text-3xl font-bold w-full md:w-1/4 text-white">
  Modernizing Trading and Work Instructions with Vuforastudio
</h1>

        <div className="rounded-lg w-1/2 ">
          <p className="max-w-5xl font-normal text-white md:text-lg lg:text-xl pl-16">
          Vuforia is a comprehensive, scalable enterprise AR platform. Our wide-ranging solution suite ensures that we can provide the right AR technology to every customer based on their business needs.</p>
        </div>
      </div>
      <div className="w-screen h-64 p-10 gap-0 bg-[url('https://yt3.googleusercontent.com/AfixTxIIWuwBrPk4jTxZyhdscsMKO1BTL-WGxvs0bUn5ErsUCNnbO1gajfIeuJgUzqDks7jHKHw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj')] bg-cover bg-center ">
    <div className="items-center p-8">
        <h1 className="text-3xl font-extrabold tracking-tight leading-tight md:text-3xl xl:text-3xl text-white w-2/3">
        AR & VR: Transforming Experiences Through Immersive Technology
                </h1>
        
      </div>
  </div>
  </section>
  );
};
const Metrices= () => {
  return (
    <div className="bg-white p-10 text-center">
  <h1 className="text-3xl font-bold mb-4">Metrics</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-2">Reduce Training and Labour Costs</h2>
      <p className="list-disc text-left ml-5">
        Leverage existing expertise more effectively
        Improve onboarding and new skills development
        Eliminate the need to train using multiple IT and OT systems
        Cross-train users to improve workforce agility and flexibility
      </p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-2">Improve Safety and Complaince</h2>
      <p className="list-disc text-left ml-5">
      Limit safety risks. Reduce the time and cost of compliance documentation. Create enforcable audit trails for management and reporting. Ensure traceability and quality reconciliation.
      </p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-2">Minimize errors and Downtime</h2>
      <p className="list-disc text-left ml-5">
      Optimize machine configurations and maintenance tasks. Reduce overall operator and assembly errors. Provide role-based unified views into previously siloed data. Improve users own comprehension of complex products and processes.
      </p>
    </div>
  </div>
</div>
  );
};
const Vuforia= () => {
  return (
    <div>
        
<h1 className="text-3xl font-bold mb-4 text-center">Features of Vuforia (AR & VR)</h1>
<section className="container mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between">
<div className="md:w-1/2 flex justify-center">
              <img
                src="/3dmodel.png"
                alt="Engineering Prototype Image"
                className="rounded-lg shadow-md w-2/3"
              />
            </div>
            <div className="md:w-1/2 ">
              <h2 className="text-3xl font-bold">Vuforia Engine</h2>
              <p className="text-lg pl-10">
              Optimize machine configurations and maintenance tasks. Reduce overall operator and assembly errors. Provide role-based unified views into previously siloed data. Improve users own comprehension of complex products and processes.
              </p>
            </div>
           
          </section>

          <section className="container mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between">

            <div className="md:w-1/2 ">
              <h2 className="text-3xl font-bold">Vuforia Chalk</h2>
              <p className="text-lg pl-10">
              Vuforia Chalk brings your technicians and experts together to solve problems faster and effectively.Power your people with Chalk's augmented reality remote assistance.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/3dmodel.png"
                alt="Engineering Prototype Image"
                className="rounded-lg shadow-md w-2/3"
              />
            </div>
          </section>

          </div>
  );
};   
const Thingworx= () => {
  return (
    <section className="w-screen h-64 p-10 gap-0 bg-[url('/vision.png')] bg-cover bg-center ">
    <div className="items-center p-8">
        <h1 className="text-xl font-extrabold tracking-tight leading-tight md:text-xl xl:text-xl text-white">
          THing Worx IIOT Platform
        </h1>
        <div className="rounded-lg w-screen mt-7">
          <h3 className="w-1/2 mb-6 font-normal text-white">
          Remove your barriers to digital transformation with ThingWorx, the IIoT platform purpose-built to address your business challenges</h3>
        </div>
      </div>
  </section>
  );
};   
const Almsolution = () => {
  return (
    <section className="w-screen h-64 p-10 gap-0 bg-[url('/vision.png')] bg-cover bg-center ">
    <div className="items-center p-8">
        <h1 className="text-xl font-extrabold tracking-tight leading-tight md:text-xl xl:text-xl text-white">
          Codebanner / ALM Solution
        </h1>
        <div className="rounded-lg w-3/4 mt-7 pl-10">
          <p className="mb-6 font-normal text-white ">
          Codebeamer is an Application Lifecycle Management (ALM) platform for modern product and software development. Discover how Codebeamer can help your organization simplify complex product and software engineering on a large scale.</p>
        </div>
      </div>
  </section>
  );
};
const Optimizing= () => {
  return (
    <section className="w-screen h-64 p-10 gap-0 bg-cyan-200">
    <div className="items-center p-8">
        <h1 className="text-xl font-extrabold tracking-tight leading-tight md:text-xl xl:text-xl text-black">
        Optimizing Service Life: A Comprehensive Guide to Service Lifecycle Management
        </h1>
        <div className="rounded-lg w-3/4 mt-7 pl-40">
          <p className="mb-6 font-normal text-black ">
          Service lifecycle management (SLM) is the practice of aligning service parts management, technical communication, field service management, and product support operations to maximize customer uptime. Companies use SLM to manage parts and inventory, communications across teams, oversee service activities, and support overall product operations to assure that customers’ assets and machines operate with maximum uptime.
          </p>
        </div>
      </div>
</section>
  );
};
const Benifitscodebeamer= () => {
  return (
    <section className="w-screen h-80 p-10">
<h3 className="text-xl font-bold">Explore the benifits of Codebanner</h3>
    <div className="flex  p-6">
<div className="w-1/2 flex justify-center p-5">
  <p className="mb-2">
  For complex products like manufacturing equipment, construction machinery, and transport vehicles, delivering top-quality service and maximizing spare part sales are crucial. This requires excellent maintenance with accurate and accessible product information. Codebeamer supports this by providing efficient diagnosis tools and promoting a process-driven approach.  </p>
</div>

<div className="w-1/2 flex justify-center">
  <Image
    src="/contact2.jpg"
    alt="image"
    width={400}
    height={250}
    className="object-cover"
  />
</div>
</div>
</section>
  );
};
const Codebeamer= () => {
  return (
    <section className="w-screen h-80 p-10">
<h3 className="text-xl font-bold">Enhance your IIOT solution with ThingWorx</h3>
    <div className="flex  p-6">
<div className="w-1/2 flex justify-center p-5">
  <p className="mb-2">
  ThingWorx IIoT platform is a result of years of innovation, addressing challenges in manufacturing, service, and engineering. It offers solutions for workforce efficiency, asset optimization, and more, reducing barriers to building Industrial IoT solutions and enabling smooth scalability from pilots to enterprise-level applications.</p>
</div>

<div className="w-1/2 flex justify-center">
  <Image
    src="/contact2.jpg"
    alt="image"
    width={400}
    height={250}
    className="object-cover"
  />
</div>
</div>
</section>
  );
};
const Codebeamerfeatures= () => {
  return (
    <div>
        
<h1 className="text-3xl font-bold mb-4 text-center">Codebeamer feautures</h1>
<p className="text-lg pl-10">
Codebeamer is a full lifecycle management tool that is great for managing requirements, risks, and tests. It helps teams capture and track requirements, handle risks, and plan and run tests smoothly, making the development process easier.
              </p>
<section className="container mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between">
<div className="md:w-1/2 flex justify-center">
              <img
                src="/3dmodel.png"
                alt="Engineering Prototype Image"
                className="rounded-lg shadow-md w-2/3"
              />
            </div>
            <div className="md:w-1/2 ">
              <h2 className="text-3xl font-bold ">Requirements Management</h2>
              <p className="text-lg pl-10 mt-5">
              Turn market insights into high-quality products quickly. Ensure all stakeholders are clear and aligned to reduce costs and speed up delivery. Track objects and actions throughout the entire process.
              </p>
            </div>
           
          </section>

          <section className="container mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between">

            <div className="md:w-1/2 ">
              <h2 className="text-3xl font-bold">Quality Assurance & Testing</h2>
              <p className="text-lg pl-10 mt-5">
              Integrate quality management into your development processes to build trust in your products. Efficiently monitor and manage QA activities throughout the entire lifecycle, speeding up product verification.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/3dmodel.png"
                alt="Engineering Prototype Image"
                className="rounded-lg shadow-md w-2/3"
              />
            </div>
          </section>

          </div>
  );
}; 
const Slm = () => {
  return (
    <section className="w-screen h-64 p-10 gap-0 bg-[url('/vision.png')] bg-cover bg-center ">
    <div className="items-center p-8">
        <h1 className="text-xl font-extrabold tracking-tight leading-tight md:text-xl xl:text-xl text-white">
          SERVICE LIFECYCLE MANAGEMENT
        </h1>
        <div className="rounded-lg w-3/4 mt-7 pl-10">
          <p className="mb-6 font-normal text-white ">
Drive the future of asst-centric service             </p>
        </div>
      </div>
  </section>
  );
};
const Products = () => {
  return (
    <div>
  <div className="bg-white text-gray-800">
  <h1 className="text-4xl font-bold text-center ">Products</h1>
    <section className="container mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-2">Cloud-Based Platform</h2>
            <ul className="list-disc ml-5">
              <li>No Installation Required</li>
              <li>Anywhere Access</li>
            </ul>
            <h2 className="text-2xl font semibold mb-2 ml-20">Real Time Collabaration</h2>
            <ul className="list-disc ml-20">
              <li>Simulatanious Editing</li> 
              <li>Instant Sharing</li>
            </ul>
            <h2 className="text-2xl font semibold mb-2 ml-40">Advanced Design Tools</h2>
            <ul className="list-disc ml-40">
              <li>Parametruc and Direct Modelling</li>
              <li>Full-Featured CAD</li>
            </ul>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/conceptideation.png"
          alt="Concept Ideation Image"
          className="rounded-lg shadow-md w-2/3"
        />
      </div>
    </section>

    <section className="container mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between">
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/detaileddesign.png"
          alt="Detailed Design Image"
          className="rounded-lg shadow-md w-2/3"
        />
      </div>
      <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
      <h2 className="text-2xl font semibold mb-2 ml-20">Advanced Design Tools</h2>
            <ul className="list-disc ml-20">
              <li>Parametric and Direct Modelling</li>
              <li>Anywhere Access</li>
            </ul>
            <h2 className="text-2xl font semibold mb-2 ml-40">Cloud-Based Platform</h2>
            <ul className="list-disc ml-40">
              <li>No Installation Required</li>
              <li>Full-Featured CAD</li>
            </ul>
      </div>
    </section>
  </div>
</div>

    
  );
};
const Servicelife= () => {
  return (
    <div className="bg-cyan-200 p-10 text-center">
  <a className="text-3xl font-normal">The four Steps in Service life Management</a>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20">
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-2 text-center">Link</h2>
      <p className="list-disc text-left ml-5">
      Forge a Link Between Installed Assets and Customers: Monitor Real-Time Performance, Anticipate Future Events, and Cultivate Customer Relationships
      </p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-2">Orchestrate</h2>
      <p className="list-disc text-left ml-5">
      Create effective service processes, share essential information, and define entitlements to enhance service management
      </p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-2">Execute</h2>
      <p className="list-disc text-left ml-5">
      Ensure work and customer commitments are met by involving stakeholders, optimizing work processes, validating completion, and capturing asset data
      </p>
    </div>
  </div>
</div>
  );
};
export default function Page() {
  return (
    <div>
      <Head>
        <title>Triyas</title>
      </Head>
      <Herosection />
      <Creosection />
      <Benifits />
      <Functionality/>
      <Onshape/>
      <Products/>
      <Altair/>
      <Altairproducts1 />
      <Altairproducts2/>
      <Plmsoftware/>
      <WindchillPlmsoftware/>
      <Plmsystem/>
      <Vuforiastudio/>
      <Metrices/>
      <Vuforia/>
      <Thingworx/>
      <Codebeamer/>
      <Almsolution/>
      <Benifitscodebeamer/>
      <Codebeamerfeatures/>
      <Slm/>
      <Optimizing/>
      <Servicelife/>
    </div>
  );
}