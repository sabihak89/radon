const model = require("../model/authorModel")
const modelBlog = require("../model/blogModel")


const createAuthor = async function (req, res) {
    let authorData = req.body
    let showAuthorData = await model.create(authorData)
    res.send(showAuthorData)
}

module.exports.createAuthor=createAuthor