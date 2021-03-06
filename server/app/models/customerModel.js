'user strict';
var sql = require('./db.js');

//customer object constructor
var customer = function(customer){
    this.username = customer.username;
    this.name = customer.name;
    this.phonNo = customer.phonNo;
    this.password = customer.password;
    this.created_at = new Date();
};

customer.createCustomer = function (newCustomer, result) {    
    sql.query("INSERT INTO customer set ?", newCustomer, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};

customer.getAllCustomer = function (result) {
    sql.query("Select * from customer", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('customer : ', res);  

             result(null, res);
            }
        });   
}

customer.getCustomerByUsername = function (customerusername, result) {
    sql.query("Select * from customer where username = ? ", customerusername, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};


customer.updateByUsername = function(customerusername, customer, result){
    sql.query("UPDATE customer SET name = ?,phonNo = ?,password = ? WHERE username = ?", [customer.name, customer.phonNo, customer.password, customerusername], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
  };

  customer.remove = function(customerusername, result){
       sql.query("DELETE FROM customer WHERE username = ?", [customerusername], function (err, res) {
  
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                 
                   result(null, res);
                  }
              }); 
  };
  

module.exports= customer;