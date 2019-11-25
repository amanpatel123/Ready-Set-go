'use strict';

var Table = require('../models/tableModel.js');

exports.list_all_table = function(req, res) {
  Table.getAllTable(function(err, table) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', table);
    res.send(table);
  });
};


exports.create_a_table = function(req, res) {
    var new_table = new Table(req.body);
  
    //handles null error 
     if(!new_table.noOfSeat){
  
              res.status(400).send({ error:true, message: 'Please provide noOfSeat' });
  
          }
  else{
    
    Table.createTable(new_table, function(err, table) {
      
      if (err)
        res.send(err);
      res.json(table);
    });
  }
  };
  

  
exports.read_a_table = function(req, res) {
    Table.getTableByNo(req.params.tableno, function(err, table) {
      if (err)
        res.send(err);
      res.json(table);
    });
  };
  
  
  exports.update_a_tablestatus = function(req, res) {
    Table.updateByNo(req.params.tableno, new Table(req.body), function(err, table) {
      if (err)
        res.send(err);
      res.json(table);
    });
  };
  
  
  exports.delete_a_table = function(req, res) {
  
  
    Table.remove( req.params.tableno, function(err, table) {
      if (err)
        res.send(err);
      res.json({ message: 'Table has been successfully deleted' });
    });
  };
