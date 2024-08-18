"use client"

import React from 'react';
import {Phone, Mail, MapPin} from 'lucide-react';
import Image from 'next/image';


export default function Contact(){
  return (
    <section className='my-4 flex flex-col gap-y-10'>
      <div className="flex flex-col md:flex-row p-8 bg-cover bg-center bg-[url('/contact.jpg')]">
        <div className="bg-gray-300 p-8 rounded-lg md:w-1/3 flex flex-col">
          <h2 className="text-black text-lg font-bold mb-6 h-1/3">Contact Information</h2>
          <div className='h-2/3'>
            <div className="mb-4 flex items-center">
              <Phone size={20} />
              <p className="text-black-200 mx-2">+91 0000000000</p>
            </div>
            <div className="mb-4 flex items-center">
              <Mail size={20} />
              <p className="text-black-200 mx-2">email@example.com</p>
            </div>
            <div className="mb-4 flex items-center">
              <MapPin size={20} />
              <p className="text-black-200 mx-2">123 Street, City, Country</p>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 md:ml-8 mt-8 md:mt-0">
          <form className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-black mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Your Name"
                  required
                />
              </div>

            <div>
              <label htmlFor="email" className="block text-black mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label htmlFor="phno" className="block text-black mb-1">Phone</label>
              <input 
                type="tel" 
                name="phno" 
                id="phno" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-black mb-1">Company</label>
              <input 
                type="text" 
                name="company" 
                id="company" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                placeholder="Your Company Name"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="products" className="block text-black mb-1">Select Products:</label>
              <select 
                name="products" 
                id="products" 
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="cad">CAD</option>
                <option value="arvr">AR/VR</option>
                <option value="iot">IOT</option>
                <option value="plm">PLM</option>
              </select>
            </div>

            <div className="col-span-2">
              <label htmlFor="message" className="block text-black mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Your Message"
                rows={5}
                required
              />
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center p-6">

        <div className="w-1/2 flex justify-center p-5">
          <p className="mb-2">
            At Triyas, we are dedicated to delivering befitting solutions for advanced
            technology products with our technological prowess. Our team helps organizations
            explore design innovation and build game-changing products with exceptional quality and
            a reduced time to market.
          </p>
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