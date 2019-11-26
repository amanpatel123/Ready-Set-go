'user strict';
var sql = require('./db.js');

//manager object constructor
var manager = function(manager){
    this.Musername = manager.Musername;
    this.name = manager.name;
    this.password = manager.password;
    this.created_at = new Date();
};

manager.createManager = function (newManager, result) {    
    sql.query("INSERT INTO manager set ?", newManager, function (err, res) {
            
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

manager.getAllManager = function (result) {
    sql.query("Select * from manager", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('manager : ', res);  

             result(null, res);
            }
        });   
}

manager.getManagerByUsername = function (managerusername, result) {
    sql.query("Select * from manager where Musername = ? ", managerusername, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};


manager.updateByUsername = function(managerusername, manager, result){
    sql.query("UPDATE manager SET name = ?,password = ? WHERE Musername = ?", [manager.name, manager.password, managerusername], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
  };

manager.remove = function(managerusername, result){
       sql.query("DELETE FROM manager WHERE Musername = ?", [managerusername], function (err, res) {
  
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                   result(null, res);
                  }
              }); 
  };
  

module.exports= manager;