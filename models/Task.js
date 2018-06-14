var db=require('../dbconnection');

var Task={
	
getAllTasks:function(tableName,callback){

return db.query("Select * from "+tableName,callback);

},
getTaskById:function(tableName,id,callback){

    return db.query("select * from task where Id=?",[id],callback);
},
addTask:function(Task,callback){
   console.log("inside service");
   console.log(Task.Id);
return db.query("Insert into task values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
deleteTask:function(tableName,id,callback){
    return db.query("delete from "+tableName+" where Id=?",[id],callback);
},
// updateTask:function(id,Task,callback){
//   console.log(Task);
//     return  db.query("update task set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
// },
updateTaskByID:function(tableName,id,Task,callback){
  let set=" ";
  for(var key in Task){ 
    set +=" "+key+"='"+Task[key]+"',";    
    }
    set = set.replace(/,\s*$/, "");
   
    return  db.query("update "+tableName+" set "+set+" where Id='"+id+"'",[Task.Title,Task.Status,id],callback);
},

deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from task where Id in (?)",[delarr],callback);
}
};
module.exports=Task;