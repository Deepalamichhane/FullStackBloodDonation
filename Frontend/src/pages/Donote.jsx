"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../component/Navigation";
import Footer from "../../component/footer";
import DonationOption from "../../component/DonationOption";
import DonorForm from "../components/DonorForm";

// Move DonorInformation to a separate component file if needed
const DonorInformation = ({ name, bloodGroup, contact, address }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="text-gray-700">Blood Group: {bloodGroup}</p>
    <p className="text-gray-700">Contact: {contact}</p>
    <p className="text-gray-700">Address: {address}</p>
  </div>
);

const DonatePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <DonorForm />

        <div className="mb-6 mt-8">
          <h3 className="text-xl font-medium mb-2">Learn More</h3>
          <p className="text-gray-700">
            If you are new to blood donation, download our free donor's guide.
          </p>
          <button
            className="text-blue-500 hover:underline mt-2"
            aria-label="Learn More"
          >
            Learn More
          </button>
        </div>

        <DonationOption />
      </main>
      <Footer />
    </div>
  );
};

<DonorForm/>
  

// Export the main page component
export default DonatePage;
