const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const route = require("./app/routes");
const errorHandler = require("./app/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", route);

app.use(errorHandler);
app.use(function (req, res, next) {
  res.status(404);
  res.send({
    status: "error",
    error: true,
    message: "Whatever you searching for it's not found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error.message);
});
