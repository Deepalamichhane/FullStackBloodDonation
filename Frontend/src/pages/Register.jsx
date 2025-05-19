import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    bloodGroup: "",
    medicalConditions: "",
    vaccinationStatus: "",
    contactNumber: "",
    address: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact must be 10 digits";
    }
    if (!formData.consent) {
      newErrors.consent = "Consent is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await axios.post("http://localhost:8000/api/auth/register", {
          ...formData,
          covidVaccinationStatus: formData.vaccinationStatus,
          password: "temporaryPass123",
        });
        alert(res.data.message);
      } catch (err) {
        alert(err.response?.data?.message || "Registration failed");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-6">Blood Donation Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Personal Information</h3>
          <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded mt-2" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <select name="gender" className="w-full p-2 border rounded mt-2" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <h3 className="font-semibold mb-2 mt-4">Medical Information</h3>
          <select name="bloodGroup" className="w-full p-2 border rounded" value={formData.bloodGroup} onChange={handleChange}>
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

          <textarea name="medicalConditions" placeholder="List any medical conditions or diseases (if any)" className="w-full p-2 border rounded mt-2" rows="2" value={formData.medicalConditions} onChange={handleChange} />

          <select name="vaccinationStatus" className="w-full p-2 border rounded mt-2" value={formData.vaccinationStatus} onChange={handleChange}>
            <option value="">Select Status</option>
            <option value="Vaccinated">Vaccinated</option>
            <option value="Not Vaccinated">Not Vaccinated</option>
          </select>
        </div>

        <div>
          <h3 className="font-semibold mb-2 mt-4">Contact Details</h3>
          <input type="text" name="contactNumber" placeholder="Contact Number" className="w-full p-2 border rounded" value={formData.contactNumber} onChange={handleChange} />
          {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}

          <textarea name="address" placeholder="Address" className="w-full p-2 border rounded mt-2" rows="2" value={formData.address} onChange={handleChange} />
        </div>

        <div className="flex items-start mt-4">
          <input type="checkbox" name="consent" className="mt-1 mr-2" checked={formData.consent} onChange={handleChange} />
          <label className="text-sm">I confirm that all information provided is accurate and I consent to donate blood</label>
        </div>
        {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

        <button type="submit" className="w-full bg-red-400 text-white py-2 rounded hover:bg-red-500">Submit</button>
      </form>
    </div>
  );
};

export default Register;