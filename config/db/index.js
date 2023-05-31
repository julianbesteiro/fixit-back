const mongoose = require("mongoose");

// Conexión a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/fixit", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB", error);
  }
};

module.exports = { connectDB, mongoose };
