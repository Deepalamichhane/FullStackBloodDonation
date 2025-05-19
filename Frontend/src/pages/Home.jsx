/* eslint-disable @next/next/no-sync-scripts */
"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import {
  Droplet,
  MapPin,
  Search,
  MinusIcon,
  User,
  ChevronRight,
} from "lucide-react";
import DonationOption from "../components/DonationOption";
import Featured from "../components/featured";

export default function Home() {
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("A+");
  const [city, setCity] = useState("Kathmandu");
  const [mobile, setMobile] = useState("");
  const [showToTop, setShowToTop] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}, for signing up as a donor!`);
    console.log({ name, bloodGroup, city, mobile });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.pageYOffset > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const initMap = () => {
    const mapCanvas = document.getElementById("mapCanvas");
    if (!mapCanvas || typeof window.google === "undefined") {
      console.error("Google Maps API not loaded or map canvas not found");
      return;
    }

    const map = new window.google.maps.Map(mapCanvas, {
      center: { lat: 27.7172, lng: 85.324 },
      zoom: 12,
    });

    new window.google.maps.Marker({
      position: { lat: 27.7172, lng: 85.324 },
      map,
      title: "Donor Location",
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.google?.maps) {
      initMap();
    }
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>Blood Donation Center</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
          async
          defer
        ></script>
      </Head>

      <Navbar />
      <Hero />
      <DonationOption />

      {/* Featured Section */}
      <Featured/>


      {/* Sign Up Section */}
      <section id="signup" className="container mx-auto my-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Sign Up as a Donor
        </h2>
        <form
          id="signupForm"
          className="max-w-lg mx-auto bg-white p-6 rounded shadow"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bloodGroup" className="block text-gray-700">
              Blood Group
            </label>
            <select
              id="bloodGroup"
              className="w-full p-2 border rounded"
              required
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              className="w-full p-2 border rounded"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign Up
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section id="map" className="container mx-auto my-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Find Nearby Donors
        </h2>
        <div id="mapCanvas" className="w-full h-96 bg-gray-200"></div>
      </section>

      {/* Number of Donors Section */}
      <section className="py-16">
        <div className="container mx-auto flex md:flex-row flex-col items-center justify-between">
          {/* Left Column: Image */}
          <div className="md:w-1/2 pr-8">
            <img
              src="../public/image1.png"
              alt="Donate Blood Illustration"
              width={500}
              height={400}
              className="rounded-md"
              objectFit="contain"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="md:w-1/2 text-left mt-8 md:mt-0">
            <h3 className="text-2xl text-gray-700 mb-4">
              Number Of Donors Are Increasing
            </h3>

            <div className="flex items-center space-x-4">
              <User size={32} color="red" className="text-red-600" />
              <p className="text-5xl font-bold text-red-600">8,000</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {showToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="to-top active"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      <style jsx>{`
        .to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 100;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .to-top.active {
          opacity: 1;
          visibility: visible;
        }

        @media (max-width: 768px) {
          .to-top {
            bottom: 15px;
            right: 15px;
          }
        }
      `}</style>
    </div>
  );
}
