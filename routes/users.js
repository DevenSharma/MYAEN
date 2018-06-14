var express = require('express');
var users = express.Router();
var Task=require('../models/Task');
/* GET home page. */
users.get('/', function(req, res, next) {
  var result={};
  result.name="hello users	";
  res.send(JSON.stringify(result));
});


users.get('/allTask', function(req, res, next) { 	
	 Task.getAllTasks("task",function(err,rows){
	        if(err)
	        {
	            res.json(err);
	        }
	        else
	        {
	            res.json(rows);
	        }

   		 });
});

users.get('/task/:id', function(req, res, next) { 	

	Task.getTaskById("task",req.params.id,function(err,row){
		if(err)
	        {
	            res.json(err);
	        }
	        else
	        {
	            res.json(row);
	        }
	})
		
});

users.patch('/updateTask/:id', function(req, res, next) { 	


			Task.updateTaskByID("task",req.params.id,req.body,function(err,row){
				if(err)
			        {
			            res.json(err);
			        }
			        else
			        {
			            res.json(row);
			        }
			})

		
});

users.put('/updateTask', function(req, res, next) { 	
				Task.updateTask("task",req.body,function(err,row){
					if(err)
				        {
				            res.json(err);
				        }
				        else
				        {
				            res.json(row);
				        }
				})

		
});

users.delete('/delete/:id', function(req, res, next) { 	

	Task.deleteTask("task",req.params.id,function(err,row){
		if(err)
	        {
	            res.json(err);
	        }
	        else
	        {
	            res.json(row);
	        }
	})
		
});

module.exports = users;
