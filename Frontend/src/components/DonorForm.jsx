"use client";

import React, { useState, useEffect } from "react";

const DonorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    address: "",
    bloodGroup: "",
    contact: "",
    covidVaccinated: "",
    anyDiseases: "",
    lastDonationDate: "",
    weight: "",
    age: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validationRules = {
    name: (value) =>
      value.length >= 2 ? "" : "Name must be at least 2 characters",
    email: (value) =>
      /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email format",
    contact: (value) =>
      /^\d{10}$/.test(value) ? "" : "Contact must be 10 digits",
    age: (value) => (value >= 18 ? "" : "Must be 18 or older"),
    weight: (value) => (value >= 45 ? "" : "Must be at least 45kg"),
    consent: (value) => (value ? "" : "You must provide consent"),
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(validationRules).forEach((field) => {
      if (validationRules[field]) {
        const error = validationRules[field](formData[field]);
        if (error) newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("Please fill all required fields correctly.");
      return;
    }

    try {
      const response = await fetch("/api/donors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Donor information submitted successfully!");
        setFormData({
          name: "",
          email: "",
          gender: "",
          address: "",
          bloodGroup: "",
          contact: "",
          covidVaccinated: "",
          anyDiseases: "",
          lastDonationDate: "",
          weight: "",
          age: "",
          consent: false,
        });
      } else {
        alert("Failed to submit donor information.");
      }
    } catch (error) {
      console.error("Error submitting donor information:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-md max-w-md w-full"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        Blood Donation Form
      </h2>

      {/* Personal Information Section */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </section>

      {/* Medical Information Section */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Medical Information</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bloodGroup"
          >
            Blood Group
          </label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          {errors.bloodGroup && (
            <p className="text-red-500 text-xs italic">{errors.bloodGroup}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="anyDiseases"
          >
            Any Medical Conditions
          </label>
          <textarea
            name="anyDiseases"
            value={formData.anyDiseases}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="3"
            placeholder="List any medical conditions or diseases (if any)"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="covidVaccinated"
          >
            COVID-19 Vaccination Status
          </label>
          <select
            name="covidVaccinated"
            value={formData.covidVaccinated}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Status</option>
            <option value="yes">Vaccinated</option>
            <option value="no">Not Vaccinated</option>
          </select>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contact"
          >
            Contact Number
          </label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          {errors.contact && (
            <p className="text-red-500 text-xs italic">{errors.contact}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="3"
            required
          />
        </div>
      </section>

      {/* Consent Section */}
      <section className="mb-6">
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label className="text-sm text-gray-700">
            I confirm that all information provided is accurate and I consent to
            donate blood
          </label>
        </div>
      </section>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded 
          ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Submit
      </button>
    </form>
  );
};

export default DonorForm;