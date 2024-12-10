const express=require('express');
 const connectDB=require('./db');
const taskRouter=require('./routers/taskRoute');
const taskModel=require('./models/taskModel')
const cors=require('cors');
const apiUrl=process.env.API_URL;
require('dotenv').config();
const app=express();
//connect to MongoDB//
//  connectDB();
//middleware//
app.use(cors());
app.use(express.json());

app.use(apiUrl,taskModel);
app.use(apiUrl,taskRouter);

//basic route//
app.get('./',(req,res)=>{
    res.send('welcome to the task')
});

//start the server//
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log('server has started at localhost:${PORT}');
});
console.log('Api Url:'+apiUrl);

