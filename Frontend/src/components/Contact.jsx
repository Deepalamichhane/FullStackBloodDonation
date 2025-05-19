"use client";

import React, { useState, useEffect } from "react";
import PersonalInfoForm from './PersonalInfoForm';
import MedicalHistoryForm from './MedicalHistoryForm';
import { validateDonorForm } from '../utils/validation';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    bloodGroup: "",
    occupation: "",
    previousDonation: "",
    diseases: "",
    allergies: "",
    positiveTests: "",
    cardiacProblems: "",
    bleedingDisorders: "",
    medication: "",
    consent: false,
    signature: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    const validationErrors = validateDonorForm(formData);
    setErrors(validationErrors);
    setIsFormValid(Object.keys(validationErrors).length === 0);
  }, [formData]);

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
      alert("Please fill all required fields correctly and provide consent.");
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
          firstName: "",
          lastName: "",
          dob: "",
          email: "",
          phone: "",
          address: "",
          bloodGroup: "",
          occupation: "",
          previousDonation: "",
          diseases: "",
          allergies: "",
          positiveTests: "",
          cardiacProblems: "",
          bleedingDisorders: "",
          medication: "",
          consent: false,
          signature: "",
        });
        setShowForm(false);
      } else {
        alert("Failed to submit donor information.");
      }
    } catch (error) {
      console.error("Error submitting donor information:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        {showForm ? "Hide Form" : "Show Donor Form"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Blood Donation Form</h2>
          
          <PersonalInfoForm
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
          
          <hr className="my-4 border-t border-gray-300" />
          
          <MedicalHistoryForm
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />

          <hr className="my-4 border-t border-gray-300" />

          <h3 className="text-xl font-semibold mb-2">Consent & Signature</h3>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Consent *
            </label>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mr-2 leading-tight"
                required
              />
              <span className="text-sm text-gray-700">
                I give my consent to donate blood and understand the terms and conditions.
              </span>
            </div>
            {errors.consent && (
              <p className="text-red-500 text-xs italic">{errors.consent}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signature">
              Signature *
            </label>
            <input
              type="text"
              name="signature"
              placeholder="Type your full name as your signature"
              value={formData.signature}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            {errors.signature && (
              <p className="text-red-500 text-xs italic">{errors.signature}</p>
            )}
          </div>

          <hr className="my-4 border-t border-gray-300" />

          <button
            type="submit"
            className={`w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              !isFormValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isFormValid}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;