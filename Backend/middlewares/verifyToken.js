const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const donorRoute = require("./routes/donor");
const prospectRoute = require("./routes/prospect");
const verifyToken = require("./middlewares/verifyToken");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/donor", verifyToken, donorRoute);
app.use("/api/v1/prospect", verifyToken, prospectRoute);

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === "admin") {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};


module.exports = {verifyTokenAndAuthorization}