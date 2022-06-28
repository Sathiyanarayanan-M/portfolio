const express = require("express");
const router = express.Router();
const privateRoute = require("./private");
const projects = require("../controller/projects");
const articles = require("../controller/articles");
const codeEditor = require("../controller/codeEditor");

router.route("/login").get((req, res) => {
  res.send("Post your Login Credentials as Json");
});

router.route("/projects").get(projects.projectList);
router.route("/articles").get(articles.articlesList);
router.route("/code/compile").post(codeEditor.codeCompiler);
router.route("/code/getLanguages/all").get(codeEditor.getAllLanguages);
// router
//   .route("/code/compile/:submission_id")
//   .get(codeEditor.getAllLanguages);

module.exports = router;
