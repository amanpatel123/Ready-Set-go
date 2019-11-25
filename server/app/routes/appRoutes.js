'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/appController');
  var customerContoller = require('../controllers/customerContoller')
  var tableController = require('../controllers/tableController')

  // todoList Routes ---> this has to be deleted
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);
   
   app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

    app.get('/express_backend', (req, res) => {
        res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    });

    // routes for customer
    app.route('/customers')
    .get(customerContoller.list_all_customer)
    .post(customerContoller.create_a_customer);

    app.route('/customers/:customerusername')
    .get(customerContoller.read_a_customer)
    .put(customerContoller.update_a_customer)
    .delete(customerContoller.delete_a_customer);


    // routes for Table. Update the status using put request 
    app.route('/tables')
    .get(tableController.list_all_table)
    .post(tableController.create_a_table);

    app.route('/tables/:tableno')
    .get(tableController.read_a_table)
    .put(tableController.update_a_tablestatus)
    .delete(tableController.delete_a_table);
  };

    