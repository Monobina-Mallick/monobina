const express=require('express');
const taskRouter=express.Router();
const task=require('../models/taskModel');

//get all task//
// taskRouter.get('./',async(req,res)=>{
//     try{
//         const task=await Task.find();
//         res.json(tas)
//     }
// });

taskRouter.get('/alltask', (req, res) => { 
    //res.status(200).json('all task')
    //    /**taskModel */
       let taskInfo = taskModel.find().exec();
       taskInfo.then((info) => { 
              res.status(200).json(info);
       }).catch((error) => { 
              res.status(500).json(error);
       });





       /* Add New task*/
taskRouter.post('/addtask', (req, res) => { 
   
    let newTask = new taskModel({
           title: req.body.title,
           desc:req.body.desc,
           status:req.body.status,
           priority:req.body.priority,
           dueDate:req.body.dueDate,
           createdAt:req.body.cAt,
           updatedAt:req.body.uAt


    });
    
    let taskInfo = newTask.save();
    taskInfo.then((info) => {
           res.status(200).json(info);
    }).catch((error) => {
           res.status(500).json(error);
    });
});


/* get taskById */

taskRouter.get('/taskById/:id', (req, res) => { 
    let taskById = taskModel.findOne({ _id: req.params.id }).populate('title');
    taskById.then((info) => {
           res.status(200).json(info);
    }).catch((err) => {
           res.status(500).json(err);

    });
});

//delete task by id//
taskRouter.delete('./deleteTaskById/id',(req,res)=>{
    console.log(req.params.id);
})
//update by id//



});
module.exports=taskRouter;