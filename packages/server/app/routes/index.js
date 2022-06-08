const express = require("express");
const router = express.Router();
const projects = require('app/controller/projects')

router.route('/login').get((req, res) => {
    res.send('Post your Login Credentials as Json');
});

router.route('/projects').get(projects.projectList)


module.exports = router;