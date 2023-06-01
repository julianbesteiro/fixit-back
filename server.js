const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./config/db");

//const seeder = require("./seed");

const routes = require("./routes");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
connectDB();

app.use(cookieParser());

app.use("/api", routes);

app.listen(8080, () => console.log("Server listening on port 8080"));

module.exports = app;
