const express = require("express");
const User = require("../models/user");
const session = require('express-session');
const mysql = require('mysql');
const router = express.Router();

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'ecoclan-latest'
});

router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

router.post('/verify', function(request, response) {
	// Capture the input fields
	let mobile = request.body.mobile;
	let otp = request.body.otp;
	// Ensure the input fields exists and are not empty
	if (mobile && otp) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM users WHERE mobile = ? AND otp = ?', [mobile, otp], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.mobile = mobile;
				// Redirect to home page
				response.redirect('/');
			} else {
                response.json({ 
                    status:401,
                   message: "Incorrect mobile and/or otp!" ,
                
                 });
        
			}			
			response.end();
		});
	} else {
		response.send('Please enter mobile and otp!');
		response.end();
	}
});


module.exports = router;