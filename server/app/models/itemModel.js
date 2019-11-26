'user strict';
var sql = require('./db.js');

//Table object constructor
var Item = function(item){
    this.ItemName = item.ItemName;
    this.Price = item.Price;
    this.isAvailable = item.isAvailable;
    this.created_at = new Date();
};

Item.createItem = function (newItem, result) {    
    sql.query("INSERT INTO `Menu_Items` set ?", newItem, function (err, res) {
            
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

Item.getAllItem = function (result) {
    sql.query("Select * from `Menu_Items`", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('items : ', res);  

             result(null, res);
            }
        });   
}

Item.getItemById = function (ItemId, result) {
    sql.query("Select * from `Menu_Items` where ItemId = ? ", ItemId, function (err, res) {             
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
Item.updateById = function(ItemId, item, result){
    sql.query("UPDATE `Menu_Items` SET isAvailable = ? WHERE ItemId = ?", [item.isAvailable, ItemId], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
  };

  Item.remove = function(ItemId, result){
       sql.query("DELETE FROM `Menu_Items` WHERE ItemId = ?", [ItemId], function (err, res) {
  
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                 
                   result(null, res);
                  }
              }); 
  };
  

module.exports= Item;