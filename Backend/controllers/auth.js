const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config();

//REGISTER USER
const registerUser = async (req, res) => {
  const {
    name,
    email,
    gender,
    bloodGroup,
    medicalConditions, // Optional
    covidVaccinationStatus,
    contactNumber,
    address,
    consent,
  } = req.body;

  // Validate the required fields
  if (
    !name ||
    !email ||
    !gender ||
    !bloodGroup ||
    !covidVaccinationStatus ||
    !contactNumber ||
    !address ||
    consent === undefined
  ) {
    return res
      .status(400)
      .json({ message: "All required fields must be provided." });
  }

  const newUser = new User({
    name,
    email,
    gender,
    bloodGroup,
    medicalConditions, // Optional
    covidVaccinationStatus,
    contactNumber,
    address,
    consent,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS
    ).toString(),
  });

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered." });
    }

    const user = await newUser.save();

    // Send registration confirmation email
    const messageOption = {
      from: `Your App Name <no-reply@yourapp.com>`, // Replace with your sender address
      to: user.email,
      subject: "Welcome to Nepal BloodLine!",
      text: `Hi ${user.name},\n\nThank you for registering with us.\n\nBest regards,\nYour Team`,
      html: `<p>Hi <strong>${user.name}</strong>,</p><p>Thank you for registering with us.</p><p>Best regards,<br>Your Team</p>`,
    };

    await sendMail(messageOption); // Ensure sendMail function is correctly implemented
    return res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error. Please try again." });
  }
};

//LOGIN USER
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "You have not registered." });
    }

    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS
    );
    const originalPassword = decryptedPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== password) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const { password: userPassword, ...userInfo } = user._doc;

    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SEC,
      { expiresIn: "10d" }
    );

    return res.status(200).json({ ...userInfo, accessToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error. Please try again." });
  }
};

module.exports = { loginUser, registerUser };
