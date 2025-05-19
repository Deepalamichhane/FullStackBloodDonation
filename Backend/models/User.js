const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    medicalConditions: { type: String }, // Optional
    covidVaccinationStatus: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true },
    consent: { type: Boolean, required: true },
    status: { type: Number, default: 0 },
    password: { type: String, required: true },
    role: { type: String, default: "donor" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
