# monobina
This is a task managment system where we can do CRUD operation using API end point
This is a Task Management System where you can Add, Edit , Delete your task and also able to View Your tasks Sorted in order to task Priority and current task Status. I have used Nodejs, express.js, Mongodb and Necessary node packages to Developed this Project.

# 1st install 

npm init -y
npm install --save express mongoose dotenv  nodemon cors multer


# create a .env file in backend folder and paste below code 

PORT=5000
MONGO_URI="mongodb+srv://hgjgkhiu:monobinacluster@cluster0.7hz62me.mongodb.net/monobinamallick?retryWrites=true&w=majority&appName=Cluster0"

# Then run the app

nodemon main.js
npm start


# api end points

# get
 http://5000/api/alltask
  http://5000/api/taskById/:id

# post
http://5000/api/addtask


# delete
 http://5000/api/addtask/deleteTaskById/id
