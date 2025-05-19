const express = require("express");
const { loginUser, registerUser } = require("../controllers/auth.js");
// const app = express();
const router = express.Router();

//REGISTER ROUTER
router.post("/login", loginUser);

//lOGIN ROUTER
router.post("/register", registerUser);

// router.listen(port, () => {
//   console.log(`Server is running on port ${8000}`);
// });
module.exports = router;
