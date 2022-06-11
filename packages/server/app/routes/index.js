const express = require("express");
const router = express.Router();
const private = require("./private");
const projects = require("../controller/projects");

router.route("/login").get((req, res) => {
  res.send("Post your Login Credentials as Json");
});

router.route("/projects").get(projects.projectList);

module.exports = router;
