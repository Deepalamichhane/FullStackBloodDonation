"use client";

import React, { useState } from "react";
import Navbar from "../../component/Navigation";
import Footer from "../../component/footer";
import Joinus from "../../component/joinus";

// Separate EligibilityFAQ component
const EligibilityFAQ = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`container mx-auto px-4 py-16 rounded-lg  shadow-lg transition-transform duration-300 ${isHovered ? "transform scale-105" : ""
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-3xl font-bold mb-8 text-center animate-pulse">
        Eligibility & FAQ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-9">
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 animate-slide-in-left">
            Who Can Donate?
          </h3>
          <ul className="list-disc pl-6 text-xl">
            <li className="animate-slide-in-bottom">Must be in good health</li>
            <li className="animate-slide-in-bottom delay-100">
              Weigh at least 110 lbs
            </li>
            <li className="animate-slide-in-bottom delay-200">
              Age 17 or older
            </li>
          </ul>
        </div>
        <div className="animate-fade-in delay-200">
          <h3 className="text-2xl font-bold mb-4 animate-slide-in-right">
            Frequently Asked Questions
          </h3>
          <details className="animate-slide-in-bottom">
            <summary className="text-lg font-medium cursor-pointer">
              Can I donate if I have a tattoo?
            </summary>
            <p className="mt-2 text-lg">
              Typically, you can donate after a waiting period (e.g., 6-12
              months) following a tattoo. Check with your local blood center
              for specific guidelines.
            </p>
          </details>
          <details className="animate-slide-in-bottom delay-100">
            <summary className="text-lg font-medium mt-5 cursor-pointer">
              How often can I donate blood?
            </summary>
            <p className="mt-2 text-lg ">
              You can typically donate whole blood every 56 days, or double red
              cells every 112 days. Platelet donations can be done more
              frequently, as often as every 7 days.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};



export default function ContactUs() {
  return (
    <div>

      <Navbar />

      <Joinus />

      {/* Why Donate Blood Section */}
      <section className="py-2 mb-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Donate Blood?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Saves Lives</h3>
              <p className="text-lg">
                Your blood donation can be a lifeline for accident victims,
                surgery patients, and those battling critical illnesses.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Community Impact</h3>
              <p className="text-lg">
                Blood donation is a selfless act that strengthens our community
                and ensures that life-saving resources are readily available.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Health Benefits</h3>
              <p className="text-lg">
                Donating blood can help reduce the risk of heart disease and
                stimulate the production of new blood cells.
              </p>
            </div>
          </div>
        </div>
      </section>



      <EligibilityFAQ />


      {/* basic details */}
      <div className="bg-gradient-to-r from-red-100 to-pink-100 min-h-screen flex flex-col justify-center items-center py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-8">
            {/* Blood Drop 1 */}
            <div className="relative flex flex-col items-center">
              <div className="relative">
                {/* Rounded top */}
                <div className="absolute w-20 h-20 bg-red-600 rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>
                {/* Tapered body */}
                <div className="w-20 h-32 bg-red-600 rounded-b-full relative"></div>
              </div>
              <div className="mt-4 text-sm text-gray-700 text-center">
                More than 41,000 blood donations are needed every day.
              </div>
            </div>

            {/* Blood Drop 2 */}
            <div className="relative flex flex-col items-center">
              <div className="relative">
                {/* Rounded top */}
                <div className="absolute w-20 h-20 bg-red-600 rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>
                {/* Tapered body */}
                <div className="w-20 h-32 bg-red-600 rounded-b-full relative"></div>
              </div>
              <div className="mt-4 text-sm text-gray-700 text-center">
                Every two seconds someone needs blood.
              </div>
            </div>

            {/* Blood Drop 3 */}
            <div className="relative flex flex-col items-center">
              <div className="relative">
                {/* Rounded top */}
                <div className="absolute w-20 h-20 bg-red-600 rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>
                {/* Tapered body */}
                <div className="w-20 h-32 bg-red-600 rounded-b-full relative"></div>
              </div>
              <div className="mt-4 text-sm text-gray-700 text-center">
                Each donation can help save the lives of up to three people.
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
            <p className="text-xl italic text-gray-800">
              "Donation of Blood means a few minutes to you but a lifetime for somebody else."
            </p>
          </div>
        </div>
      </div>





      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-serif mb-4 text-center">
          For any complain Or suggestions comment here
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2 sr-only" // Hide the label
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name" // Added placeholder
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Comment here" // Added placeholder
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex justify-center"> {/* Center the button */}
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </section>



      <Footer />

      <script src="https://cdn.tailwindcss.com"></script>

      <style jsx>{`
        /* Add your CSS here */
        .review {
          /* Example styling */
          /* ... */
        }
        .to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: none; /* Hidden by default */
          /* ... other styles */
        }

        .to-top.active {
          display: block; /* Shown when scrolled */
        }
      `}</style>
    </div>
  );
}


