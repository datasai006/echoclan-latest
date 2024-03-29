const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const router = express.Router();
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  // const salt = e(10);
  var mobile = req.body.mobile;
  var password = req.body.password;
  //  var password  = hashSync(req.body.password, salt);

  //   const { mobile, password } = req.body;

  const userWithMobile = await User.findOne({ where: { mobile } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );
  if (userWithMobile == null) {
    return res
      .status(401)
      .json({ status: 401, message: "Mobile or Password does not match!" });
  }

  console.log(userWithMobile);
  console.log(password);
  //  const userWithPassword = await User.findOne({ where: { password } }).catch(
  //   (err) => {
  //     console.log("Error: ", err);
  //   }
  //  );
  const verifyPassword = bcrypt.compareSync(password, userWithMobile.password);
  if (verifyPassword) {
    userWithMobile.password = undefined;
  }

  if (!verifyPassword)
    return res
      .status(401)
      .json({ status: 401, message: "Mobile or Password does not match!" });

  // if (userWith.password !== password)
  //  return res
  //     .status(401)
  // .json({ status:401,message: "Mobile or Password does not match!" });

  const jwtToken = jwt.sign(
    {
      id: userWithMobile.id,
      mobile: userWithMobile.mobile,
      name: userWithMobile.name,
    },
    process.env.JWT_SECRET
  );

  res.json({ status: 200, message: "Welcome back", token: jwtToken });
});

module.exports = router;

//res.json({status:200, message: "Welcome back,"  + userWithMobile.name , token: jwtToken });
