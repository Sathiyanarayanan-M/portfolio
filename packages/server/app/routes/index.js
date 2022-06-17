const express = require("express");
const router = express.Router();
const privateRoute = require("./private");
const projects = require("../controller/projects");
const articles = require("../controller/articles");

router.route("/login").get((req, res) => {
  res.send("Post your Login Credentials as Json");
});

router.route("/projects").get(projects.projectList);
router.route("/articles").get(articles.articlesList);

module.exports = router;
