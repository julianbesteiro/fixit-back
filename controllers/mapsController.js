const mongoose = require("mongoose");

const { placesServices } = require("../services");

const findNearbyOffice = async (req, res) => {
  try {
    const { lat, lng } = req.query;
    if (!lat && !lng) {
      res
        .status(400)
        .send({ message: "The position off user was not provided" });
    }
    const office = await placesServices.findNearbyOfficeServices({ lat, lng });
    res
      .status(200)
      .send({ message: "The Nearby office are found", data: office });
  } catch (error) {
    console.log({ message: "Error in Google Services", data: error });
  }
};

module.exports = {
  findNearbyOffice,
};
