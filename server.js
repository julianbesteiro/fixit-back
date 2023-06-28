const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./config/db");
require("dotenv").config();

//const seeder = require("./seed");

const routes = require("./routes");

const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(cookieParser());

// Configuración de CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "https://fixit-front.vercel.app"],

    credentials: true,
  })
);

connectDB();

app.use("/api", routes);

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);

module.exports = app;
