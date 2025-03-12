const express = require("express");
const { loginUser, registerUser } = require("../controllers");
const router = express.Router();

//REGISTER ROUTER
router.post("/login", loginUser);

//lOGIN ROUTER
router.post("/register", registerUser);

module.exports = router;
