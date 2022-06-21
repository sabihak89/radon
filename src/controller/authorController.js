const model = require("../model/authorModel")
const modelBlog = require("../model/blogModel")


const createAuthor = async function (req, res) {

    try {
        let authorData = req.body
        let showAuthorData = await model.create(authorData)
        res.status(201).send(showAuthorData)
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err })
    }
}

module.exports.createAuthor = createAuthor