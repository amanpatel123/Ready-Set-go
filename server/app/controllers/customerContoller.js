'use strict';

var Customer = require('../models/customerModel.js');

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
     if(!new_customer.username || !new_customer.name || !new_customer.phoneNo || !new_customer.password){
  
              res.status(400).send({ error:true, message: 'Please provide username/name/phoneNo/password' });
  
          }
  else{
    
    Customer.createCustomer(new_customer, function(err, customer) {
      
      if (err)
        res.send(err);
      res.json(customer);
    });
  }
  };
  
