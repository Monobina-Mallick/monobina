const mongoose=require('mongoose');
require ('dotenv').config();

const mongourl=process.env.MONGO_URL;
const connectDB=mongoose.connect(mongourl).then(()=>{
     console.log('Database connected successfully');
}).catch((err)=>{
    console.log('something went wrong' + err);
});



// const connectDB=async()=>{
//     try{
//         await
//         mongoose.connect(process.env.MONGO_URL,{
//             useNewUrlParser:true,
//             useUnifiedTecnology:true,
//         });
//         console.log('MongoDB connected successfull');
//     }
//     catch(error){
//         console.error('MongoDB connection failed:',error.massage);
//         process.exit(1);
//     }
// }
module.exports=connectDB;
console.log('Database connection string is ready to use');