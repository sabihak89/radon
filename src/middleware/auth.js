const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const middle = function (req, res,next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    try {
    let decodedToken = jwt.verify(token, "functionup-radon")
    req["decodedToken"] = decodedToken
  }
  catch (error) { return res.send({ status: false, msg: "token is invalid" }) }
  next();
};

  module.exports.middle=middle;