const express = require("express");
const sequelize = require("sequelize");
const User = require("../models/user");
const mysql = require('mysql');
const router = express.Router();


router.post("/register", async (req, res) => {
  const { name,mobile,password,email,address } = req.body;

  const alreadyExistsUser = await User.findOne({ where: { mobile} }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (alreadyExistsUser) {
    return res.status(409).json({status:409,
      message: "User with mobile already exists!" ,
    });
  }

  // const alreadyExistsName = await User.findOne({ where: { name} }).catch(
  //   (err) => {
  //     console.log("Error: ", err);
  //   }
  // );

  // if (alreadyExistsName) {
  //   return res.status(409).json({status:409,
  //     message: "User with username already exists!" ,
  //    });
  // }

  const newUser = new User({ name,mobile,email,address,password});

  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    
    res.status(500).json({ status:500,message: "Cannot register user at the moment!" });
  });
  
  if (savedUser) res.json({ 
     status:200,
    message: "user registered successfully" ,
   data:{savedUser},
  });
});









module.exports = router;
