const LocalStrategy = require("passport-local").Strategy;
const sql = require('../models/db.js');
const bcrypt = require('bcryptjs');
const Customer = require('../models/customerModel');

module.exports = function(passport) {
     
    // used to serialize the user for the session
     passport.serializeUser(function(user, done) {
		done(null, user.username);
    });

    // used to deserialize the user
    passport.deserializeUser(function(username, done) {
		sql.query("select * from customer where username = "+username,function(err,rows){	
			done(err, rows[0]);
		});
    });


    passport.use(new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

         sql.query("SELECT * FROM `customer` WHERE `username` = '" + email + "'",function(err,rows){
			if (err)
                return done(err);
			 if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            } 
			
			// if the user is found but the password is wrong
            if (!( rows[0].password == password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
			
            // all is well, return successful user
            return done(null, rows[0]);			
		
		});
		


    }));  
    
};