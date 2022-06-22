const express = require('express');
const router = express.Router();
const controller=require("../controller/authorController")
const blogController=require("../controller/blogController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/authors",controller.createAuthor)
router.post("/blog",blogController.createBlog)

module.exports = router;