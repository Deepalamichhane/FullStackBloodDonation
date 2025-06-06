const express = require("express");
const { createProspect, getAllProspects, updateProspect, getOneProspect, deleteProspect } = require("../controllers/prospect");
const router = express.Router();

//ADD PROSPECT
router.post("/", createProspect);

//GET ALL PROSPECTS
router.get("/", getAllProspects);

//UPDATE PROSPECT
router.put("/:id", updateProspect);

//GET ONE PROSPECT
router.get("/find/:id", getOneProspect);

//DELETE PROSPECT
router.delete("/:id", deleteProspect);



module.exports = router;