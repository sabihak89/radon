const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const middle1 = function (req, res,next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    try {
    let decodedToken = jwt.verify(token, "functionup-radon")
    req.decodedToken = decodedToken
    }
    catch(error) {return  res.status(403).send({ status: false, msg: "token is invalid" }) }
  next();


};

const middle2 = function (req, res, next) {
try{
  let userToBeModified = req.params.userId
  let userLoggedIn = req.decodedToken.userId
  if (userToBeModified != userLoggedIn)
     return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
  next();
}
catch(error){
  res.status(400).send({msg: error.message});
}
};

  module.exports.middle1=middle1;
  module.exports.middle2=middle2;