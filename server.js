const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./config/db");
require("dotenv").config();

//const seeder = require("./seed");

const routes = require("./routes");

const app = express();

app.use(express.json({ limit: "50mb" }));

// Configuración de CORS
app.use(
  cors({
    origin: "https://fixit-front.vercel.app", // Reemplaza con la URL de tu frontend en Vercel
    credentials: true,
  })
);

connectDB();

app.use(cookieParser());

// Configuración de seguridad de cookies
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://fixit-front.vercel.app"); // Reemplaza con la URL de tu frontend en Vercel
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Configuración de la cookie
  res.cookie("cookieName", "cookieValue", {
    httpOnly: true,
    secure: true,
  });

  next();
});

app.use("/api", routes);

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);

module.exports = app;
