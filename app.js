const express = require("express");
const app = express();
const routes = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()
const errorHandler = require("./middlewares/error-handler");

// middleware 
app.use(express.json())

app.use('/',routes)

app.use(errorHandler)


const port = 3000;

const start = async () =>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`Server connected to port ${port}...`))
  } catch (error) {
    console.log(error);
    
  }
}

start()
