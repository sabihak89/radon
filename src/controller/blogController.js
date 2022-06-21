const blogModel = require("../model/blogModel");
const authorModel = require("../model/authorModel")

/*----------------CreateBlog-----------------------------*/
const createBlog = async function (req, res) {
    try {
        let data = req.body
        let authorId = data.authorId
        let authorid = await authorModel.findById(authorId)
        if (authorid) {
            let savedData = await blogModel.create(data);
            res.status(201).send({ status: true, msg: savedData });
        } else {
            res.status(400).send({ status: false, msg: "author id is not valid" })
        }
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
};
/*---------------------end-------------------------*/
// const createBlog = async function (req, res) {
//     try {
//         let data = req.body
//         let authorId = data.authorId
//         if (!authorId) return res.status(400).send({ status: false, msg: "author is not present" })
//         let Authorid = await authorModel.findById(authorId)
//         console.log(Authorid)
//         let authorIdA = Authorid._id
//         console.log(authorId, authorIdA)
//         if (authorId != authorIdA) return res.status(400).send({ satatus: false, msg: "author id invalid" })
//         let BlogData = await blogModel.create(data)
//         res.status(201).send({ status: true, Data: BlogData })
//     }
//     catch (error) {
//         res.satatus(500).send({ status: false, msg: error })
//     }
// }


module.exports.createBlog = createBlog
