const express = require("express");
const cors = require("cors");
require("dotenv").config();

const route = require("./app/routes");
const errorHandler = require("./app/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", route);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error.message);
});
