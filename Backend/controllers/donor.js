const Donor = require("../models/Donor");

//CREATE DONOR

const createDonor = async (req, res) => {
  try {
    const newDonor = Donor(req.body);
    const donor = await newDonor.save();
    res.status(201).json(donor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET ALL DONORS

const getAlldonors = async (req, res) => {
  try {
    const donors = await Donor.find().sort({ createdAt: -1 });
    res.status(201).json(donors);
  } catch (error) {
    res.status(500).json(error);
  }
};

//UPDate DONOR

const updateDonor = async (req, res) => {
  try {
    const updateDonor = await Donor.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(updateDonor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET ONE DONOR
const getOneDonor = async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    res.status(200).json(donor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//DELETE DONOR
const deleteDonor = async (req, res) => {
  try {
    await Donor.findByIdAndDelete(req.params.id);
    res.status(201).json("Donor has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

//STATS
const getDonorsStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const stats = await Donor.aggregate([
      {
        $group: {
          id: "$bloodgroup",
          count: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  deleteDonor,
  getAlldonors,
  getDonorsStats,
  getOneDonor,
  updateDonor,
  createDonor,
};
