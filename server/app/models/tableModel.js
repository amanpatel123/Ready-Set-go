'user strict';
var sql = require('./db.js');

//Table object constructor
var Table = function(table){
    this.status = table.status ? table.status != Null : 1 ;
    this.noOfSeat = table.noOfSeat;
    this.created_at = new Date();
};

Table.createTable = function (newTable, result) {    
    sql.query("INSERT INTO `table` set ?", newTable, function (err, res) {
            
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

Table.getAllTable = function (result) {
    sql.query("Select * from `table`", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('table : ', res);  

             result(null, res);
            }
        });   
}

Table.getTableByNo = function (tableno, result) {
    sql.query("Select * from `table` where tableNo = ? ", tableno, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};

// Not yet working properly -- need help 
Table.updateByNo = function(tableno, table, result){
    sql.query("UPDATE `table` SET status = ? WHERE tableNo = ?", [table.status, tableno], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
  };

  Table.remove = function(tableno, result){
       sql.query("DELETE FROM `table` WHERE tableNo = ?", [tableno], function (err, res) {
  
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                 
                   result(null, res);
                  }
              }); 
  };
  

module.exports= Table;