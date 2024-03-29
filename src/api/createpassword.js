const express = require("express");
const User = require("../models/user");
const mysql = require('mysql');
const router = express.Router();

const { hashSync, genSaltSync, compareSync } = require("bcrypt");


const bcrypt = require('bcrypt');


// router.get('/createpassword', function (req, res, next) {
//     console.log("Router Working");
// })


const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'ecoclan-latest'
});


router.post('/createpassword', function(req ,res){
    
    const salt = bcrypt.genSaltSync(10);
    req.body.password = hashSync(req.body.password, salt);

// const salt = bcrypt.genSalt(10);
//  const secpass = bcrypt.hash(req.body.password,salt);
// secpass = req.body.password;

 var mobile = req.body.mobile;
    var password = req.body.password;
//  const { mobile, password } = req.body;
    
 var sql = "UPDATE `users` SET `password` = ?,`status`='ACTIVE' WHERE `mobile`=?" 
        connection.query(sql,[password,mobile,],function(error, result){
            if(error) throw error;
            res.json({ 
                status:200,
               message: "password has been successfully updated" ,
              data:{result},
             });
          
});

});



// router.post('/status', function(req ,res){
//     const { mobile} = req.body;
  
    
//   var sql = "UPDATE `users` SET `status` = 'PENDING' WHERE `address`= null" 
//         connection.query(sql,function(error, result){
//             if(error) throw error;
//             res.json({ 
//                 status:200,
//                message: "STATUS IS UPDATED" ,
//               data:{result},
//              });
          
// });

// });


    // connection.query('UPDATE users SET ? WHERE email ="' + result[0].email + '"', data, function(err, result) {

    // UPDATE `members` SET `contact_number` = '0759 253 542' WHERE `membership_number` = 1;



    module.exports = router;
