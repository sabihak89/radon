const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/Controller")
//const bookAndAuthorController= require("../controllers/bookAndAuthorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getBooksInYear/:inputYear", BookController.getBooksInYear)

// router.post("/createBook", bookAndAuthorController.createBook  )
// router.post("/createauthor", bookAndAuthorController.createAuthor  )

// router.get("/getBooksByChetanBhagat", bookAndAuthorController.getBooksByChetanBhagat)

//  router.get("/getAuthorAndUpdatedPrice", bookAndAuthorController.getAuthorAndUpdatedPrice)

// router.get("/getAuthorName", bookAndAuthorController.getAuthorName)

// router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;