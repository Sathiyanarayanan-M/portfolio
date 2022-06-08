const express = require("express");
const cors = require("cors");
require('dotenv').config();
require('app-module-path').addPath(__dirname);

const route = require("app/routes")

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api", route)


app.use(function (req, res, next) {
    res.status(404);
    res.send({ error: 'Whatever you\'re searching is not found', status: 'error' });
    return;
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
});