const express = require("express");
const { verifyTokenAndAuthorization } = require("../middlewares/verifyToken");
const router = express.Router();

//ADD DONOR
router.post("/", verifyTokenAndAuthorization, createDonor);

//GET ALL DONORS
router.get("/", getAlldonors);

//UPDATE DONOR
router.put("/:id", updateDonor);

//GET ONE DONOR
router.get("/find/:id", getOneDonor);

//DELETE DONOR
router.delete("/:id", deleteDonor);

//Stats
router.get("/stats", getDonorStats);

module.exports = router;