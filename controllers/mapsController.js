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
    res.status(500).send({ message: "Error in server" });
    console.log({ message: "Error in Google Services", data: error });
  }
};

const autocompleteController = async (req, res) => {
  try {
    const input = req.query.input;

    if (input) {
      const directions = await placesServices.directionsAutocomplete(input);
      res.status(200).json(directions);
    } else {
      res.status(203).send({ message: "No iput" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error in server" });
    console.log({ message: "Error in Google Services", data: error });
  }
};

module.exports = {
  findNearbyOffice,
  autocompleteController,
};
