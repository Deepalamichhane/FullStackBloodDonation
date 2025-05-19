const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const donorRoute = require("./routes/donor");
const prospectRoute = require("./routes/prospect");
const { verifyToken } = require("./middlewares/verifyToken"); // ✅ CORRECT

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/donor", verifyToken, donorRoute);
app.use("/api/v1/prospect", verifyToken, prospectRoute);

module.exports = app;

// DO NOT REDEFINE verifyToken HERE!
