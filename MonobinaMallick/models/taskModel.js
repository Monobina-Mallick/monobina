const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
title:{
    type:String,
    require:true,

},

    description:{
        type:String,
        require:true
    },
    status:{
        type:String

    },
  priority: {
    type:String

    },
    dueDate:{
        type:String,

    },
    createdAt:{
        type:Date,
        default:Date.now

    },
    updatedAt:{
        type:Date,
        default:Date.now

    }



})
module.exports=mongoose.model('Task',taskSchema);