'use strict';

var Customer = require('../models/customerModel.js');
const bcrypt = require('bcryptjs');
var passport = require('passport')

exports.list_all_customer = function(req, res) {
  Customer.getAllCustomer(function(err, customer) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', customer);
    res.send(customer);
  });
};


exports.create_a_customer = function(req, res) {
    var new_customer = new Customer(req.body);

   
    //handles null error 
     if(!new_customer.username || !new_customer.name || !new_customer.phonNo || !new_customer.password){
  
              res.status(400).send({ error:true, message: 'Please provide username/name/phoneNo/password' });
       }
  else{
    // hashing using bcrypt

    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(new_customer.password, salt, function(err, hash){
        console.log("yes, I am in here")
        if(err){
            console.log(err)
        }
        new_customer.password = hash;
        Customer.createCustomer(new_customer, function(err, customer) {
      
          if (err)
            res.send(err);
          res.json(customer);
        
    
        });
      });
       // saving into table 
     
    });
   
  }
  };
  
  
exports.read_a_customer = function(req, res) {
    Customer.getCustomerByUsername(req.params.customerusername, function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
  };
  
  
  exports.update_a_customer = function(req, res) {
    Customer.updateByUsername(req.params.customerusername, new Customer(req.body), function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
  };
  
  
  exports.delete_a_customer = function(req, res) {
  
  
    Customer.remove( req.params.customerusername, function(err, customer) {
      if (err)
        res.send(err);
      res.json({ message: 'Customer Profile successfully deleted' });
    });
  };

  exports.authenticate = function (req, res, next){
    passport.authenticate('local', { 
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    })(req, res, next);
  };

