const mongoose = require("mongoose");

const { imageImgurServices } = require("../services");

const imageUpdate = async (req, res) => {
  try {
    console.log(req.body);
    const url = await imageImgurServices.setImageUrl(req.body.image);
    res.status(200).send(url);
  } catch (error) {
    console.log({ message: "Error in Google Services", data: error });
  }
};

module.exports = {
  imageUpdate,
};
