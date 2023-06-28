const mongoose = require("mongoose");
require("dotenv").config();

const NAME = process.env.DB_NAME;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;

// Conexión a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${USER}:${PASSWORD}@cluster0.4wiuu7f.mongodb.net/${NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB", error);
  }
};

module.exports = { connectDB, mongoose };
