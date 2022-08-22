const express = require('express');

const router = express.Router();
const privateRoute = require('./private');
const projects = require('../controller/projects');
const articles = require('../controller/articles');
const blogs = require('../controller/blog');
const codeEditor = require('../controller/codeEditor');
const mailer = require('../controller/mailer');

router.route('/login').get((req, res) => {
  res.send('Post your Login Credentials as Json');
});

router.route('/projects').get(projects.projectList);
router.route('/articles').get(articles.articlesList);
router.route('/blogs').get(blogs.getBlogs);
router.route('/blog/post').post(privateRoute.router, blogs.postBlog);
router.route('/code/compile').post(codeEditor.codeCompiler);
router.route('/code/getLanguages/all').get(codeEditor.getAllLanguages);
router.route('/feedback').post(mailer.sendMail);

// router
//   .route("/code/compile/:submission_id")
//   .get(codeEditor.getAllLanguages);

module.exports = router;
