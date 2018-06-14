var express = require('express');
var router = express.Router();
var Task=require('../models/Task');
/* GET home page. */
router.get('/', function(req, res, next) {
  var result={};
  result.name="hello";
  res.send(JSON.stringify(result));
});


router.get('/allTask', function(req, res, next) { 	
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

router.get('/task/:id', function(req, res, next) { 	

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

router.patch('/updateTask/:id', function(req, res, next) { 	


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

router.put('/updateTask', function(req, res, next) { 	
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

router.delete('/delete/:id', function(req, res, next) { 	

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

module.exports = router;
