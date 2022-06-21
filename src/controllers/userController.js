const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
  }
  catch(error){
    res.send({ msg: savedData });
  };
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
  }
  catch(error){
    res.status(400).send({msg: error.message});
  };
};

const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

//UPDATE FUNCTION
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send({ status: false, msg: "No Such User Exists" });
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId },userData, {new:true});
  res.send({ status: true, data: updatedUser });
};



//DELETE FUNCTION

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let user= await userModel.findById(userId);
  if (!user) {
    return res.send({ status: false, msg: "No Such User Exists" })
  }
  let deleteUser = await userModel.findByIdAndUpdate({ _id: userId }, { $set: { isDeleted: true }},{new: true });
  res.send({ status: true, data: deleteUser });

};




module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;

