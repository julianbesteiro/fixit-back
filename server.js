const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./config/db");
const port = process.env.BACK_PORT;

//const seeder = require("./seed");

const routes = require("./routes");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
connectDB();

app.use(cookieParser());

app.use("/api", routes);

app.listen(port, () => console.log("Server listening on assigned port"));

module.exports = app;
