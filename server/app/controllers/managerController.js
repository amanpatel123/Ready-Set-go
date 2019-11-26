'use strict';

var Manager = require('../models/managerModel.js');

exports.list_all_manager = function(req, res) {
  Manager.getAllManager(function(err, manager) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', manager);
    res.send(manager);
  });
};


exports.create_a_manager = function(req, res) {
    var new_manager = new Manager(req.body);
  
    //handles null error 
     if(!new_manager.Musername || !new_manager.name || !new_manager.password){
  
              res.status(400).send({ error:true, message: 'Please provide Managerusername/name/password' });
  
          }
  else{
    
    Manager.createManager(new_manager, function(err, manager) {
      
      if (err)
        res.send(err);
      res.json(manager);
    });
  }
  };
  

  
exports.read_a_manager = function(req, res) {
    Manager.getManagerByUsername(req.params.managerusername, function(err, manager) {
      if (err)
        res.send(err);
      res.json(manager);
    });
  };
  
  
  exports.update_a_manager = function(req, res) {
    Manager.updateByUsername(req.params.managerusername, new Manager(req.body), function(err, manager) {
      if (err)
        res.send(err);
      res.json(manager);
    });
  };
  
  
  exports.delete_a_manager = function(req, res) {
  
  
    Manager.remove( req.params.managerusername, function(err, manager) {
      if (err)
        res.send(err);
      res.json({ message: 'manager Profile successfully deleted' });
    });
  };
