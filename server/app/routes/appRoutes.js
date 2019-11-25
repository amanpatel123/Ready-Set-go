'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/appController');
  var customerContoller = require('../controllers/customerContoller')

  // todoList Routes
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


    app.route('/customers')
    .get(customerContoller.list_all_customer)
    .post(customerContoller.create_a_customer);
  };

    